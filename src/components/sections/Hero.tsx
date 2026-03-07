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
    if (['BUY', 'COMPRA'].includes(action)) return 'text-primary';
    if (['SELL', 'VENDA'].includes(action)) return 'text-red-400';
    return 'text-amber-400';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-grid overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-primary/[0.025] rounded-full blur-[160px]" />
        <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[140px]" />
      </div>

      <Container className="relative py-16 sm:py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/[0.06] border border-primary/15 mb-10 animate-fade-in">
          <div className="live-dot" />
          <span className="text-sm text-primary font-mono font-medium tracking-wide">{dict.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] font-heading font-extrabold text-white mb-8 animate-fade-up">
          {dict.hero.headline}{' '}
          <span className="gradient-text">{dict.hero.headlineHighlight}</span>
          <br />
          <span className="text-gray-300">{dict.hero.subheadline}</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {dict.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button href="#pricing" variant="primary" size="lg">
            {dict.hero.cta1}
            <ArrowRight size={18} />
          </Button>
          <Button href="#pricing" variant="outline" size="lg">
            {dict.hero.cta2}
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-12 sm:gap-16 mb-20 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          {[
            { value: dict.hero.stats.volume, label: dict.hero.stats.volumeLabel },
            { value: dict.hero.stats.winrate, label: dict.hero.stats.winrateLabel },
            { value: dict.hero.stats.uptime, label: dict.hero.stats.uptimeLabel },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text-green mb-2">{stat.value}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="relative max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="card p-0 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-3">{dict.hero.terminal.title}</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="live-dot" />
                <span className="text-xs text-primary font-mono font-medium">LIVE</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-4 sm:p-5 space-y-1 font-mono text-sm">
              {dict.hero.terminal.trades.map((trade, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 sm:gap-4 py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-500 ${
                    i < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  } hover:bg-white/[0.02]`}
                >
                  <span className="text-gray-600 text-xs sm:text-sm w-18 sm:w-20 flex-shrink-0">{trade.time}</span>
                  <span className={`font-bold text-xs sm:text-sm w-16 sm:w-18 flex-shrink-0 ${actionColor(trade.action)}`}>{trade.action}</span>
                  <span className="text-gray-300 flex-1 truncate text-xs sm:text-sm">{trade.market}</span>
                  <span className="text-gray-500 w-10 sm:w-12 text-right flex-shrink-0 hidden sm:block text-xs sm:text-sm">{trade.odds}</span>
                  <span className="text-white font-semibold w-16 sm:w-20 text-right flex-shrink-0 text-xs sm:text-sm">{trade.amount}</span>
                </div>
              ))}
              {/* Cursor line */}
              <div className="flex items-center gap-3 py-2.5 px-4">
                <span className="text-primary font-bold text-sm">›</span>
                <span className="w-2 h-4 bg-primary/70" style={{ animation: 'terminal-cursor 1s step-end infinite' }} />
              </div>
            </div>
          </div>

          {/* Glow under terminal */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/[0.06] blur-3xl rounded-full" />
        </div>
      </Container>
    </section>
  );
}
