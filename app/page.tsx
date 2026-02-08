'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { CharityCauses } from '@/components/charity-causes';
import { WhySponsor } from '@/components/why-sponsor';
import { SponsorProgram } from '@/components/sponsor-program';
import { SponsorMatch } from '@/components/sponsor-match';
import { Partners } from '@/components/partners';
import { Booklet } from '@/components/booklet';
import { Newsletter } from '@/components/newsletter';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';
import { Heart } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <main className="min-h-screen bg-white dark:bg-background">
      <Header />
      <Hero />
      
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-brand-cream/30 to-white dark:from-slate-800 dark:to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-full border border-brand-orange/20 mb-6">
              <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">BIENVENUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              {t('hero.welcomeTitle')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              {t('hero.welcomeMessage')}
            </p>
          </div>
        </div>
      </section>

      {/* <Stats /> */}
      <CharityCauses />
      <WhySponsor />
      <SponsorProgram />
      {/* <SponsorMatch /> */}
      {/* <Partners /> */}
      <Booklet />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
