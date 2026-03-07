'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';
import type { Dictionary, Locale } from '@/i18n/types';

interface NavbarProps { dict: Dictionary; locale: Locale; }

const locales = [
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'pt-br', flag: '🇧🇷', label: 'BR' },
] as const;

export default function Navbar({ dict, locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];
  const navLinks = [
    { href: '#how-it-works', label: dict.nav.features },
    { href: '#bots', label: dict.nav.bots },
    { href: '#performance', label: dict.nav.performance },
    { href: '#pricing', label: dict.nav.pricing },
    { href: '#faq', label: dict.nav.faq },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/10' : ''}`}>
      <Container>
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="PolyPulse" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-heading font-bold text-white">
              Poly<span className="text-primary">Pulse</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer px-2 py-1.5"
              >
                <span className="text-base">{currentLocale.flag}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-dark-800 border border-white/[0.06] rounded-xl py-2 min-w-[120px] shadow-xl">
                  {locales.map((l) => (
                    <a
                      key={l.code}
                      href={`/${l.code}`}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/[0.04] transition-colors ${
                        l.code === locale ? 'text-primary' : 'text-gray-400'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-primary text-dark-950 rounded-xl hover:bg-primary-soft hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] transition-all"
            >
              {dict.nav.getStarted}
            </a>

            {/* Mobile menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-400 p-1 cursor-pointer">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/[0.04]">
          <Container>
            <div className="py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a href="#pricing" className="block w-full text-center py-3 bg-primary text-dark-950 font-semibold rounded-xl text-sm">
                  {dict.nav.getStarted}
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
