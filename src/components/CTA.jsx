import { MessageSquare, Calendar, ArrowRight } from 'lucide-react';

const WA = 'https://wa.me/19153559631';

const contactOptions = [
  {
    icon: MessageSquare,
    label: 'WhatsApp Directo',
    number: '+1 (915) 355-9631',
    description: 'Escríbenos ahora. Respondemos en menos de 2H en horario laboral.',
    action: 'Abrir WhatsApp',
    href: `${WA}?text=Hola%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20lotes%20mayoristas%20de%20Gymbrowear.`,
    accent: '#25D366',
    primary: true,
  },
  {
    icon: Calendar,
    label: 'Agendar Consulta',
    number: 'Sesión de 30 minutos',
    description: 'Analizamos tu mercado y definimos el lote ideal para tu negocio.',
    action: 'Ver Disponibilidad',
    href: `${WA}?text=Hola%21%20Quiero%20agendar%20una%20consulta%20de%20inventario.`,
    accent: '#007BFF',
    primary: false,
  },
];

const faqs = [
  { q: '¿Cuál es el proceso de compra?',        a: 'Contactas, elegimos el lote ideal, pagas directo en nuestra página o por WhatsApp, y despachamos el mismo día.' },
  { q: '¿Son productos auténticos de Gymshark?', a: 'Sí, 100%. Cada pedido incluye certificado de autenticidad y proviene de nuestra cadena de suministro verificada.' },
  { q: '¿Hacen envíos desde Ciudad Juárez?',     a: 'Sí. Operamos desde Ciudad Juárez, Chihuahua con entrega express a todo México en 24–72H según destino.' },
  { q: '¿Puedo elegir los modelos y tallas?',    a: 'Ofrecemos consultoría de mix — te recomendamos basado en datos de tu mercado, pero tienes voz final.' },
];

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden" style={{ background: '#002244' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,123,255,0.06), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,123,255,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="animate-on-scroll flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>Comienza Hoy</span>
          <div className="w-8 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
        </div>

        <div className="animate-on-scroll animate-delay-100 text-center max-w-3xl mx-auto mb-4">
          <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.02em', lineHeight: 1 }}
            className="text-white">
            Agenda una
            <span className="text-cobalt-gradient block">Consulta de Inventario</span>
          </h2>
        </div>

        <p className="animate-on-scroll animate-delay-200 text-center max-w-xl mx-auto mb-16"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.05rem', lineHeight: '1.75', color: '#BDC3C7' }}>
          Una sesión estratégica sin costo. Analizamos tu mercado y te presentamos proyecciones reales de ROI.
        </p>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-24">
          {contactOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <a key={opt.label} href={opt.href}
                target="_blank" rel="noopener noreferrer"
                className="animate-on-scroll group flex flex-col p-8 transition-all duration-500 hover:-translate-y-1"
                style={opt.primary
                  ? { background: `rgba(37,211,102,0.08)`, border: `1px solid rgba(37,211,102,0.25)`, boxShadow: `0 0 40px rgba(37,211,102,0.06)` }
                  : { background: 'rgba(0,51,102,0.3)', border: '1px solid rgba(0,123,255,0.2)', backdropFilter: 'blur(10px)' }}>
                <div className="w-11 h-11 flex items-center justify-center mb-5"
                  style={{ background: `${opt.accent}15`, border: `1px solid ${opt.accent}25` }}>
                  <Icon size={18} style={{ color: opt.accent }} />
                </div>
                <h3 className="text-base font-bold text-white mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {opt.label}
                </h3>
                <div className="text-[11px] font-semibold mb-3" style={{ color: opt.accent }}>{opt.number}</div>
                <p className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>
                  {opt.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: opt.accent }}>
                  {opt.action}
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="cobalt-line mb-20 opacity-20" />

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll text-center mb-10">
            <h3 className="text-white"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2rem', letterSpacing: '0.05em' }}>
              Preguntas Frecuentes
            </h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} p-6`}
                style={{ background: 'rgba(0,51,102,0.25)', border: '1px solid rgba(0,123,255,0.1)' }}>
                <h4 className="text-sm font-semibold text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>{faq.q}</h4>
                <p className="text-[13px] leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
