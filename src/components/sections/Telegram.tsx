'use client';
import { Check, Send } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface TelegramProps { dict: Dictionary; }

export default function Telegram({ dict }: TelegramProps) {
  const { ref, isVisible } = useInView();
  const features = [dict.telegram.feature1, dict.telegram.feature2, dict.telegram.feature3];

  return (
    <section className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container>
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className={`in-view ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-heading font-bold text-white mb-5 leading-tight">
              {dict.telegram.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              {dict.telegram.subtitle}
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={13} className="text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-300 font-light text-[15px]">{f}</span>
                </li>
              ))}
            </ul>
            <Button variant="telegram" size="lg" href="#">
              <Send size={18} />
              {dict.telegram.joinChannel}
            </Button>
          </div>

          {/* Right: Telegram mockup */}
          <div className={`flex justify-center in-view in-view-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="card p-0 w-full max-w-[340px] overflow-hidden">
              {/* Header */}
              <div className="bg-[#0088cc] px-4 py-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">PolyPulse Signals</div>
                  <div className="text-white/50 text-xs">1,247 subscribers</div>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-dark-900 p-3 space-y-2.5">
                <div className="bg-dark-800 rounded-xl p-3.5 border border-white/[0.04]">
                  <div className="text-[11px] text-[#0088cc] font-semibold mb-1.5">🔔 NEW SIGNAL</div>
                  <div className="text-sm text-white mb-1">📈 <strong>BUY</strong> — Will BTC hit $100K?</div>
                  <div className="text-xs text-gray-500">Entry: 0.62 | Target: 0.75 | Stop: 0.55</div>
                  <div className="text-xs text-secondary mt-1.5 font-medium">Confidence: ★★★★★</div>
                </div>
                <div className="bg-dark-800 rounded-xl p-3.5 border border-white/[0.04]">
                  <div className="text-[11px] text-amber-400 font-semibold mb-1.5">🐋 WHALE ALERT</div>
                  <div className="text-sm text-white">$45,000 position on &quot;NBA MVP&quot;</div>
                  <div className="text-xs text-gray-500 mt-1">Smart money — Jokic 33% → 38%</div>
                </div>
                <div className="bg-dark-800 rounded-xl p-3.5 border border-white/[0.04]">
                  <div className="text-[11px] text-secondary font-semibold mb-1.5">✅ TRADE CLOSED</div>
                  <div className="text-sm text-white">Iran Supreme Leader — <span className="text-secondary font-bold">+$320 (+18.2%)</span></div>
                  <div className="text-xs text-gray-500 mt-1">Held for 2h 14m</div>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-2.5 p-3 pt-0">
                <div className="bg-dark-800 rounded-lg px-3 py-2.5 text-center border border-white/[0.04]">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Today P&L</div>
                  <div className="text-sm font-heading font-bold text-secondary">+$1,240</div>
                </div>
                <div className="bg-dark-800 rounded-lg px-3 py-2.5 text-center border border-white/[0.04]">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Active Bots</div>
                  <div className="text-sm font-heading font-bold text-primary">3 running</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Re-export Zap for the telegram mockup icon
function Zap(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
