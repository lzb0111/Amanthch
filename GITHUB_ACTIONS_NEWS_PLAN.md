# GitHub Actions RSS 自动新闻发布系统方案

## 方案概述

通过GitHub Actions定时任务自动抓取RSS新闻源,使用AI处理后生成MDX文件,自动提交并触发Vercel部署。

## 技术架构

```
┌─────────────────┐
│  GitHub Actions │  (定时触发: 每小时)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   RSS Parser    │  (抓取新闻源)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   OpenAI API    │  (翻译 + 摘要)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  生成MDX文件    │  (/src/app/[locale]/news/[slug]/page.mdx)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Git Commit     │  (自动提交到main分支)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Vercel Deploy   │  (自动部署)
└─────────────────┘
```

## 实现步骤

### 1. 创建GitHub Actions工作流

`.github/workflows/auto-news.yml`:

\`\`\`yaml
name: Auto News Fetcher

on:
  schedule:
    # 每小时运行一次 (UTC时间)
    - cron: '0 * * * *'
  workflow_dispatch: # 允许手动触发

jobs:
  fetch-news:
    runs-on: ubuntu-latest
    permissions:
      contents: write # 允许提交代码

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: \${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install rss-parser openai gray-matter slugify

      - name: Fetch and process RSS news
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}
        run: node scripts/fetch-news.js

      - name: Commit and push if changed
        run: |
          git config --global user.name 'GannWheel News Bot'
          git config --global user.email 'bot@fxkiller.com'
          git add src/app/\\[locale\\]/news/
          git diff --quiet && git diff --staged --quiet || (git commit -m "📰 Auto: Add latest forex news" && git push)
\`\`\`

### 2. RSS抓取和处理脚本

`scripts/fetch-news.js`:

\`\`\`javascript
const Parser = require('rss-parser');
const OpenAI = require('openai');
const fs = require('fs/promises');
const path = require('path');
const slugify = require('slugify');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const parser = new Parser();

// RSS源配置
const RSS_FEEDS = [
  'https://www.forexlive.com/feed/news',
  'https://www.fxstreet.com/rss/calendar',
  // 添加更多RSS源...
];

// 已发布新闻记录文件
const PUBLISHED_FILE = path.join(__dirname, '../data/published-news.json');

async function getPublishedNews() {
  try {
    const data = await fs.readFile(PUBLISHED_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function savePublishedNews(published) {
  await fs.writeFile(PUBLISHED_FILE, JSON.stringify(published, null, 2));
}

async function processWithAI(newsItem) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [{
      role: "user",
      content: \`
Translate and summarize this forex news article:

Title: \${newsItem.title}
Content: \${newsItem.contentSnippet || newsItem.content}
Link: \${newsItem.link}

Provide a JSON response with:
{
  "zhTitle": "中文标题",
  "enTitle": "English title",
  "zhSummary": "中文摘要 (150字以内)",
  "enSummary": "English summary (150 words max)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "category": "market-news|analysis|central-bank|economic-data"
}
      \`
    }],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content);
}

async function generateMDXFile(news, processed) {
  const slug = slugify(processed.enTitle, {
    lower: true,
    strict: true
  });

  const date = new Date().toISOString().split('T')[0];
  const timestamp = new Date().toISOString();

  const mdxContent = \`---
title: "\${processed.enTitle}"
title_zh: "\${processed.zhTitle}"
date: "\${timestamp}"
author: "GannWheel News Bot"
category: "\${processed.category}"
tags: \${JSON.stringify(processed.tags)}
source: "\${news.link}"
---

## \${processed.zhTitle}

\${processed.zhSummary}

---

## \${processed.enTitle}

\${processed.enSummary}

---

**来源 / Source**: [\${news.title}](\${news.link})

*本文由AI自动生成并翻译 / This article is automatically generated and translated by AI*
\`;

  // 创建目录结构: /news/YYYY-MM/slug/
  const newsDir = path.join(
    __dirname,
    '../src/app/[locale]/news',
    date.substring(0, 7), // YYYY-MM
    slug
  );

  await fs.mkdir(newsDir, { recursive: true });

  const filePath = path.join(newsDir, 'page.mdx');
  await fs.writeFile(filePath, mdxContent);

  console.log(\`✅ Generated: \${filePath}\`);

  return {
    slug: \`\${date.substring(0, 7)}/\${slug}\`,
    title: processed.enTitle,
    date: timestamp
  };
}

async function main() {
  const published = await getPublishedNews();
  const newArticles = [];

  for (const feedUrl of RSS_FEEDS) {
    try {
      console.log(\`📡 Fetching: \${feedUrl}\`);
      const feed = await parser.parseURL(feedUrl);

      // 只处理最新的3条新闻
      for (const item of feed.items.slice(0, 3)) {
        // 检查是否已发布
        if (published.some(p => p.link === item.link)) {
          console.log(\`⏭️  Skipping (already published): \${item.title}\`);
          continue;
        }

        console.log(\`🔄 Processing: \${item.title}\`);

        try {
          const processed = await processWithAI(item);
          const generated = await generateMDXFile(item, processed);

          newArticles.push({
            link: item.link,
            slug: generated.slug,
            title: generated.title,
            publishedAt: generated.date
          });

          // 添加延迟避免API限流
          await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (error) {
          console.error(\`❌ Failed to process: \${item.title}\`, error);
        }
      }
    } catch (error) {
      console.error(\`❌ Failed to fetch feed: \${feedUrl}\`, error);
    }
  }

  // 更新已发布记录
  if (newArticles.length > 0) {
    published.push(...newArticles);
    await savePublishedNews(published);
    console.log(\`\n✨ Successfully published \${newArticles.length} new articles\`);
  } else {
    console.log(\`\n💤 No new articles to publish\`);
  }
}

main().catch(console.error);
\`\`\`

### 3. 新闻索引页面

`src/app/[locale]/news/page.tsx`:

\`\`\`typescript
import { getLanguageFromLocale } from '@/lib/getServerLanguage';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function NewsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  // 读取所有新闻文件
  const newsDir = path.join(process.cwd(), 'src/app/[locale]/news');
  const articles = await getNewsArticles(newsDir);

  return (
    <div>
      <h1>{lang === 'zh' ? '外汇新闻' : 'Forex News'}</h1>
      {articles.map(article => (
        <NewsCard key={article.slug} article={article} language={lang} />
      ))}
    </div>
  );
}
\`\`\`

### 4. 配置环境变量

在GitHub仓库设置中添加Secrets:
- `OPENAI_API_KEY`: OpenAI API密钥

### 5. 新闻页面MDX配置

`next.config.js`需要添加MDX支持:

\`\`\`javascript
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
\`\`\`

## 优势

1. **完全自动化**: 无需人工干预
2. **双语支持**: AI自动翻译中英文
3. **SEO友好**: 每篇新闻独立页面,可被搜索引擎索引
4. **成本可控**:
   - GitHub Actions: 免费(每月2000分钟)
   - OpenAI API: 按使用量付费(每篇约$0.02)
   - Vercel部署: 免费
5. **可追溯**: 所有新闻都有Git历史记录
6. **灵活**: 可随时调整RSS源、AI处理逻辑

## 成本估算

假设每小时抓取3条新闻:
- 每天: 72条新闻
- 每月: ~2,160条新闻
- OpenAI成本: ~$43/月
- 其他成本: $0

## 替代方案

如果OpenAI成本太高,可以:
1. 降低抓取频率(每2-4小时)
2. 只抓取高质量源的头条
3. 使用更便宜的模型(gpt-3.5-turbo)
4. 或者不使用AI翻译,直接发布英文原文

## 下一步

1. 是否需要我创建这些文件?
2. 需要调整RSS源吗?
3. AI处理的详细程度需要调整吗?
4. 新闻分类需要更细化吗?
