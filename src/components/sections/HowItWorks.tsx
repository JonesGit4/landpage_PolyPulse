'use client';
import { Bot, Settings, TrendingUp } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface HowItWorksProps { dict: Dictionary; }

const icons = [Bot, Settings, TrendingUp];

export default function HowItWorks({ dict }: HowItWorksProps) {
  const { ref, isVisible } = useInView();
  const steps = [
    { ...dict.howItWorks.step1, num: '01' },
    { ...dict.howItWorks.step2, num: '02' },
    { ...dict.howItWorks.step3, num: '03' },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container>
        <SectionHeader title={dict.howItWorks.title} subtitle={dict.howItWorks.subtitle} />
        <div ref={ref} className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />

          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className={`relative text-center group in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-dark-800 border border-white/[0.08] flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.1)] transition-all duration-500 relative z-10">
                  <Icon size={28} className="text-primary/80 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-primary/40 font-mono mb-2 block tracking-[0.2em]">{step.num}</span>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto font-light">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
