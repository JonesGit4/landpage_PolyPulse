'use client';
import { Send, CheckCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface TelegramProps { dict: Dictionary; }

export default function Telegram({ dict }: TelegramProps) {
  const { ref, isVisible } = useInView();
  const d = dict.telegram;

  return (
    <section className="py-32 lg:py-40 relative">
      <Container>
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <div className={`in-view ${isVisible ? 'visible' : ''}`}>
            <span className="section-label">TELEGRAM SIGNALS</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.1] mb-8">
              {d.title}
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              {d.subtitle}
            </p>

            <div className="space-y-5 mb-12">
              {[d.feature1, d.feature2, d.feature3].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-300 text-[15px]">{f}</span>
                </div>
              ))}
            </div>

            <Button href="#" variant="telegram" size="lg">
              <Send size={17} />
              {d.joinChannel}
            </Button>
          </div>

          {/* Right — Telegram Mockup */}
          <div className={`in-view in-view-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="card p-0 overflow-hidden max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Header */}
              <div className="bg-dark-700 px-6 py-5 flex items-center gap-4 border-b border-white/[0.04]">
                <div className="w-11 h-11 bg-primary/15 rounded-full flex items-center justify-center">
                  <Send className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">PolyPulse Signals</div>
                  <div className="text-gray-500 text-xs">1,247 subscribers</div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4">
                {/* Signal message */}
                <div className="bg-dark-700 rounded-xl p-5 border border-white/[0.04]">
                  <div className="text-amber-400 text-xs font-bold mb-2.5">🚨 NEW SIGNAL</div>
                  <div className="text-white font-semibold text-sm mb-1">📈 BUY — Will BTC hit $100K?</div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    Entry: 0.62 | Target: 0.75 | Stop: 0.55
                  </div>
                  <div className="text-gray-400 text-xs mt-2">Confidence: ★★★★★</div>
                </div>

                {/* Whale alert */}
                <div className="bg-dark-700 rounded-xl p-5 border border-white/[0.04]">
                  <div className="text-accent text-xs font-bold mb-2.5">🐋 WHALE ALERT</div>
                  <div className="text-white text-sm font-semibold mb-1">$45,000 position on &quot;NBA MVP&quot;</div>
                  <div className="text-gray-500 text-xs">Smart money — Jokic 33% → 38%</div>
                </div>

                {/* Trade closed */}
                <div className="bg-dark-700 rounded-xl p-5 border border-white/[0.04]">
                  <div className="text-primary text-xs font-bold mb-2.5">✅ TRADE CLOSED</div>
                  <div className="text-white text-sm font-semibold">
                    Iran Supreme Leader — <span className="text-primary">+$320 (+18.2%)</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">Held for 2h 14m</div>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="text-center bg-dark-800 rounded-xl py-4 border border-white/[0.04]">
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">TODAY P&L</div>
                    <div className="text-primary font-bold text-lg font-heading">+$1,240</div>
                  </div>
                  <div className="text-center bg-dark-800 rounded-xl py-4 border border-white/[0.04]">
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">ACTIVE BOTS</div>
                    <div className="text-white font-bold text-lg font-heading">3 running</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
