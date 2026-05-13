import { Truck, ShieldCheck, PackageCheck, Zap } from 'lucide-react';

const logisticStats = [
  { value: '48H', label: 'Entrega Nacional', sub: 'Promedio garantizado' },
  { value: '24H', label: 'CDMX & GDL', sub: 'Servicio Express VIP' },
  { value: '99.8%', label: 'Sin Incidentes', sub: 'Tasa de entrega exitosa' },
  { value: '100%', label: 'Autenticidad', sub: 'Certificado en cada envío' },
];

const guarantees = [
  { icon: PackageCheck, title: 'Empaque Signature',       body: 'Caja rígida con interior moldeada, cinta sellada y etiqueta holográfica de autenticidad Gymbrowear.',      accent: '#007BFF' },
  { icon: ShieldCheck,  title: 'Garantía Total',          body: 'Si una pieza llega dañada o no coincide con la orden, la reponemos sin costo ni preguntas.',              accent: '#4DA6FF' },
  { icon: Truck,        title: 'Rastreo en Tiempo Real',  body: 'Número de guía vía WhatsApp al momento del despacho. Seguimiento 24/7 con DHL, FedEx y Estafeta.',        accent: '#007BFF' },
  { icon: Zap,          title: 'Despacho el Mismo Día',   body: 'Pedidos confirmados antes de las 13:00 hrs se despachan el mismo día hábil desde Ciudad Juárez.',         accent: '#4DA6FF' },
];

const partners = ['DHL Express', 'FedEx Priority', 'Estafeta Elite', 'J&T Express'];

const STAT_STYLE = {
  fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2.8rem', lineHeight: 1,
  background: 'linear-gradient(135deg, #007BFF, #4DA6FF)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
};

export default function Logistics() {
  return (
    <section id="logistics" className="py-28 relative overflow-hidden"
      style={{ background: '#002244' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #007BFF 40%, #4DA6FF 60%, transparent 100%)', opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll flex items-center gap-4 mb-6">
          <div className="w-8 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
            Logística & Garantías
          </span>
        </div>

        <div className="animate-on-scroll animate-delay-100 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.02em', lineHeight: 1 }}
            className="text-white max-w-xl">
            Tu Pedido Llega
            <span className="text-cobalt-gradient block">Perfecto. Siempre.</span>
          </h2>
          <p className="max-w-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', lineHeight: '1.7', color: '#BDC3C7' }}>
            Cada detalle logístico está diseñado para proteger tu inversión y la experiencia de tu cliente final.
          </p>
        </div>

        {/* Package hero image */}
        <div className="animate-on-scroll mb-14 flex flex-col md:flex-row items-center gap-8 p-6 sm:p-8"
          style={{ background: 'rgba(0,34,68,0.6)', border: '1px solid rgba(0,123,255,0.15)', backdropFilter: 'blur(12px)' }}>
          <div className="flex-shrink-0 w-full md:w-72">
            <img src="/package-box.png" alt="Paquete Gymshark Mayoreo" className="w-full h-auto object-contain"
              style={{ filter: 'drop-shadow(0 8px 32px rgba(0,123,255,0.2))' }} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: '#007BFF' }}>Empaque Official</div>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: '0.05em' }}>
              Lotes Gymshark Mixtos — Listos para Vender
            </h3>
            <p className="text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7', maxWidth: '32rem' }}>
              Cada caja llega con el sello Gymbrowear y el branding Gymshark. Tu cliente lo abre y ya sabe que compró algo premium.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Sellado de seguridad', 'Etiqueta holográfica', 'No. de guía por WhatsApp'].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 font-semibold"
                  style={{ background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.2)', color: '#4DA6FF' }}>
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-on-scroll grid grid-cols-2 lg:grid-cols-4 gap-px mb-16"
          style={{ background: 'rgba(0,123,255,0.08)', border: '1px solid rgba(0,123,255,0.1)' }}>
          {logisticStats.map((stat) => (
            <div key={stat.label} className="p-7 text-center group hover:bg-blue-900/20 transition-colors duration-300"
              style={{ background: '#001829' }}>
              <div style={STAT_STYLE}>{stat.value}</div>
              <div className="text-[12px] font-semibold text-white mt-2 tracking-wide">{stat.label}</div>
              <div className="text-[9px] tracking-[0.18em] uppercase mt-0.5" style={{ color: '#BDC3C7' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Guarantee cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <div key={g.title}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} p-6 group hover:-translate-y-1 transition-all duration-300`}
                style={{ background: 'rgba(0,51,102,0.3)', border: '1px solid rgba(0,123,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <div className="inline-flex items-center justify-center w-10 h-10 mb-4"
                  style={{ background: `${g.accent}12`, border: `1px solid ${g.accent}25` }}>
                  <Icon size={17} style={{ color: g.accent }} />
                </div>
                <h3 className="text-[13px] font-bold text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>{g.title}</h3>
                <p className="text-[12px] leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>{g.body}</p>
              </div>
            );
          })}
        </div>

        {/* Partners strip */}
        <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(0,123,255,0.1)' }}>
          <span className="text-[9px] tracking-[0.35em] uppercase whitespace-nowrap" style={{ color: '#BDC3C7' }}>
            Red de socios logísticos
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {partners.map((p) => (
              <span key={p} className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ background: 'rgba(0,51,102,0.3)', border: '1px solid rgba(0,123,255,0.12)',
                  color: '#BDC3C7', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.color = '#007BFF'; e.currentTarget.style.borderColor = 'rgba(0,123,255,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#BDC3C7'; e.currentTarget.style.borderColor = 'rgba(0,123,255,0.12)'; }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
