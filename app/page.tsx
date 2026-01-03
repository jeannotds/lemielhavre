'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { CharityCauses } from '@/components/charity-causes';
import { SponsorMatch } from '@/components/sponsor-match';
import { Partners } from '@/components/partners';
import { Booklet } from '@/components/booklet';
import { Newsletter } from '@/components/newsletter';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <Hero />
      <Stats />
      <CharityCauses />
      <SponsorMatch />
      <Partners />
      <Booklet />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
