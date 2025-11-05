'use client';

import Link from 'next/link';
import { ComponentProps, useEffect, useState } from 'react';

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
  locale?: string;
};

/**
 * Locale-aware Link component that automatically prefixes href with current locale
 * Usage: <LocaleLink href="/education">Education</LocaleLink>
 * Result: /zh/education or /en/education based on localStorage language preference
 */
export default function LocaleLink({ href, locale, ...props }: LocaleLinkProps) {
  const [currentLocale, setCurrentLocale] = useState<string>('zh');

  useEffect(() => {
    // Read language from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language');
      if (stored === 'en' || stored === 'zh') {
        setCurrentLocale(stored);
      }
    }
  }, []);

  const effectiveLocale = locale || currentLocale;

  // Don't prefix if href is external or already has locale
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const hasLocale = href.startsWith('/zh/') || href.startsWith('/en/');

  let localizedHref = href;

  if (!isExternal && !hasLocale) {
    // Add locale prefix
    localizedHref = `/${effectiveLocale}${href.startsWith('/') ? href : `/${href}`}`;
  }

  return <Link href={localizedHref} {...props} />;
}
