import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Portfolio from './components/Portfolio';
import ProfitCalculator from './components/ProfitCalculator';
import HowToBuy from './components/HowToBuy';
import Strategy from './components/Strategy';
import Logistics from './components/Logistics';
import PaymentCheckout from './components/PaymentCheckout';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LiveNotifications from './components/LiveNotifications';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-obsidian text-titanium antialiased"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      <div className="scanline" aria-hidden="true" />

      <Header />
      <Hero />
      <Ticker />
      <Portfolio />
      <ProfitCalculator />
      <HowToBuy />
      <Strategy />
      <Logistics />
      <PaymentCheckout />
      <Testimonials />
      <CTA />
      <Footer />

      {/* Floating elements */}
      <FloatingWhatsApp />
      <LiveNotifications />
    </div>
  );
}
