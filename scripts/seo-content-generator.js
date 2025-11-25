const Parser = require('rss-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const crypto = require('crypto');

const RSS_SOURCES = [
  'https://www.fxstreet.com/rss/news/latest'
];

const OPENAI_API_KEY = process.env.SKEY;
const OPENAI_BASE_URL = 'https://api.oneabc.org';
const NEWS_DIR = path.join(__dirname, '../src/content/news');
const HISTORY_FILE = path.join(__dirname, '../.news-history.json');

// 黑名单关键词（推广相关）
const SPAM_KEYWORDS = [
  'sponsored', 'advertisement', 'promoted', 'affiliate',
  'partner content', 'paid promotion', 'sponsored by',
  'click here', 'sign up now', 'register today',
  'limited offer', 'exclusive deal',
  'open account', 'deposit bonus', 'trading bonus',
  'free $100', 'risk-free', 'guaranteed profit',
  '赞助', '广告', '推广', '合作推广', '商业推广',
  '开户', '入金', '赠金', '免费赠送', '保证盈利'
];

// 加载历史记录
function loadHistory() {
  if (fs.existsSync(HISTORY_FILE)) {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
  }
  return { hashes: [] };
}

// 保存历史记录
function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf8');
}

// 生成内容哈希
function generateHash(content) {
  return crypto.createHash('md5').update(content).digest('hex');
}

// 检查是否重复
function isDuplicate(title, history) {
  const hash = generateHash(title.toLowerCase().trim());
  if (history.hashes.includes(hash)) {
    console.log(`❌ Duplicate detected: "${title}"`);
    return true;
  }
  history.hashes.push(hash);
  // 只保留最近1000条历史
  if (history.hashes.length > 1000) {
    history.hashes = history.hashes.slice(-1000);
  }
  return false;
}

// 检查是否是垃圾内容
function isSpamContent(title, description) {
  const text = (title + ' ' + description).toLowerCase();

  for (const keyword of SPAM_KEYWORDS) {
    if (text.includes(keyword.toLowerCase())) {
      console.log(`❌ Filtered spam: "${title}" (含关键词: ${keyword})`);
      return true;
    }
  }

  const linkCount = (text.match(/http/g) || []).length;
  if (linkCount > 3) {
    console.log(`❌ Filtered spam: "${title}" (链接过多: ${linkCount})`);
    return true;
  }

  return false;
}

// 检查内容质量
function isQualityContent(title, description) {
  if (title.length < 20 || description.length < 50) {
    console.log(`❌ Filtered low quality: "${title}" (内容过短)`);
    return false;
  }

  const forexKeywords = [
    'eur', 'usd', 'gbp', 'jpy', 'forex', 'currency',
    'gold', 'silver', 'oil', 'bitcoin', 'crypto',
    '外汇', '货币', '汇率', '黄金', '比特币'
  ];

  const text = (title + ' ' + description).toLowerCase();
  const hasForexKeyword = forexKeywords.some(kw =>
    text.includes(kw.toLowerCase())
  );

  if (!hasForexKeyword) {
    console.log(`❌ Filtered non-forex: "${title}"`);
    return false;
  }

  return true;
}

// 清理内容
function cleanContent(content) {
  content = content.replace(/<[^>]*>/g, '');
  content = content.replace(/https?:\/\/[^\s]+/g, '');
  content = content.replace(/[\w.-]+@[\w.-]+\.\w+/g, '');
  content = content.replace(/\s+/g, ' ').trim();
  return content;
}

// 使用OpenAI API改写（中文版本）
async function rewriteWithGroqZh(content) {
  if (!OPENAI_API_KEY) {
    console.error('❌ 缺少 OPENAI API KEY，跳过此文章');
    throw new Error('No OPENAI_API_KEY configured');
  }

  try {
    const response = await axios.post(
      `${OPENAI_BASE_URL}/v1/chat/completions`,
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `你是专业的财经记者，请将以下外汇新闻改写成中文文章。

原文：
${content}

要求：
1. 第一行写完整的中文标题（必须是完全中文，不能有任何英文单词）
2. 然后空一行
3. 正文2-3段，每段50-80字，总共200-250字
4. 保留原文的核心数据、价格、百分比等关键信息
5. 用自然流畅的中文表达，不要直接翻译
6. 包含外汇交易相关词汇：货币对、汇率、交易、美元、欧元等
7. 不要加任何标签、说明或额外内容
8. 货币对格式：欧元/美元、美元/日元、黄金/美元等

立即开始写（第一行就是中文标题）：`
          }
        ],
        temperature: 0.8,
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('❌ OpenAI API错误（中文）:', error.message);
    throw error;
  }
}

