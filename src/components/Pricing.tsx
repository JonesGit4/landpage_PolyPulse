'use client';
import { useState } from 'react';

interface PricingProps { dict: any; }

export default function Pricing({ dict }: PricingProps) {
  const [annual, setAnnual] = useState(false);
  const p = dict.pricing;
  const sym = p.currencySymbol;

  const tiers = [p.free, p.pro, p.premium, p.vip, p.elite];
  const tierGlow = [
    'hover:border-gray-500/30 hover:shadow-[0_10px_40px_rgba(100,100,100,0.1)]',
    'hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,212,255,0.15)]',
    'hover:border-accent/40 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]',
    'hover:border-yellow-500/40 hover:shadow-[0_10px_40px_rgba(234,179,8,0.15)]',
    'hover:border-white/20 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]',
  ];
  const tierCtaStyle = [
    'border border-gray-600 text-gray-300 hover:bg-white/5',
    'bg-gradient-to-r from-primary to-cyan-400 text-dark-900 font-bold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]',
    'bg-gradient-to-r from-accent to-purple-400 text-white font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]',
    'bg-gradient-to-r from-yellow-500 to-orange-400 text-dark-900 font-bold hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]',
    'border border-white/20 text-white hover:bg-white/5',
  ];
  const tierIcons = ['🌟', '🚀', '💎', '👑', '🏛️'];

  function getPrice(tier: any): string {
    if (tier.price === '0' || tier.price === 'Custom' || tier.price === 'Sob consulta') return tier.price;
    const price = parseInt(tier.price);
    if (annual) return String(Math.round(price * 0.8));
    return tier.price;
  }

  return (
    <section id="pricing" className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{p.title}</h2>
          <p className="text-gray-400 text-lg mb-10 font-light">{p.subtitle}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 bg-dark-800 rounded-full p-1 border border-white/[0.08]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${!annual ? 'bg-primary text-dark-900 font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]' : 'text-gray-400 hover:text-white'}`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${annual ? 'bg-primary text-dark-900 font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]' : 'text-gray-400 hover:text-white'}`}
            >
              {p.annual}
              <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-bold">{p.annualSave}</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((tier, i) => (
            <div key={i} className={`group relative card-base card-shine p-6 transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] ${tierGlow[i]}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-primary text-dark-900 text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(0,212,255,0.3)]">⭐ Popular</span>
                </div>
              )}

              <div className="relative z-10 text-center">
                <span className="text-2xl mb-3 block">{tierIcons[i]}</span>
                <h3 className="text-lg font-heading font-bold text-white">{tier.name}</h3>
                <p className="text-[11px] text-gray-500 mt-1 mb-5 uppercase tracking-wider">{tier.desc}</p>

                <div className="mb-6">
                  {tier.price !== 'Custom' && tier.price !== 'Sob consulta' ? (
                    <>
                      <span className="text-4xl font-heading font-extrabold text-white">{sym}{getPrice(tier)}</span>
                      <span className="text-gray-500 text-sm ml-0.5">{tier.period}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-heading font-bold gradient-text">{tier.price}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-7 text-left">
                  {tier.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13px] text-gray-400">
                      <span className="text-primary mt-0.5 flex-shrink-0 text-xs">✓</span>
                      <span className="font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full text-sm transition-all duration-300 ${tierCtaStyle[i]}`}>
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{p.acceptedPayments}</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {p.currency === 'BRL' ? (
              <>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">💳 Pix</span>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">💳 Cartão</span>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">₿ Crypto</span>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">📱 Boleto</span>
              </>
            ) : (
              <>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">💳 Stripe</span>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">₿ Crypto (USDC)</span>
                <span className="text-xs bg-dark-800 px-4 py-2 rounded-lg border border-white/[0.06] text-gray-400">💳 Card</span>
              </>
            )}
          </div>
          <p className="text-xs text-gray-600 mt-4">🛡️ {p.guarantee}</p>
        </div>
      </div>
    </section>
  );
}
