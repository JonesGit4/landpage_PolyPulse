'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary } from '@/i18n/types';

interface FAQProps { dict: Dictionary; }

export default function FAQ({ dict }: FAQProps) {
  const [open, setOpen] = useState(0);
  const { ref, isVisible } = useInView();
  const d = dict.faq;
  const items = [d.q1, d.q2, d.q3, d.q4, d.q5, d.q6];

  return (
    <section id="faq" className="py-32 lg:py-40 relative">
      <Container narrow>
        <SectionHeader
          label="FAQ"
          title={d.title}
        />
        <div ref={ref} className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`card overflow-hidden transition-all duration-300 in-view in-view-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''} ${
                open === i ? 'border-primary/15' : ''
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left cursor-pointer group"
              >
                <span className="text-[15px] font-semibold text-white group-hover:text-primary transition-colors">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 group-hover:text-primary transition-all duration-300 flex-shrink-0 ml-4 ${
                    open === i ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-60' : 'max-h-0'}`}>
                <p className="px-7 pb-6 text-gray-400 text-sm leading-relaxed font-light">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
