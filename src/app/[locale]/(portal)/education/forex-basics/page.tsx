import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { forexBasicsContent } from '@/content/education/forex-basics.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    forexBasicsContent.zh.title,
    forexBasicsContent.en.title,
    forexBasicsContent.zh.description,
    forexBasicsContent.en.description,
    forexBasicsContent.zh.keywords,
    forexBasicsContent.en.keywords,
    lang,
    {
      url: '/education/forex-basics',
      type: 'article',
      section: 'Forex Education - Basics',
      author: 'GannWheel Education Team',
      publishedTime: '2024-01-15T00:00:00Z',
      modifiedTime: new Date().toISOString(),
    }
  );
}

export default async function ForexBasicsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = forexBasicsContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: What is Forex */}
      <section id="what-is-forex" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '什么是外汇交易？' : 'What is Forex Trading?'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong className="text-black dark:text-white">
              {isZh ? '外汇交易（Forex Trading）' : 'Forex Trading'}
            </strong>
            {isZh
              ? '，全称为"外汇兑换交易"或"外汇保证金交易"，是指通过买卖不同国家的货币来赚取汇率差价的投资行为。外汇市场（Foreign Exchange Market，简称Forex或FX）是全球最大、流动性最强的金融市场。'
              : ', also known as Foreign Exchange Trading or FX Trading, refers to the investment activity of buying and selling different countries\' currencies to profit from exchange rate fluctuations. The Foreign Exchange Market (Forex or FX) is the world\'s largest and most liquid financial market.'}
          </p>

          <div className="bg-black dark:bg-white text-white dark:text-black p-6 my-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4">
              {isZh ? '💡 核心概念' : '💡 Core Concept'}
            </h3>
            <p className="mb-0">
              {isZh
                ? '外汇交易的本质是'
                : 'The essence of forex trading is '}
              <strong>
                {isZh ? '货币对之间的价值交换' : 'value exchange between currency pairs'}
              </strong>
              {isZh
                ? '。例如，当你交易EUR/USD货币对时，你实际上是在用美元买入欧元（做多），或用欧元买入美元（做空）。汇率的波动就是你的盈利来源。'
                : '. For example, when you trade the EUR/USD currency pair, you are actually buying euros with dollars (going long), or buying dollars with euros (going short). Exchange rate fluctuations are your source of profit.'}
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '外汇市场的规模' : 'Scale of the Forex Market'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isZh
              ? '根据国际清算银行（BIS）2022年的数据，全球外汇市场日均交易量超过'
              : 'According to the Bank for International Settlements (BIS) 2022 data, the global forex market\'s average daily trading volume exceeds '}
            <strong className="text-black dark:text-white">
              {isZh ? '7.5万亿美元' : '$7.5 trillion'}
            </strong>
            {isZh
              ? '，是全球股市交易量的数十倍。这种巨大的流动性意味着：'
              : ', which is dozens of times the trading volume of global stock markets. This enormous liquidity means:'}
          </p>

          <ul className="list-none space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '订单执行速度快，几乎无滑点' : 'Fast order execution with minimal slippage'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '买卖价差（点差）极小，交易成本低' : 'Extremely tight bid-ask spreads, low trading costs'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '市场难以被操纵，价格公正透明' : 'Market is difficult to manipulate, prices are fair and transparent'}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Market Mechanism */}
      <section id="forex-market" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '外汇市场的运作机制' : 'How the Forex Market Works'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '24小时不间断交易' : '24-Hour Continuous Trading'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {isZh
              ? '与股票市场不同，外汇市场是一个'
              : 'Unlike stock markets, the forex market is a '}
            <strong className="text-black dark:text-white">
              {isZh ? '去中心化的全球市场' : 'decentralized global market'}
            </strong>
            {isZh
              ? '，通过电子网络连接全球银行、经纪商和交易者。由于全球时区的差异，外汇市场实现了24小时连续交易（周一至周五）。'
              : ', connecting banks, brokers, and traders worldwide through electronic networks. Due to global time zone differences, the forex market operates 24 hours continuously (Monday to Friday).'}
          </p>

          {/* Trading Sessions Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-2 border-black dark:border-white">
              <thead>
                <tr className="bg-black dark:bg-white text-white dark:text-black">
                  <th className="border-2 border-black dark:border-white px-4 py-3 text-left font-bold">
                    {isZh ? '交易时段' : 'Trading Session'}
                  </th>
                  <th className="border-2 border-black dark:border-white px-4 py-3 text-left font-bold">
                    {isZh ? '开盘时间（北京时间）' : 'Open Time (Beijing)'}
                  </th>
                  <th className="border-2 border-black dark:border-white px-4 py-3 text-left font-bold">
                    {isZh ? '特点' : 'Characteristics'}
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr>
                  <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                    {isZh ? '悉尼时段' : 'Sydney Session'}
                  </td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">06:00 - 15:00</td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">
                    {isZh ? '流动性较低，波动较小' : 'Lower liquidity, smaller volatility'}
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                    {isZh ? '东京时段' : 'Tokyo Session'}
                  </td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">08:00 - 16:00</td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">
                    {isZh ? '亚洲货币对活跃' : 'Asian currency pairs active'}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                    {isZh ? '伦敦时段' : 'London Session'}
                  </td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">15:30 - 00:30</td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">
                    {isZh ? '交易量最大，波动性高' : 'Highest volume, high volatility'}
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                    {isZh ? '纽约时段' : 'New York Session'}
                  </td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">20:30 - 05:00</td>
                  <td className="border-2 border-black dark:border-white px-4 py-3">
                    {isZh ? '美元货币对最活跃' : 'USD pairs most active'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-black dark:border-white p-6 my-6">
            <h4 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '⚡️ 实战技巧：最佳交易时间' : '⚡️ Pro Tip: Best Trading Times'}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-0">
              {isZh
                ? '伦敦-纽约重叠时段（北京时间 20:30-00:30）是流动性最强、波动最大的黄金交易时段。超过50%的外汇交易发生在这个时段，非常适合日内交易和短线策略。'
                : 'The London-New York overlap (20:30-00:30 Beijing time) is the golden trading period with highest liquidity and volatility. Over 50% of forex trades occur during this session, ideal for day trading and short-term strategies.'}
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '市场参与者' : 'Market Participants'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isZh ? '外汇市场的主要参与者包括：' : 'The main participants in the forex market include:'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border-2 border-black dark:border-white p-4">
              <h4 className="font-bold text-black dark:text-white mb-2">
                {isZh ? '🏦 中央银行' : '🏦 Central Banks'}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {isZh
                  ? '控制货币供应，干预汇率以维护经济稳定'
                  : 'Control money supply, intervene in exchange rates to maintain economic stability'}
              </p>
            </div>
            <div className="border-2 border-black dark:border-white p-4">
              <h4 className="font-bold text-black dark:text-white mb-2">
                {isZh ? '🏢 商业银行' : '🏢 Commercial Banks'}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {isZh
                  ? '为企业和个人提供外汇兑换服务'
                  : 'Provide currency exchange services for businesses and individuals'}
              </p>
            </div>
            <div className="border-2 border-black dark:border-white p-4">
              <h4 className="font-bold text-black dark:text-white mb-2">
                {isZh ? '🏭 企业机构' : '🏭 Corporate Institutions'}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {isZh
                  ? '跨国公司进行国际贸易结算和汇率风险对冲'
                  : 'Multinational corporations conducting international trade settlement and hedging exchange rate risks'}
              </p>
            </div>
            <div className="border-2 border-black dark:border-white p-4">
              <h4 className="font-bold text-black dark:text-white mb-2">
                {isZh ? '👤 个人交易者' : '👤 Individual Traders'}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {isZh
                  ? '通过经纪商平台进行投机交易，追求汇率差价利润'
                  : 'Conduct speculative trading through broker platforms, seeking exchange rate profits'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Currency Pairs */}
      <section id="currency-pairs" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '货币对：交易的基础单位' : 'Currency Pairs: The Basic Trading Unit'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {isZh
              ? '外汇交易始终以'
              : 'Forex trading always occurs in the form of '}
            <strong className="text-black dark:text-white">
              {isZh ? '货币对（Currency Pair）' : 'Currency Pairs'}
            </strong>
            {isZh
              ? '的形式进行。货币对由两种货币组成，例如 EUR/USD（欧元/美元）。'
              : '. A currency pair consists of two currencies, for example EUR/USD (Euro/US Dollar).'}
          </p>

          <div className="bg-black dark:bg-white text-white dark:text-black p-6 my-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4">
              {isZh ? '📐 货币对结构解析' : '📐 Currency Pair Structure'}
            </h3>
            <div className="space-y-3">
              <p>
                <strong>
                  {isZh ? '基础货币（Base Currency）' : 'Base Currency'}
                </strong>
                {isZh
                  ? '：货币对中的第一个货币，数量固定为1单位'
                  : ': The first currency in the pair, fixed at 1 unit'}
              </p>
              <p>
                <strong>
                  {isZh ? '报价货币（Quote Currency）' : 'Quote Currency'}
                </strong>
                {isZh
                  ? '：货币对中的第二个货币，表示购买1单位基础货币所需的报价货币数量'
                  : ': The second currency in the pair, representing the amount needed to purchase 1 unit of the base currency'}
              </p>
              <p className="mt-4">
                <strong>{isZh ? '示例：EUR/USD = 1.1000' : 'Example: EUR/USD = 1.1000'}</strong>
              </p>
              <p className="mb-0">
                {isZh ? '意味着 1 欧元 = 1.1000 美元' : 'Means 1 Euro = 1.1000 US Dollars'}
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '主要货币对分类' : 'Major Currency Pair Categories'}
          </h3>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-black dark:border-white pl-6">
              <h4 className="text-xl font-bold mb-3 text-black dark:text-white">
                {isZh ? '1. 主要货币对（Major Pairs）' : '1. Major Pairs'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {isZh
                  ? '包含美元且交易量最大的7个货币对，占全球外汇交易量的80%以上：'
                  : 'Seven currency pairs containing USD with the largest trading volume, accounting for over 80% of global forex trading:'}
              </p>
              <ul className="grid md:grid-cols-2 gap-2 list-none">
                <li className="text-gray-700 dark:text-gray-300">
                  • EUR/USD{isZh ? '（欧元/美元）- 交易量最大' : ' (Euro/USD) - Highest volume'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • USD/JPY{isZh ? '（美元/日元）' : ' (USD/Japanese Yen)'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • GBP/USD{isZh ? '（英镑/美元）' : ' (British Pound/USD)'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • USD/CHF{isZh ? '（美元/瑞郎）' : ' (USD/Swiss Franc)'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • AUD/USD{isZh ? '（澳元/美元）' : ' (Australian Dollar/USD)'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • USD/CAD{isZh ? '（美元/加元）' : ' (USD/Canadian Dollar)'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • NZD/USD{isZh ? '（纽元/美元）' : ' (New Zealand Dollar/USD)'}
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h4 className="text-xl font-bold mb-3 text-black dark:text-white">
                {isZh ? '2. 交叉货币对（Cross Pairs）' : '2. Cross Currency Pairs'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {isZh
                  ? '不包含美元的货币对，如 EUR/GBP、EUR/JPY、GBP/JPY 等。'
                  : 'Currency pairs that do not contain USD, such as EUR/GBP, EUR/JPY, GBP/JPY, etc.'}
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h4 className="text-xl font-bold mb-3 text-black dark:text-white">
                {isZh ? '3. 异国货币对（Exotic Pairs）' : '3. Exotic Currency Pairs'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {isZh
                  ? '包含新兴市场货币的货币对，如 USD/TRY（美元/土耳其里拉）、USD/ZAR（美元/南非兰特）。流动性较低，点差较大。'
                  : 'Currency pairs containing emerging market currencies, such as USD/TRY (USD/Turkish Lira), USD/ZAR (USD/South African Rand). Lower liquidity, wider spreads.'}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-black dark:border-white p-6 my-6">
            <h4 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '💡 新手建议' : '💡 Beginner Recommendation'}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-0">
              {isZh
                ? '初学者应从主要货币对开始交易，特别是 EUR/USD 和 GBP/USD。它们具有最高的流动性、最低的点差和最丰富的分析资源，非常适合学习和积累经验。'
                : 'Beginners should start trading with major currency pairs, especially EUR/USD and GBP/USD. They have the highest liquidity, lowest spreads, and most abundant analytical resources, making them ideal for learning and gaining experience.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Key Terms */}
      <section id="key-terms" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '核心交易术语解析' : 'Core Trading Terminology'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {isZh
              ? '掌握以下术语是理解外汇交易的关键：'
              : 'Mastering the following terms is key to understanding forex trading:'}
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-2 border-black dark:border-white p-5">
              <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                {isZh ? '点（Pip）' : 'Pip (Point in Percentage)'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {isZh
                  ? '外汇价格变动的最小单位。对于大多数货币对，1 pip = 0.0001。例如，EUR/USD 从 1.1000 上涨到 1.1050，上涨了 50 个点。'
                  : 'The smallest unit of price movement in forex. For most currency pairs, 1 pip = 0.0001. For example, if EUR/USD rises from 1.1000 to 1.1050, it has risen 50 pips.'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                <strong>
                  {isZh ? '实战示例：' : 'Practical Example:'}
                </strong>
                {isZh
                  ? '交易1标准手EUR/USD，每点价值约10美元。50点的波动意味着500美元的盈亏。'
                  : 'Trading 1 standard lot of EUR/USD, each pip is worth approximately $10. A 50-pip movement means $500 profit or loss.'}
              </p>
            </div>

            <div className="border-2 border-black dark:border-white p-5">
              <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                {isZh ? '点差（Spread）' : 'Spread'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {isZh
                  ? '买入价（Ask）和卖出价（Bid）之间的差价，是经纪商的主要收入来源。主要货币对的点差通常在0.5-2个点之间。'
                  : 'The difference between the Ask price and Bid price, which is the broker\'s main source of income. Major currency pair spreads typically range from 0.5-2 pips.'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                <strong>
                  {isZh ? '计算公式：' : 'Formula:'}
                </strong>
                {isZh ? '点差 = 买入价 - 卖出价' : 'Spread = Ask Price - Bid Price'}
              </p>
            </div>

            <div className="border-2 border-black dark:border-white p-5">
              <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                {isZh ? '手数（Lot）' : 'Lot Size'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {isZh ? '外汇交易的标准单位：' : 'Standard units of forex trading:'}
              </p>
              <ul className="list-none space-y-2 mb-0">
                <li className="text-gray-700 dark:text-gray-300">
                  • <strong className="text-black dark:text-white">
                    {isZh ? '标准手（Standard Lot）' : 'Standard Lot'}
                  </strong>
                  {isZh ? '：100,000 单位基础货币' : ': 100,000 units of base currency'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • <strong className="text-black dark:text-white">
                    {isZh ? '迷你手（Mini Lot）' : 'Mini Lot'}
                  </strong>
                  {isZh ? '：10,000 单位' : ': 10,000 units'}
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • <strong className="text-black dark:text-white">
                    {isZh ? '微型手（Micro Lot）' : 'Micro Lot'}
                  </strong>
                  {isZh ? '：1,000 单位' : ': 1,000 units'}
                </li>
              </ul>
            </div>

            <div className="border-2 border-black dark:border-white p-5">
              <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                {isZh ? '杠杆（Leverage）' : 'Leverage'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {isZh
                  ? '允许交易者用较小的资金控制较大的交易头寸。常见杠杆比例：1:50、1:100、1:500。'
                  : 'Allows traders to control larger positions with smaller capital. Common leverage ratios: 1:50, 1:100, 1:500.'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                <strong>
                  {isZh ? '示例：' : 'Example:'}
                </strong>
                {isZh
                  ? '100倍杠杆意味着用1,000美元可以交易100,000美元的头寸（1标准手）。'
                  : '100:1 leverage means you can trade a $100,000 position (1 standard lot) with $1,000.'}
              </p>
            </div>

            <div className="border-2 border-black dark:border-white p-5">
              <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                {isZh ? '保证金（Margin）' : 'Margin'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {isZh
                  ? '开仓所需的最低资金。使用杠杆后，保证金 = 交易头寸 ÷ 杠杆倍数。'
                  : 'The minimum capital required to open a position. With leverage, Margin = Position Size ÷ Leverage Ratio.'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                <strong>
                  {isZh ? '计算示例：' : 'Calculation Example:'}
                </strong>
                {isZh
                  ? '1标准手EUR/USD（价值100,000美元），使用100倍杠杆，所需保证金 = 100,000 ÷ 100 = 1,000美元。'
                  : '1 standard lot EUR/USD (value $100,000), using 100:1 leverage, required margin = $100,000 ÷ 100 = $1,000.'}
              </p>
            </div>

            <div className="border-2 border-black dark:border-white p-5 bg-red-50 dark:bg-red-950">
              <h4 className="text-lg font-bold mb-2 text-black dark:text-white">
                {isZh ? '⚠️ 止损（Stop Loss）' : '⚠️ Stop Loss'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                {isZh
                  ? '预设的自动平仓价格，用于限制亏损。这是风险管理的核心工具，'
                  : 'A pre-set automatic exit price to limit losses. This is the core tool of risk management, and '}
                <strong className="text-black dark:text-white">
                  {isZh ? '每笔交易都必须设置止损' : 'every trade must have a stop loss'}
                </strong>
                {isZh ? '。' : '.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How to Trade */}
      <section id="how-to-trade" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '外汇交易如何进行？' : 'How to Trade Forex?'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '交易方向' : 'Trading Directions'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {isZh ? '外汇交易有两个基本方向：' : 'Forex trading has two basic directions:'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-green-600 p-6">
              <h4 className="text-xl font-bold mb-3 text-green-600">
                {isZh ? '📈 做多（Buy / Long）' : '📈 Going Long (Buy)'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {isZh
                  ? '买入基础货币，预期其相对报价货币升值。'
                  : 'Buy the base currency, expecting it to appreciate against the quote currency.'}
              </p>
              <div className="bg-green-50 dark:bg-green-950 p-4 border border-green-600">
                <p className="text-sm font-bold mb-2">
                  {isZh ? '示例：' : 'Example:'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                  {isZh
                    ? 'EUR/USD = 1.1000 时买入 → 价格涨至 1.1050 平仓 → 盈利 50 点'
                    : 'Buy at EUR/USD = 1.1000 → Price rises to 1.1050 close → Profit 50 pips'}
                </p>
              </div>
            </div>

            <div className="border-2 border-red-600 p-6">
              <h4 className="text-xl font-bold mb-3 text-red-600">
                {isZh ? '📉 做空（Sell / Short）' : '📉 Going Short (Sell)'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {isZh
                  ? '卖出基础货币，预期其相对报价货币贬值。'
                  : 'Sell the base currency, expecting it to depreciate against the quote currency.'}
              </p>
              <div className="bg-red-50 dark:bg-red-950 p-4 border border-red-600">
                <p className="text-sm font-bold mb-2">
                  {isZh ? '示例：' : 'Example:'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                  {isZh
                    ? 'EUR/USD = 1.1000 时卖出 → 价格跌至 1.0950 平仓 → 盈利 50 点'
                    : 'Sell at EUR/USD = 1.1000 → Price falls to 1.0950 close → Profit 50 pips'}
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '交易流程（5步法）' : 'Trading Process (5 Steps)'}
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                  {isZh ? '选择货币对' : 'Choose Currency Pair'}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '根据市场分析和交易策略选择目标货币对，新手建议从EUR/USD开始。'
                    : 'Select target currency pair based on market analysis and trading strategy. Beginners recommended to start with EUR/USD.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                  {isZh ? '分析市场' : 'Analyze Market'}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '使用技术分析（图表、指标）和基本面分析（经济数据、新闻）判断价格走势。'
                    : 'Use technical analysis (charts, indicators) and fundamental analysis (economic data, news) to determine price trends.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                  {isZh ? '确定交易参数' : 'Set Trading Parameters'}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '设置手数、止损位、止盈位。遵循风险管理原则：单笔风险不超过账户资金的1-2%。'
                    : 'Set lot size, stop loss, take profit. Follow risk management principles: single trade risk not exceeding 1-2% of account capital.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                  {isZh ? '执行交易' : 'Execute Trade'}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '通过交易平台（如MT4/MT5）下单。确认订单类型：市价单（立即成交）或挂单（达到指定价格后成交）。'
                    : 'Place order through trading platform (e.g., MT4/MT5). Confirm order type: market order (immediate execution) or pending order (executes at specified price).'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">
                  {isZh ? '监控与平仓' : 'Monitor and Close'}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '跟踪持仓，根据市场变化调整策略。触及止损或止盈自动平仓，或手动平仓锁定利润。'
                    : 'Track position, adjust strategy based on market changes. Automatically close when hitting stop loss or take profit, or manually close to lock in profits.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Practical Tips */}
      <section id="practical-tips" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '新手实战技巧' : 'Practical Tips for Beginners'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-2 border-black dark:border-white">
              <h3 className="text-xl font-bold mb-4">
                {isZh ? '✅ 应该做的' : '✅ Do These'}
              </h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '从模拟账户开始，至少练习3个月' : 'Start with demo account, practice at least 3 months'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '制定交易计划并严格执行' : 'Create trading plan and execute strictly'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '每笔交易都设置止损' : 'Set stop loss for every trade'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '控制单笔风险在1-2%以内' : 'Keep single trade risk within 1-2%'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '记录交易日志，总结经验' : 'Maintain trading journal, learn from experience'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '持续学习技术分析和基本面分析' : 'Continuously learn technical and fundamental analysis'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-6 border-2 border-red-600">
              <h3 className="text-xl font-bold mb-4 text-red-600">
                {isZh ? '❌ 不应该做的' : '❌ Do Not Do These'}
              </h3>
              <ul className="space-y-3 list-none text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '未经充分学习就进入真实市场' : 'Enter real market without sufficient learning'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '使用过高杠杆（建议≤1:100）' : 'Use excessive leverage (recommended ≤1:100)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '投入无法承受损失的资金' : 'Invest money you cannot afford to lose'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '情绪化交易（追涨杀跌）' : 'Emotional trading (chasing highs and selling lows)'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '频繁更换交易策略' : 'Frequently switch trading strategies'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    {isZh ? '忽视风险管理' : 'Ignore risk management'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-black dark:border-white p-8 my-8">
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
              {isZh ? '🎯 GannWheel 推荐学习路径' : '🎯 GannWheel Recommended Learning Path'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-bold text-black dark:text-white mb-1">
                    {isZh ? '第1阶段：理论学习（2-4周）' : 'Stage 1: Theoretical Learning (2-4 weeks)'}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {isZh
                      ? '掌握外汇基础概念、交易术语、市场机制'
                      : 'Master forex basics, trading terminology, market mechanisms'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">🎮</span>
                <div>
                  <p className="font-bold text-black dark:text-white mb-1">
                    {isZh ? '第2阶段：模拟交易（2-3个月）' : 'Stage 2: Demo Trading (2-3 months)'}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {isZh
                      ? '在模拟账户中测试策略，建立交易系统'
                      : 'Test strategies in demo account, build trading system'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="font-bold text-black dark:text-white mb-1">
                    {isZh ? '第3阶段：小额实盘（1-2个月）' : 'Stage 3: Small Live Account (1-2 months)'}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {isZh
                      ? '用小资金实盘练习，适应真实市场心理压力'
                      : 'Practice with small capital, adapt to real market psychological pressure'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-bold text-black dark:text-white mb-1">
                    {isZh ? '第4阶段：系统化交易（持续）' : 'Stage 4: Systematic Trading (Ongoing)'}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {isZh
                      ? '完善交易系统，稳定盈利，逐步扩大资金规模'
                      : 'Refine trading system, achieve consistent profits, gradually scale up capital'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
