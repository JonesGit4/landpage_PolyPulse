'use client';
import { Zap, TrendingUp, Bell, Gem, ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface BotsProps { dict: Dictionary; }

const botConfig = [
  { key: 'scalper', icon: Zap, gradient: 'from-primary to-cyan-400', hoverGlow: 'hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)]' },
  { key: 'swing', icon: TrendingUp, gradient: 'from-secondary to-emerald-400', hoverGlow: 'hover:shadow-[0_8px_32px_rgba(52,211,153,0.12)]' },
  { key: 'alerts', icon: Bell, gradient: 'from-amber-400 to-orange-400', hoverGlow: 'hover:shadow-[0_8px_32px_rgba(251,191,36,0.12)]' },
  { key: 'signals', icon: Gem, gradient: 'from-accent to-purple-400', hoverGlow: 'hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]' },
] as const;

export default function Bots({ dict }: BotsProps) {
  const { ref, isVisible } = useInView();

  return (
    <section id="bots" className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container>
        <SectionHeader title={dict.bots.title} subtitle={dict.bots.subtitle} />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {botConfig.map((cfg, i) => {
            const Icon = cfg.icon;
            const bot = dict.bots[cfg.key];
            return (
              <div key={i} className={`group card card-glow p-6 cursor-pointer in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''} ${cfg.hoverGlow}`}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-dark-700 border border-white/[0.06] flex items-center justify-center group-hover:border-primary/20 transition-all">
                    <Icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" strokeWidth={1.8} />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${cfg.gradient} text-dark-950 uppercase tracking-wider`}>
                    {bot.badge}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{bot.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 font-light">{bot.desc}</p>
                <a href="#pricing" className="inline-flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary transition-colors font-medium group/link">
                  {dict.bots.learnMore}
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
