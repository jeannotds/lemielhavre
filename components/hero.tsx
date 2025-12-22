'use client';

import { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Target, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.21.jpeg',
      title: 'Charity, Faith and Hope',
    },
    {
      id: 2,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.22.jpeg',
      title: 'Help the Homeless',
    },
    {
      id: 3,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.23.jpeg',
      title: 'Charity life',
    },
    {
      id: 4,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.24.jpeg',
      title: 'Making a Difference',
    },
  ];

  // Helper function to encode image URLs for CSS background
  const encodeImageUrl = (url: string) => {
    // Encode the path parts but keep the leading slash
    const parts = url.split('/').filter(part => part !== '');
    return '/' + parts.map(part => encodeURIComponent(part)).join('/');
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    { 
      title: 'View our Mission', 
      // icon: Target,
      icon:"",
      description: '',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Top Founders', 
      // icon: Users,
      icon:"",
      description: '',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Request a Quote', 
      // icon: MessageCircle,
      description: '',
      gradient: 'from-brand-orange to-brand-orange-dark'
    },
  ];

  return (
    <>
     <section style={{borderRadius: '0 0 10% 10%'}} className="relative mt-20 pt-32 md:pt-48 pb-24 md:pb-40 flex items-center justify-start min-h-[500px] md:min-h-[780px] overflow-hidden">
        {/* Slides Container */}
        <div className="absolute inset-0" style={{ borderRadius: '0 0 10% 10%' }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
              style={{
                backgroundImage: `url(${encodeImageUrl(slide.image)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '0 0 10% 10%',
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 z-10" style={{ borderRadius: '0 0 10% 10%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)] z-10" style={{ borderRadius: '0 0 10% 10%' }} />

        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <Heart className="w-4 h-4 text-brand-orange-light fill-brand-orange-light" />
              <p className="text-white text-sm font-semibold tracking-wider">CHARITY LIFE</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-white animate-in fade-in slide-in-from-left duration-1000">
              <span className="bg-gradient-to-r from-white via-brand-cream to-brand-orange bg-clip-text text-transparent">
                Charity, Faith and Hope.
              </span>
              <br />
              <span className="text-white">Help the Homeless.</span>
              <br />
              <span className="text-brand-orange-light">Charity life.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200">
              Rejoignez-nous pour faire une différence significative dans la vie des enfants de la RDC. Ensemble, nous pouvons construire un avenir meilleur pour les enfants du Congo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-300">
              <Button className="bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-green text-white px-8 py-6 text-base font-semibold rounded-lg shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all transform hover:scale-105">
                Read More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 md:right-8 z-20 flex gap-3">
          <button onClick={prevSlide} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110" aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110" aria-label="Next slide">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8 shadow-lg' : 'bg-white/50 w-2 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
