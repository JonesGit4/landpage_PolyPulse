'use client';
import { Star } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface TestimonialsProps { dict: Dictionary; }

const avatarGradients = [
  'from-primary to-cyan-400',
  'from-secondary to-emerald-400',
  'from-accent to-purple-400',
];

export default function Testimonials({ dict }: TestimonialsProps) {
  const { ref, isVisible } = useInView();
  const testimonials = [
    { ...dict.testimonials.t1, initials: 'AR' },
    { ...dict.testimonials.t2, initials: 'SM' },
    { ...dict.testimonials.t3, initials: 'DK' },
  ];

  return (
    <section className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container>
        <SectionHeader title={dict.testimonials.title} subtitle={dict.testimonials.subtitle} />
        <div ref={ref} className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className={`card card-glow p-6 lg:p-7 group in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-7 font-light">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[i]} flex items-center justify-center text-xs font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {['98% Uptime', '$2M+ Volume', '24/7 Support', '500+ Traders'].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              {stat}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
