import { EducationPageContent } from './forex-basics.content';

export const marketParticipantsContent = {
  zh: {
    title: '外汇市场参与者深度解析丨江恩轮（GannWheel）丨职业交易员培训、全职交易员培训',
    description: '深入讲解外汇市场参与者：中央银行、商业银行、对冲基金、零售交易者。职业交易员和全职交易员培训必懂的订单流动、市场结构、机构vs散户差异。',
    keywords: '职业交易员培训, 全职交易员培训, 外汇市场参与者, 中央银行, 对冲基金, 订单流, 市场结构',

    heroTitle: '外汇市场参与者',
    heroDescription: '理解市场参与者，洞察资金流动与价格驱动',
    readingTime: '28分钟',
    difficulty: '初级-中级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'market-structure', title: '外汇市场结构与层级' },
      { id: 'central-banks', title: '中央银行的角色与影响' },
      { id: 'institutional-participants', title: '机构参与者详解' },
      { id: 'retail-traders', title: '零售交易者的定位' },
      { id: 'order-flow', title: '订单流与价格驱动' },
      { id: 'trading-strategies', title: '跟随机构的交易策略' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 散户交易者能否战胜机构交易者？',
        answer: '可以，但需要正确的方法。机构有资金优势、信息优势和技术优势，但也有劣势：资金量大难以快速进出、需要执行大单容易暴露意图、受到监管约束。散户优势：资金灵活、可快速反应、无需披露仓位、可以"搭便车"跟随机构。关键是学会识别机构订单痕迹（大量吸收、假突破陷阱），顺势而为而非对抗。'
      },
      {
        question: 'Q2: 如何判断某个价格走势是机构还是散户主导？',
        answer: '机构主导特征：1) 大阳线/大阴线伴随成交量放大；2) 假突破后快速反转（诱多/诱空）；3) 在关键支撑/阻力位出现大量吸收（价格不破位但成交量大）；4) 趋势持续且稳定。散户主导特征：1) 小K线波动，无明确方向；2) 频繁反转，假信号多；3) 重大新闻后跟风买卖（追涨杀跌）；4) 波动在关键位附近反复震荡。使用交易量分析（Volume Profile）和订单流工具可更准确判断。'
      },
      {
        question: 'Q3: 中央银行干预市场时，如何应对？',
        answer: '中央银行干预分为口头干预和实际干预。口头干预（官员讲话）通常引发短期波动（50-100点），持续几小时；实际干预（直接买卖货币）影响更大（100-300点），持续数天。应对策略：1) 关注央行讲话时间（使用经济日历），避免在讲话前后30分钟交易；2) 实际干预时，顺势而为（央行通常有充足资金持续干预）；3) 日本央行和瑞士央行最常干预，交易USD/JPY和USD/CHF需特别警惕；4) 设置较大止损（央行干预可导致价格跳空）。'
      },
      {
        question: 'Q4: 对冲基金和商业银行在交易上有什么区别？',
        answer: '商业银行：主要为客户提供外汇服务（企业进出口、旅行兑换），自营交易占比小，倾向于市场中性（做市商角色），持仓周期短（几分钟到几小时）。对冲基金：纯粹投机盈利，使用高杠杆，追求绝对收益，持仓周期长（几天到几周），倾向于趋势跟踪和套利策略。对散户启示：商业银行订单流可反映实际供需（企业避险需求），对冲基金订单流反映市场情绪和投机方向。COT报告（美国商品期货委员会）每周公布大型投机者（对冲基金）持仓，可作为参考。'
      },
      {
        question: 'Q5: 什么是"Smart Money"和"Dumb Money"？',
        answer: 'Smart Money（聪明钱）指机构投资者、对冲基金、专业交易者的资金，他们有信息优势、经验丰富、策略成熟，通常是市场赢家。Dumb Money（愚蠢钱）指散户和新手交易者的资金，容易被情绪驱动、追涨杀跌、反复止损。市场本质是Smart Money从Dumb Money手中获利。成为Smart Money的方法：1) 学会逆向思维（当大众恐慌时贪婪）；2) 使用数据和逻辑而非情绪决策；3) 等待高概率设置而非频繁交易；4) 关注机构持仓数据（如COT报告）。记住：你的目标是成为Smart Money，而非成为他们的猎物。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: '外汇基础知识',
        description: '了解外汇市场运作原理'
      },
      {
        href: '/education/trading-psychology',
        icon: '📊',
        title: '交易心理学',
        description: '学习跟随机构资金的策略'
      },
      {
        href: '/partners/brokers',
        icon: '🏦',
        title: '经纪商选择',
        description: '选择机构级别的交易平台'
      }
    ],

    ctaTitle: '想要获得机构级别的交易条件？',
    ctaDescription: '对比顶级ECN经纪商，获得更好的点差、执行速度和流动性',
    ctaPrimaryButton: '对比经纪商',
    ctaSecondaryButton: '免费模拟账户',

    footerPrevText: '← 货币对指南',
    footerNextText: 'K线形态 →',
    footerPrevHref: '/education/currency-pairs-guide',
    footerNextHref: '/education/candlestick-patterns',
  } as EducationPageContent,

  en: {
    title: 'Forex Market Participants Deep Analysis丨GannWheel丨Professional Trader Training, Full-Time Trader Training',
    description: 'In-depth explanation of forex market participants: central banks, commercial banks, hedge funds, retail traders roles and influence. Professional trader training and full-time trader training essential knowledge for understanding order flow, market structure, institutional vs retail differences.',
    keywords: 'Professional Trader Training, Full-Time Trader Training, forex market participants, central banks, hedge funds, market structure',

    heroTitle: 'Forex Market Participants',
    heroDescription: 'Understand market participants to gain insight into capital flow and price drivers',
    readingTime: '28 min',
    difficulty: 'Beginner-Intermediate',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'market-structure', title: 'Market Structure & Hierarchy' },
      { id: 'central-banks', title: 'Central Banks Role & Impact' },
      { id: 'institutional-participants', title: 'Institutional Participants' },
      { id: 'retail-traders', title: 'Retail Traders Position' },
      { id: 'order-flow', title: 'Order Flow & Price Drivers' },
      { id: 'trading-strategies', title: 'Following Institutions Strategy' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Can retail traders beat institutional traders?',
        answer: 'Yes, but requires the right approach. Institutions have capital, information, and technology advantages, but also disadvantages: large capital hard to move quickly, large orders expose intentions, regulatory constraints. Retail advantages: flexible capital, quick reactions, no position disclosure required, can "piggyback" institutions. Key is learning to identify institutional order traces (accumulation, false breakout traps), trade with them not against them.'
      },
      {
        question: 'Q2: How to determine if price movement is institution or retail driven?',
        answer: 'Institution-driven characteristics: 1) Large candles with volume surge; 2) False breakout followed by quick reversal (bull/bear trap); 3) Large absorption at key support/resistance (price holds but volume high); 4) Sustained stable trends. Retail-driven characteristics: 1) Small candle fluctuations, no clear direction; 2) Frequent reversals, many false signals; 3) Chasing after major news (FOMO); 4) Volatility oscillating around key levels. Use Volume Profile and order flow tools for more accurate determination.'
      },
      {
        question: 'Q3: How to respond when central banks intervene in markets?',
        answer: 'Central bank intervention divides into verbal and actual intervention. Verbal intervention (official speeches) typically causes short-term volatility (50-100 pips), lasting hours; actual intervention (direct currency buying/selling) has larger impact (100-300 pips), lasting days. Response strategies: 1) Track CB speech times (use economic calendar), avoid trading 30 minutes around speeches; 2) During actual intervention, trade with it (CBs usually have sufficient funds to continue); 3) BOJ and SNB intervene most frequently, be extra cautious trading USD/JPY and USD/CHF; 4) Set larger stops (CB intervention can cause price gaps).'
      },
      {
        question: 'Q4: What\'s the difference between hedge funds and commercial banks in trading?',
        answer: 'Commercial banks: Mainly provide forex services for clients (corporate import/export, travel exchange), proprietary trading small portion, tend toward market neutral (market maker role), short holding periods (minutes to hours). Hedge funds: Pure speculative profit, use high leverage, pursue absolute returns, longer holding periods (days to weeks), favor trend-following and arbitrage strategies. For retail traders: Commercial bank order flow reflects actual supply/demand (corporate hedging needs), hedge fund order flow reflects market sentiment and speculative direction. COT report (CFTC) publishes weekly large speculator (hedge fund) positions as reference.'
      },
      {
        question: 'Q5: What is "Smart Money" and "Dumb Money"?',
        answer: 'Smart Money refers to institutional investors, hedge funds, professional traders\' capital - they have information advantages, rich experience, mature strategies, usually market winners. Dumb Money refers to retail and novice traders\' capital - easily emotion-driven, chase highs/sell lows, repeatedly stopped out. Market essence is Smart Money profiting from Dumb Money. Becoming Smart Money methods: 1) Learn contrarian thinking (be greedy when masses fear); 2) Use data and logic not emotions for decisions; 3) Wait for high-probability setups not frequent trading; 4) Track institutional positioning data (like COT report). Remember: your goal is to become Smart Money, not become their prey.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: 'Forex Basics',
        description: 'Understand forex market mechanics'
      },
      {
        href: '/education/trading-psychology',
        icon: '📊',
        title: 'Trading Psychology',
        description: 'Learn to follow institutional capital'
      },
      {
        href: '/partners/brokers',
        icon: '🏦',
        title: 'Broker Selection',
        description: 'Choose institutional-grade platforms'
      }
    ],

    ctaTitle: 'Want Institutional-Grade Trading Conditions?',
    ctaDescription: 'Compare top ECN brokers for better spreads, execution speed, and liquidity',
    ctaPrimaryButton: 'Compare Brokers',
    ctaSecondaryButton: 'Free Demo Account',

    footerPrevText: '← Currency Pairs',
    footerNextText: 'Candlestick Patterns →',
    footerPrevHref: '/education/currency-pairs-guide',
    footerNextHref: '/education/candlestick-patterns',
  } as EducationPageContent,
};
