'use client';
import { useState } from 'react';
import { Check, Crown } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import type { Dictionary, PricingTier } from '@/i18n/types';

interface PricingProps { dict: Dictionary; }

const tierStyles = [
  { border: 'hover:border-gray-500/20', ctaCls: 'border border-white/10 text-gray-300 hover:bg-white/5', icon: '✦' },
  { border: 'hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.1)]', ctaCls: 'bg-gradient-to-r from-primary to-sky-400 text-dark-950 font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]', icon: '⚡' },
  { border: 'hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(167,139,250,0.1)]', ctaCls: 'bg-gradient-to-r from-accent to-purple-400 text-white font-bold hover:shadow-[0_0_20px_rgba(167,139,250,0.25)]', icon: '💎' },
  { border: 'hover:border-amber-500/30 hover:shadow-[0_8px_32px_rgba(245,158,11,0.1)]', ctaCls: 'bg-gradient-to-r from-amber-500 to-orange-400 text-dark-950 font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]', icon: '👑' },
];

export default function Pricing({ dict }: PricingProps) {
  const [annual, setAnnual] = useState(false);
  const { ref, isVisible } = useInView();
  const p = dict.pricing;
  const sym = p.currencySymbol;
  const tiers: PricingTier[] = [p.free, p.pro, p.premium, p.elite];

  function getPrice(tier: PricingTier): string {
    if (tier.price === '0' || tier.price === 'Custom' || tier.price === 'Sob consulta') return tier.price;
    const price = parseInt(tier.price);
    return annual ? String(Math.round(price * 0.8)) : tier.price;
  }

  return (
    <section id="pricing" className="py-24 lg:py-28 relative">
      <div className="section-line mb-24" />
      <Container>
        <SectionHeader title={p.title} subtitle={p.subtitle} />

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 bg-dark-800 rounded-full p-1 border border-white/[0.06]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${!annual ? 'bg-primary text-dark-950 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              {p.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${annual ? 'bg-primary text-dark-950 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              {p.annual}
              <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-bold">{p.annualSave}</span>
            </button>
          </div>
        </div>

        {/* Plans grid: 3 top + 1 bottom (Elite full width) */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {tiers.slice(0, 3).map((tier, i) => (
            <div key={i} className={`group relative card p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 ${tierStyles[i].border} in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-dark-950 text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                    ⭐ Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <span className="text-xl mb-3 block">{tierStyles[i].icon}</span>
                <h3 className="text-xl font-heading font-bold text-white">{tier.name}</h3>
                <p className="text-[11px] text-gray-500 mt-1 mb-5 uppercase tracking-wider">{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-extrabold text-white">{sym}{getPrice(tier)}</span>
                  <span className="text-gray-500 text-sm ml-0.5">{tier.period}</span>
                </div>
                <ul className="space-y-2.5 mb-7 text-left">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-light">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl text-sm transition-all duration-300 cursor-pointer ${tierStyles[i].ctaCls}`}>
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Elite tier — full width, horizontal layout */}
        <div className={`group card p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${tierStyles[3].border} in-view in-view-delay-4 ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                <Crown size={22} className="text-amber-400" />
                <h3 className="text-xl font-heading font-bold text-white">{tiers[3].name}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4 font-light">{tiers[3].desc}</p>
              <div className="mb-4">
                {tiers[3].price !== 'Custom' && tiers[3].price !== 'Sob consulta' ? (
                  <>
                    <span className="text-3xl font-heading font-extrabold text-white">{sym}{getPrice(tiers[3])}</span>
                    <span className="text-gray-500 text-sm ml-0.5">{tiers[3].period}</span>
                  </>
                ) : (
                  <span className="text-2xl font-heading font-bold gradient-text">{tiers[3].price}</span>
                )}
              </div>
              <button className={`px-8 py-3 rounded-xl text-sm transition-all duration-300 cursor-pointer ${tierStyles[3].ctaCls}`}>
                {tiers[3].cta}
              </button>
            </div>
            <div className="flex-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tiers[3].features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <Check size={14} className="text-amber-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="font-light">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{p.acceptedPayments}</p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
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
      </Container>
    </section>
  );
}
