'use client';
import { useState } from 'react';

interface FAQProps { dict: any; }

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [dict.faq.q1, dict.faq.q2, dict.faq.q3, dict.faq.q4, dict.faq.q5, dict.faq.q6];

  return (
    <section id="faq" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{dict.faq.title}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-dark-800 rounded-xl border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <svg
                  width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className={`text-primary flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
