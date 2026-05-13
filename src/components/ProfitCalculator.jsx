import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const TIERS = [
  {
    id: 'entrada', label: 'Lote Entrada', units: 20, investment: 5000,
    marginMin: 35, marginMax: 45, color: '#BDC3C7',
  },
  {
    id: 'expansion', label: 'Lote Expansión', units: 50, investment: 15000,
    marginMin: 40, marginMax: 50, color: '#007BFF', featured: true,
  },
  {
    id: 'maestro', label: 'Lote Maestro', units: 100, investment: 30000,
    marginMin: 45, marginMax: 55, color: '#4DA6FF',
  },
];

function mxn(n) {
  return '$' + n.toLocaleString('es-MX');
}

export default function ProfitCalculator() {
  const [tierIdx, setTierIdx] = useState(1);
  const [sellPct, setSellPct] = useState(80);

  const tier = TIERS[tierIdx];
  const soldUnits = Math.round(tier.units * sellPct / 100);

  // Break-even: how many pieces to sell to cover investment
  // Using conservative (min) margin: breakEven = investment / (investment / units) / (1 - marginMin/100)...
  // Simpler: cost per piece = investment / units; to cover invest you need invest / costPerPiece / (1/(1-marginMin/100))
  // Actually: breakEven pieces = 1 / (1 - (marginMin/100)) won't work simply.
  // Just: to recover investment, sell at least enough pieces that revenue >= investment.
  // Minimum sell price = cost / (1 - margin), so breakEven = investment / minSellPrice = units * (1 - marginMin/100)
  // Actually simpler: with marginMin%, to break even you need to sell all pieces (since margin > 0 you make money on each)
  // Let me just compute: break even qty = units * (1 - marginMin/100) ... no that's wrong too.
  //
  // margin = (sellPrice - cost) / sellPrice => cost = sellPrice * (1 - margin)
  // sellPrice = cost / (1 - margin)
  // total revenue needed = investment
  // breakEven qty = investment / sellPrice = investment / (costPerPiece / (1-margin)) = units * (1-margin)
  // With margin = marginMin/100:
  const breakEvenUnits = Math.ceil(tier.units * (1 - tier.marginMin / 100));
  const breakEvenPct = Math.round((breakEvenUnits / tier.units) * 100);

  // Estimated margin at current sell %  (weighted avg of min and max margin)
  const avgMargin = (tier.marginMin + tier.marginMax) / 2;
  // Effective ROI at sellPct: profit / investment = soldUnits * avgMargin% * sellPrice...
  // ROI on investment = (soldUnits * (margin / (1-margin)) * costPerPiece) / investment
  // costPerPiece = investment / units
  // = soldUnits * (margin/(1-margin)) * (investment/units) / investment
  // = (soldUnits/units) * margin/(1-margin)
  // = sellPct/100 * margin/(1-margin)
  const marginFrac = avgMargin / 100;
  const roi = Math.round((sellPct / 100) * (marginFrac / (1 - marginFrac)) * 100);

  const isBeyondBreakEven = soldUnits >= breakEvenUnits;

  return (
    <section id="calculadora" className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: '#001829' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,123,255,0.9) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,123,255,0.05), transparent)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
            Calculadora de Rentabilidad
          </span>
        </div>

        <h2 className="animate-on-scroll animate-delay-100 text-white mb-3"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', letterSpacing: '0.02em', lineHeight: 1 }}>
          Tu Margen,
          <span className="text-cobalt-gradient"> Tu Negocio.</span>
        </h2>

        <p className="animate-on-scroll animate-delay-200 text-sm mb-10 sm:mb-12"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7', lineHeight: '1.7', maxWidth: '30rem' }}>
          Las ganancias varían según tu mercado y precio de venta. Lo que sí es fijo: el margen de entrada que te damos y cuánto necesitas mover para recuperar.
        </p>

        <div className="grid md:grid-cols-5 gap-5 sm:gap-6 items-start">

          {/* ── Controls (3 cols) ── */}
          <div className="md:col-span-3 p-6 sm:p-8"
            style={{ background: 'rgba(0,34,68,0.7)', border: '1px solid rgba(0,123,255,0.15)', backdropFilter: 'blur(16px)' }}>

            {/* Tier selector */}
            <div className="mb-8">
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2"
                style={{ color: '#BDC3C7' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-black"
                  style={{ background: '#007BFF' }}>1</span>
                Elige tu lote
              </div>
              <div className="space-y-2">
                {TIERS.map((t, i) => (
                  <button key={t.id} onClick={() => setTierIdx(i)}
                    className="w-full flex items-center justify-between p-4 text-left transition-all duration-200 active:scale-[0.99]"
                    style={{
                      background: i === tierIdx ? `${t.color}12` : 'rgba(0,34,68,0.5)',
                      border: `1px solid ${i === tierIdx ? t.color + '45' : 'rgba(0,123,255,0.08)'}`,
                      boxShadow: i === tierIdx ? `0 0 20px ${t.color}15` : 'none',
                    }}>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full flex-shrink-0 transition-all duration-200"
                        style={{
                          background: i === tierIdx ? t.color : 'transparent',
                          border: `2px solid ${t.color}`,
                          boxShadow: i === tierIdx ? `0 0 8px ${t.color}60` : 'none',
                        }} />
                      <div>
                        <div className="text-sm font-bold leading-tight"
                          style={{ color: i === tierIdx ? '#fff' : '#BDC3C7', fontFamily: "'Inter', sans-serif" }}>
                          {t.label}
                        </div>
                        <div className="text-[10px]" style={{ color: t.color, opacity: 0.85 }}>
                          {t.units} piezas · inversión {mxn(t.investment)} MXN
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-[11px] font-bold" style={{ color: i === tierIdx ? t.color : '#BDC3C7' }}>
                        {t.marginMin}–{t.marginMax}%
                      </div>
                      <div className="text-[8px] uppercase tracking-wide" style={{ color: '#BDC3C7', opacity: 0.5 }}>margen</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2"
                style={{ color: '#BDC3C7' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-black"
                  style={{ background: '#007BFF' }}>2</span>
                ¿Qué % del lote vendes?
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: '#BDC3C7', opacity: 0.7 }}>
                  {soldUnits} de {tier.units} piezas
                </span>
                <span style={{
                  fontFamily: "'Bebas Neue', Impact, sans-serif",
                  fontSize: '2rem', lineHeight: 1,
                  background: 'linear-gradient(135deg, #007BFF, #4DA6FF)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {sellPct}%
                </span>
              </div>

              <input type="range" min="10" max="100" step="5"
                value={sellPct}
                onChange={e => setSellPct(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #007BFF ${sellPct}%, rgba(0,123,255,0.15) ${sellPct}%)`,
                }} />

              <div className="flex justify-between text-[9px] mt-2 px-0.5" style={{ color: '#BDC3C7', opacity: 0.4 }}>
                <span>10%</span><span>50%</span><span>100%</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs p-3"
                style={{ background: 'rgba(0,123,255,0.06)', border: '1px solid rgba(0,123,255,0.12)' }}>
                <span style={{ fontSize: '14px' }}>💡</span>
                <span style={{ color: '#BDC3C7', fontFamily: "'Playfair Display', serif" }}>
                  Nuestros socios venden en promedio el{' '}
                  <strong style={{ color: '#4DA6FF' }}>88%</strong> del lote.
                </span>
              </div>
            </div>
          </div>

          {/* ── Results (2 cols) ── */}
          <div className="md:col-span-2 space-y-3">

            {/* Main metric: ROI */}
            <div className="p-6 relative overflow-hidden"
              style={{
                background: isBeyondBreakEven ? 'rgba(0,123,255,0.07)' : 'rgba(255,100,50,0.06)',
                border: `1px solid ${isBeyondBreakEven ? 'rgba(0,123,255,0.3)' : 'rgba(255,100,50,0.25)'}`,
              }}>
              {isBeyondBreakEven && <div className="absolute top-0 left-0 right-0 h-px shimmer-border" />}

              <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1"
                style={{ color: isBeyondBreakEven ? '#007BFF' : '#FF8050' }}>
                {isBeyondBreakEven ? '📈 ROI Estimado' : '⚠️ Aún en recuperación'}
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: 'clamp(2.5rem, 8vw, 3.2rem)',
                lineHeight: 1,
                background: isBeyondBreakEven
                  ? 'linear-gradient(135deg, #007BFF, #4DA6FF)'
                  : 'linear-gradient(135deg, #FF8050, #FFB090)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {isBeyondBreakEven ? `+${roi}%` : `${roi}%`}
              </div>
              <div className="text-xs mt-1" style={{ color: '#BDC3C7', opacity: 0.6 }}>
                sobre la inversión inicial
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Inversión', value: mxn(tier.investment), sub: 'MXN fijo', color: '#BDC3C7' },
                { label: 'Margen / pieza', value: `${tier.marginMin}–${tier.marginMax}%`, sub: 'estimado', color: '#4DA6FF' },
              ].map(s => (
                <div key={s.label} className="p-3 text-center"
                  style={{ background: 'rgba(0,22,44,0.7)', border: '1px solid rgba(0,123,255,0.08)' }}>
                  <div className="text-sm font-bold"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", color: s.color, fontSize: '1.05rem', lineHeight: 1.2 }}>
                    {s.value}
                  </div>
                  <div className="text-[8px] tracking-[0.12em] uppercase mt-0.5" style={{ color: '#BDC3C7', opacity: 0.5 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Break-even bar */}
            <div className="p-4"
              style={{ background: 'rgba(0,22,44,0.7)', border: '1px solid rgba(0,123,255,0.1)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#BDC3C7' }}>
                  Punto de recuperación
                </span>
                <span className="text-xs font-bold" style={{ color: '#25D366' }}>
                  {breakEvenUnits} piezas ({breakEvenPct}%)
                </span>
              </div>
              {/* Visual bar */}
              <div className="h-2 rounded-none overflow-hidden" style={{ background: 'rgba(0,123,255,0.1)' }}>
                <div className="h-full transition-all duration-500"
                  style={{
                    width: `${Math.min(sellPct, 100)}%`,
                    background: soldUnits >= breakEvenUnits
                      ? 'linear-gradient(90deg, #25D366, #4DA6FF)'
                      : 'linear-gradient(90deg, #FF8050, #FFB090)',
                  }} />
              </div>
              {/* Break-even marker */}
              <div className="relative mt-1">
                <div className="absolute h-2 w-px bg-white opacity-40"
                  style={{ left: `${breakEvenPct}%`, top: '-8px' }} />
                <div className="text-[9px] mt-0.5" style={{ color: '#BDC3C7', opacity: 0.5 }}>
                  {soldUnits >= breakEvenUnits
                    ? `✓ Ya recuperaste la inversión con ${soldUnits} piezas`
                    : `Necesitas vender ${breakEvenUnits - soldUnits} piezas más`}
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] leading-relaxed px-1"
              style={{ color: '#BDC3C7', opacity: 0.45, fontFamily: "'Playfair Display', serif" }}>
              * Estimaciones basadas en márgenes promedio de nuestros socios. Tu precio de venta determina la ganancia final.
            </p>

            {/* CTA */}
            <a href="#pagar"
              className="btn-primary py-4 flex items-center justify-center gap-2 text-sm tracking-wide">
              Ver Paquetes y Pagar
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
