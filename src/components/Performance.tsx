interface PerformanceProps { dict: any; }

export default function Performance({ dict }: PerformanceProps) {
  const metrics = [
    { value: '89.2%', label: dict.performance.winRate, color: 'text-secondary' },
    { value: '1,847', label: dict.performance.totalTrades, color: 'text-primary' },
    { value: '+42.8%', label: dict.performance.avgROI, color: 'text-secondary' },
    { value: '2.34', label: dict.performance.profitFactor, color: 'text-primary' },
  ];

  const trades = [
    { market: 'BTC > $100K June 2026', dir: 'YES', dirColor: 'text-secondary', entry: '0.62', exit: '0.71', pnl: '+$450', pnlColor: 'text-secondary' },
    { market: 'Trump Approval > 50%', dir: 'NO', dirColor: 'text-red-400', entry: '0.45', exit: '0.38', pnl: '+$280', pnlColor: 'text-secondary' },
    { market: 'NBA MVP — Jokic', dir: 'YES', dirColor: 'text-secondary', entry: '0.33', exit: '0.41', pnl: '+$320', pnlColor: 'text-secondary' },
    { market: 'Fed Rate Cut July', dir: 'YES', dirColor: 'text-secondary', entry: '0.71', exit: '0.68', pnl: '-$90', pnlColor: 'text-red-400' },
    { market: 'ETH Merge V2 Q2', dir: 'YES', dirColor: 'text-secondary', entry: '0.28', exit: '0.39', pnl: '+$550', pnlColor: 'text-secondary' },
  ];

  return (
    <section id="performance" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="live-dot" />
            <span className="text-sm text-secondary font-medium">LIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{dict.performance.title}</h2>
          <p className="text-gray-400 text-lg">{dict.performance.subtitle}</p>
        </div>

        {/* Metrics cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((m, i) => (
            <div key={i} className="bg-dark-800 rounded-xl border border-white/5 p-6 text-center neon-border">
              <div className={`text-3xl font-heading font-bold ${m.color}`}>{m.value}</div>
              <div className="text-sm text-gray-500 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Trades table */}
        <div className="bg-dark-800 rounded-2xl border border-white/10 overflow-hidden neon-border">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-heading font-semibold text-white">{dict.performance.recentTrades}</h3>
            <div className="flex items-center gap-1.5"><div className="live-dot" /><span className="text-xs text-secondary">LIVE</span></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 uppercase border-b border-white/5">
                  <th className="px-6 py-3 text-left">{dict.performance.market}</th>
                  <th className="px-4 py-3 text-center">{dict.performance.direction}</th>
                  <th className="px-4 py-3 text-right">{dict.performance.entry}</th>
                  <th className="px-4 py-3 text-right">{dict.performance.exit}</th>
                  <th className="px-6 py-3 text-right">{dict.performance.pnl}</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((t, i) => (
                  <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-3.5 text-sm text-gray-300">{t.market}</td>
                    <td className={`px-4 py-3.5 text-sm text-center font-bold ${t.dirColor}`}>{t.dir}</td>
                    <td className="px-4 py-3.5 text-sm text-gray-400 text-right font-mono">{t.entry}</td>
                    <td className="px-4 py-3.5 text-sm text-gray-400 text-right font-mono">{t.exit}</td>
                    <td className={`px-6 py-3.5 text-sm text-right font-bold font-mono ${t.pnlColor}`}>{t.pnl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart mockup placeholder */}
        <div className="mt-8 bg-dark-800 rounded-2xl border border-white/10 p-8 neon-border">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-400">Cumulative P&L — Last 30 Days</span>
            <span className="text-sm text-secondary font-bold">+$12,450</span>
          </div>
          {/* SVG chart mockup */}
          <svg viewBox="0 0 800 200" className="w-full h-40">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,180 Q50,170 100,160 T200,140 T300,120 T400,100 T500,80 T600,60 T700,40 T800,20" stroke="#00D4FF" strokeWidth="2" fill="none" />
            <path d="M0,180 Q50,170 100,160 T200,140 T300,120 T400,100 T500,80 T600,60 T700,40 T800,20 L800,200 L0,200 Z" fill="url(#chartGrad)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
