import { MapPin, Phone, Clock } from 'lucide-react';

const WA = 'https://wa.me/19153559631';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#001829', borderTop: '1px solid rgba(0,123,255,0.12)' }}
      className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo-neon.png" alt="Gymbrowear" className="h-10 w-auto"
                style={{ filter: 'drop-shadow(0 0 6px rgba(0,123,255,0.35))' }} />
              <div>
                <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '1.4rem', letterSpacing: '0.15em', color: '#FFFFFF' }}>
                  GYMBROWEAR
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: '#BDC3C7' }}>
                  Wholesale Division
                </div>
              </div>
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: '#BDC3C7', opacity: 0.7 }}>
              Ciudad Juárez, Chihuahua · México
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7', opacity: 0.7 }}>
              Distribuidores mayoristas de ropa fitness premium. Exclusivo B2B — no vendemos al consumidor final.
            </p>
            {/* Contact quick info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={11} style={{ color: '#007BFF', flexShrink: 0 }} />
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="text-[12px] transition-colors"
                  style={{ color: '#BDC3C7' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#007BFF'}
                  onMouseLeave={e => e.currentTarget.style.color = '#BDC3C7'}>
                  +1 (915) 355-9631
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={11} style={{ color: '#007BFF', flexShrink: 0 }} />
                <span className="text-[12px]" style={{ color: '#BDC3C7' }}>
                  Ciudad Juárez, Chihuahua, México
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={11} style={{ color: '#007BFF', flexShrink: 0 }} />
                <span className="text-[12px]" style={{ color: '#BDC3C7' }}>
                  Lun–Vie · 9:00 – 18:00 CST
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: '#BDC3C7', opacity: 0.6 }}>
              Navegación
            </div>
            <ul className="space-y-2.5">
              {[
                { label: 'Lotes Mayoristas', href: '#portfolio' },
                { label: 'Cómo Comprar', href: '#como-comprar' },
                { label: 'Logística', href: '#logistics' },
                { label: 'Pagar Online', href: '#pagar' },
                { label: 'Contacto', href: '#cta' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-[12px] transition-colors"
                    style={{ color: '#BDC3C7', fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => e.currentTarget.style.color = '#007BFF'}
                    onMouseLeave={e => e.currentTarget.style.color = '#BDC3C7'}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: '#BDC3C7', opacity: 0.6 }}>
              Contáctanos
            </div>
            <a href={`${WA}?text=Hola%21%20Quiero%20hacer%20un%20pedido%20mayorista.`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 mb-4 group transition-all duration-300"
              style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <div className="text-[11px] font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  (915) 355-9631
                </div>
                <div className="text-[10px]" style={{ color: '#BDC3C7' }}>Abrir WhatsApp</div>
              </div>
            </a>
            <p className="text-[10px] leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7', opacity: 0.6 }}>
              Empresa legalmente constituida en México. RFC disponible para facturación empresarial.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(0,123,255,0.08)' }}>
          <div className="text-[10px] tracking-[0.15em]" style={{ color: '#BDC3C7', opacity: 0.5 }}>
            © {year} GYMBROWEAR · Todos los derechos reservados · Ciudad Juárez, Chih.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] transition-colors" style={{ color: '#BDC3C7', opacity: 0.5 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = '#007BFF'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0.5; e.currentTarget.style.color = '#BDC3C7'; }}>
              Términos B2B
            </a>
            <a href="#" className="text-[10px] transition-colors" style={{ color: '#BDC3C7', opacity: 0.5 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = '#007BFF'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0.5; e.currentTarget.style.color = '#BDC3C7'; }}>
              Privacidad
            </a>
            <div className="w-1 h-1" style={{ borderRadius: '50%', background: '#007BFF', opacity: 0.4 }} />
            <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: '#BDC3C7', opacity: 0.4 }}>
              B2B Only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
