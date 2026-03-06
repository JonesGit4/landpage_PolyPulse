'use client';
import { useState } from 'react';
import Container from './Container';

interface FAQProps { dict: any; }

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [dict.faq.q1, dict.faq.q2, dict.faq.q3, dict.faq.q4, dict.faq.q5, dict.faq.q6];

  return (
    <section id="faq" className="py-28 relative">
      <div className="section-divider mb-28" />
      <Container narrow>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{dict.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors">
                <span className="text-white font-medium text-[15px] pr-6">{faq.q}</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5"><p className="text-gray-400 text-sm leading-relaxed font-light">{faq.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
