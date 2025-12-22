'use client';

import { Anchor, Compass, Waves, Ship, Shield, Globe, Handshake } from 'lucide-react';

export function Partners() {
  const partners = [
    { icon: Anchor, name: 'Summer Partner 1', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Compass, name: 'Summer Partner 2', gradient: 'from-purple-500 to-pink-500' },
    { icon: Waves, name: 'Summer Partner 3', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Ship, name: 'Summer Partner 4', gradient: 'from-brand-orange to-brand-orange-dark' },
    { icon: Shield, name: 'Summer Partner 5', gradient: 'from-green-500 to-emerald-500' },
    { icon: Globe, name: 'Summer Partner 6', gradient: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
            <Handshake className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">OUR PARTNERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Whom we work with
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Together with our trusted partners, we create lasting impact in communities worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group w-full max-w-[140px] aspect-square bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 hover:border-transparent"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${partner.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
