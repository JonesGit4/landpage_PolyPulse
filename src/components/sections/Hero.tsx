'use client';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import type { Dictionary } from '@/i18n/types';

interface HeroProps { dict: Dictionary; }

export default function Hero({ dict }: HeroProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const trades = dict.hero.terminal.trades;
    if (visibleLines < trades.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, dict.hero.terminal.trades]);

  const actionColor = (action: string) => {
    if (['BUY', 'COMPRA'].includes(action)) return 'text-secondary';
    if (['SELL', 'VENDA'].includes(action)) return 'text-red-400';
    return 'text-amber-400';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-grid overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-primary/[0.035] rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      </div>

      <Container className="relative py-12 sm:py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/15 mb-8 animate-fade-in">
          <div className="live-dot" />
          <span className="text-sm text-primary font-medium tracking-wide">{dict.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] font-heading font-extrabold text-white mb-6 animate-fade-up">
          {dict.hero.headline}{' '}
          <span className="gradient-text">{dict.hero.headlineHighlight}</span>
          <br />
          <span className="text-gray-300">{dict.hero.subheadline}</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-light animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {dict.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button href="#pricing" variant="primary" size="lg">
            {dict.hero.cta1}
            <ArrowRight size={18} />
          </Button>
          <Button href="#pricing" variant="outline" size="lg">
            {dict.hero.cta2}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-14 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          {[
            { value: dict.hero.stats.volume, label: dict.hero.stats.volumeLabel },
            { value: dict.hero.stats.winrate, label: dict.hero.stats.winrateLabel },
            { value: dict.hero.stats.uptime, label: dict.hero.stats.uptimeLabel },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text-green mb-1">{stat.value}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="relative max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="card p-0 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-2">{dict.hero.terminal.title}</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="live-dot" />
                <span className="text-xs text-secondary font-mono font-medium">LIVE</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-2 sm:p-3 space-y-0.5 font-mono text-sm">
              {dict.hero.terminal.trades.map((trade, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 sm:gap-3 py-2 px-2 sm:px-3 rounded-lg transition-all duration-500 ${
                    i < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  } hover:bg-white/[0.02]`}
                >
                  <span className="text-gray-600 text-xs sm:text-sm w-16 sm:w-20 flex-shrink-0">{trade.time}</span>
                  <span className={`font-bold text-xs sm:text-sm w-14 sm:w-16 flex-shrink-0 ${actionColor(trade.action)}`}>{trade.action}</span>
                  <span className="text-gray-300 flex-1 truncate text-xs sm:text-sm">{trade.market}</span>
                  <span className="text-gray-500 w-10 sm:w-12 text-right flex-shrink-0 hidden sm:block text-xs sm:text-sm">{trade.odds}</span>
                  <span className="text-white font-semibold w-16 sm:w-20 text-right flex-shrink-0 text-xs sm:text-sm">{trade.amount}</span>
                </div>
              ))}
              {/* Cursor line */}
              <div className="flex items-center gap-3 py-2 px-3">
                <span className="text-primary font-bold text-sm">›</span>
                <span className="w-2 h-4 bg-primary/70" style={{ animation: 'terminal-cursor 1s step-end infinite' }} />
              </div>
            </div>
          </div>

          {/* Glow under terminal */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-primary/10 blur-3xl rounded-full" />
        </div>
      </Container>
    </section>
  );
}
