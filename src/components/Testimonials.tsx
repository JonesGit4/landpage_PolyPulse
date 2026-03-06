interface TestimonialsProps { dict: any; }

export default function Testimonials({ dict }: TestimonialsProps) {
  const testimonials = [
    { ...dict.testimonials.t1, avatar: '🧑‍💻', rating: 5 },
    { ...dict.testimonials.t2, avatar: '👩‍💼', rating: 5 },
    { ...dict.testimonials.t3, avatar: '👨‍🔬', rating: 5 },
  ];

  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{dict.testimonials.title}</h2>
          <p className="text-gray-400 text-lg">{dict.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-dark-800 rounded-2xl border border-white/5 p-6 card-hover">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-lg">{t.avatar}</div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-600">
          {['98% Uptime', '$2M+ Volume', '24/7 Support', '500+ Traders'].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
