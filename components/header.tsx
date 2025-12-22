'use client';

import { useState } from 'react';
import { Heart, Search, Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-20 h-20">
              <Image
                src="/logo-white.svg"
                alt="Le Miel Havre Logo"
                width={80}
                height={80}
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
                  className={`relative text-sm font-medium transition-colors hover:text-brand-orange ${
                    isActive ? 'text-brand-orange' : 'text-brand-green'
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
              className="hidden md:flex w-10 h-10 items-center justify-center text-brand-green hover:text-brand-orange hover:bg-brand-cream rounded-lg transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button className="hidden md:flex bg-gradient-to-r from-brand-green to-brand-green-dark hover:from-brand-green-dark hover:to-brand-green text-white px-6 py-2.5 rounded-lg shadow-lg shadow-brand-green/30 hover:shadow-xl hover:shadow-brand-green/40 transition-all">
              <Heart className="w-4 h-4 mr-2 fill-white" />
              Donate
            </Button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="hidden md:flex w-10 h-10 rounded-lg border border-slate-200 items-center justify-center hover:border-brand-orange hover:bg-brand-cream transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-green hover:text-brand-orange hover:bg-brand-cream rounded-lg transition-all"
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
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-brand-cream text-brand-orange'
                        : 'text-brand-green hover:bg-brand-cream hover:text-brand-orange'
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
                  onClick={() => setIsDark(!isDark)}
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:border-brand-orange hover:bg-brand-cream transition-all"
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