// 使用OpenAI API改写（英文版本）
async function rewriteWithGroqEn(content) {
  if (!OPENAI_API_KEY) {
    console.error('❌ 缺少 OPENAI API KEY，跳过此文章');
    throw new Error('No OPENAI_API_KEY configured');
  }

  try {
    const response = await axios.post(
      `${OPENAI_BASE_URL}/v1/chat/completions`,
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `You are a professional forex journalist. Rewrite the following forex news into a concise article.

Original:
${content}

Requirements:
1. Write 2-3 paragraphs, 50-70 words each, total 150-200 words
2. Keep all key data: prices, percentages, currency pairs, technical levels
3. Use natural, flowing language - don't just translate
4. Include forex keywords: currency pair, exchange rate, trading, USD, EUR, etc.
5. Focus on market movement, causes, and implications
6. No labels, no meta-commentary, no explanations
7. Start immediately with the content (no title needed)

Begin:`
          }
        ],
        temperature: 0.8,
        max_tokens: 400
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('❌ OpenAI API错误（英文）:', error.message);
    throw error;
  }
}

// 生成slug
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

// 主函数
async function generateContent() {
  if (!fs.existsSync(NEWS_DIR)) {
    fs.mkdirSync(NEWS_DIR, { recursive: true });
  }

  const history = loadHistory();
  const parser = new Parser();
  const today = dayjs().format('YYYY-MM-DD');

  let totalGenerated = 0;
  let totalFiltered = 0;

  for (const feedUrl of RSS_SOURCES) {
    try {
      console.log(`\n📡 抓取RSS: ${feedUrl}`);
      const feed = await parser.parseURL(feedUrl);
      const items = feed.items.slice(0, 10);

      for (const item of items) {
        const cleanTitle = cleanContent(item.title);
        const cleanDesc = cleanContent(item.contentSnippet || item.description || '');

        // 重复检测
        if (isDuplicate(cleanTitle, history)) {
          totalFiltered++;
          continue;
        }

        // 过滤垃圾内容
        if (isSpamContent(cleanTitle, cleanDesc)) {
          totalFiltered++;
          continue;
        }

        // 检查质量
        if (!isQualityContent(cleanTitle, cleanDesc)) {
          totalFiltered++;
          continue;
        }

        const slug = slugify(cleanTitle);
        const dirName = `${today}-${slug}`;
        const newsPath = path.join(NEWS_DIR, dirName);

        if (fs.existsSync(newsPath)) {
          console.log(`⏭️  已存在: ${cleanTitle}`);
          continue;
        }

        console.log(`\n🤖 处理: ${cleanTitle}`);

        // 创建目录
        fs.mkdirSync(newsPath, { recursive: true });

        try {
          // AI改写中英文版本
          const [contentZh, contentEn] = await Promise.all([
            rewriteWithGroqZh(`${cleanTitle}\n\n${cleanDesc}`),
            rewriteWithGroqEn(`${cleanTitle}\n\n${cleanDesc}`)
          ]);

          // 从中文内容中提取标题（第一行）和正文
          const zhLines = contentZh.split('\n');
          const zhTitle = zhLines[0].trim();
          const zhBody = zhLines.slice(1).filter(line => line.trim()).join('\n\n');

          // 从中文正文中提取前150字作为描述，添加 SEO 关键词
          const zhDescription = zhBody.replace(/\n/g, ' ').substring(0, 120) + '江恩轮（GannWheel） 提供免费外汇交易培训。';

          // 生成中文 SEO 关键词
          const zhKeywords = ["外汇", "交易", "市场分析", "外汇新闻", "外汇培训", "交易员孵化", "江恩轮（GannWheel）"];

          // 生成中文Markdown
          const markdownZh = `---
title: "${zhTitle.replace(/"/g, '\\"')}"
date: "${dayjs().format('YYYY-MM-DD HH:mm:ss')}"
description: "${zhDescription.replace(/"/g, '\\"')}"
keywords: ${JSON.stringify(zhKeywords)}
category: "外汇新闻"
source: "江恩轮（GannWheel） 分析团队"
language: "zh"
---

${zhBody}

---

#### 关于 GannWheel 交易员孵化计划

想成为专业交易员？FX Killer 提供**完全免费**的职业交易员培训计划。我们提供系统化课程、实战训练、专业导师指导，帮助您从零基础成长为全职交易员。

👉 [立即加入免费培训计划](/splan/join-us) | [交易心理测评](/splan/psychology-test)

---

**数据来源**: GannWheel 分析团队
**更新时间**: ${dayjs().format('YYYY-MM-DD HH:mm')}

**免责声明**: 本文仅供参考，不构成投资建议。外汇交易存在风险，请谨慎决策。
`;

          // 英文描述和关键词
          const enDescription = cleanDesc.substring(0, 120) + '. Free forex trading training by GannWheel.';
          const enKeywords = ["forex", "trading", "market analysis", "forex news", "forex training", "trader incubation", "GannWheel"];

          // 生成英文Markdown
          const markdownEn = `---
title: "${cleanTitle.replace(/"/g, '\\"')}"
date: "${dayjs().format('YYYY-MM-DD HH:mm:ss')}"
description: "${enDescription.replace(/"/g, '\\"')}"
keywords: ${JSON.stringify(enKeywords)}
category: "Forex News"
source: "GannWheel Analysis Team"
language: "en"
---

${contentEn}

---

#### About GannWheel Trader Incubation Program

Want to become a professional trader? GannWheel offers a **completely free** professional trader training program. We provide systematic courses, practical training, and professional mentorship to help you grow from beginner to full-time trader.

👉 [Join Free Training Program](/splan/join-us) | [Trading Psychology Assessment](/splan/psychology-test)

---

**Data Source**: GannWheel Analysis Team
**Updated**: ${dayjs().format('YYYY-MM-DD HH:mm')}

**Disclaimer**: This article is for reference only and does not constitute investment advice. Forex trading involves risks; please make decisions carefully.
`;

          // 写入文件
          fs.writeFileSync(path.join(newsPath, 'zh.md'), markdownZh, 'utf8');
          fs.writeFileSync(path.join(newsPath, 'en.md'), markdownEn, 'utf8');

          console.log(`✅ 生成: ${dirName} (中英双语)`);
          totalGenerated++;

        } catch (error) {
          console.error(`❌ AI生成失败，跳过此文章: ${error.message}`);
          // 删除已创建的目录
          if (fs.existsSync(newsPath)) {
            fs.rmSync(newsPath, { recursive: true });
          }
          totalFiltered++;
          continue;
        }

        // 控制速度，避免触发限制
        // 每分钟限制：70K token, 30次请求
        // 每篇文章约2次请求（中文+英文），约2K tokens
        // 安全间隔：10秒，确保每分钟最多6次请求，约12K tokens
        await sleep(10000); // 10秒间隔

        // 每次运行最多生成3篇（6个请求，约6K tokens）
        if (totalGenerated >= 3) {
          break;
        }
      }
    } catch (error) {
      console.error(`❌ 处理失败 ${feedUrl}:`, error.message);
    }
  }

  // 保存历史记录
  saveHistory(history);

  console.log(`\n📊 统计:`);
  console.log(`  ✅ 成功生成: ${totalGenerated} 篇 (${totalGenerated * 2} 个文件)`);
  console.log(`  ❌ 过滤掉: ${totalFiltered} 篇`);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

generateContent()
  .then(() => console.log('\n✨ 完成！'))
  .catch(error => {
    console.error('\n💥 致命错误:', error);
    process.exit(1);
  });
