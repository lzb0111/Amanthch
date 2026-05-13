"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  parseVideoUrl,
  getPlatformName,
  type VideoEmbed,
} from "@/lib/videoEmbedParser";

interface MatrixMember {
  id: number;
  name: string;
  isLive: boolean;
  youtubeId: string | null;
  specialty: string;
  lastLive: string | null;
  liveUrl?: string; // Full URL for multi-platform support
}

interface LiveTradingClientProps {
  members: MatrixMember[];
}

// 定价数据
const pricingPlans = [
  {
    key: "200k",
    accountSize: { zh: "20万美元", en: "$200,000" },
    price: 2303.92,
    highlight: false,
    isBestValue: false,
  },
  {
    key: "100k",
    accountSize: { zh: "10万美元", en: "$100,000" },
    price: 1040.54,
    highlight: true,
    isBestValue: true,
    discount: "-19%",
  },
  {
    key: "50k",
    accountSize: { zh: "5万美元", en: "$50,000" },
    price: 735.95,
    highlight: false,
    isBestValue: false,
  },
  {
    key: "25k",
    accountSize: { zh: "25000美元", en: "$25,000" },
    price: 533.32,
    highlight: false,
    isBestValue: false,
  },
  {
    key: "10k",
    accountSize: { zh: "一万美元", en: "$10,000" },
    price: 189.83,
    highlight: false,
    isBestValue: false,
  },
];

const pricingFeatures = [
  {
    label: { zh: "利润目标", en: "Profit Target" },
    value: { zh: "第一阶段 10%\n第二阶段 5%", en: "Phase 1 10%\nPhase 2 5%" },
  },
  { label: { zh: "最大每日损失", en: "Max Daily Loss" }, value: "5%" },
  { label: { zh: "马克斯·洛斯", en: "Max Loss" }, value: "10%" },
  { label: { zh: "最小交易日", en: "Min Trading Days" }, value: "4天" },
  {
    label: { zh: "交易时期", en: "Trading Period" },
    value: { zh: "无限", en: "Unlimited" },
  },
  {
    label: { zh: "退款", en: "Refund" },
    value: { zh: "是的 100%", en: "Yes 100%" },
    highlight: true,
  },
  {
    label: { zh: "奖励", en: "Reward Split" },
    value: { zh: "最高可达90%", en: "Up to 90%" },
  },
];

export default function LiveTradingClient({ members }: LiveTradingClientProps) {
  const { language } = useLanguage();
  const isZh = language === "zh";

  // Get unique platforms being used
  const activePlatforms = new Set<string>();
  members.forEach((member) => {
    if (member.isLive && member.liveUrl) {
      const parsed = parseVideoUrl(member.liveUrl);
      if (parsed) {
        activePlatforms.add(getPlatformName(parsed.platform));
      }
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section - Matching news page style */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white border-b-2 border-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          {/* <div className="inline-block px-6 py-2 bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold tracking-wider">
              {isZh ? "矩阵成员实盘" : "Matrix Members Live Trading"}
            </span>
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-black">
              {isZh ? "选择你的挑战赛道" : "Live Trading"}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isZh
              ? "完成交易目标，即可获得您的演示账户资格"
              : "Watch our matrix members trade live and learn professional decision-making"}
          </p>
        </div>
      </div>

      {/* 定价卡片区域 - 复刻你提供的样式 */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {pricingPlans.map((plan) => (
              <div
                key={plan.key}
                className={`relative bg-neutral-900 rounded-lg p-6 flex flex-col ${
                  plan.highlight ? "ring-2 ring-orange-500 scale-105 z-10" : ""
                }`}
              >
                {/* 最佳性价比标签 */}
                {plan.isBestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {isZh ? "最佳性价比" : "Best Value"}
                    </div>
                  </div>
                )}

                {/* 折扣标签 */}
                {plan.discount && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold shadow-lg rotate-12 text-lg">
                      {plan.discount}
                    </div>
                  </div>
                )}

                {/* 账号标题 */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-400 mb-1">
                    {isZh ? "账号" : "Account"}
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    {plan.accountSize[isZh ? "zh" : "en"]}
                  </h3>
                </div>

                {/* 特性列表 */}
                <div className="space-y-4 mb-8 flex-grow">
                  {pricingFeatures.map((feature, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        {/* 图标占位，和你截图保持一致 */}
                        <span className="w-5 h-5 flex items-center justify-center">
                          {idx === 0 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="10" strokeWidth="2" />
                              <path strokeWidth="2" d="M12 6v6l4 2" />
                            </svg>
                          )}
                          {idx === 1 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          )}
                          {idx === 3 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="10" strokeWidth="2" />
                              <path strokeWidth="2" d="M12 6v6l4 2" />
                            </svg>
                          )}
                          {idx === 4 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                strokeWidth="2"
                              />
                              <line
                                x1="3"
                                y1="10"
                                x2="21"
                                y2="10"
                                strokeWidth="2"
                              />
                            </svg>
                          )}
                          {idx === 5 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                          {idx === 6 && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm12-6h.01"
                              />
                            </svg>
                          )}
                        </span>
                        <span>{feature.label[isZh ? "zh" : "en"]}</span>
                      </div>
                      <div
                        className={`text-sm whitespace-pre-line ${feature.highlight ? "text-green-400 font-medium" : "text-white"}`}
                      >
                        {typeof feature.value === "object"
                          ? feature.value[isZh ? "zh" : "en"]
                          : feature.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 价格 */}
                {/* <div className="mt-auto mb-4">
                  <p className="text-xs text-gray-500 mb-1">
                    {isZh
                      ? "一次性可退还费用，来自"
                      : "One-time refundable fee from"}
                  </p>
                  <p className="text-3xl font-bold text-red-500">
                    {plan.price.toFixed(2)}美金
                  </p>
                </div> */}

                {/* 按钮 */}
                <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
                  {isZh ? "现在就开始" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
