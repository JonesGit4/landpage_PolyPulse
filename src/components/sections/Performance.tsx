'use client';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface PerformanceProps { dict: Dictionary; }

export default function Performance({ dict }: PerformanceProps) {
  const { ref, isVisible } = useInView();

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
    <section id="performance" className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container>
        <SectionHeader
          title={dict.performance.title}
          subtitle={dict.performance.subtitle}
          badge={{ text: 'LIVE', live: true }}
        />

        {/* Metrics */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className={`card p-5 lg:p-6 text-center in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className={`text-2xl lg:text-3xl font-heading font-bold ${m.color} mb-1`}>{m.value}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Trades table */}
        <div className={`card overflow-hidden mb-8 in-view in-view-delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className="px-5 lg:px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
            <h3 className="font-heading font-semibold text-white text-sm">{dict.performance.recentTrades}</h3>
            <div className="flex items-center gap-1.5">
              <div className="live-dot" />
              <span className="text-xs text-secondary font-mono font-medium">LIVE</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="text-[11px] text-gray-500 uppercase tracking-widest border-b border-white/[0.04]">
                  <th className="px-5 lg:px-6 py-3 text-left font-medium">{dict.performance.market}</th>
                  <th className="px-4 py-3 text-center font-medium">{dict.performance.direction}</th>
                  <th className="px-4 py-3 text-right font-medium">{dict.performance.entry}</th>
                  <th className="px-4 py-3 text-right font-medium">{dict.performance.exit}</th>
                  <th className="px-5 lg:px-6 py-3 text-right font-medium">{dict.performance.pnl}</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((t, i) => (
                  <tr key={i} className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.015] transition-colors">
                    <td className="px-5 lg:px-6 py-3.5 text-sm text-gray-300 font-medium">{t.market}</td>
                    <td className={`px-4 py-3.5 text-sm text-center font-bold ${t.dirColor}`}>{t.dir}</td>
                    <td className="px-4 py-3.5 text-sm text-gray-400 text-right font-mono">{t.entry}</td>
                    <td className="px-4 py-3.5 text-sm text-gray-400 text-right font-mono">{t.exit}</td>
                    <td className={`px-5 lg:px-6 py-3.5 text-sm text-right font-bold font-mono ${t.pnlColor}`}>{t.pnl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart */}
        <div className={`card p-5 lg:p-7 in-view in-view-delay-3 ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-400 font-light">Cumulative P&L — Last 30 Days</span>
            <span className="text-sm text-secondary font-heading font-bold">+$12,450</span>
          </div>
          <svg viewBox="0 0 800 160" className="w-full h-28 sm:h-32">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,140 C50,135 100,130 150,120 S250,105 300,95 S400,80 450,68 S540,55 600,44 S700,30 740,24 S790,16 800,12" stroke="#38BDF8" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M0,140 C50,135 100,130 150,120 S250,105 300,95 S400,80 450,68 S540,55 600,44 S700,30 740,24 S790,16 800,12 L800,160 L0,160 Z" fill="url(#chartGrad)" />
          </svg>
        </div>
      </Container>
    </section>
  );
}
