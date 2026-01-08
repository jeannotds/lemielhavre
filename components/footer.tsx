'use client';

import { Facebook, Linkedin, Twitter, Github, MapPin, Phone, Mail, Heart, Instagram } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { useTranslation } from '@/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/lemielhavre', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: 'https://facebook.com/lemielhavre', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: Twitter, href: 'https://twitter.com/lemielhavre', label: 'Twitter', color: 'hover:bg-cyan-500' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-dark.svg"
                  alt="Le Miel Havre Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('footer.companyName')}</h3>
            <p className="text-slate-400 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-11 h-11 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t('footer.companyName')}:</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full" />
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <a href={`mailto:${t('footer.email')}`} className="text-slate-400 hover:text-brand-orange-light transition-colors">
                  {t('footer.email')}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <a href={`tel:${t('footer.phone').replace(/\s/g, '')}`} className="text-slate-400 hover:text-brand-orange-light transition-colors">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <p className="text-slate-400">{t('footer.location')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t('footer.followUs')}</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full" />
            <div className="space-y-2">
              <a href="https://instagram.com/lemielhavre" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-brand-orange-light transition-colors">
                @lemielhavre
              </a>
              <a href="https://facebook.com/lemielhavre" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-brand-orange-light transition-colors">
                @lemielhavre
              </a>
              <a href="https://twitter.com/lemielhavre" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-brand-orange-light transition-colors">
                @lemielhavre
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-11 h-11 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {t('footer.companyName')}. {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-brand-orange-light text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-slate-400 hover:text-brand-orange-light text-sm transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
