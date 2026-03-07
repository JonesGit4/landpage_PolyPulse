'use client';
import { Send } from 'lucide-react';
import Image from 'next/image';
import Container from './Container';
import type { Dictionary } from '@/i18n/types';

interface FooterProps { dict: Dictionary; }

export default function Footer({ dict }: FooterProps) {
  const d = dict.footer;

  return (
    <footer className="border-t border-white/[0.04] pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Image src="/logo.png" alt="PolyPulse" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-heading font-bold text-white">
                Poly<span className="text-primary">Pulse</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{d.tagline}</p>
            <div className="flex gap-3">
              {[
                { icon: <Send size={15} />, href: '#' },
                { icon: <span className="text-sm font-bold">𝕏</span>, href: '#' },
                { icon: <span className="text-sm">▶</span>, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-dark-800 border border-white/[0.04] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">{d.product}</h4>
            <div className="space-y-3">
              {['Scalper Bot', 'Swing Bot', 'Alert Bot', 'VIP Signals'].map((item) => (
                <a key={item} href="#bots" className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">{item}</a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">{d.resources}</h4>
            <div className="space-y-3">
              {[d.docs, d.blog, d.tutorials, d.faq].map((item, i) => (
                <a key={i} href={i === 3 ? '#faq' : '#'} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">{item}</a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">{d.newsletter}</h4>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder={d.emailPlaceholder}
                className="flex-1 bg-dark-800 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-primary/30 transition-colors"
              />
              <button className="bg-primary text-dark-950 font-semibold text-sm px-5 py-3 rounded-xl hover:bg-primary-soft transition-colors cursor-pointer">
                {d.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">{d.copyright}</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">{d.terms}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{d.privacy}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{d.disclaimer}</a>
          </div>
        </div>

        <p className="text-center text-[10px] text-gray-700 mt-6">{d.risk}</p>
      </Container>
    </footer>
  );
}
