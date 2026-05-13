"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* 联系方式模块 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-black dark:bg-white"></div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">
              {language === "zh" ? "联系我们" : "Contact Us"}
            </h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 border-2 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 邮箱 */}
              <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {language === "zh" ? "邮箱" : "Email"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                  jiangenlun@163.com
                </p>
              </div>

              {/* 钉钉 */}
              <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.9 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {language === "zh" ? "钉钉" : "DingTalk"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  l898930079
                </p>
              </div>

              {/* 微信 */}
              <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all">
                <div className="w-12 h-12 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {language === "zh" ? "微信" : "WeChat"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  L898930079
                </p>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
              <p className="font-semibold">
                {language === "zh"
                  ? "添加请备注来源：自媒体/招聘网站/对接人朋友圈"
                  : "Please note your source when adding us: Media / Recruitment Site / Referrer's Moments"}
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
