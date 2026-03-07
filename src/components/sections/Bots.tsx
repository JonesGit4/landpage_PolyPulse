'use client';
import { Zap, TrendingUp, Bell, Sparkles } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface BotsProps { dict: Dictionary; }

const botIcons = [Zap, TrendingUp, Bell, Sparkles];
const badgeColors = [
  'bg-primary/10 text-primary border-primary/20',
  'bg-accent/10 text-accent border-accent/20',
  'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'bg-purple-500/10 text-purple-400 border-purple-500/20',
];

export default function Bots({ dict }: BotsProps) {
  const { ref, isVisible } = useInView();
  const bots = [dict.bots.bot1, dict.bots.bot2, dict.bots.bot3, dict.bots.bot4];

  return (
    <section id="bots" className="py-32 lg:py-40 relative">
      <Container>
        <SectionHeader
          label={dict.bots.title}
          title={dict.bots.subtitle}
        />
        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {bots.map((bot, i) => {
            const Icon = botIcons[i];
            return (
              <div key={i} className={`card card-glow p-8 lg:p-10 group in-view in-view-delay-${(i % 2) + 1} ${isVisible ? 'visible' : ''}`}>
                {/* Top bar with icon and badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-3 py-1.5 rounded-full border ${badgeColors[i]}`}>
                    {bot.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{bot.name}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed mb-8 font-light">{bot.desc}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {bot.features?.map((feature: string, fi: number) => (
                    <div key={fi} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <a href="#pricing" className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  {bot.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
