'use client';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface PerformanceProps { dict: Dictionary; }

const trades = [
  { market: 'BTC > $100K June 2026', dir: 'YES', entry: '0.62', exit: '0.71', pnl: '+$450', win: true },
  { market: 'Trump Approval > 50%', dir: 'NO', entry: '0.45', exit: '0.38', pnl: '+$280', win: true },
  { market: 'NBA MVP — Jokic', dir: 'YES', entry: '0.33', exit: '0.41', pnl: '+$320', win: true },
  { market: 'Fed Rate Cut July', dir: 'YES', entry: '0.71', exit: '0.68', pnl: '-$90', win: false },
  { market: 'ETH Merge V2 Q2', dir: 'YES', entry: '0.28', exit: '0.39', pnl: '+$550', win: true },
];

const chartPoints = [10, 18, 15, 32, 28, 45, 40, 58, 52, 68, 72, 85, 80, 95, 100];

export default function Performance({ dict }: PerformanceProps) {
  const { ref: metricsRef, isVisible: metricsVis } = useInView();
  const { ref: tableRef, isVisible: tableVis } = useInView();
  const d = dict.performance;

  const metrics = [
    { value: '89.2%', label: d.winRate, color: 'text-primary' },
    { value: '1,847', label: d.totalTrades, color: 'text-white' },
    { value: '+42.8%', label: d.avgROI, color: 'text-primary' },
    { value: '2.34', label: d.profitFactor, color: 'text-white' },
  ];

  return (
    <section id="performance" className="py-32 lg:py-40 relative">
      <Container>
        <SectionHeader
          label="LIVE PERFORMANCE"
          title={d.title}
          subtitle={d.subtitle}
        />

        {/* Metrics Grid */}
        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, i) => (
            <div key={i} className={`card text-center p-8 lg:p-10 in-view in-view-delay-${i + 1} ${metricsVis ? 'visible' : ''}`}>
              <div className={`text-4xl lg:text-5xl font-heading font-bold mb-3 ${m.color}`}>{m.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Trades Table */}
        <div ref={tableRef} className={`card overflow-hidden mb-16 in-view ${tableVis ? 'visible' : ''}`}>
          <div className="flex items-center justify-between px-6 lg:px-8 py-5 border-b border-white/[0.04]">
            <span className="text-sm font-heading font-semibold text-white">{d.recentTrades}</span>
            <div className="flex items-center gap-2">
              <div className="live-dot" />
              <span className="text-xs text-primary font-mono font-medium">LIVE</span>
            </div>
          </div>

          {/* Header */}
          <div className="grid grid-cols-5 px-6 lg:px-8 py-4 text-[11px] text-gray-500 uppercase tracking-[0.15em] border-b border-white/[0.03]">
            <span>{d.market}</span>
            <span className="text-center">{d.direction}</span>
            <span className="text-center">{d.entry}</span>
            <span className="text-center">{d.exit}</span>
            <span className="text-right">{d.pnl}</span>
          </div>

          {/* Rows */}
          {trades.map((t, i) => (
            <div key={i} className="grid grid-cols-5 px-6 lg:px-8 py-4 text-sm border-b border-white/[0.02] hover:bg-white/[0.015] transition-colors">
              <span className="text-gray-300 font-medium">{t.market}</span>
              <span className={`text-center font-bold ${t.dir === 'YES' ? 'text-primary' : 'text-red-400'}`}>{t.dir}</span>
              <span className="text-gray-400 text-center font-mono">{t.entry}</span>
              <span className="text-gray-400 text-center font-mono">{t.exit}</span>
              <span className={`text-right font-bold font-mono ${t.win ? 'text-primary' : 'text-red-400'}`}>{t.pnl}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={`card p-8 lg:p-10 in-view in-view-delay-1 ${tableVis ? 'visible' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-gray-500">Cumulative P&L — Last 30 Days</span>
            <span className="text-lg font-heading font-bold text-primary">+$12,450</span>
          </div>
          <svg viewBox="0 0 700 180" className="w-full h-auto" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(52,211,153,0.15)" />
                <stop offset="100%" stopColor="rgba(52,211,153,0)" />
              </linearGradient>
            </defs>
            <path
              d={`M0,${180 - chartPoints[0] * 1.7} ${chartPoints.map((p, i) => `L${(i / (chartPoints.length - 1)) * 700},${180 - p * 1.7}`).join(' ')} V180 H0 Z`}
              fill="url(#chartFill)"
            />
            <path
              d={`M0,${180 - chartPoints[0] * 1.7} ${chartPoints.map((p, i) => `L${(i / (chartPoints.length - 1)) * 700},${180 - p * 1.7}`).join(' ')}`}
              fill="none"
              stroke="#34D399"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
