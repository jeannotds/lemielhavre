'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, FileText, Mail, UserCheck, Clock, Users, MapPin, DollarSign, Shield, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function SponsorMatch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.21 (1).jpeg',
      title: 'Rencontrez Votre Enfant Parrainé',
    },
    {
      id: 2,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.22 (1).jpeg',
      title: 'Construisez une Connexion Durable',
    },
    {
      id: 3,
      image: '/assets/WhatsApp Image 2025-12-15 at 19.57.23 (1).jpeg',
      title: 'Soutenez Leur Avenir',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'CHILDREN REFERRAL & ASSESSMENT',
      description:
        'Children are usually referred to the orphanage supported by Le Miel Havre scholarship program through local churches, community organizations, social services.',
    },
    {
      number: 2,
      title: 'FUND ALLOCATION PROCESS',
      description:
        'Each child is connected to a sponsor who commits to providing monthly or annual financial support. While sponsorship is personalized, contributions are aggregated within the program to ensure every child living in a partner orphanage supported by Le Miel Havre benefits equally.',
    },
    {
      number: 3,
      title: "CHILDREN'S PLACEMENT",
      description:
        "Every child is provided with access to education, including school uniforms, books, supplies, and tutoring when needed. Alongside their studies, they receive balanced meals, regular health checkups, and medical care to support healthy growth and development.",
    },
    {
      number: 4,
      title: 'LIFE AFTER THE PROGRAM',
      description:
        'By the time they graduate, children in partner orphanages supported by Le Miel Havre scholarship program have usually completed formal education or vocational training, equipping them with tools for self-sufficiency.',
    },
  ];

  const faqs = [
    {
      question: 'Why should you sponsor a child through Le Miel Havre scholarship program?',
      answer:
        "Since its beginning in 2025, Le Miel Havre's goal is to improve the lives through education of children who come from extreme poverty and/or have been abandoned or removed from their families. Your support will allow these children to heal, thrive and grow in a stable and loving group home environment.",
    },
    {
      question: 'How many children are in Le Miel Havre scholarship program?',
      answer:
        'We have started with 5 children, teenagers and young adults living in an orphanage in Goma. The children range in age from infants to 21 years old. Our future goal is that we estimate more than 500 children living in different orphanages will become beneficiaries of Le Miel Havre scholarship program.',
    },
    {
      question: 'Where does Le Miel Havre operate?',
      answer:
        'Our Head Office is in Kinshasa, DR Congo. We work with in-country partners who help us administrate the program in Goma. Plans in the future will be to expand to other cities in the country.',
    },
    {
      question: 'How many sponsors for each child?',
      answer:
        'Le Miel Havre connects one sponsor to one child. We encourage you to regularly write to your child to develop a special bond and relationship. The children cannot wait to receive your letters!',
    },
    {
      question: 'How much does it cost to sponsor a child?',
      answer:
        '$400 per school year, which is closer to $35 per month. Your ongoing commitment will help to change a child\'s life. You can pay monthly, quarterly, semiannually or annually. You can also sponsor more than one child.',
    },
    {
      question: 'Does my sponsored child know my full name and address?',
      answer:
        'In order to protect your privacy, we only share your first name with your sponsored child. We do not provide your address, city or state location.',
    },
    {
      question: 'What will I receive when I sponsor a child?',
      answer:
        'You will receive a Welcome Packet via email with a brief bio and photo of your child within 3 weeks. You will also receive an updated annual photo and bio of your child, and can communicate through letters or email.',
    },
  ];

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
            <span className="text-sm font-semibold text-brand-orange-dark dark:text-brand-orange">SPONSORSHIP PROGRAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900 dark:text-slate-200 mb-4">
            How the Sponsor-Child{' '}
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
              Match Works?
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Discover how we connect caring sponsors with children in need
          </p>
        </div>

        <div className="mb-20">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.2),transparent_70%)]" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
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
                The{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                  Sponsorship Process
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Discover how we create lasting connections between sponsors and children
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
                    Assessment & Profile
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The matching process may take several months. Our team carefully collects information on each child&apos;s background, health, and education to create a detailed personal profile.
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
                    Confirmation & Onboarding
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Once the match is confirmed, the onboarding process begins. Sponsors receive a welcome packet with the child&apos;s photo, personal story, background details, and Le Miel Havre identification number.
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
                    Communication & Follow-up
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    After onboarding is complete, sponsors will begin receiving letters from their assigned child and can communicate through letters or via email using the child&apos;s scholarship identification number.
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
              HOW DOES IT{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                WORK?
              </span>
            </h3>
            <p className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Le Miel Havre scholarship program connects children with safe, and good school. Each child's basic needs are met with clothing, personal care items. They receive education including school supplies, and tutoring.
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
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section FAQ Moderne */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cream rounded-full border border-brand-cream mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-orange-dark">QUESTIONS FRÉQUENTES</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-200 mb-4">
              Questions{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Fréquentes
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Trouvez des réponses aux questions courantes sur notre programme de parrainage
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
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="ml-14">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                          {faq.answer}
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
            Sponsor a Child Today
          </Button>
        </div>
      </div>
    </section>
  );
}
