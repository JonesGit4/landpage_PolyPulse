import type { Metadata } from 'next';
import { locales, Locale } from '@/i18n';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'PolyPulse — Intelligent Bots for Polymarket',
  description: 'Automated signals, alerts, and trading bots for Polymarket prediction markets. Trade smarter, 24/7.',
  icons: { icon: '/images/favicon.ico' },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale} className="dark">
      <body className="bg-dark-900 text-gray-200 antialiased">
        {children}
      </body>
    </html>
  );
}
