'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Locale, localeNames, localeFlags } from '@/i18n';

interface NavbarProps {
  dict: any;
  locale: Locale;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: '#how-it-works', label: dict.nav.features },
    { href: '#bots', label: dict.nav.bots },
    { href: '#performance', label: dict.nav.performance },
    { href: '#pricing', label: dict.nav.pricing },
    { href: '#faq', label: dict.nav.faq },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-xl font-heading font-bold text-white">
              Poly<span className="text-primary">Pulse</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
              >
                <span>{localeFlags[locale]}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M3 5l3 3 3-3"/></svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-dark-700 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  {(['en', 'es', 'pt-br'] as Locale[]).map((l) => (
                    <Link
                      key={l}
                      href={`/${l}`}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${l === locale ? 'text-primary bg-white/5' : 'text-gray-300'}`}
                    >
                      <span>{localeFlags[l]}</span>
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#pricing" className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-dark-900 font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
              {dict.nav.getStarted}
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-white">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/5 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-primary py-2">
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            {(['en', 'es', 'pt-br'] as Locale[]).map((l) => (
              <Link key={l} href={`/${l}`} className={`px-3 py-1.5 text-sm rounded-lg ${l === locale ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400'}`}>
                {localeFlags[l]}
              </Link>
            ))}
          </div>
          <a href="#pricing" className="block w-full text-center px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-dark-900 font-semibold text-sm rounded-full mt-2">
            {dict.nav.getStarted}
          </a>
        </div>
      )}
    </nav>
  );
}
