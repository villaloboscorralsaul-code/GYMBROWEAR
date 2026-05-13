const row1 = [
  { text: 'Gymshark Auténtico', icon: '⚡' },
  { text: 'Mayoreo Premium B2B', icon: '👑' },
  { text: 'Lotes desde 20 piezas', icon: '📦' },
  { text: 'Entrega 48H Express', icon: '🚚' },
  { text: 'Margen 35–55%', icon: '📈' },
  { text: 'Ciudad Juárez · México', icon: '📍' },
  { text: 'Pago Online Seguro', icon: '🔒' },
  { text: 'Soporte por WhatsApp', icon: '💬' },
];

const row2 = [
  { text: '500+ Socios Activos', icon: '🤝' },
  { text: '98% Satisfacción', icon: '⭐' },
  { text: 'Recupera Inversión en 3 Semanas', icon: '💰' },
  { text: 'Gymshark Official Partner', icon: '✅' },
  { text: 'Sin Experiencia Previa', icon: '🎯' },
  { text: 'Reposición en 48H', icon: '⚡' },
  { text: 'Tallas S–XL Incluidas', icon: '👕' },
  { text: 'Certificado de Autenticidad', icon: '🛡️' },
];

// Duplicate so the animation loops seamlessly
const dup = arr => [...arr, ...arr];

function TickerRow({ items, reverse = false, accent = false }) {
  return (
    <div className="relative py-2.5 overflow-hidden"
      style={{
        borderTop: accent ? '1px solid rgba(0,123,255,0.2)' : '1px solid rgba(0,123,255,0.08)',
        borderBottom: accent ? '1px solid rgba(0,123,255,0.2)' : '1px solid rgba(0,123,255,0.08)',
        background: accent ? 'rgba(0,40,80,0.5)' : 'rgba(0,30,60,0.4)',
      }}>
      <div className={reverse ? 'ticker-track-reverse' : 'ticker-track'}>
        {dup(items).map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5">
            <span className="text-sm leading-none">{item.icon}</span>
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap"
              style={{ color: accent ? '#E2E8F0' : '#BDC3C7' }}>
              {item.text}
            </span>
            <span style={{ color: accent ? '#007BFF' : 'rgba(0,123,255,0.4)', fontSize: '6px' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative overflow-hidden" style={{ background: '#002244' }}>
      <TickerRow items={row1} reverse={false} accent={true} />
      <TickerRow items={row2} reverse={true} accent={false} />
    </div>
  );
}
