'use client';

import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';

export function Booklet() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const pdfPath = '/assets/book/Le Miel Havre Booklet French.pdf';

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-card py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-cream/50 dark:from-card/50 to-white dark:to-card rounded-3xl p-8 md:p-12 border border-brand-cream dark:border-secondary shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon and Content */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl flex items-center justify-center shadow-xl">
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-secondary rounded-full border border-brand-cream dark:border-secondary mb-4">
                  <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('booklet.badge')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4">
                  {t('booklet.title')}{' '}
                  <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                    Livret
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
                  {t('booklet.description')}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/booklet">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-green text-white px-8 py-6 text-base font-semibold rounded-lg shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all transform hover:scale-105">
                      <BookOpen className="w-5 h-5 mr-2" />
                      {t('booklet.readButton')}
                    </Button>
                  </Link>
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-slate-300 dark:border-secondary text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-secondary px-8 py-6 text-base font-semibold rounded-lg transition-all transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {t('booklet.openButton')}
                    </Button>
                  </a>
                  <a
                    href={pdfPath}
                    download
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-slate-300 dark:border-secondary text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-secondary px-8 py-6 text-base font-semibold rounded-lg transition-all transform hover:scale-105"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('booklet.downloadButton')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

