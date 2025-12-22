'use client';

import { Heart, Users, UserCheck, Target } from 'lucide-react';

export function Stats() {
  const stats = [
    { 
      value: '4,000', 
      label: 'Donors', 
      icon: Heart,
      gradient: 'from-brand-orange to-brand-orange-dark',
      description: 'Generous supporters'
    },
    { 
      value: '2,200', 
      label: 'Volunteers', 
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Dedicated helpers'
    },
    { 
      value: '4,000', 
      label: 'Beneficiaries', 
      icon: UserCheck,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Lives changed'
    },
    { 
      value: '200', 
      label: 'Projects', 
      icon: Target,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Active initiatives'
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Together, we&apos;re making a real difference in communities around the world
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 text-center border border-slate-100 dark:border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-800 dark:text-slate-200 font-semibold text-base md:text-lg mb-1">
                  {stat.label}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
