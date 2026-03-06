interface HowItWorksProps { dict: any; }

export default function HowItWorks({ dict }: HowItWorksProps) {
  const steps = [
    { icon: '🤖', ...dict.howItWorks.step1, num: '01' },
    { icon: '⚙️', ...dict.howItWorks.step2, num: '02' },
    { icon: '💰', ...dict.howItWorks.step3, num: '03' },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{dict.howItWorks.title}</h2>
          <p className="text-gray-400 text-lg">{dict.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-dark-700 border border-white/10 flex items-center justify-center text-3xl group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all relative z-10 bg-dark-900">
                {step.icon}
              </div>
              <span className="text-xs text-primary font-mono mb-2 block">{step.num}</span>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
