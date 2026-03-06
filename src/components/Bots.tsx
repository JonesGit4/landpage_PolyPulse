interface BotsProps { dict: any; }

export default function Bots({ dict }: BotsProps) {
  const bots = [
    { ...dict.bots.scalper, icon: '⚡', gradient: 'from-primary to-cyan-400', glow: 'group-hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]' },
    { ...dict.bots.swing, icon: '📈', gradient: 'from-secondary to-emerald-400', glow: 'group-hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]' },
    { ...dict.bots.alerts, icon: '🔔', gradient: 'from-yellow-400 to-orange-400', glow: 'group-hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]' },
    { ...dict.bots.signals, icon: '💎', gradient: 'from-accent to-purple-400', glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]' },
  ];

  return (
    <section id="bots" className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{dict.bots.title}</h2>
          <p className="text-gray-400 text-lg font-light">{dict.bots.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bots.map((bot, i) => (
            <div key={i} className={`group card-base card-shine p-6 ${bot.glow} cursor-pointer`}>
              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{bot.icon}</span>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${bot.gradient} text-dark-900 uppercase tracking-wider`}>
                    {bot.badge}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-2">{bot.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 font-light">{bot.desc}</p>

                <a href="#pricing" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-secondary transition-colors duration-300 font-medium group/link">
                  {dict.bots.learnMore}
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
