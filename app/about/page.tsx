'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Heart, Target, Users, Award, Globe, HandHeart } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const values = [
    {
      icon: Heart,
      color: 'from-brand-orange to-brand-orange-dark',
    },
    {
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const milestones = [1, 2, 3];

  return (
    <main className="min-h-screen bg-white dark:bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative mt-20 pt-32 md:pt-48 pb-24 md:pb-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-brand-orange-light fill-brand-orange-light" />
              <p className="text-white text-sm font-semibold tracking-wider">ABOUT US</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              {t('about.title')}{' '}
              <span className="bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                Le Miel Havre
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white dark:bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-card rounded-full border border-brand-cream dark:border-secondary mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('about.missionBadge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
                {t('about.missionTitle')}{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.missionP1')}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.missionP2')}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.missionP3')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/WhatsApp Image 2025-12-15 at 19.57.30.jpeg"
                  alt="Children in DRC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl shadow-xl flex items-center justify-center">
                <HandHeart className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white dark:bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
              {t('about.historyTitle')}
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>{t('about.historyP1')}</p>
              <p>{t('about.historyP2')}</p>
              <p>{t('about.historyP3')}</p>
              <p>{t('about.historyP3b')}</p>
              <p>{t('about.historyP4')}</p>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{t('about.historyP5')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      {/* <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              {t('about.founderTitle')}
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/director/laetitia-2.jpeg"
                    alt={t('about.founderName')}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl shadow-xl flex items-center justify-center hidden lg:flex">
                  <Heart className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                  <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed italic">
                    "{t('about.founderMessage')}"
                  </p>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-xl font-bold text-brand-orange-light mb-2">
                      {t('about.founderName')}
                    </p>
                    <p className="text-slate-300">
                      {t('about.founderRole')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Challenges Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-card py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
              {t('about.challengesTitle')}
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-card rounded-xl p-6 border border-slate-200 dark:border-secondary">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-bold text-brand-orange-dark dark:text-brand-orange">1. </span>
                  {t('about.challenge1')}
                </p>
              </div>
              <div className="bg-white dark:bg-card rounded-xl p-6 border border-slate-200 dark:border-secondary">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-bold text-brand-orange-dark dark:text-brand-orange">2. </span>
                  {t('about.challenge2')}
                </p>
              </div>
              <div className="bg-white dark:bg-card rounded-xl p-6 border border-slate-200 dark:border-secondary">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-bold text-brand-orange-dark dark:text-brand-orange">3. </span>
                  {t('about.challenge3')}
                </p>
              </div>
              <div className="bg-white dark:bg-card rounded-xl p-6 border border-slate-200 dark:border-secondary">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-bold text-brand-orange-dark dark:text-brand-orange">4. </span>
                  {t('about.challenge4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-card py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              {t('about.valuesTitle')}{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t('about.valuesDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-secondary hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-brand-orange transition-colors">
                    {t(`about.value${index + 1}Title` as any)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`about.value${index + 1}Desc` as any)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="bg-white dark:bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              {t('about.timelineTitle')}{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t('about.timelineDescription')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{t(`about.timeline${index + 1}Year` as any)}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-slate-200 dark:border-secondary last:border-0">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {t(`about.timeline${index + 1}Title` as any)}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(`about.timeline${index + 1}Desc` as any)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Location Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl mb-6 shadow-xl">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.locationTitle')}
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              {t('about.locationDescription')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}




