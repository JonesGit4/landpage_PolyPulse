interface HowItWorksProps { dict: any; }

export default function HowItWorks({ dict }: HowItWorksProps) {
  const steps = [
    { icon: '🤖', ...dict.howItWorks.step1, num: '01' },
    { icon: '⚙️', ...dict.howItWorks.step2, num: '02' },
    { icon: '💰', ...dict.howItWorks.step3, num: '03' },
  ];

  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{dict.howItWorks.title}</h2>
          <p className="text-gray-400 text-lg font-light">{dict.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-dark-800 border border-white/[0.08] flex items-center justify-center text-3xl group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500 relative z-10 bg-dark-900">
                {step.icon}
              </div>
              <span className="text-xs text-primary/60 font-mono mb-2 block tracking-widest">{step.num}</span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
