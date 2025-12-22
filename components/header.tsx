'use client';

import { useState, useEffect } from 'react';
import { Heart, Search, Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Charger la préférence depuis localStorage au démarrage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode et sauvegarder la préférence
  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-50 h-50">
              <Image
                src="/logo-white.svg"
                alt="Le Miel Havre Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-brand-orange dark:hover:text-brand-orange-light ${
                    isActive ? 'text-brand-orange dark:text-brand-orange-light' : 'text-brand-green dark:text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="hidden md:flex w-10 h-10 items-center justify-center text-brand-green dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange-light hover:bg-brand-cream dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button className="hidden md:flex bg-gradient-to-r from-brand-green to-brand-green-dark hover:from-brand-green-dark hover:to-brand-green text-white px-6 py-2.5 rounded-lg shadow-lg shadow-brand-green/30 hover:shadow-xl hover:shadow-brand-green/40 transition-all">
              <Heart className="w-4 h-4 mr-2 fill-white" />
              Donate
            </Button>
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 items-center justify-center hover:border-brand-orange hover:bg-brand-cream dark:hover:bg-slate-800 transition-all text-brand-green dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-green dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange-light hover:bg-brand-cream dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 py-4 animate-in slide-in-from-top-2 duration-200 bg-white dark:bg-slate-900">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-brand-cream dark:bg-slate-800 text-brand-orange dark:text-brand-orange-light'
                        : 'text-brand-green dark:text-slate-300 hover:bg-brand-cream dark:hover:bg-slate-800 hover:text-brand-orange dark:hover:text-brand-orange-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 px-4 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-brand-green to-brand-green-dark hover:from-brand-green-dark hover:to-brand-green text-white py-2.5 rounded-lg">
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Donate
                </Button>
                <button
                  onClick={toggleDarkMode}
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:border-brand-orange hover:bg-brand-cream dark:hover:bg-slate-800 transition-all text-brand-green dark:text-slate-300"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
