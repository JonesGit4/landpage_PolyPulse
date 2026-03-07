'use client';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface CTAProps { dict: Dictionary; }

export default function CTA({ dict }: CTAProps) {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 lg:py-28 relative overflow-hidden">
      <div className="section-line mb-24" />

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/[0.04] rounded-full blur-[140px]" />
      </div>

      <Container>
        <div ref={ref} className="relative text-center max-w-2xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 in-view ${isVisible ? 'visible' : ''}`}>
            {dict.cta.title}
          </h2>
          <p className={`text-gray-400 text-lg mb-10 font-light leading-relaxed in-view in-view-delay-1 ${isVisible ? 'visible' : ''}`}>
            {dict.cta.subtitle}
          </p>
          <div className={`in-view in-view-delay-2 ${isVisible ? 'visible' : ''}`}>
            <Button href="#pricing" variant="primary" size="lg">
              {dict.cta.cta}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
