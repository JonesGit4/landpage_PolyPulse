export interface NavDict {
  features: string;
  bots: string;
  performance: string;
  pricing: string;
  faq: string;
  getStarted: string;
  language: string;
}

export interface HeroStats {
  volume: string;
  volumeLabel: string;
  winrate: string;
  winrateLabel: string;
  uptime: string;
  uptimeLabel: string;
}

export interface HeroDict {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  description: string;
  cta1: string;
  cta2: string;
  stats: HeroStats;
  terminal: {
    title: string;
    trades: { time: string; action: string; market: string; odds: string; amount: string }[];
  };
}

export interface StepDict {
  title: string;
  desc: string;
}

export interface HowItWorksDict {
  title: string;
  subtitle: string;
  step1: StepDict;
  step2: StepDict;
  step3: StepDict;
}

export interface BotDict {
  name: string;
  desc: string;
  badge: string;
}

export interface BotsDict {
  title: string;
  subtitle: string;
  scalper: BotDict;
  swing: BotDict;
  alerts: BotDict;
  signals: BotDict;
  learnMore: string;
}

export interface PerformanceDict {
  title: string;
  subtitle: string;
  winRate: string;
  totalTrades: string;
  avgROI: string;
  profitFactor: string;
  recentTrades: string;
  market: string;
  direction: string;
  entry: string;
  exit: string;
  pnl: string;
}

export interface TelegramDict {
  title: string;
  subtitle: string;
  feature1: string;
  feature2: string;
  feature3: string;
  joinChannel: string;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
}

export interface TestimonialsDict {
  title: string;
  subtitle: string;
  t1: TestimonialItem;
  t2: TestimonialItem;
  t3: TestimonialItem;
}

export interface PricingTier {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface PricingDict {
  title: string;
  subtitle: string;
  monthly: string;
  annual: string;
  annualSave: string;
  currency: string;
  currencySymbol: string;
  free: PricingTier;
  pro: PricingTier;
  premium: PricingTier;
  elite: PricingTier;
  acceptedPayments: string;
  guarantee: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQDict {
  title: string;
  q1: FAQItem;
  q2: FAQItem;
  q3: FAQItem;
  q4: FAQItem;
  q5: FAQItem;
  q6: FAQItem;
}

export interface FooterDict {
  tagline: string;
  product: string;
  resources: string;
  docs: string;
  blog: string;
  tutorials: string;
  newsletter: string;
  emailPlaceholder: string;
  subscribe: string;
  copyright: string;
  terms: string;
  privacy: string;
  disclaimer: string;
  risk: string;
}

export interface CTADict {
  title: string;
  subtitle: string;
  cta: string;
}

export interface Dictionary {
  nav: NavDict;
  hero: HeroDict;
  howItWorks: HowItWorksDict;
  bots: BotsDict;
  performance: PerformanceDict;
  telegram: TelegramDict;
  testimonials: TestimonialsDict;
  pricing: PricingDict;
  faq: FAQDict;
  footer: FooterDict;
  cta: CTADict;
}
