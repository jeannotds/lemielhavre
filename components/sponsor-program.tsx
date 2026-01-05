'use client';

import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';
import { UserCheck, DollarSign, GraduationCap, Award } from 'lucide-react';

export function SponsorProgram() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const steps = [
    {
      number: 1,
      icon: UserCheck,
      titleKey: 'program.step1Title' as const,
      descKey: 'program.step1Desc' as const,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      icon: DollarSign,
      titleKey: 'program.step2Title' as const,
      descKey: 'program.step2Desc' as const,
      gradient: 'from-brand-orange to-brand-orange-dark',
    },
    {
      number: 3,
      icon: GraduationCap,
      titleKey: 'program.step3Title' as const,
      descKey: 'program.step3Desc' as const,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      number: 4,
      icon: Award,
      titleKey: 'program.step4Title' as const,
      descKey: 'program.step4Desc' as const,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">NOTRE PROGRAMME</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              {t('program.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('program.description')}
            </p>
          </div>

          {/* Steps - Grid 2x2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Header with Icon and Number */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md border-2 border-brand-orange">
                        <span className="text-sm font-bold text-brand-orange">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors">
                        {t(step.titleKey)}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full group-hover:w-24 transition-all" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-600">
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(step.descKey)}
                    </p>
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

