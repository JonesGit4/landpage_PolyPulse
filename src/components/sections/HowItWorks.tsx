'use client';
import { Bot, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface HowItWorksProps { dict: Dictionary; }

const icons = [Bot, Settings, TrendingUp];

export default function HowItWorks({ dict }: HowItWorksProps) {
  const { ref, isVisible } = useInView();
  const steps = [
    { ...dict.howItWorks.step1, num: '01', label: 'CHOOSE' },
    { ...dict.howItWorks.step2, num: '02', label: 'DEPLOY' },
    { ...dict.howItWorks.step3, num: '03', label: 'TRADE' },
  ];

  return (
    <section id="how-it-works" className="py-32 lg:py-40 relative">
      <Container>
        <SectionHeader
          label={dict.howItWorks.title}
          title={dict.howItWorks.subtitle}
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className={`card card-glow p-8 lg:p-10 group in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-heading font-bold gradient-text-green">{step.num}</span>
                  <span className="text-[11px] font-mono font-semibold text-primary tracking-[0.15em] uppercase">{step.label}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed font-light">{step.desc}</p>
                <div className="mt-6 text-primary/40 group-hover:text-primary/60 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
