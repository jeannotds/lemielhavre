'use client';

import { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Target, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const slides = [
    {
      id: 1,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.21.jpeg',
      title: t('hero.slide1'),
    },
    {
      id: 2,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.22.jpeg',
      title: t('hero.slide2'),
    },
    // {
    //   id: 3,
    //   image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776519261/lemiel-eleve-5_ivycp1.jpg',
    //   title: t('hero.slide3'),
    // },
    {
      id: 4,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.24.jpeg',
      title: t('hero.slide4'),
    },
    // {
    //   id: 5,
    //   image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776519262/lemiel-eleve-1_yxxope.jpg',
    //   title: t('hero.slide4'),
    // },
    // {
    //   id: 6,
    //   image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776519264/lemiel-eleve-2_cqfops.jpg',
    //   title: t('hero.slide4'),
    // },
    // {
    //   id: 7,
    //   image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776519268/lemiel-eleve-4_pk9ynk.jpg',
    //   title: t('hero.slide4'),
    // },
    {
      id: 8,
      image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776516228/lemiel-slide-2_spl5q2.jpg',
      title: t('hero.slide4'),
    },
    {
      id: 9,
      image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776519280/lemiel-eleve-3_prgeud.jpg',
      title: t('hero.slide4'),
    },
    {
      id: 10,
      image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776516224/lemiel-slide-5_adlc45.jpg',
      title: t('hero.slide4'),
    },
    {
      id: 11,
      image: 'https://res.cloudinary.com/dwxnmwhdl/image/upload/v1776519260/lemiel-eleve-6_wedmsq.jpg',
      title: t('hero.slide4'),
    },
  ];

  /** Local paths (/foo/bar.jpg): encode segments for spaces etc. Absolute URLs (https://…): use as-is. */
  const encodeImageUrl = (url: string) => {
    if (/^https?:\/\//i.test(url)) {
      return url;
    }
    const parts = url.split('/').filter((part) => part !== '');
    return '/' + parts.map((part) => encodeURIComponent(part)).join('/');
  };

  const backgroundImageUrl = (url: string | undefined) =>
    url ? `url(${JSON.stringify(encodeImageUrl(url))})` : 'none';

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
      title: t('hero.feature1'), 
      // icon: Target,
      icon:"",
      description: '',
      gradient: 'from-emerald-500 to-green-600'
    },
    { 
      title: t('hero.feature2'), 
      // icon: Users,
      icon:"",
      description: '',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: t('hero.feature3'), 
      // icon: MessageCircle,
      description: '',
      gradient: 'from-brand-orange to-brand-orange-dark'
    },
  ];

  return (
    <>
     <section 
    //  style={{borderRadius: '0 0 10% 10%'}} 
     className="relative lg:mt-0 h-[100vh] pt-32 lg:pt-48 pb-24 lg:pb-0 flex items-center justify-start overflow-hidden">
        {/* Slides Container */}
        <div className="absolute inset-0"
        //  style={{ borderRadius: '0 0 10% 10%' }}
         >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
              style={{
                backgroundImage: backgroundImageUrl(slide.image),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // borderRadius: '0 0 10% 10%',
              }}
            />
          ))}
        </div>
        {/* Voile sombre uniforme sur toute la section (lisibilité du texte sur toutes les slides) */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        {/* Légère teinte charte (vert) très douce, même sur toute la surface */}
        <div className="absolute inset-0 bg-emerald-950/20 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.08),transparent_55%)] z-10" />

        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <Heart className="w-4 h-4 text-brand-orange-light fill-brand-orange-light" />
              <p className="text-white text-sm font-semibold tracking-wider">{t('hero.badge')}</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-white animate-in fade-in slide-in-from-left duration-1000 [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
              <span className="text-white">
                {t('hero.title1')}
              </span>
              <br />
              <span className="text-white">{t('hero.title2')}</span>
              <br />
              <span className="text-white">{t('hero.title3')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              {t('hero.description')}
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-300 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              {t('hero.togetherText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-400">
              <Link href="/booklet">
                <Button className="bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-green text-white px-8 py-6 text-base font-semibold rounded-lg shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all transform hover:scale-105">
                  {t('hero.button')}
                </Button>
              </Link>
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
