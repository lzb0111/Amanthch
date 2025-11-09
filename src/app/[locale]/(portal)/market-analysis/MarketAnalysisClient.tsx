"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Activity, Clock, Zap, BarChart3 } from 'lucide-react';

interface AnalysisData {
  symbol: string;
  name: string;
  nameCn: string;
  timestamp: string;
  price: {
    close: string;
    high: string;
    low: string;
    open: string;
    change: string;
    datetime: string;
  };
  indicators: {
    rsi?: number;
    macd?: number;
    macd_signal?: number;
    sma20?: number;
  };
  analysis: {
    zh: {
      title: string;
      content: string;
    };
    en: {
      title: string;
      content: string;
    };
  };
}

interface MarketAnalysisClientProps {
  analyses: AnalysisData[];
  language: 'zh' | 'en';
}

export default function MarketAnalysisClient({ analyses, language }: MarketAnalysisClientProps) {
  const isZh = language === 'zh';

  const getSlug = (symbol: string) => symbol.toLowerCase().replace(/\//g, '');

  const getRSIStatus = (rsi?: number) => {
    if (!rsi) return { text: 'N/A', color: 'text-gray-500' };
    if (rsi >= 70) return { text: isZh ? '超买' : 'Overbought', color: 'text-red-500' };
    if (rsi <= 30) return { text: isZh ? '超卖' : 'Oversold', color: 'text-green-500' };
    return { text: isZh ? '中性' : 'Neutral', color: 'text-blue-500' };
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {isZh ? '📊 实时市场分析' : '📊 Real-Time Market Analysis'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {isZh ? 'AI 驱动 · 每 90 分钟自动更新' : 'AI-Powered · Auto-Updated Every 90 Minutes'}
            </p>

            {/* 特点标签 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">
                  {isZh ? '每 90 分钟更新' : 'Updated Every 90 Min'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">
                  {isZh ? '8 大主流货币对' : '8 Major Pairs'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <Activity className="w-5 h-5" />
                <span className="font-semibold">
                  {isZh ? 'AI 智能分析' : 'AI Analysis'}
                </span>
              </div>
            </div>

            {/* 更新时间 */}
            {analyses.length > 0 && (
              <div className="text-white/80 text-sm">
                {isZh ? '最后更新: ' : 'Last Updated: '}
                {new Date(analyses[0].timestamp).toLocaleString(isZh ? 'zh-CN' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {analyses.length === 0 ? (
          <div className="text-center py-20">
            <BarChart3 className="w-20 h-20 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {isZh ? '暂无分析数据' : 'No Analysis Available'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {isZh ? '系统将在下次运行时生成最新分析' : 'Analysis will be generated on next run'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyses.map((analysis, index) => {
              const change = parseFloat(analysis.price.change);
              const isPositive = change >= 0;
              const rsiStatus = getRSIStatus(analysis.indicators.rsi);

              return (
                <motion.div
                  key={analysis.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/${language}/market-analysis/${getSlug(analysis.symbol)}`}
                    className="block group"
                  >
                    <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl h-full">
                      {/* 货币对名称 */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {analysis.symbol}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {isZh ? analysis.nameCn : analysis.name}
                        </p>
                      </div>

                      {/* 价格 */}
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                          {parseFloat(analysis.price.close).toFixed(analysis.symbol.includes('JPY') ? 2 : 5)}
                        </div>
                        <div className={`flex items-center gap-1 text-sm font-semibold ${
                          isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span>{isPositive ? '+' : ''}{change.toFixed(2)}%</span>
                        </div>
                      </div>

                      {/* 技术指标 */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">RSI(14)</span>
                          <span className={`font-semibold ${rsiStatus.color}`}>
                            {analysis.indicators.rsi?.toFixed(1) || 'N/A'} ({rsiStatus.text})
                          </span>
                        </div>
                        {analysis.indicators.macd && (
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">MACD</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {analysis.indicators.macd.toFixed(5)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* 查看详情 */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                          {isZh ? '查看详细分析' : 'View Analysis'}
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {isZh ? '💡 关于自动分析系统' : '💡 About Auto Analysis System'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-bold mb-2">
                {isZh ? '📊 分析周期' : '📊 Analysis Cycle'}
              </h3>
              <p>
                {isZh
                  ? '系统每 90 分钟自动运行一次，确保您获得最及时的市场洞察。'
                  : 'System runs automatically every 90 minutes to provide timely market insights.'}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                {isZh ? '🤖 AI 驱动' : '🤖 AI-Powered'}
              </h3>
              <p>
                {isZh
                  ? '利用先进的 AI 技术分析技术指标，提供专业的交易建议。'
                  : 'Leverages advanced AI to analyze technical indicators and provide professional trading advice.'}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                {isZh ? '📈 覆盖品种' : '📈 Coverage'}
              </h3>
              <p>
                {isZh
                  ? '8 大主流外汇货币对及黄金，满足您的交易需求。'
                  : '8 major forex pairs and gold to meet your trading needs.'}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                {isZh ? '🎯 技术指标' : '🎯 Indicators'}
              </h3>
              <p>
                {isZh
                  ? 'RSI、MACD、SMA 等多种技术指标综合分析。'
                  : 'Comprehensive analysis with RSI, MACD, SMA and more.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
