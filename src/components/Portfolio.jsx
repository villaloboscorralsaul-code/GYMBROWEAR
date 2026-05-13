import { useState } from 'react';
import { Check, Star, TrendingUp, Crown, ArrowRight, Zap } from 'lucide-react';

const tiers = [
  {
    id: 'entrada',
    label: 'Lote de Entrada',
    tagline: 'Para empezar a vender',
    units: '20 piezas',
    price: '$5,000',
    currency: 'MXN',
    icon: TrendingUp,
    featured: false,
    badge: null,
    scarcity: '7 lotes disponibles',
    description: 'Perfecto si es tu primera vez comprando al mayoreo. Prueba el mercado sin arriesgar mucho capital.',
    features: ['20 piezas surtidas de Gymshark', 'Tallas S, M, L y XL incluidas', 'Empaque premium listo para vender', 'Asesoría de inicio incluida', 'Garantía de autenticidad 100%'],
    margin: '35–45%',
    delivery: '5–7 días',
    accent: '#BDC3C7',
    borderColor: 'rgba(189,195,199,0.2)',
  },
  {
    id: 'expansion',
    label: 'Lote de Expansión',
    tagline: 'El más vendido ⭐',
    units: '50 piezas',
    price: '$15,000',
    currency: 'MXN',
    icon: Star,
    featured: true,
    badge: 'MÁS POPULAR',
    scarcity: '¡Solo 3 lotes disponibles!',
    description: 'El favorito de nuestros socios. Más variedad, mejor margen y prioridad en entregas.',
    features: ['50 piezas · 12+ modelos distintos', 'Tallas completas surtidas', 'Acceso prioritario a nuevas llegadas', 'Reposición en 48H garantizada', 'Asesoría mensual de tendencias', 'Descuento en tu siguiente pedido'],
    margin: '40–50%',
    delivery: '48H Express',
    accent: '#007BFF',
    borderColor: 'rgba(0,123,255,0.4)',
  },
  {
    id: 'maestro',
    label: 'Lote Maestro',
    tagline: 'Máximo volumen y margen',
    units: '100 piezas',
    price: '$30,000',
    currency: 'MXN',
    icon: Crown,
    featured: false,
    badge: 'ELITE',
    scarcity: '2 lotes disponibles',
    description: 'Para tiendas establecidas que quieren dominar su mercado con el mayor margen posible.',
    features: ['100 piezas · colecciones exclusivas', 'Gerente de cuenta dedicado', 'Línea directa 24/7', 'Inventario pre-reservado', 'Crédito disponible', 'Material de marketing incluido'],
    margin: '45–55%',
    delivery: '24H VIP',
    accent: '#4DA6FF',
    borderColor: 'rgba(77,166,255,0.25)',
  },
];

