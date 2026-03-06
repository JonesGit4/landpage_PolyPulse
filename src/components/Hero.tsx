'use client';

interface HeroProps { dict: any; }

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <div className="live-dot" />
          <span className="text-sm text-primary font-medium">{dict.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 animate-slide-up">
          {dict.hero.headline}{' '}
          <span className="gradient-text">{dict.hero.headlineHighlight}</span>
          <br />
          <span className="neon-text text-white">{dict.hero.subheadline}</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in">
          {dict.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
          <a href="#pricing" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark-900 font-bold text-lg rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105">
            {dict.hero.cta1}
          </a>
          <a href="#pricing" className="px-8 py-4 border border-primary/30 text-primary font-semibold text-lg rounded-full hover:bg-primary/10 transition-all">
            {dict.hero.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in">
          {[
            { value: dict.hero.stats.volume, label: dict.hero.stats.volumeLabel },
            { value: dict.hero.stats.winrate, label: dict.hero.stats.winrateLabel },
            { value: dict.hero.stats.uptime, label: dict.hero.stats.uptimeLabel },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero mockup */}
        <div className="mt-16 relative max-w-4xl mx-auto animate-slide-up">
          <div className="bg-dark-800 rounded-2xl border border-white/10 p-6 neon-border">
            {/* Fake terminal header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-xs text-gray-500 ml-2">PolyPulse Terminal</span>
              <div className="ml-auto flex items-center gap-1.5"><div className="live-dot" /><span className="text-xs text-secondary">LIVE</span></div>
            </div>
            {/* Fake live feed */}
            <div className="space-y-2 font-mono text-sm">
              {[
                { time: '15:42:03', action: 'BUY', market: 'Will BTC hit $100K by June?', odds: '67%', amount: '$2,450', color: 'text-secondary' },
                { time: '15:41:58', action: 'SELL', market: 'NBA Champion 2026 — OKC Thunder', odds: '35%', amount: '$1,200', color: 'text-red-400' },
                { time: '15:41:45', action: 'BUY', market: 'Next Iran Supreme Leader', odds: '56%', amount: '$3,100', color: 'text-secondary' },
                { time: '15:41:32', action: 'BUY', market: 'Dem Nominee 2028 — Newsom', odds: '25%', amount: '$890', color: 'text-secondary' },
                { time: '15:41:21', action: 'ALERT', market: 'Whale detected: $45K position opened', odds: '—', amount: '⚡', color: 'text-yellow-400' },
              ].map((trade, i) => (
                <div key={i} className="flex items-center gap-3 py-1.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <span className="text-gray-600 w-20">{trade.time}</span>
                  <span className={`font-bold w-12 ${trade.color}`}>{trade.action}</span>
                  <span className="text-gray-300 flex-1 truncate">{trade.market}</span>
                  <span className="text-gray-500 w-12 text-right">{trade.odds}</span>
                  <span className="text-white font-medium w-20 text-right">{trade.amount}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Glow effect under terminal */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
