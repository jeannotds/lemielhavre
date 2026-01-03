'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, FileText, Mail, UserCheck, Clock, Users, MapPin, DollarSign, Shield, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';

export function SponsorMatch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const slides = [
    {
      id: 1,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.21 (1).jpeg',
      titleKey: 'sponsor.slide1' as const,
    },
    {
      id: 2,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.22 (1).jpeg',
      titleKey: 'sponsor.slide2' as const,
    },
    {
      id: 3,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.23 (1).jpeg',
      titleKey: 'sponsor.slide3' as const,
    },
  ];

  const steps = [
    {
      number: 1,
      titleKey: 'sponsor.howStep1' as const,
      descKey: 'sponsor.howStep1Desc' as const,
    },
    {
      number: 2,
      titleKey: 'sponsor.howStep2' as const,
      descKey: 'sponsor.howStep2Desc' as const,
    },
    {
      number: 3,
      titleKey: 'sponsor.howStep3' as const,
      descKey: 'sponsor.howStep3Desc' as const,
    },
    {
      number: 4,
      titleKey: 'sponsor.howStep4' as const,
      descKey: 'sponsor.howStep4Desc' as const,
    },
  ];

  const faqs = [
    {
      questionKey: 'sponsor.faq1Q' as const,
      answerKey: 'sponsor.faq1A' as const,
    },
    {
      questionKey: 'sponsor.faq2Q' as const,
      answerKey: 'sponsor.faq2A' as const,
    },
    {
      questionKey: 'sponsor.faq3Q' as const,
      answerKey: 'sponsor.faq3A' as const,
    },
    {
      questionKey: 'sponsor.faq4Q' as const,
      answerKey: 'sponsor.faq4A' as const,
    },
    {
      questionKey: 'sponsor.faq5Q' as const,
      answerKey: 'sponsor.faq5A' as const,
    },
    {
      questionKey: 'sponsor.faq6Q' as const,
      answerKey: 'sponsor.faq6A' as const,
    },
    {
      questionKey: 'sponsor.faq7Q' as const,
      answerKey: 'sponsor.faq7A' as const,
    },
  ];

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

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('sponsor.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900 dark:text-slate-200 mb-4">
            {t('sponsor.title')}{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
              Match Works?
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t('sponsor.description')}
          </p>
        </div>

        <div className="mb-20">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
            {/* Slides Container */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.2),transparent_70%)] z-10" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t(slides[currentSlide].titleKey)}
              </h3>
              <div className="h-1 w-20 bg-brand-orange rounded-full" />
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800/90 hover:bg-white dark:bg-slate-800 backdrop-blur-sm p-3 rounded-full transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-slate-200" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800/90 hover:bg-white dark:bg-slate-800 backdrop-blur-sm p-3 rounded-full transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-slate-900 dark:text-slate-200" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white dark:bg-slate-800 w-10 shadow-lg' : 'bg-white dark:bg-slate-800/50 w-2 hover:bg-white dark:bg-slate-800/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Modern Matching Process */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-3">
                {t('sponsor.processTitle')}{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                  Sponsorship Process
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                {t('sponsor.processDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Step 1 */}
              <div className="group relative bg-gradient-to-br from-white to-brand-cream dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 md:p-8 border border-brand-cream dark:border-slate-700 hover:border-brand-orange-dark dark:hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-brand-orange/10 to-brand-orange-dark/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-3 group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors">
                    {t('sponsor.step1Title')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('sponsor.step1Desc')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-gradient-to-br from-white dark:from-slate-800 to-blue-50 dark:to-slate-700 rounded-2xl p-6 md:p-8 border border-blue-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <UserCheck className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-3 group-hover:text-blue-600 transition-colors">
                    {t('sponsor.step2Title')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('sponsor.step2Desc')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-gradient-to-br from-white dark:from-slate-800 to-green-50 dark:to-slate-700 rounded-2xl p-6 md:p-8 border border-green-100 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-3 group-hover:text-green-600 transition-colors">
                    {t('sponsor.step3Title')}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('sponsor.step3Desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline visuelle */}
            <div className="hidden md:flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-1 bg-gradient-to-r from-brand-orange to-blue-500 rounded-full" />
              <div className="w-3 h-3 bg-brand-orange rounded-full border-2 border-white shadow-lg" />
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg" />
              <div className="flex-1 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4">
              {t('sponsor.howTitle')}{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                WORK?
              </span>
            </h3>
            <p className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('sponsor.howDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="group relative">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 h-full border border-slate-100 dark:border-slate-700 hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      {step.number < steps.length && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-orange to-transparent" />
                      )}
                    </div>
                    <h4 className="text-slate-900 dark:text-slate-200 font-bold text-base md:text-lg leading-tight pt-1 group-hover:text-brand-orange-dark transition-colors">
                      {t(step.titleKey)}
                    </h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section FAQ Moderne */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('sponsor.faqBadge')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4">
              {t('sponsor.faqTitle')}{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Questions
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t('sponsor.faqDescription')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => {
                // Icônes différentes pour chaque question
                const icons = [
                  <Users className="w-5 h-5" key="users" />,
                  <Users className="w-5 h-5" key="users2" />,
                  <MapPin className="w-5 h-5" key="map" />,
                  <UserCheck className="w-5 h-5" key="usercheck" />,
                  <DollarSign className="w-5 h-5" key="dollar" />,
                  <Shield className="w-5 h-5" key="shield" />,
                  <Gift className="w-5 h-5" key="gift" />,
                ];

                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-6 hover:border-brand-orange-dark transition-all duration-300 hover:shadow-lg"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-start gap-4 text-left">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center mt-1 shadow-md">
                          <div className="text-white">
                            {icons[index] || <Check className="w-5 h-5" />}
                          </div>
                        </div>
                        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-orange-dark transition-colors">
                          {t(faq.questionKey)}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="ml-14">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                          {t(faq.answerKey)}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-green text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all transform hover:scale-105">
            {t('sponsor.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
