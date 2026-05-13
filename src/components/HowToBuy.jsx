import { MessageSquare, ClipboardList, CreditCard, PackageCheck } from 'lucide-react';

const WA = 'https://wa.me/19153559631';

const steps = [
  {
    number: '1',
    emoji: '💬',
    icon: MessageSquare,
    title: 'Escríbenos por WhatsApp',
    body: 'Manda un mensaje al (915) 355-9631. Te respondemos en menos de 2 horas.',
    accent: '#25D366',
    cta: 'Abrir WhatsApp',
    href: `${WA}?text=Hola%21%20Me%20interesa%20hacer%20un%20pedido%20mayorista.`,
    external: true,
  },
  {
    number: '2',
    emoji: '📦',
    icon: ClipboardList,
    title: 'Elige tu Paquete',
    body: 'Escoge entre 20, 50 o 100 piezas. Te asesoramos gratis para elegir el mejor para ti.',
    accent: '#007BFF',
    cta: 'Ver Paquetes',
    href: '#portfolio',
    external: false,
  },
  {
    number: '3',
    emoji: '💳',
    icon: CreditCard,
    title: 'Paga Aquí Mismo',
    body: 'Tarjeta, OXXO o transferencia — directo en esta página. Seguro y fácil.',
    accent: '#4DA6FF',
    cta: 'Ir a Pagar',
    href: '#pagar',
    external: false,
  },
  {
    number: '4',
    emoji: '🚚',
    icon: PackageCheck,
    title: 'Recibe y Empieza a Vender',
    body: 'Tu pedido llega en empaque premium con número de rastreo. ¡Listo para vender desde el día 1!',
    accent: '#007BFF',
    cta: null,
    href: null,
    external: false,
  },
];

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: '#002244' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Label */}
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
            Súper Fácil
          </span>
        </div>

        <h2 className="animate-on-scroll animate-delay-100 text-white mb-3"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', letterSpacing: '0.02em', lineHeight: 1 }}>
          ¿Cómo Comprar?
          <span className="text-cobalt-gradient block">4 Pasos Simples.</span>
        </h2>
        <p className="animate-on-scroll animate-delay-200 text-sm sm:text-base mb-10 sm:mb-14"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: '1.7', color: '#BDC3C7', maxWidth: '28rem' }}>
          Cualquier persona puede comprar. No necesitas experiencia previa.
        </p>

        {/* Steps — vertical on mobile, horizontal on lg */}
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {steps.map((step, i) => (
            <div key={step.number}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} relative flex sm:flex-col items-start sm:items-start gap-4 sm:gap-0 p-5 sm:p-6 transition-all duration-300`}
              style={{
                background: 'rgba(0,51,102,0.3)',
                border: '1px solid rgba(0,123,255,0.15)',
                borderTop: `3px solid ${step.accent}60`,
                backdropFilter: 'blur(10px)',
              }}>

              {/* Mobile: emoji on left; Desktop: emoji on top */}
              <div className="flex-shrink-0 sm:mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${step.accent}15`, border: `1px solid ${step.accent}25` }}>
                  {step.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-0.5"
                    style={{ background: `${step.accent}15`, color: step.accent }}>
                    Paso {step.number}
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold text-white mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>
                  {step.body}
                </p>
                {step.cta && (
                  <a href={step.href}
                    target={step.external ? '_blank' : undefined}
                    rel={step.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-sm font-bold transition-all"
                    style={{ color: step.accent }}
                    onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                    {step.cta} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Big mobile CTA strip */}
        <div className="animate-on-scroll mt-8 p-5 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
          style={{ background: 'rgba(0,123,255,0.08)', border: '1px solid rgba(0,123,255,0.2)' }}>
          <div>
            <div className="text-base font-bold text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              ¿Listo para empezar?
            </div>
            <div className="text-sm" style={{ color: '#BDC3C7' }}>
              La mayoría recupera su inversión en menos de 3 semanas.
            </div>
          </div>
          <a href={`${WA}?text=Hola%21%20Quiero%20hacer%20mi%20primer%20pedido%20mayorista.`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary py-4 px-6 text-sm tracking-wide text-center flex-shrink-0 flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hacer Mi Pedido Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
