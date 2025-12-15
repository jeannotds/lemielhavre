'use client';

import { Heart, ChevronLeft, ChevronRight, Target, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const features = [
    { 
      title: 'View our Mission', 
      icon: Target,
      description: 'Discover our commitment to making a difference',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Top Founders', 
      icon: Users,
      description: 'Meet the passionate people behind our cause',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Request a Quote', 
      icon: MessageCircle,
      description: 'Get in touch with our team today',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <>
      <section className="relative mt-20 pt-32 md:pt-48 pb-24 md:pb-40 flex items-center justify-start min-h-[600px] md:min-h-[700px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
              <p className="text-white text-sm font-semibold tracking-wider">CHARITY LIFE</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white animate-in fade-in slide-in-from-left duration-1000">
              <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
                Charity, Faith and Hope.
              </span>
              <br />
              <span className="text-white">Help the Homeless.</span>
              <br />
              <span className="text-orange-400">Charity life.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200">
              Join us in making a meaningful difference in the lives of those in need. Together, we can build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-300">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all transform hover:scale-105">
                Read More
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-base font-semibold rounded-lg transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 md:right-8 z-20 flex gap-3">
          <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-orange-500 hover:border-orange-500 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-orange-500 hover:border-orange-500 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -translate-y-16 md:-translate-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
