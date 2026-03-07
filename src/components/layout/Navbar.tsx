'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Activity, ChevronDown, Menu, X } from 'lucide-react';
import { Locale, locales } from '@/i18n';
import type { Dictionary } from '@/i18n/types';
import Container from './Container';
import { NAV_LINKS } from '@/lib/constants';

interface NavbarProps { dict: Dictionary; locale: Locale; }

const flags: Record<string, string> = { en: '🇺🇸', es: '🇪🇸', 'pt-br': '🇧🇷' };
const langNames: Record<string, string> = { en: 'English', es: 'Español', 'pt-br': 'Português' };

export default function Navbar({ dict, locale }: NavbarProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform group-hover:scale-110">
              <Activity size={17} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="text-lg font-heading font-bold text-white">
              Poly<span className="text-primary">Pulse</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full">
                {dict.nav[l.key as keyof typeof dict.nav]}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors text-gray-400"
              >
                <span>{flags[locale]}</span>
                <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 glass rounded-xl shadow-2xl py-1.5 min-w-[140px] z-50 border border-white/10">
                  {locales.map((l) => (
                    <Link key={l} href={`/${l}`} onClick={() => setLangOpen(false)} className={`flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${l === locale ? 'text-primary' : 'text-gray-400'}`}>
                      <span>{flags[l]}</span>
                      <span>{langNames[l]}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a href="#pricing" className="hidden sm:inline-flex px-5 py-2 bg-gradient-to-r from-primary to-sky-400 text-dark-950 text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all hover:scale-[1.03]">
              {dict.nav.getStarted}
            </a>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'}`}>
        <div className="glass px-6 py-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 text-gray-300 hover:text-white transition-colors font-medium">
              {dict.nav[l.key as keyof typeof dict.nav]}
            </a>
          ))}
          <a href="#pricing" className="block mt-3 px-5 py-3 bg-gradient-to-r from-primary to-sky-400 text-dark-950 text-sm font-bold rounded-xl text-center">
            {dict.nav.getStarted}
          </a>
        </div>
      </div>
    </nav>
  );
}
