import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const WA_LINK = 'https://wa.me/19153559631?text=Hola%21%20Quiero%20hacer%20un%20pedido%20mayorista%20de%20Gymbrowear.';

function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const partners = useCountUp(500, 1600, statsVisible);
  const satisfaction = useCountUp(98, 1400, statsVisible);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const bgEl = heroRef.current.querySelector('.hero-bg');
      if (bgEl) bgEl.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div className="hero-bg absolute inset-0 -top-16 will-change-transform">
        <img
          src="/hero-banner.png"
          alt="" className="w-full h-full object-cover object-center scale-110" loading="eager" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-70"
          style={{ background: 'linear-gradient(90deg, #001829 0%, transparent 50%, #001829 100%)' }} />
        <div className="absolute inset-0 opacity-25"
          style={{ background: 'linear-gradient(180deg, #003366 0%, transparent 60%)' }} />
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 power-bar" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 mb-5 sm:mb-8 transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-6 h-px" style={{ background: '#007BFF' }} />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase"
            style={{ color: '#007BFF' }}>
            Mayoreo · Premium · Ciudad Juárez
          </span>
          <div className="w-6 h-px" style={{ background: '#007BFF' }} />
        </div>

        {/* Headline */}
        <h1
          className={`leading-none mb-4 transition-all duration-1000 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(3.2rem, 12vw, 9rem)',
            letterSpacing: '0.02em',
          }}
        >
          <span className="text-white block">Tu Crecimiento</span>
          <span className="text-cobalt-gradient block">es Nuestra</span>
          <span className="text-white block">Estrategia.</span>
        </h1>

        {/* Divider */}
        <div className={`h-px mb-5 sm:mb-8 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: loaded ? '6rem' : '0', background: 'linear-gradient(90deg, #007BFF, transparent)',
            transition: 'width 1s ease, opacity 1s ease' }} />

        {/* Subheadline — simpler language */}
        <p className={`max-w-sm sm:max-w-xl leading-relaxed mb-8 sm:mb-12 transition-all duration-1000 delay-[400ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(0.95rem, 3.5vw, 1.2rem)', lineHeight: '1.7', color: '#BDC3C7' }}>
          Somos tu proveedor de ropa Gymshark al mayoreo. Compras desde 20 piezas y ganas con cada venta.
          <em style={{ color: '#007BFF', fontStyle: 'normal' }}> Sin complicaciones.</em>
        </p>

        {/* CTAs — full width on mobile */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-primary py-4 px-6 text-[13px] tracking-[0.12em] inline-flex items-center justify-center gap-2 w-full sm:w-auto">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir por WhatsApp
          </a>
          <a href="#pagar"
            className="btn-secondary py-4 px-6 text-[13px] tracking-[0.12em] inline-flex items-center justify-center w-full sm:w-auto">
            Ver Precios y Pagar Online
          </a>
        </div>

        {/* Neon logo — desktop floating right */}
        <div className={`absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <img src="/logo-neon.png" alt="Gymbrowear"
            className="w-52 xl:w-64 h-auto neon-glow"
            style={{ filter: 'drop-shadow(0 0 24px rgba(0,123,255,0.6)) drop-shadow(0 0 60px rgba(0,123,255,0.3))' }} />
          <div className="text-[9px] tracking-[0.3em] uppercase text-center" style={{ color: 'rgba(0,123,255,0.6)' }}>
            Official Gymshark Distributor
          </div>
        </div>

        {/* Simple trust indicators — clear for anyone */}
        <div className={`mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { icon: '📦', text: 'Desde 20 piezas' },
            { icon: '🚚', text: 'Envío en 48H' },
            { icon: '✅', text: 'Garantía total' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-semibold" style={{ color: '#BDC3C7' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats — animated counting */}
      <div ref={statsRef} className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-16 hidden sm:block">
        <div className={`grid grid-cols-3 gap-4 max-w-sm transition-all duration-1000 delay-[800ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-left">
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>{partners}+</div>
            <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: '#BDC3C7' }}>Socios Activos</div>
          </div>
          <div className="text-left">
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>48H</div>
            <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: '#BDC3C7' }}>Entrega</div>
          </div>
          <div className="text-left">
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>{satisfaction}%</div>
            <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: '#BDC3C7' }}>Satisfacción</div>
          </div>
        </div>
      </div>

      {/* Location badge */}
      <div className={`absolute bottom-20 right-4 hidden md:flex items-center gap-2 transition-all duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
        <div className="pulse-dot" />
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#BDC3C7' }}>
          Ciudad Juárez, Chihuahua
        </span>
      </div>

      {/* Scroll indicator */}
      <a href="#portfolio"
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1s', color: '#BDC3C7' }}>
        <span className="text-[9px] tracking-[0.2em] uppercase">Ver más</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
