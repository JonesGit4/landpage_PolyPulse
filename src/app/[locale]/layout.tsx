import type { Metadata } from 'next';
import { locales, Locale } from '@/i18n';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'PolyPulse — Intelligent Bots for Polymarket',
  description: 'Automated signals, alerts, and trading bots for Polymarket prediction markets. Trade smarter with AI-powered tools, 24/7.',
  openGraph: {
    title: 'PolyPulse — Intelligent Bots for Polymarket',
    description: 'Automated signals, alerts, and trading bots for Polymarket. Trade smarter, 24/7.',
    type: 'website',
    siteName: 'PolyPulse',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolyPulse — Intelligent Bots for Polymarket',
    description: 'Automated signals, alerts, and trading bots for Polymarket. Trade smarter, 24/7.',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  return (
    <html lang={locale} className="dark">
      <body className="bg-dark-950 text-gray-300 antialiased">
        {children}
      </body>
    </html>
  );
}
