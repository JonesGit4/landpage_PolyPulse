'use client';
import { useState } from 'react';
import { Diamond, Zap, Shield, Crown } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import type { Dictionary, Locale } from '@/i18n/types';

interface PricingProps { dict: Dictionary; locale: Locale; }

const tierIcons = [Diamond, Zap, Shield, Crown];

export default function Pricing({ dict, locale }: PricingProps) {
  const [annual, setAnnual] = useState(false);
  const { ref, isVisible } = useInView();
  const { ref: eliteRef, isVisible: eliteVis } = useInView();
  const d = dict.pricing;
  const tiers = [d.free, d.pro, d.premium];

  return (
    <section id="pricing" className="py-32 lg:py-40 relative">
      <Container>
        <SectionHeader
          label="PRICING"
          title={d.title}
          subtitle={d.subtitle}
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>{d.monthly}</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`w-14 h-7 rounded-full relative cursor-pointer transition-colors duration-300 ${annual ? 'bg-primary' : 'bg-dark-600'}`}
          >
            <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${annual ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>{d.annual}</span>
          {annual && <span className="text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full">{d.annualSave}</span>}
        </div>

        {/* Tier Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {tiers.map((tier, i) => {
            const Icon = tierIcons[i];
            const isPopular = tier.popular;
            return (
              <div
                key={i}
                className={`card card-glow p-8 lg:p-10 flex flex-col text-center items-center in-view in-view-delay-${i + 1} ${isVisible ? 'visible' : ''} ${
                  isPopular ? 'border-primary/25 ring-1 ring-primary/10' : ''
                }`}
              >
                {isPopular && (
                  <div className="text-[11px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                    ⚡ POPULAR
                  </div>
                )}

                <Icon className="text-primary mb-6" size={28} />
                <h3 className="text-2xl font-heading font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-6">{tier.desc}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl lg:text-5xl font-heading font-bold text-white">{tier.price}</span>
                  <span className="text-gray-500 text-sm">/{tier.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-10 flex-1 text-left self-stretch">
                  {tier.features.map((f: string, fi: number) => (
                    <div key={fi} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <Button
                  href="#"
                  variant={isPopular ? 'primary' : i === 2 ? 'secondary' : 'ghost'}
                  size="lg"
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Elite tier */}
        <div ref={eliteRef} className={`card p-8 lg:p-10 mb-20 in-view ${eliteVis ? 'visible' : ''}`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="text-amber-400" size={24} />
                <h3 className="text-2xl font-heading font-bold text-white">{d.elite.name}</h3>
              </div>
              <p className="text-gray-400 text-[15px] mb-4 font-light">{d.elite.desc}</p>
              <div className="text-3xl font-heading font-bold gradient-text mb-1">{d.elite.price}</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 flex-1">
              {d.elite.features.map((f: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex-shrink-0">
              <Button href="#" variant="outline" size="lg">{d.elite.cta}</Button>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="text-center space-y-3">
          <div className="text-xs text-gray-500 uppercase tracking-[0.15em] mb-3">{d.acceptedPayments}</div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            {locale === 'pt-br' ? (
              <>
                <span>💳 Pix</span>
                <span>💳 Boleto</span>
                <span>💳 Cartão</span>
              </>
            ) : (
              <>
                <span>💳 Stripe</span>
                <span>₿ Crypto (USDC)</span>
                <span>💳 Card</span>
              </>
            )}
          </div>
          <p className="text-xs text-gray-500">🛡 {d.guarantee}</p>
        </div>
      </Container>
    </section>
  );
}
