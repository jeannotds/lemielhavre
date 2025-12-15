'use client';

import { useState } from 'react';
import { Heart, Search, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#pages', label: 'Pages' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Heart className="w-9 h-9 text-orange-500 fill-orange-500 animate-pulse" />
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Le Miel Havre
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-orange-500 ${
                  index === 0 ? 'text-orange-500' : 'text-slate-700'
                }`}
              >
                {link.label}
                {index === 0 && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="hidden md:flex w-10 h-10 items-center justify-center text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button className="hidden md:flex bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all">
              <Heart className="w-4 h-4 mr-2 fill-white" />
              Donate
            </Button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="hidden md:flex w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:border-orange-500 hover:bg-orange-50 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    index === 0
                      ? 'bg-orange-50 text-orange-500'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-4 pt-2">
                <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 rounded-lg">
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Donate
                </Button>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:border-orange-500 hover:bg-orange-50 transition-all"
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
