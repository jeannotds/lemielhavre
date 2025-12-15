'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Heart, Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+243 852 105 668',
      link: 'tel:+243852105668',
      description: 'Appelez-nous directement',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+243 825 910 778',
      link: 'https://wa.me/243825910778',
      description: 'Contactez-nous sur WhatsApp',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'diambujeannotarobalse@gmail.com',
      link: 'mailto:diambujeannotarobalse@gmail.com',
      description: 'Envoyez-nous un email',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Kinshasa, DR Congo',
      link: '#',
      description: 'Bureau principal',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const officeHours = [
    { day: 'Lundi - Vendredi', time: '09:00 - 18:00' },
    { day: 'Samedi', time: '09:00 - 14:00' },
    { day: 'Dimanche', time: 'Fermé' },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative mt-20 pt-32 md:pt-48 pb-24 md:pb-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
              <p className="text-white text-sm font-semibold tracking-wider">CONTACTEZ-NOUS</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Contactez{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                Le Miel Havre
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Nous sommes là pour vous aider. N&apos;hésitez pas à nous contacter pour toute question ou pour en savoir plus sur nos programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-1 font-medium">
                    {info.content}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {info.description}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Envoyez-nous un{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-slate-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+243 XXX XXX XXX"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Sujet de votre message"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-[150px] resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 text-base font-semibold rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Informations{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Importantes
                  </span>
                </h2>
                <p className="text-slate-600 mb-6">
                  Voici quelques informations utiles pour nous contacter et en savoir plus sur nos services.
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Heures d&apos;ouverture</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-700 font-medium">{schedule.day}</span>
                      <span className="text-slate-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Temps de réponse</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Nous nous efforçons de répondre à tous les messages dans un délai de <span className="font-semibold text-slate-800">24 à 48 heures</span>. 
                  Pour les questions urgentes, veuillez nous appeler directement.
                </p>
              </div>

              {/* Location Info */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Nos bureaux</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="font-semibold text-slate-800">Bureau principal :</p>
                  <p>Kinshasa, République Démocratique du Congo</p>
                  <p className="font-semibold text-slate-800 mt-4">Programme actif :</p>
                  <p>Goma, République Démocratique du Congo</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Suivez-nous</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Restez connecté avec nous sur nos réseaux sociaux pour suivre nos actualités et nos projets.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/243825910778"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all shadow-lg hover:shadow-xl"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Où nous trouver
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Notre bureau principal est situé à Kinshasa, et nous opérons également à Goma pour nos programmes de bourses.
            </p>
          </div>
          <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">
                Carte interactive à venir
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Kinshasa, DR Congo
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

