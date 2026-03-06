'use client';
import Container from './Container';

interface HeroProps { dict: any; }

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px]" />
      </div>

      <Container className="relative py-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/[0.08] border border-primary/20 mb-10">
          <div className="live-dot" />
          <span className="text-sm text-primary font-medium tracking-wide">{dict.hero.badge}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] font-heading font-extrabold text-white mb-6">
          {dict.hero.headline}{' '}
          <span className="gradient-text">{dict.hero.headlineHighlight}</span>
          <br />
          <span className="neon-text">{dict.hero.subheadline}</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light">
          {dict.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a href="#pricing" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-900 font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105">
            {dict.hero.cta1}
          </a>
          <a href="#pricing" className="px-8 py-4 border border-primary/30 text-primary font-semibold text-lg rounded-full hover:bg-primary/[0.08] hover:border-primary/50 transition-all duration-300">
            {dict.hero.cta2}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-16">
          {[
            { value: dict.hero.stats.volume, label: dict.hero.stats.volumeLabel },
            { value: dict.hero.stats.winrate, label: dict.hero.stats.winrateLabel },
            { value: dict.hero.stats.uptime, label: dict.hero.stats.uptimeLabel },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="card-base p-5 sm:p-6 neon-border">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-gray-600 font-mono ml-2">PolyPulse Terminal</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="live-dot" />
                <span className="text-xs text-secondary font-mono font-medium">LIVE</span>
              </div>
            </div>
            <div className="space-y-1 font-mono text-sm">
              {[
                { time: '15:42:03', action: 'BUY', market: 'Will BTC hit $100K by June?', odds: '67%', amount: '$2,450', color: 'text-secondary' },
                { time: '15:41:58', action: 'SELL', market: 'NBA Champion 2026 — OKC Thunder', odds: '35%', amount: '$1,200', color: 'text-red-400' },
                { time: '15:41:45', action: 'BUY', market: 'Next Iran Supreme Leader', odds: '56%', amount: '$3,100', color: 'text-secondary' },
                { time: '15:41:32', action: 'BUY', market: 'Dem Nominee 2028 — Newsom', odds: '25%', amount: '$890', color: 'text-secondary' },
                { time: '15:41:21', action: 'ALERT', market: 'Whale detected: $45K position opened', odds: '—', amount: '⚡', color: 'text-yellow-400' },
              ].map((trade, i) => (
                <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                  <span className="text-gray-600 w-20 flex-shrink-0">{trade.time}</span>
                  <span className={`font-bold w-14 flex-shrink-0 ${trade.color}`}>{trade.action}</span>
                  <span className="text-gray-300 flex-1 truncate">{trade.market}</span>
                  <span className="text-gray-500 w-12 text-right flex-shrink-0">{trade.odds}</span>
                  <span className="text-white font-semibold w-20 text-right flex-shrink-0">{trade.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-primary/15 blur-3xl rounded-full" />
        </div>
      </Container>
    </section>
  );
}
