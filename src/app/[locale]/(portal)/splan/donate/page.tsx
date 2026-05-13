"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import LocaleLink from "@/components/navigation/LocaleLink";

export default function DonatePage() {
  const { t, language } = useLanguage();

  // 套餐数据
  const plans = [
    {
      name: "单月突击计划",
      nameEn: "1-Month Crash Plan",
      price: "$100",
      icon: "📅",
      features: [
        "核心考点精讲 + 真题解析",
        "30天",
        "1次",
        "工作日 24 小时内回复",
        "✓",
        "-",
        "时间紧张，短期冲刺的考生",
      ],
    },
    {
      name: "双月突击计划",
      nameEn: "2-Month Crash Plan",
      price: "$200",
      icon: "🗓️",
      features: [
        "核心考点精讲 + 真题解析 + 专题强化",
        "60天",
        "1次",
        "工作日 24 小时内回复",
        "✓",
        "备考资料包",
        "需要更充足时间巩固的考生",
      ],
    },
    {
      name: "补考进阶计划",
      nameEn: "Resit Advanced Plan",
      price: "$1299",
      icon: "👑",
      features: [
        "全套课程 + 专题强化 + 冲刺预测",
        "90天",
        "3次",
        "优先答疑 12 小时内回复",
        "✓",
        "一对一学习规划 + 备考资料包",
        "补考或需要系统提升的考生",
      ],
    },
  ];

  const featureLabels = [
    "课程内容",
    "访问时长",
    "模拟考试",
    "答疑服务",
    "学习报告",
    "额外福利",
    "适合人群",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 标题区域 */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {language === "zh" ? "会员计划" : "Membership Plans"}
          </h1>
          <p className="text-gray-600">
            {language === "zh"
              ? "选择适合您的学习计划，助您高效备考，成功通关"
              : "Choose the right plan for you, help you study efficiently and pass the exam"}
          </p>
        </motion.div>
      </div>

      {/* 计划对比表格 */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* 表格头部 */}
          <div className="bg-blue-900 text-white text-center py-3 font-semibold text-lg">
            {language === "zh" ? "学习计划对比" : "Plan Comparison"}
          </div>

          {/* 表格主体 */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-600 w-32"></th>
                  {plans.map((plan, index) => (
                    <th
                      key={index}
                      className={`p-4 text-center font-medium ${
                        index === 0
                          ? "bg-blue-50 text-blue-900"
                          : index === 1
                            ? "bg-green-50 text-green-900"
                            : "bg-yellow-50 text-yellow-900"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{plan.icon}</span>
                        <span className="font-bold">
                          {language === "zh" ? plan.name : plan.nameEn}
                        </span>
                        <span className="text-xl font-semibold">
                          {plan.price}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureLabels.map((label, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`border-b border-gray-200 ${
                      rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 font-medium text-gray-700 flex items-center gap-2">
                      {rowIndex === 0 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {rowIndex === 1 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {rowIndex === 2 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {rowIndex === 3 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {rowIndex === 4 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-4a1 1 0 011-1h2a1 1 0 011 1v13a1 1 0 01-1 1h-2a1 1 0 01-1-1V3z" />
                        </svg>
                      )}
                      {rowIndex === 5 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {rowIndex === 6 && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {label}
                    </td>
                    {plans.map((plan, colIndex) => (
                      <td
                        key={colIndex}
                        className={`p-4 text-center text-gray-700 ${
                          colIndex === 0
                            ? "bg-blue-50"
                            : colIndex === 1
                              ? "bg-green-50"
                              : "bg-yellow-50"
                        }`}
                      >
                        {plan.features[rowIndex]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 软件合作模块 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="bg-purple-800 text-white text-center py-3 font-semibold text-lg">
            {language === "zh" ? "软件合作" : "Software Partnership"}
          </div>
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-purple-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A.75.75 0 0113 18H7a.75.75 0 01-.53-1.282l.804-.804.123-.489H5a2 2 0 01-2-2V5zm16-2a1 1 0 00-1-1H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3zM7.5 10a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {language === "zh" ? "软件合作" : "Software Partnership"}
                </h3>
                <p className="text-gray-600 text-sm max-w-md">
                  {language === "zh"
                    ? "我们与多家优秀软件平台合作，为会员提供专属优惠与便捷服务，助您在学习与实践中更加得心应手。"
                    : "We partner with leading software platforms to offer exclusive discounts and convenient services for members, helping you succeed in learning and practice."}
                </p>
              </div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-purple-800">
                价格根据需求定制
              </span>
              {/* <LocaleLink
                href="/software-partnership"
                className="block mt-2 px-6 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
              >
                {language === "zh" ? "了解详情" : "Learn More"}
              </LocaleLink> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
