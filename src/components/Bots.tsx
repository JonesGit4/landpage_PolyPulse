interface BotsProps { dict: any; }

export default function Bots({ dict }: BotsProps) {
  const bots = [
    { ...dict.bots.scalper, icon: '⚡', gradient: 'from-primary to-cyan-400' },
    { ...dict.bots.swing, icon: '📈', gradient: 'from-secondary to-emerald-400' },
    { ...dict.bots.alerts, icon: '🔔', gradient: 'from-yellow-400 to-orange-400' },
    { ...dict.bots.signals, icon: '💎', gradient: 'from-accent to-purple-400' },
  ];

  return (
    <section id="bots" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{dict.bots.title}</h2>
          <p className="text-gray-400 text-lg">{dict.bots.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bots.map((bot, i) => (
            <div key={i} className="group gradient-border rounded-2xl p-6 card-hover bg-dark-800 relative overflow-hidden">
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Badge */}
                <div className="absolute top-0 right-0">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${bot.gradient} text-dark-900`}>
                    {bot.badge}
                  </span>
                </div>

                <span className="text-4xl block mb-4">{bot.icon}</span>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{bot.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{bot.desc}</p>
                <a href="#pricing" className="text-sm text-primary hover:text-secondary transition-colors font-medium inline-flex items-center gap-1">
                  {dict.bots.learnMore} <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
