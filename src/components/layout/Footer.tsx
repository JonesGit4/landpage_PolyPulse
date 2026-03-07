import Link from 'next/link';
import { Activity, Send } from 'lucide-react';
import { Locale } from '@/i18n';
import type { Dictionary } from '@/i18n/types';
import Container from './Container';

interface FooterProps { dict: Dictionary; locale: Locale; }

export default function Footer({ dict, locale }: FooterProps) {
  const f = dict.footer;

  return (
    <footer className="border-t border-white/[0.04] pt-16 lg:pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Activity size={17} strokeWidth={2.5} className="text-white" />
              </div>
              <span className="text-lg font-heading font-bold text-white">Poly<span className="text-primary">Pulse</span></span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed font-light">{f.tagline}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 uppercase tracking-wider text-xs">{f.product}</h4>
            <ul className="space-y-2.5">
              {['Scalper Bot', 'Swing Bot', 'Alert Bot', 'VIP Signals'].map((item) => (
                <li key={item}>
                  <a href="#bots" className="text-sm text-gray-500 hover:text-primary transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 uppercase tracking-wider text-xs">{f.resources}</h4>
            <ul className="space-y-2.5">
              {[f.docs, f.blog, f.tutorials, 'FAQ'].map((item, i) => (
                <li key={i}>
                  <a href={item === 'FAQ' ? '#faq' : '#'} className="text-sm text-gray-500 hover:text-primary transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 uppercase tracking-wider text-xs">{f.newsletter}</h4>
            <div className="flex gap-2 mb-5">
              <input
                type="email"
                placeholder={f.emailPlaceholder}
                className="flex-1 bg-dark-800 border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/30 transition-colors font-light min-w-0"
              />
              <button className="px-3.5 py-2.5 bg-primary text-dark-950 font-bold text-sm rounded-lg hover:bg-primary/80 transition-all flex-shrink-0">
                {f.subscribe}
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {[
                { name: 'Telegram', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.03-1.98 1.26-5.61 3.71-.53.37-1.01.55-1.44.54-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.65-2.89 7.99-3.44 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z' },
                { name: 'X', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'YouTube', svg: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((s) => (
                <a key={s.name} href="#" className="w-9 h-9 rounded-lg bg-dark-800 border border-white/[0.06] flex items-center justify-center hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-300" title={s.name}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
                    <path d={s.svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-light">{f.copyright}</p>
          <div className="flex gap-6">
            {[f.terms, f.privacy, f.disclaimer].map((item, i) => (
              <a key={i} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors font-light">{item}</a>
            ))}
          </div>
        </div>
        <p className="text-center text-[11px] text-gray-700 mt-5 font-light">{f.risk}</p>
      </Container>
    </footer>
  );
}