function TierCard({ tier }) {
  const Icon = tier.icon;
  return (
    <div
      className="relative flex flex-col rounded-none transition-all duration-300 hover:-translate-y-1 active:scale-[0.99]"
      style={{
        background: tier.featured ? 'rgba(0,123,255,0.12)' : 'rgba(0,34,68,0.6)',
        border: `1px solid ${tier.borderColor}`,
        boxShadow: tier.featured
          ? '0 0 40px rgba(0,123,255,0.15), 0 20px 60px rgba(0,0,0,0.4)'
          : '0 10px 40px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Featured top glow */}
      {tier.featured && (
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, #007BFF, transparent)' }} />
      )}

      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-4">
          <span className="text-[9px] font-bold tracking-[0.25em] px-3 py-1"
            style={{ background: tier.featured ? '#007BFF' : 'rgba(0,123,255,0.15)',
              color: tier.featured ? '#FFF' : '#4DA6FF' }}>
            {tier.badge}
          </span>
        </div>
      )}

      <div className="p-5 sm:p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="text-xs font-bold tracking-wide mb-0.5" style={{ color: tier.accent }}>
              {tier.tagline}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}>{tier.label}</h3>
            <div className="text-sm mt-0.5" style={{ color: '#BDC3C7' }}>{tier.units}</div>
          </div>
          <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 ml-3"
            style={{ background: `${tier.accent}15`, border: `1px solid ${tier.accent}30` }}>
            <Icon size={18} style={{ color: tier.accent }} />
          </div>
        </div>

        {/* Price — big and clear */}
        <div className="py-4 mb-4" style={{ borderTop: '1px solid rgba(0,123,255,0.1)', borderBottom: '1px solid rgba(0,123,255,0.1)' }}>
          <div className="flex items-baseline gap-1.5">
            <span style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: 'clamp(2.2rem, 8vw, 3rem)',
              lineHeight: 1,
              background: tier.featured ? 'linear-gradient(135deg, #007BFF, #4DA6FF)' : `linear-gradient(135deg, ${tier.accent}, white)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{tier.price}</span>
            <span className="text-sm font-semibold" style={{ color: '#BDC3C7' }}>{tier.currency}</span>
          </div>
          <div className="text-xs mt-1 flex items-center gap-1.5" style={{ color: '#BDC3C7' }}>
            <Zap size={11} style={{ color: tier.accent }} />
            Margen estimado:&nbsp;<strong style={{ color: tier.accent }}>{tier.margin}</strong>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>
          {tier.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 flex-1 mb-6">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
              <span className="text-[13px] leading-snug" style={{ color: '#BDC3C7' }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Delivery */}
        <div className="flex items-center gap-2 mb-3 text-xs" style={{ color: '#BDC3C7' }}>
          🚚 Entrega: <strong style={{ color: tier.accent }}>{tier.delivery}</strong>
        </div>

        {/* Scarcity */}
        <div className="flex items-center gap-2 mb-5">
          <span className="live-dot" />
          <span className="text-[10px] font-semibold" style={{ color: tier.featured ? '#FFD700' : '#BDC3C7' }}>
            {tier.scarcity}
          </span>
        </div>

        {/* CTA */}
        <a href="#pagar"
          className={`flex items-center justify-center gap-2 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 group ${
            tier.featured ? 'btn-primary' : 'btn-secondary'}`}>
          Quiero Este Lote
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: '#001829' }}>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,123,255,1), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
            Nuestros Paquetes
          </span>
        </div>

        <h2 className="animate-on-scroll animate-delay-100 text-white mb-3"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '0.02em', lineHeight: 1 }}>
          Elige tu Paquete
          <span className="text-cobalt-gradient block">Mayorista.</span>
        </h2>

        <p className="animate-on-scroll animate-delay-200 mb-10 sm:mb-14 text-sm sm:text-base"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: '1.7', color: '#BDC3C7', maxWidth: '28rem' }}>
          Compra el paquete que se ajuste a tu negocio. Puedes crecer al siguiente nivel cuando quieras.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* Featured card first on mobile */}
          {[tiers[1], tiers[0], tiers[2]].map((tier, i) => (
            <div key={tier.id}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} ${
                tier.featured ? 'sm:order-none order-first' : ''
              }`}>
              <TierCard tier={tier} />
            </div>
          ))}
        </div>

        {/* ── Product packaging showcase ── */}
        <div className="animate-on-scroll mt-10 relative overflow-hidden"
          style={{ background: 'rgba(0,16,36,0.9)', border: '1px solid rgba(0,123,255,0.18)', backdropFilter: 'blur(16px)' }}>

          {/* Top shimmer line */}
          <div className="h-px shimmer-border" />

          <div className="grid md:grid-cols-2 items-center">

            {/* Image side */}
            <div className="relative flex items-center justify-center p-8 sm:p-10"
              style={{ background: 'linear-gradient(135deg, rgba(0,20,50,0.8), rgba(0,34,68,0.4))' }}>

              {/* Glow behind box */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{
                  width: '60%', height: '60%',
                  background: 'radial-gradient(ellipse, rgba(0,123,255,0.18) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }} />
              </div>

              <img
                src="/package-box.png"
                alt="Paquete Gymshark Mayoreo — Gymbrowear"
                className="relative w-full max-w-xs sm:max-w-sm h-auto object-contain"
                style={{ filter: 'drop-shadow(0 12px 40px rgba(0,123,255,0.25)) drop-shadow(0 4px 12px rgba(0,0,0,0.6))' }}
              />
            </div>

            {/* Text side */}
            <div className="p-8 sm:p-10">
              <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#007BFF' }}>
                Lo que Recibes
              </div>
              <h3 className="text-white mb-4"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
                Mayoreo Premium.<br />
                <span className="text-cobalt-gradient">Listo para Vender.</span>
              </h3>
              <p className="text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7', lineHeight: '1.75' }}>
                Cada lote llega en caja oficial con el branding Gymshark y el sello Gymbrowear.
                Tu cliente abre y sabe que compró algo premium — eso vale más que cualquier margen.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  '📦 Caja sellada con branding oficial',
                  '🔒 Etiqueta holográfica de autenticidad',
                  '🚚 Número de guía por WhatsApp al despachar',
                  '✅ Certificado de autenticidad en cada envío',
                  '🎯 Piezas mixtas surtidas por expertos',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm"
                    style={{ color: '#E2E8F0', fontFamily: "'Inter', sans-serif" }}>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/19153559631?text=Hola%21%20Quiero%20hacer%20un%20pedido%20mayorista."
                target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-widest">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quiero un Lote Así
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="animate-on-scroll mt-6 text-center">
          <p className="text-sm" style={{ color: '#BDC3C7' }}>
            ¿Quieres más de 100 piezas?{' '}
            <a href="https://wa.me/19153559631" target="_blank" rel="noopener noreferrer"
              className="font-bold transition-colors" style={{ color: '#007BFF' }}>
              Escríbenos al (915) 355-9631
            </a>
            {' '}y hacemos un precio especial.
          </p>
        </div>
      </div>
    </section>
  );
}
