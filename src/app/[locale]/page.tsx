import { Locale, getDictionary } from '@/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Bots from '@/components/sections/Bots';
import Performance from '@/components/sections/Performance';
import Telegram from '@/components/sections/Telegram';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import WaitingListOverlay from '@/components/sections/WaitingListOverlay';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <main>
      {/* Landing page behind blur — non-interactive */}
      <div style={{ pointerEvents: 'none', userSelect: 'none' }} aria-hidden="true">
        <Navbar dict={dict} locale={locale} />
        <Hero dict={dict} />
        <HowItWorks dict={dict} />
        <Bots dict={dict} />
        <Performance dict={dict} />
        <Telegram dict={dict} />
        <Testimonials dict={dict} />
        <Pricing dict={dict} locale={locale} />
        <FAQ dict={dict} />
        <CTA dict={dict} />
        <Footer dict={dict} />
      </div>

      {/* Blur overlay + Waiting list form */}
      <WaitingListOverlay dict={dict} />
    </main>
  );
}
