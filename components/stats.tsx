'use client';

import { Heart, Users, UserCheck, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';

export function Stats() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const stats = [
    { 
      value: t('stats.donors'), 
      labelKey: 'stats.schoolsClosed' as const,
      descKey: 'stats.schoolsClosedDesc' as const,
      icon: Heart,
      gradient: 'from-brand-orange to-brand-orange-dark',
    },
    { 
      value: t('stats.volunteers'), 
      labelKey: 'stats.childrenOutOfSchool' as const,
      descKey: 'stats.childrenOutOfSchoolDesc' as const,
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
    },
    { 
      value: t('stats.beneficiaries'), 
      labelKey: 'stats.minimumLevel' as const,
      descKey: 'stats.minimumLevelDesc' as const,
      icon: UserCheck,
      gradient: 'from-purple-500 to-pink-500',
    },
    { 
      value: t('stats.projects'), 
      labelKey: 'stats.projects' as const,
      descKey: 'stats.projectsDesc' as const,
      icon: Target,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-3">
            {t('stats.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-card rounded-2xl p-6 md:p-8 text-center border border-slate-100 dark:border-secondary hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-semibold text-base md:text-lg mb-1">
                  {t(stat.labelKey)}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                  {t(stat.descKey)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
