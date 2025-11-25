import { EducationPageContent } from './forex-basics.content';

export const scalpingContent = {
  zh: {
    title: '剥头皮交易完整指南丨江恩轮（GannWheel）丨日内交易员培训、外汇交易员培训',
    description: '深入讲解剥头皮交易（Scalping）：M1/M5超短线分析、快速入场出场、点差成本控制。日内交易员和外汇交易员培训课程分享专业剥头皮交易系统。',
    keywords: '日内交易员培训, 外汇交易员培训, 剥头皮交易, Scalping, M1交易, M5交易, 超短线交易, 快速交易',

    heroTitle: '剥头皮交易完整指南',
    heroDescription: '掌握超短线交易技巧，实现快进快出盈利',
    readingTime: '24分钟',
    difficulty: '中级-高级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-is-scalping', title: '什么是剥头皮交易？' },
      { id: 'core-principles', title: '剥头皮交易核心原理' },
      { id: 'execution-strategies', title: '快速执行策略' },
      { id: 'case-studies', title: '实战案例分析' },
      { id: 'common-mistakes', title: '常见错误与规避' },
      { id: 'cost-management', title: '成本控制要点' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 剥头皮交易和日内交易有什么区别？',
        answer: '持仓时间和交易频率完全不同。剥头皮持仓1-15分钟，使用M1/M5图表，每天可能10-50笔交易，目标5-15点；日内交易持仓1-8小时，使用M15-H1图表，每天1-5笔，目标20-80点。剥头皮需要极快反应、持续盯盘、低点差环境，心理压力极大，只适合经验丰富的全职交易者。'
      },
      {
        question: 'Q2: 剥头皮交易需要什么样的经纪商？',
        answer: '必须选择ECN/STP经纪商，具备以下特征：1) 超低点差（主流货币对0.0-0.5点）；2) 快速执行（订单执行<50毫秒）；3) 无滑点或低滑点；4) 允许剥头皮（部分经纪商禁止）；5) 深度流动性；6) 低手续费。推荐使用VPS服务器降低网络延迟。避免做市商（Market Maker）经纪商，因为点差大、执行慢、可能有操纵。'
      },
      {
        question: 'Q3: 剥头皮交易如何计算真实盈利？',
        answer: '必须扣除所有交易成本。公式：真实盈利 = 毛利润 - (点差 + 手续费) × 交易次数。例如：10笔交易，每笔盈利10点，共100点。点差0.5点/笔，手续费$3.5/手（标准手往返），交易0.1手。毛利润：100点 × $1 = $100；总成本：(0.5点 × $1 + $3.5) × 10 = $40；净利润：$100 - $40 = $60。成本占比高达40%！必须提高胜率和目标利润才能覆盖。'
      },
      {
        question: 'Q4: 剥头皮交易适合新手吗？',
        answer: '强烈不建议新手尝试剥头皮！原因：1) 需要丰富的交易经验和市场直觉；2) 心理压力极大，容易冲动和过度交易；3) 交易成本高，胜率必须>60%才能盈利；4) 需要全职投入，无法兼职；5) 技术要求高（快速执行、低延迟网络）。建议新手先从波段或日内交易开始，积累2-3年经验后，如果能稳定盈利再考虑剥头皮。99%的剥头皮交易者最终亏损。'
      },
      {
        question: 'Q5: 剥头皮交易最佳时段是什么？',
        answer: '选择高流动性、低点差时段：1) 欧洲开盘（北京时间15:00-18:00）；2) 欧美重叠（20:00-24:00）；3) 美国开盘（21:00-次日1:00）。避免：亚洲午间（低流动性）、新闻发布前后（点差扩大、滑点严重）、市场开盘/收盘（跳空风险）、周五晚间（流动性枯竭）。最佳货币对：EUR/USD、GBP/USD、USD/JPY（点差最低、流动性最好）。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/day-trading',
        icon: '📊',
        title: '日内交易',
        description: '学习持仓时间更长的交易策略'
      },
      {
        href: '/education/trend-following',
        icon: '📈',
        title: '趋势跟踪',
        description: '了解趋势判断方法'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: '仓位计算器',
        description: '计算剥头皮交易的最佳仓位'
      }
    ],

    ctaTitle: '想要学习专业交易策略？',
    ctaDescription: '加入 GannWheel 培训计划，从基础策略开始系统学习',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 波段交易',
    footerNextText: '趋势跟踪 →',
    footerPrevHref: '/education/swing-trading',
    footerNextHref: '/education/trend-following',
  } as EducationPageContent,

  en: {
    title: 'Complete Scalping Trading Guide丨GannWheel丨Day Trader Training, Forex Trader Training',
    description: 'In-depth explanation of Scalping: M1/M5 ultra-short-term analysis, rapid entry/exit, spread cost control. Day trader training and forex trader training curriculum sharing professional scalping trading systems.',
    keywords: 'Day Trader Training, Forex Trader Training, scalping, M1 trading, M5 trading, ultra-short-term trading',

    heroTitle: 'Complete Scalping Guide',
    heroDescription: 'Master ultra-short-term trading for quick in-and-out profits',
    readingTime: '24 min',
    difficulty: 'Intermediate-Advanced',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-is-scalping', title: 'What is Scalping?' },
      { id: 'core-principles', title: 'Core Scalping Principles' },
      { id: 'execution-strategies', title: 'Fast Execution Strategies' },
      { id: 'case-studies', title: 'Real-World Case Studies' },
      { id: 'common-mistakes', title: 'Common Mistakes and Solutions' },
      { id: 'cost-management', title: 'Cost Control Essentials' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: What are the differences between scalping and day trading?',
        answer: 'Holding period and frequency completely different. Scalping holds 1-15 minutes, uses M1/M5 charts, possibly 10-50 trades daily, targets 5-15 pips; day trading holds 1-8 hours, uses M15-H1 charts, 1-5 trades daily, targets 20-80 pips. Scalping requires extremely fast reactions, constant monitoring, low-spread environment, extreme psychological pressure, only suitable for experienced full-time traders.'
      },
      {
        question: 'Q2: What kind of broker does scalping need?',
        answer: 'Must choose ECN/STP broker with: 1) Ultra-low spreads (major pairs 0.0-0.5 pips); 2) Fast execution (order fill <50ms); 3) No/low slippage; 4) Allows scalping (some brokers prohibit); 5) Deep liquidity; 6) Low commission. Recommend using VPS server to reduce network latency. Avoid Market Maker brokers due to large spreads, slow execution, possible manipulation.'
      },
      {
        question: 'Q3: How to calculate true scalping profit?',
        answer: 'Must deduct all trading costs. Formula: True Profit = Gross Profit - (Spread + Commission) × Trade Count. Example: 10 trades, 10 pips each, 100 pips total. Spread 0.5 pips/trade, commission $3.5/lot (standard lot round-turn), trading 0.1 lot. Gross: 100 pips × $1 = $100; Total cost: (0.5 pips × $1 + $3.5) × 10 = $40; Net: $100 - $40 = $60. Cost ratio 40%! Must improve win rate and targets to cover.'
      },
      {
        question: 'Q4: Is scalping suitable for beginners?',
        answer: 'Strongly not recommended for beginners! Reasons: 1) Requires rich trading experience and market intuition; 2) Extreme psychological pressure, easy to be impulsive and overtrade; 3) High trading costs, need >60% win rate to profit; 4) Requires full-time commitment, cannot part-time; 5) High technical requirements (fast execution, low latency network). Recommend beginners start with swing or day trading, accumulate 2-3 years experience, if consistently profitable then consider scalping. 99% of scalpers eventually lose.'
      },
      {
        question: 'Q5: What are the best scalping sessions?',
        answer: 'Choose high liquidity, low spread sessions: 1) European open (15:00-18:00 Beijing); 2) EU-US overlap (20:00-24:00); 3) US open (21:00-01:00). Avoid: Asian afternoon (low liquidity), around news releases (spread widens, severe slippage), market open/close (gap risk), Friday evening (liquidity dries up). Best pairs: EUR/USD, GBP/USD, USD/JPY (lowest spreads, best liquidity).'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/day-trading',
        icon: '📊',
        title: 'Day Trading',
        description: 'Learn longer holding period strategies'
      },
      {
        href: '/education/trend-following',
        icon: '📈',
        title: 'Trend Following',
        description: 'Understand trend judgment methods'
      },
      {
        href: '/tools/position-calculator',
        icon: '🧮',
        title: 'Position Calculator',
        description: 'Calculate optimal scalping position size'
      }
    ],

    ctaTitle: 'Want to Learn Professional Trading Strategies?',
    ctaDescription: 'Join GannWheel training to systematically learn from foundational strategies',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Swing Trading',
    footerNextText: 'Trend Following →',
    footerPrevHref: '/education/swing-trading',
    footerNextHref: '/education/trend-following',
  } as EducationPageContent,
};
