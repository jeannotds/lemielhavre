import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Heart, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+243 976 752 660',
      link: 'tel:+243976752660',
      description: 'Appelez-nous directement',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+243 976 752 660',
      link: 'https://wa.me/243976752660',
      description: 'Contactez-nous sur WhatsApp',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Lemielhavre@gmail.com',
      link: 'mailto:Lemielhavre@gmail.com',
      description: 'Envoyez-nous un email',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Goma • Kinshasa',
      link: '#',
      description: 'Nos bureaux',
      color: 'from-brand-orange to-brand-orange-dark',
    },
  ];

  const officeHours = [
    { day: 'Lundi - Vendredi', time: '09:00 - 18:00' },
    { day: 'Samedi', time: '09:00 - 14:00' },
    { day: 'Dimanche', time: 'Fermé' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative mt-20 pt-32 md:pt-48 pb-24 md:pb-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-brand-orange-light fill-brand-orange-light" />
              <p className="text-white text-sm font-semibold tracking-wider">CONTACTEZ-NOUS</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Contactez{' '}
              <span className="bg-gradient-to-r from-brand-orange-light to-brand-orange bg-clip-text text-transparent">
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
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-background dark:to-card py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Nos{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                Moyens de Contact
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Choisissez le moyen qui vous convient le mieux pour nous joindre. Nous sommes disponibles pour répondre à toutes vos questions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-white dark:bg-card rounded-2xl p-8 border-2 border-slate-100 dark:border-secondary hover:border-brand-orange-dark dark:hover:border-brand-orange hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-cream/50 dark:from-secondary/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-brand-orange dark:group-hover:text-brand-orange-light transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-base mb-2 font-semibold">
                    {info.content}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {info.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Additional Information Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Informations{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                  Pratiques
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                Tout ce que vous devez savoir pour nous contacter efficacement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-white dark:from-card to-brand-cream/30 dark:to-secondary/30 rounded-3xl p-8 border-2 border-brand-cream dark:border-secondary hover:border-brand-orange dark:hover:border-brand-orange shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Heures d&apos;ouverture</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/60 dark:bg-card/60 rounded-xl border border-brand-cream dark:border-secondary">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold text-base">{schedule.day}</span>
                      <span className="text-slate-600 dark:text-slate-400 font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-white dark:from-card to-blue-50/30 dark:to-secondary/30 rounded-3xl p-8 border-2 border-blue-100 dark:border-secondary hover:border-blue-200 dark:hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Temps de réponse</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  Nous nous efforçons de répondre à tous les messages dans un délai de <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">24 à 48 heures</span>. 
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mt-3">
                  Pour les questions urgentes, veuillez nous appeler directement.
                </p>
              </div>

              {/* Location Info */}
              <div className="bg-gradient-to-br from-white dark:from-card to-green-50/30 dark:to-secondary/30 rounded-3xl p-8 border-2 border-green-100 dark:border-secondary hover:border-green-200 dark:hover:border-green-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Nos bureaux</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/60 dark:bg-card/60 rounded-xl p-4 border border-green-100 dark:border-secondary">
                    <p className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-base">Bureau principal :</p>
                    <p className="text-slate-600 dark:text-slate-400">Kinshasa, République Démocratique du Congo</p>
                  </div>
                  <div className="bg-white/60 dark:bg-card/60 rounded-xl p-4 border border-green-100 dark:border-secondary">
                    <p className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-base">Programme actif :</p>
                    <p className="text-slate-600 dark:text-slate-400">Goma, République Démocratique du Congo</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-white dark:from-card to-purple-50/30 dark:to-secondary/30 rounded-3xl p-8 border-2 border-purple-100 dark:border-secondary hover:border-purple-200 dark:hover:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Suivez-nous</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-base">
                  Restez connecté avec nous sur nos réseaux sociaux pour suivre nos actualités et nos projets.
                </p>
                <a
                  href="https://wa.me/243976752660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-card py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Où nous{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-dark bg-clip-text text-transparent">
                trouver
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Notre bureau principal est situé à Kinshasa, et nous opérons également à Goma pour nos programmes de bourses.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-secondary dark:to-card rounded-3xl h-[500px] flex items-center justify-center border-2 border-slate-200 dark:border-secondary shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.1),transparent_70%)]" />
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl mb-6 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xl font-semibold mb-2">
                  Carte interactive à venir
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-base">
                  Kinshasa, République Démocratique du Congo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

