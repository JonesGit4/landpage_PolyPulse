import { Locale, getDictionary } from '@/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Bots from '@/components/Bots';
import Performance from '@/components/Performance';
import Telegram from '@/components/Telegram';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <main>
      <Navbar dict={dict} locale={params.locale} />
      <Hero dict={dict} />
      <HowItWorks dict={dict} />
      <Bots dict={dict} />
      <Performance dict={dict} />
      <Telegram dict={dict} />
      <Testimonials dict={dict} />
      <Pricing dict={dict} />
      <FAQ dict={dict} />
      <Footer dict={dict} locale={params.locale} />
    </main>
  );
}
