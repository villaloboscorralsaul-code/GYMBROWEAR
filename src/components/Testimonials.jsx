const testimonials = [
  {
    quote: 'Gymbrowear cambió completamente la dinámica de mi tienda. Con el Lote de Expansión vendí todo en 3 semanas. El ROI superó mis expectativas.',
    name: 'Carlos Mendoza',
    role: 'Propietario, FitStore GDL',
    city: 'Guadalajara, Jal.',
    initials: 'CM',
    accent: '#007BFF',
    result: '+$9,000 MXN ganancia',
    lote: 'Lote Expansión',
    stars: 5,
  },
  {
    quote: 'La curaduría de inventario es lo que los diferencia. No es solo comprar ropa al mayoreo — es tener un socio que entiende el mercado fitness.',
    name: 'Ana Restrepo',
    role: 'CEO, AthleticPro CDMX',
    city: 'Ciudad de México',
    initials: 'AR',
    accent: '#4DA6FF',
    result: 'Reorden x3 en 2 meses',
    lote: 'Lote Maestro',
    stars: 5,
  },
  {
    quote: 'El empaque premium hace que mis clientes sientan que compraron algo de lujo. La diferenciación frente a la competencia es brutal.',
    name: 'Diego Salazar',
    role: 'Director, PowerFit Monterrey',
    city: 'Monterrey, NL',
    initials: 'DS',
    accent: '#007BFF',
    result: 'Vendió el 100% en 18 días',
    lote: 'Lote Expansión',
    stars: 5,
  },
];

const trustStats = [
  { value: '500+', label: 'Socios activos' },
  { value: '98%', label: 'Recompra' },
  { value: '4.9', label: 'Calificación promedio' },
  { value: '3 sem', label: 'Recuperación de inversión' },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#FFD700', fontSize: '13px' }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-28 relative overflow-hidden" style={{ background: '#001829' }}>
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,123,255,0.8) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
            Partners que Escalan
          </span>
        </div>

        <div className="animate-on-scroll animate-delay-100 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="text-white"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Resultados
            <span className="text-cobalt-gradient"> Reales.</span>
          </h2>
          <div className="flex items-center gap-2">
            <Stars count={5} />
            <span className="text-xs" style={{ color: '#BDC3C7' }}>
              4.9 · 500+ reseñas verificadas
            </span>
          </div>
        </div>

        {/* Trust stats bar */}
        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-4 gap-px mb-10"
          style={{ background: 'rgba(0,123,255,0.08)', border: '1px solid rgba(0,123,255,0.12)' }}>
          {trustStats.map((s, i) => (
            <div key={s.label} className="p-4 sm:p-5 text-center"
              style={{ background: '#001829' }}>
              <div style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                lineHeight: 1,
                background: 'linear-gradient(135deg, #007BFF, #4DA6FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {s.value}
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ color: '#BDC3C7', opacity: 0.7 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} flex flex-col relative overflow-hidden`}
              style={{
                background: 'rgba(0,34,68,0.6)',
                border: '1px solid rgba(0,123,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}>

              {/* Top accent bar */}
              <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${t.accent}60, transparent)` }} />

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Stars + lote badge */}
                <div className="flex items-center justify-between mb-4">
                  <Stars count={t.stars} />
                  <span className="text-[9px] font-bold tracking-[0.15em] px-2 py-1"
                    style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}25` }}>
                    {t.lote}
                  </span>
                </div>

                {/* Big quote mark */}
                <div className="mb-2 leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', color: t.accent, opacity: 0.2, lineHeight: 1 }}>
                  "
                </div>

                {/* Quote */}
                <p className="leading-relaxed flex-1 mb-5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.93rem', lineHeight: '1.75', color: '#E2E8F0' }}>
                  {t.quote}
                </p>

                {/* Result highlight */}
                <div className="flex items-center gap-2 mb-5 px-3 py-2"
                  style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.15)' }}>
                  <span style={{ color: '#25D366', fontSize: '12px' }}>📈</span>
                  <span className="text-xs font-bold" style={{ color: '#25D366' }}>{t.result}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,123,255,0.1)' }}>
                  <div className="w-9 h-9 flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.accent}30, ${t.accent}10)`,
                      color: t.accent,
                      border: `1px solid ${t.accent}35`,
                      borderRadius: '50%',
                    }}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="text-xs font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {t.name}
                      </div>
                      <span className="text-[8px] px-1.5 py-px font-bold"
                        style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366' }}>
                        ✓ VERIFICADO
                      </span>
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: '#BDC3C7', opacity: 0.6 }}>
                      {t.role} · {t.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
