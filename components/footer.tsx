'use client';

import { Facebook, Linkedin, Twitter, Github, MapPin, Phone, Mail, Heart } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-cyan-500' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-slate-700' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
            <p className="text-slate-400 leading-relaxed">
              Making a difference in communities worldwide through education, support, and compassion.
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
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-orange" />
              Our Address
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full" />
            <p className="text-slate-400 leading-relaxed">
              235 Terry, 10001 2OC Trolley Square, DE 19806 U.S.A
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-orange" />
              Call Us
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full" />
            <div className="space-y-2">
              <p className="text-slate-400">Mon - Fri 10:30 - 18:00</p>
              <a href="tel:+44000888999" className="text-white hover:text-brand-orange-light transition-colors font-medium">
                +44-000-888-999
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-orange" />
              Mail Us
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full" />
            <div className="space-y-2">
              <a href="mailto:info@lemielhavre.com" className="block text-slate-400 hover:text-brand-orange-light transition-colors">
                info@lemielhavre.com
              </a>
              <a href="mailto:no.reply@lemielhavre.com" className="block text-slate-400 hover:text-brand-orange-light transition-colors">
                no.reply@lemielhavre.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Le Miel Havre. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-brand-orange-light text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-brand-orange-light text-sm transition-colors">
              Terms of Service
            </a>
            <button className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2">
              <span>English</span>
              <span className="text-brand-orange">▼</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
