'use client';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface TestimonialsProps { dict: Dictionary; }

const avatarColors = ['bg-primary/15 text-primary', 'bg-accent/15 text-accent', 'bg-amber-500/15 text-amber-400'];

export default function Testimonials({ dict }: TestimonialsProps) {
  const { ref, isVisible } = useInView();
  const d = dict.testimonials;
  const testimonials = [d.t1, d.t2, d.t3];

  return (
    <section className="py-32 lg:py-40 relative">
      <Container>
        <SectionHeader
          label="COMMUNITY"
          title={d.title}
          subtitle={d.subtitle}
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className={`card card-glow p-8 lg:p-10 in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              {/* Stars */}
              <div className="text-amber-400 text-lg mb-6">★★★★★</div>

              {/* Quote */}
              <p className="text-gray-300 text-[15px] leading-relaxed mb-8 font-light">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ${avatarColors[i]}`}>
                  {t.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className={`flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm text-gray-500 in-view ${isVisible ? 'visible' : ''}`}>
          {['98% Uptime', '$2M+ Volume', '24/7 Support', '500+ Traders'].map((stat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span>{stat}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
