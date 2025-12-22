'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Heart, Target, Users, Award, Globe, HandHeart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every child with empathy, understanding, and genuine care for their well-being.',
      color: 'from-brand-orange to-brand-orange-dark',
    },
    {
      icon: Target,
      title: 'Education',
      description: 'We believe education is the key to breaking the cycle of poverty and creating lasting change.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We work together with local communities to build sustainable solutions for children in need.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our programs and services for the children we serve.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Foundation',
      description: 'Le Miel Havre was established with a mission to support children in the Democratic Republic of Congo.',
    },
    {
      year: '2025',
      title: 'First Program',
      description: 'Launched our scholarship program in Goma, starting with 5 children in partner orphanages.',
    },
    {
      year: 'Future',
      title: 'Expansion',
      description: 'Our goal is to support over 500 children across different orphanages in the DRC.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
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
              About{' '}
              <span className="bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                Le Miel Havre
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to transforming the lives of children in the Democratic Republic of Congo through education, support, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white dark:bg-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">OUR MISSION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
                Our Mission &{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Le Miel Havre is a non-profit organization committed to improving the lives of children in the Democratic Republic of Congo through education and comprehensive support programs.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Our mission is to provide educational opportunities, essential resources, and a stable, loving environment for children who come from extreme poverty or have been abandoned or removed from their families.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                We envision a future where every child in the DRC has access to quality education, proper healthcare, and the support they need to thrive and become self-sufficient adults.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/* Values Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Our Core{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-brand-orange transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white dark:bg-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Key milestones in our mission to help children in the DRC
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-slate-200 dark:border-slate-700 last:border-0">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl mb-6 shadow-xl">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Where We Operate
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Our Head Office is located in <span className="text-brand-orange-light font-semibold">Kinshasa, DR Congo</span>. 
              We work with in-country partners who help us administrate our scholarship program in <span className="text-brand-orange-light font-semibold">Goma</span>.
            </p>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Our future plans include expanding to other cities across the Democratic Republic of Congo to reach more children in need.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}




