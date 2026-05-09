"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import EmailContactModal from '@/components/custom/EmailContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
          {/* About */}
         <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-black dark:bg-white"></div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">{t('joinus.about.title')}</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              {t('joinus.about.desc1')}
            </p>
            <p className="pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              {t('joinus.about.desc2')}
            </p>
            <div className="bg-black dark:bg-white text-white dark:text-black p-8 border-2 border-black dark:border-white">
              <h3 className="text-2xl font-bold mb-6">{t('joinus.about.timeline')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                <div className="bg-white/10 dark:bg-black/10 p-4 border border-white/20 dark:border-black/20">
                  <p className="font-bold mb-2">{t('joinus.about.phase1.title')}</p>
                  <p className="text-sm opacity-90">{t('joinus.about.phase1.desc')}</p>
                </div>
                <div className="bg-white/10 dark:bg-black/10 p-4 border border-white/20 dark:border-black/20">
                  <p className="font-bold mb-2">{t('joinus.about.phase2.title')}</p>
                  <p className="text-sm opacity-90">{t('joinus.about.phase2.desc')}</p>
                </div>
                <div className="bg-white/10 dark:bg-black/10 p-4 border border-white/20 dark:border-black/20">
                  <p className="font-bold mb-2">{t('joinus.about.notfit.title')}</p>
                  <p className="text-sm opacity-90">{t('joinus.about.notfit.desc')}</p>
                </div>
                <div className="bg-white/10 dark:bg-black/10 p-4 border border-white/20 dark:border-black/20">
                  <p className="font-bold mb-2">{t('joinus.about.fit.title')}</p>
                  <p className="text-sm opacity-90">{t('joinus.about.fit.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>

    
    </div>
  );
}
