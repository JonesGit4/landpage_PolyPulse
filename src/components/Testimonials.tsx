import Container from './Container';

interface TestimonialsProps { dict: any; }

export default function Testimonials({ dict }: TestimonialsProps) {
  const testimonials = [
    { ...dict.testimonials.t1, avatar: '🧑‍💻', rating: 5 },
    { ...dict.testimonials.t2, avatar: '👩‍💼', rating: 5 },
    { ...dict.testimonials.t3, avatar: '👨‍🔬', rating: 5 },
  ];

  return (
    <section className="py-28 relative">
      <div className="section-divider mb-28" />
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{dict.testimonials.title}</h2>
          <p className="text-gray-400 text-lg font-light">{dict.testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-base card-shine p-7 group">
              <div className="relative z-10">
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="#FBBF24"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-7 font-light">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-dark-700 border border-white/5 flex items-center justify-center text-lg group-hover:border-primary/30 transition-colors">{t.avatar}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {['98% Uptime', '$2M+ Volume', '24/7 Support', '500+ Traders'].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />{stat}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
