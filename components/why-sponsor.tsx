'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';
import { AlertCircle, DollarSign, Building2, TrendingDown, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

export function WhySponsor() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const challenges = [
    {
      stat: t('whySponsor.stat1'),
      statLabel: 'écoles et lieux\nd\'apprentissage sont\nfermés',
      statLabelEn: 'schools and learning\nplaces are closed',
      icon: AlertCircle,
      titleKey: 'whySponsor.challenge1Title' as const,
      descKey: 'whySponsor.challenge1Desc' as const,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      stat: t('whySponsor.stat2'),
      statLabel: 'd\'enfants\ndans l\'est de la RDC ne\nsont pas scolarisés',
      statLabelEn: 'children\nin eastern DRC are\nnot in school',
      icon: DollarSign,
      titleKey: 'whySponsor.challenge2Title' as const,
      descKey: 'whySponsor.challenge2Desc' as const,
      gradient: 'from-blue-500 to-cyan-500',
      additionalTitleKey: 'whySponsor.challenge3Title' as const,
      additionalDescKey: 'whySponsor.challenge3Desc' as const,
    },
    {
      stat: t('whySponsor.stat3'),
      statLabel: 'des élèves\nont atteint le niveau\nminimum requis',
      statLabelEn: 'of students\nhave reached the\nminimum required level',
      icon: TrendingDown,
      titleKey: 'whySponsor.challenge4Title' as const,
      descKey: 'whySponsor.challenge4Desc' as const,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const statLabels = [
    {
      fr: 'écoles et lieux\nd\'apprentissage sont\nfermés',
      en: 'schools and learning\nplaces are closed',
    },
    {
      fr: 'd\'enfants\ndans l\'est de la RDC ne\nsont pas scolarisés',
      en: 'children\nin eastern DRC are\nnot in school',
    },
    {
      fr: 'des élèves\nont atteint le niveau\nminimum requis',
      en: 'of students\nhave reached the\nminimum required level',
    },
  ];

  const childrenImages = [
    '/assets/WhatsApp Image 2025-12-15 at 19.57.21.jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.22.jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.23.jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.24.jpeg',
  ];

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
    setCurrentImageIndex((prev) => (prev + 1) % childrenImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + childrenImages.length) % childrenImages.length);
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
        setCurrentImageIndex((prev) => (prev + 1) % childrenImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + childrenImages.length) % childrenImages.length);
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
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-card py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-card rounded-full border border-brand-cream dark:border-secondary mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">PARRAINAGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              {t('whySponsor.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t('whySponsor.subtitle')}
            </p>
          </div>

          {/* Challenges */}
          <div className="space-y-12 mb-16">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Stat à gauche */}
                  <div className="order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-white dark:from-slate-800 to-brand-cream/30 dark:to-secondary rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-secondary shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${challenge.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${challenge.gradient} bg-clip-text text-transparent`}>
                            {challenge.stat}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium whitespace-pre-line">
                        {language === 'fr' ? statLabels[index].fr : statLabels[index].en}
                      </p>
                    </div>
                  </div>

                  {/* Description à droite */}
                  <div className="order-1 lg:order-2 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-3">
                      <span className="text-brand-orange-dark dark:text-brand-orange">{index + 1}.</span>
                      {t(challenge.titleKey)}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(challenge.descKey)}
                    </p>
                    {challenge.additionalTitleKey && (
                      <>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-3 mt-6">
                          <span className="text-brand-orange-dark dark:text-brand-orange">3.</span>
                          {t(challenge.additionalTitleKey)}
                        </h4>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                          {t(challenge.additionalDescKey)}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message */}
          <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange-dark/10 dark:from-brand-orange/20 dark:to-brand-orange-dark/20 rounded-2xl p-8 md:p-12 border border-brand-orange/20 mb-16">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic">
                {t('whySponsor.message')}
              </p>
            </div>
          </div>

          {/* Images des enfants */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
              {t('whySponsor.childrenTitle')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {childrenImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Child ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
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
              src={childrenImages[currentImageIndex]}
              alt={`Child ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentImageIndex + 1} / {childrenImages.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {childrenImages.map((image, index) => (
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
                  alt={`Thumbnail ${index + 1}`}
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

