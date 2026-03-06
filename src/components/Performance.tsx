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
    <section id="performance" className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="live-dot" />
            <span className="text-sm text-secondary font-mono font-medium tracking-wide">LIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{dict.performance.title}</h2>
          <p className="text-gray-400 text-lg font-light">{dict.performance.subtitle}</p>
        </div>

        {/* Metrics cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="card-base card-shine p-6 text-center">
              <div className={`text-3xl lg:text-4xl font-heading font-bold ${m.color} mb-1`}>{m.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Trades table */}
        <div className="card-base overflow-hidden neon-border mb-8">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-heading font-semibold text-white text-sm">{dict.performance.recentTrades}</h3>
            <div className="flex items-center gap-1.5"><div className="live-dot" /><span className="text-xs text-secondary font-mono">LIVE</span></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[11px] text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-6 py-3 text-left font-medium">{dict.performance.market}</th>
                  <th className="px-4 py-3 text-center font-medium">{dict.performance.direction}</th>
                  <th className="px-4 py-3 text-right font-medium">{dict.performance.entry}</th>
                  <th className="px-4 py-3 text-right font-medium">{dict.performance.exit}</th>
                  <th className="px-6 py-3 text-right font-medium">{dict.performance.pnl}</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((t, i) => (
                  <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">{t.market}</td>
                    <td className={`px-4 py-4 text-sm text-center font-bold ${t.dirColor}`}>{t.dir}</td>
                    <td className="px-4 py-4 text-sm text-gray-400 text-right font-mono">{t.entry}</td>
                    <td className="px-4 py-4 text-sm text-gray-400 text-right font-mono">{t.exit}</td>
                    <td className={`px-6 py-4 text-sm text-right font-bold font-mono ${t.pnlColor}`}>{t.pnl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart */}
        <div className="card-base p-6 sm:p-8 neon-border">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-400 font-light">Cumulative P&amp;L — Last 30 Days</span>
            <span className="text-sm text-secondary font-heading font-bold">+$12,450</span>
          </div>
          <svg viewBox="0 0 800 180" className="w-full h-36">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,160 C40,155 80,150 120,140 S200,120 240,110 S320,95 360,85 S440,70 480,60 S560,50 600,40 S680,28 720,22 S780,15 800,10" stroke="#00D4FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M0,160 C40,155 80,150 120,140 S200,120 240,110 S320,95 360,85 S440,70 480,60 S560,50 600,40 S680,28 720,22 S780,15 800,10 L800,180 L0,180 Z" fill="url(#chartGrad)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
