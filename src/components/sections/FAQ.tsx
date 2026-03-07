'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface FAQProps { dict: Dictionary; }

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useInView();
  const faqs = [dict.faq.q1, dict.faq.q2, dict.faq.q3, dict.faq.q4, dict.faq.q5, dict.faq.q6];

  return (
    <section id="faq" className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container narrow>
        <SectionHeader title={dict.faq.title} />
        <div ref={ref} className="space-y-2.5">
          {faqs.map((faq, i) => (
            <div key={i} className={`card overflow-hidden in-view in-view-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 lg:px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.015] transition-colors cursor-pointer"
              >
                <span className="text-white font-medium text-[15px] pr-6">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 lg:px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
