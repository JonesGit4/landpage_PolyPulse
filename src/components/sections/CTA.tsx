'use client';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface CTAProps { dict: Dictionary; }

export default function CTA({ dict }: CTAProps) {
  const { ref, isVisible } = useInView();
  const d = dict.cta;

  return (
    <section className="pt-16 pb-32 lg:pt-20 lg:pb-40 relative border-t border-white/[0.03]">
      <Container narrow>
        <div ref={ref} className="text-center">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6 in-view ${isVisible ? 'visible' : ''}`}>
            {d.title}
          </h2>
          <p className={`text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed in-view in-view-delay-1 ${isVisible ? 'visible' : ''}`}>
            {d.subtitle}
          </p>
          <div className={`in-view in-view-delay-2 ${isVisible ? 'visible' : ''}`}>
            <Button href="#pricing" variant="primary" size="lg">
              {d.cta}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
