'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Utensils, GraduationCap, Heart, Droplets, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';
import Link from 'next/link';

export function CharityCauses() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const causes = [
    {
      titleKey: 'causes.food' as const,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.25.jpeg',
      icon: Utensils,
      color: 'from-brand-orange to-brand-orange-dark',
    },
    {
      titleKey: 'causes.education' as const,
      // image: '/assets/WhatsApp Image 2025-12-15 at 19.57.27.jpeg',
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.29.jpeg',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      titleKey: 'causes.medical' as const,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.28.jpeg',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      titleKey: 'causes.water' as const,
      image: '/assets/director/laetitia-1.jpeg',
      icon: Droplets,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const causesImages = causes.map(cause => cause.image);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % causesImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + causesImages.length) % causesImages.length);
  };

  // Gérer les événements clavier
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
      }
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % causesImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + causesImages.length) % causesImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Nettoyer le style du body quand le composant se démonte
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section className="bg-white dark:bg-background py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-card rounded-full border border-brand-cream dark:border-secondary mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('causes.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
              {t('hero.togetherText')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="text-slate-800 dark:text-slate-200 font-medium">{t('causes.subtitle')}</span>{' '}
              <span className="text-brand-orange font-semibold">Send your Details.</span>
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('causes.description')}
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="group border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-6 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('causes.button')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {causes.map((cause, index) => {
              const Icon = cause.icon;
              return (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={cause.image}
                    alt={t(cause.titleKey)}
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
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 group-hover:text-brand-orange-light transition-colors">
                      {t(cause.titleKey)}
                    </h3>
                    <div className="h-1 w-12 bg-brand-orange rounded-full group-hover:w-16 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={causesImages[currentImageIndex]}
              alt={t(causes[currentImageIndex].titleKey)}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentImageIndex + 1} / {causesImages.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {causesImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-white scale-110'
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                <img
                  src={image}
                  alt={t(causes[index].titleKey)}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
