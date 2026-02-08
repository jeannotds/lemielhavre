'use client';

import { useState, useEffect, useRef } from 'react';
import { Languages, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex items-center gap-2 w-10 h-10 rounded-lg border border-slate-200 dark:border-secondary items-center justify-center hover:border-brand-orange hover:bg-brand-cream dark:hover:bg-card transition-all text-brand-green dark:text-slate-300"
        aria-label="Change language"
      >
        <Languages className="w-5 h-5" />
      </button>

      {/* Mobile button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg text-brand-green dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange-light hover:bg-brand-cream dark:hover:bg-card transition-all"
        aria-label="Change language"
      >
        <Languages className="w-5 h-5" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-card rounded-lg shadow-xl border border-slate-200 dark:border-secondary py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-brand-cream dark:hover:bg-secondary transition-colors ${
                language === lang.code ? 'bg-brand-cream/50 dark:bg-secondary/50' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                {lang.label}
              </span>
              {language === lang.code && (
                <Check className="w-4 h-4 text-brand-orange" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}



