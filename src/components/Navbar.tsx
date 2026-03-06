'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Locale, locales } from '@/i18n';
import Container from './Container';

interface NavbarProps { dict: any; locale: Locale; }

const flags: Record<string, string> = { en: '🇺🇸', es: '🇪🇸', 'pt-br': '🇧🇷' };

export default function Navbar({ dict, locale }: NavbarProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = dict.nav;

  const links = [
    { label: nav.features, href: '#how-it-works' },
    { label: nav.bots, href: '#bots' },
    { label: nav.performance, href: '#performance' },
    { label: nav.pricing, href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-dark-900/80 border-b border-white/[0.04]">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            </div>
            <span className="text-lg font-heading font-bold text-white">Poly<span className="text-primary">Pulse</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <span>{flags[locale]}</span>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-dark-800 border border-white/10 rounded-xl shadow-2xl py-1.5 min-w-[120px] z-50">
                  {locales.map((l) => (
                    <Link key={l} href={`/${l}`} onClick={() => setLangOpen(false)} className={`flex items-center gap-2.5 px-4 py-2 text-sm hover:bg-white/5 transition-colors ${l === locale ? 'text-primary' : 'text-gray-400'}`}>
                      <span>{flags[l]}</span>
                      <span>{l === 'en' ? 'English' : l === 'es' ? 'Español' : 'Português'}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="#pricing" className="hidden sm:inline-flex px-5 py-2 bg-gradient-to-r from-primary to-secondary text-dark-900 text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
              {nav.cta}
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/5 py-4" style={{ padding: '16px 48px' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 text-gray-300 hover:text-white">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
