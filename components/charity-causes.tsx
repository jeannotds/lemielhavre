'use client';

import { ArrowRight, Utensils, GraduationCap, Heart, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CharityCauses() {
  const causes = [
    {
      title: 'Nourriture pour les Affamés',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Éducation pour Tous',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Aide Médicale',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Eau Potable pour Tous',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Droplets,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-orange-600">OUR CAUSES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Our Charity{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Causes
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              <span className="text-slate-800 font-medium">If you want to work with Le Miel Havre charity?</span>{' '}
              <span className="text-orange-500 font-semibold">Send your Details.</span>
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nous nous engageons à avoir un impact durable dans les communautés de la République Démocratique du Congo. 
              Grâce à nos différents programmes, nous répondons aux besoins critiques et permettons aux enfants 
              de construire de meilleurs avenirs pour eux-mêmes et leurs familles.
            </p>
            <Button
              variant="outline"
              className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contactez-Nous
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
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
                    alt={cause.title}
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
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                      {cause.title}
                    </h3>
                    <div className="h-1 w-12 bg-orange-500 rounded-full group-hover:w-16 transition-all" />
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
