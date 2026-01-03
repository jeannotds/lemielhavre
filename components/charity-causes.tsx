'use client';

import { ArrowRight, Utensils, GraduationCap, Heart, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';
import Link from 'next/link';

export function CharityCauses() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const causes = [
    {
      titleKey: 'causes.food' as const,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.25.jpeg',
      icon: Utensils,
      color: 'from-brand-orange to-brand-orange-dark',
    },
    {
      titleKey: 'causes.education' as const,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.27.jpeg',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      titleKey: 'causes.medical' as const,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.28.jpeg',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      titleKey: 'causes.water' as const,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.29.jpeg',
      icon: Droplets,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('causes.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
              {t('causes.title')}{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Causes
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="text-slate-800 dark:text-slate-200 font-medium">{t('causes.subtitle')}</span>{' '}
              <span className="text-brand-orange font-semibold">Send your Details.</span>
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('causes.description')}
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="group border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-6 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('causes.button')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {causes.map((cause, index) => {
              const Icon = cause.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={cause.image}
                    alt={t(cause.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all" />
                  
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cause.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 group-hover:text-brand-orange-light transition-colors">
                      {t(cause.titleKey)}
                    </h3>
                    <div className="h-1 w-12 bg-brand-orange rounded-full group-hover:w-16 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
