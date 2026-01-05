'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation, type TranslationKey } from '@/lib/translations';
import { Heart, DollarSign, GraduationCap, Utensils, Stethoscope, Sparkles, Mail, Check, Users, MapPin, UserCheck, Shield, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Parrainage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const processImages = [
    '/assets/WhatsApp Image 2025-12-15 at 19.57.21 (1).jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.22 (1).jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.23 (1).jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.24 (1).jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.25 (1).jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.29 (1).jpeg',
    '/assets/WhatsApp Image 2025-12-15 at 19.57.30 (1).jpeg',
  ];

  const processSlides = [
    t('sponsor.howProcessSlide1'), // Notre fondateur avec l'orphelinat Flammme D'amour
    t('sponsor.howProcessSlide2'), // Notre fondateur avec les enfants de l'orphelinat
    t('sponsor.howProcessSlide3'), // Les enfants se préparent pour l'école
    t('sponsor.howProcessSlide3'), // Les enfants se préparent pour l'école
    t('sponsor.howProcessSlide3'), // Les enfants se préparent pour l'école
    t('sponsor.howProcessSlide3'), // Les enfants se préparent pour l'école
    t('sponsor.howProcessSlide3'), // Les enfants se préparent pour l'école
  ];

  // Auto-slide for process images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % processImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [processImages.length]);

  const benefits = [
    {
      number: 1,
      titleKey: 'sponsor.benefit1',
      image: '/assets/parrainage/fraissocial.png',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      titleKey: 'sponsor.benefit2',
      image: '/assets/parrainage/uniforme.png',
      gradient: 'from-brand-orange to-brand-orange-dark',
    },
    {
      number: 3,
      titleKey: 'sponsor.benefit3',
      image: '/assets/parrainage/cahier.png',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      number: 4,
      titleKey: 'sponsor.benefit4',
      image: '/assets/parrainage/repas.png',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: 5,
      titleKey: 'sponsor.benefit5',
      image: '/assets/parrainage/soins.png',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      number: 6,
      titleKey: 'sponsor.benefit6',
      image: '/assets/parrainage/trousse.png',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      number: 7,
      titleKey: 'sponsor.benefit7',
      image: '/assets/parrainage/miseajour.png',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const faqs = [
    {
      questionKey: 'sponsor.faq1Q',
      answerKey: 'sponsor.faq1A',
    },
    {
      questionKey: 'sponsor.faq2Q',
      answerKey: 'sponsor.faq2A',
    },
    {
      questionKey: 'sponsor.faq3Q',
      answerKey: 'sponsor.faq3A',
    },
    {
      questionKey: 'sponsor.faq4Q',
      answerKey: 'sponsor.faq4A',
    },
    {
      questionKey: 'sponsor.faq5Q',
      answerKey: 'sponsor.faq5A',
    },
    {
      questionKey: 'sponsor.faq6Q',
      answerKey: 'sponsor.faq6A',
    },
    {
      questionKey: 'sponsor.faq7Q',
      answerKey: 'sponsor.faq7A',
    },
    {
      questionKey: 'sponsor.faq8Q',
      answerKey: 'sponsor.faq8A',
    },
    {
      questionKey: 'sponsor.faq9Q',
      answerKey: 'sponsor.faq9A',
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
              <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <p className="text-white text-sm font-semibold tracking-wider">PARRAINAGE</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              {t('sponsor.title')}{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Programme
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              {t('sponsor.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">BÉNÉFICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                {t('sponsor.benefitsTitle')}
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit) => {
                const benefitText = t(benefit.titleKey as TranslationKey);
                const [title, ...descParts] = benefitText.split(' - ');
                const description = descParts.join(' - ');
                return (
                  <div
                    key={benefit.number}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
                        <Image
                          src={benefit.image}
                          alt={title}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-brand-orange-dark dark:text-brand-orange font-bold text-lg">{benefit.number}.</span>
                          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors">
                            {title}
                          </h3>
                        </div>
                        {description && (
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cost Section */}
            <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange-dark/10 dark:from-brand-orange/20 dark:to-brand-orange-dark/20 rounded-3xl p-8 md:p-12 border border-brand-orange/20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl mb-6 shadow-xl">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
                {t('sponsor.costFull')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Steps Section */}
      <section className="bg-white dark:bg-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">NOTRE PROGRAMME</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                {t('program.title')}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {t('program.description')}
              </p>
            </div>

            {/* Steps Grid 2x2 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {[
                { number: 1, titleKey: 'program.step1Title', descKey: 'program.step1Desc', gradient: 'from-blue-500 to-cyan-500', icon: UserCheck },
                { number: 2, titleKey: 'program.step2Title', descKey: 'program.step2Desc', gradient: 'from-brand-orange to-brand-orange-dark', icon: DollarSign },
                { number: 3, titleKey: 'program.step3Title', descKey: 'program.step3Desc', gradient: 'from-green-500 to-emerald-500', icon: GraduationCap },
                { number: 4, titleKey: 'program.step4Title', descKey: 'program.step4Desc', gradient: 'from-purple-500 to-pink-500', icon: Gift },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md border-2 border-brand-orange">
                          <span className="text-sm font-bold text-brand-orange">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors">
                          {t(step.titleKey as TranslationKey)}
                        </h3>
                        <div className="h-1 w-16 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full group-hover:w-24 transition-all" />
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-600">
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(step.descKey as TranslationKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-white dark:bg-slate-900 py-20 md:py-28 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {processImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={processSlides[index]}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80 z-10" />
        </div>

        {/* Navigation Buttons for Background Carousel */}
        <button
          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + processImages.length) % processImages.length)}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm p-3 rounded-full transition-all shadow-lg hover:scale-110 z-40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-slate-200" />
        </button>

        <button
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % processImages.length)}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm p-3 rounded-full transition-all shadow-lg hover:scale-110 z-40"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-slate-900 dark:text-slate-200" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {processImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/50 hover:bg-brand-orange'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50 mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">PROCESSUS</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {t('sponsor.howProcessTitle')}
              </h2>
            </div>

            {/* Process Steps Description */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-7xl mx-auto">
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 dark:border-slate-700/50 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors duration-300">
                  {t('sponsor.howProcessStep1')}
                </p>
              </div>
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 dark:border-slate-700/50 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors duration-300">
                  {t('sponsor.howProcessStep2')}
                </p>
              </div>
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 dark:border-slate-700/50 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors duration-300">
                  {t('sponsor.howProcessStep3')}
                </p>
              </div>
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 dark:border-slate-700/50 hover:border-brand-orange dark:hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-brand-orange-dark dark:group-hover:text-brand-orange transition-colors duration-300">
                  {t('sponsor.howProcessStep4')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="relative z-20 container mx-auto px-6 lg:px-10 mt-12">
          <div className="bg-amber-50/95 dark:bg-amber-900/95 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/50 rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-amber-800 dark:text-amber-200 font-medium">
              {t('sponsor.howProcessNote')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream dark:bg-slate-800 rounded-full border border-brand-cream dark:border-slate-700 mb-4">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">{t('sponsor.faqBadge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4">
                {t('sponsor.faqTitle')}{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                {t('sponsor.faqDescription')}
              </p>
            </div>

            {/* Prêt à changer une vie ? */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                  const icons = [
                    <Users className="w-5 h-5" key="users" />,
                    <Users className="w-5 h-5" key="users2" />,
                    <MapPin className="w-5 h-5" key="map" />,
                    <UserCheck className="w-5 h-5" key="usercheck" />,
                    <DollarSign className="w-5 h-5" key="dollar" />,
                    <Shield className="w-5 h-5" key="shield" />,
                    <Gift className="w-5 h-5" key="gift" />,
                    <Gift className="w-5 h-5" key="gift2" />,
                    <Mail className="w-5 h-5" key="mail" />,
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
                            {t(faq.questionKey as TranslationKey)}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="ml-14">
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                            {t(faq.answerKey as TranslationKey)}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pr&ecirc;t &agrave; changer une vie ?
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Rejoignez&#8209;nous dans notre mission de transformer la vie des enfants en RDC gr&acirc;ce au parrainage.
          </p>
            <Button className="bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-green text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all transform hover:scale-105">
              {t('sponsor.button')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

