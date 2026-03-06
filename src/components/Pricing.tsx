'use client';
import { useState } from 'react';

interface PricingProps { dict: any; }

export default function Pricing({ dict }: PricingProps) {
  const [annual, setAnnual] = useState(false);
  const p = dict.pricing;
  const sym = p.currencySymbol;

  const tiers = [p.free, p.pro, p.premium, p.vip, p.elite];
  const tierColors = [
    'border-gray-700',
    'border-primary/50 shadow-lg shadow-primary/10',
    'border-accent/50 shadow-lg shadow-accent/10',
    'border-yellow-500/50 shadow-lg shadow-yellow-500/10',
    'border-white/20',
  ];
  const tierBg = [
    '',
    'bg-gradient-to-b from-primary/5 to-transparent',
    'bg-gradient-to-b from-accent/5 to-transparent',
    'bg-gradient-to-b from-yellow-500/5 to-transparent',
    'bg-gradient-to-b from-white/5 to-transparent',
  ];
  const tierCtaStyle = [
    'border border-gray-600 text-gray-300 hover:bg-white/5',
    'bg-gradient-to-r from-primary to-cyan-400 text-dark-900 font-bold hover:shadow-lg hover:shadow-primary/25',
    'bg-gradient-to-r from-accent to-purple-400 text-white font-bold hover:shadow-lg hover:shadow-accent/25',
    'bg-gradient-to-r from-yellow-500 to-orange-400 text-dark-900 font-bold hover:shadow-lg hover:shadow-yellow-500/25',
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
    <section id="pricing" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{p.title}</h2>
          <p className="text-gray-400 text-lg mb-8">{p.subtitle}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-dark-800 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${!annual ? 'bg-primary text-dark-900 font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${annual ? 'bg-primary text-dark-900 font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              {p.annual}
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">{p.annualSave}</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative rounded-2xl border p-6 ${tierColors[i]} ${tierBg[i]} transition-all hover:-translate-y-1`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-dark-900 text-xs font-bold px-3 py-1 rounded-full">⭐ Popular</span>
                </div>
              )}

              <div className="text-center mb-6">
                <span className="text-2xl mb-2 block">{tierIcons[i]}</span>
                <h3 className="text-lg font-heading font-bold text-white">{tier.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{tier.desc}</p>
                <div className="mt-4">
                  {tier.price !== 'Custom' && tier.price !== 'Sob consulta' ? (
                    <>
                      <span className="text-3xl font-heading font-bold text-white">{sym}{getPrice(tier)}</span>
                      <span className="text-gray-500 text-sm">{tier.period}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-heading font-bold gradient-text">{tier.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {tier.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2.5 rounded-full text-sm transition-all ${tierCtaStyle[i]}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-3">{p.acceptedPayments}</p>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            {p.currency === 'BRL' ? (
              <>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">💳 Pix</span>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">💳 Cartão</span>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">₿ Crypto</span>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">📱 Boleto</span>
              </>
            ) : (
              <>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">💳 Stripe</span>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">₿ Crypto (USDC)</span>
                <span className="text-sm bg-dark-800 px-3 py-1.5 rounded-lg border border-white/5">💳 Card</span>
              </>
            )}
          </div>
          <p className="text-xs text-gray-600 mt-3">🛡️ {p.guarantee}</p>
        </div>
      </div>
    </section>
  );
}
