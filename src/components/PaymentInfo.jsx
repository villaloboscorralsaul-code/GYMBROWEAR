import { MapPin, Clock, Phone, ShieldCheck, Lock, AlertCircle } from 'lucide-react';

// ─── EDITABLE PLACEHOLDERS ─────────────────────────────────────────────────
// Replace these values with your real info before going live
const BUSINESS_INFO = {
  address: 'Calle Industria 123, Col. Centro Industrial',
  city: 'Ciudad de México, CDMX, C.P. 06600',
  maps: 'https://maps.google.com/?q=19.4326,-99.1332', // ← replace with your coordinates
  hours: 'Lunes a Viernes · 9:00 – 18:00 CST',
  phone: '+52 (55) XXXX-XXXX', // ← replace with your number
  whatsapp: 'https://wa.me/521XXXXXXXXXX',
  bankName: 'BBVA México',           // ← replace
  bankClabe: '012 XXXXXXXXXXXXXXXX', // ← replace — NEVER show full CLABE
  bankHolder: 'GYMBROWEAR S.A. de C.V.', // ← replace
};

// ─── PAYMENT METHODS ───────────────────────────────────────────────────────
const paymentMethods = [
  {
    id: 'spei',
    label: 'Transferencia SPEI',
    sub: 'Interbancaria — instantánea',
    description: 'Banco a banco en segundos. Aplica para cualquier banco de México. Sin comisiones adicionales.',
    badge: 'SIN COMISIÓN',
    badgeColor: '#22c55e',
    recommended: true,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="4" fill="#1a1a2e"/>
        <path d="M8 20h24M20 8v24" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="4" fill="#C9A96E"/>
      </svg>
    ),
  },
  {
    id: 'mercadopago',
    label: 'Mercado Pago',
    sub: 'Tarjeta crédito / débito',
    description: 'Visa, Mastercard, American Express. Pago seguro con autenticación 3D Secure.',
    badge: 'MESES SIN INTERESES',
    badgeColor: '#009ee3',
    recommended: false,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="4" fill="#009ee3"/>
        <circle cx="15" cy="20" r="8" fill="#fff" fillOpacity="0.9"/>
        <circle cx="25" cy="20" r="8" fill="#ffdb00" fillOpacity="0.9"/>
      </svg>
    ),
  },
  {
    id: 'oxxo',
    label: 'OXXO Pay',
    sub: 'Pago en efectivo',
    description: 'Genera tu ficha de pago y paga en cualquier tienda OXXO. Confirmación en 24H.',
    badge: 'EN EFECTIVO',
    badgeColor: '#e84b23',
    recommended: false,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="4" fill="#e84b23"/>
        <text x="7" y="26" fontFamily="Arial Black" fontWeight="900" fontSize="12" fill="white">OXXO</text>
      </svg>
    ),
  },
  {
    id: 'paypal',
    label: 'PayPal',
    sub: 'Compradores del extranjero',
    description: 'Para distribuidores fuera de México. Protección al comprador incluida.',
    badge: 'INTERNACIONAL',
    badgeColor: '#003087',
    recommended: false,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect width="40" height="40" rx="4" fill="#003087"/>
        <text x="6" y="26" fontFamily="Arial" fontWeight="700" fontSize="11" fill="#009cde">Pay</text>
        <text x="18" y="26" fontFamily="Arial" fontWeight="700" fontSize="11" fill="white">Pal</text>
      </svg>
    ),
  },
];

const securitySeals = [
  { label: 'SSL 256-bit', icon: Lock, desc: 'Conexión cifrada' },
  { label: 'Verificado', icon: ShieldCheck, desc: 'Empresa registrada' },
  { label: '3D Secure', icon: Lock, desc: 'Autenticación doble' },
];

export default function PaymentInfo() {
  return (
    <section id="pagos" className="py-28 bg-obsidian relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse 70% 50% at 20% 80%, rgba(168,197,218,0.03), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Label */}
        <div className="animate-on-scroll flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-champagne/50" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-champagne/70">Pagos & Ubicación</span>
        </div>

        <div className="animate-on-scroll animate-delay-100 mb-16">
          <h2
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '0.02em', lineHeight: 1 }}
            className="text-titanium"
          >
            Paga Como
            <span className="text-champagne-gradient block">Más te Convenga.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: Payment methods (2/3 width) */}
          <div className="lg:col-span-2 space-y-4">
            {paymentMethods.map((method, i) => (
              <div
                key={method.id}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} glass-card p-5 flex items-start gap-4 group hover:-translate-y-0.5 transition-all duration-300 ${
                  method.recommended ? 'border-champagne/25' : ''
                }`}
                style={method.recommended ? { border: '1px solid rgba(201,169,110,0.25)', background: 'rgba(201,169,110,0.04)' } : {}}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">{method.icon}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3
                      className="text-[13px] font-bold text-titanium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {method.label}
                    </h3>
                    <span
                      className="text-[8px] font-bold tracking-[0.2em] px-2 py-0.5"
                      style={{ background: `${method.badgeColor}18`, color: method.badgeColor, border: `1px solid ${method.badgeColor}30` }}
                    >
                      {method.badge}
                    </span>
                    {method.recommended && (
                      <span className="text-[8px] font-bold tracking-[0.2em] px-2 py-0.5 text-obsidian"
                        style={{ background: '#C9A96E' }}>
                        RECOMENDADO
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-gray-600 mb-1">{method.sub}</div>
                  <p
                    className="text-[11px] text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {method.description}
                  </p>
                </div>
              </div>
            ))}

            {/* SPEI bank details */}
            <div className="animate-on-scroll glass-card p-5 border-dashed" style={{ borderColor: 'rgba(201,169,110,0.2)' }}>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={13} className="text-champagne flex-shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-champagne">
                  Datos Bancarios para SPEI
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Banco', value: BUSINESS_INFO.bankName },
                  { label: 'Titular', value: BUSINESS_INFO.bankHolder },
                  { label: 'CLABE', value: BUSINESS_INFO.bankClabe },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[9px] tracking-[0.25em] uppercase text-gray-600 mb-1">{item.label}</div>
                    <div className="text-[12px] font-semibold text-titanium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-600 mt-4 flex items-start gap-1.5">
                <ShieldCheck size={11} className="flex-shrink-0 mt-0.5 text-green-500" />
                Envía el comprobante por WhatsApp. Confirmamos y despachamos el mismo día hábil.
              </p>
            </div>

            {/* Security seals */}
            <div className="animate-on-scroll flex items-center gap-6 pt-2">
              {securitySeals.map((seal) => {
                const Icon = seal.icon;
                return (
                  <div key={seal.label} className="flex items-center gap-2">
                    <Icon size={12} className="text-green-500 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>{seal.label}</div>
                      <div className="text-[9px] text-gray-600">{seal.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Location / Contact card (1/3 width) */}
          <div className="space-y-4">
            {/* Address card */}
            <div className="animate-on-scroll glass-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={14} className="text-champagne" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-champagne">
                  Nuestra Ubicación
                </span>
              </div>

              {/* Map placeholder */}
              <a
                href={BUSINESS_INFO.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-5 overflow-hidden group relative"
                style={{ height: '140px', background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)', border: '1px solid rgba(201,169,110,0.1)' }}
              >
                {/* Stylized map grid */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Center pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-champagne animate-ping absolute inset-0 opacity-40" />
                    <div className="w-4 h-4 rounded-full bg-champagne relative z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-obsidian" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] tracking-[0.15em] uppercase text-gray-500 group-hover:text-champagne transition-colors">
                  Ver en Maps →
                </div>
              </a>

              <div className="space-y-4">
                <div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-gray-600 mb-1">Dirección</div>
                  <div className="text-[12px] text-titanium leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{BUSINESS_INFO.city}</div>
                </div>

                <div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-gray-600 mb-1">Horario de atención</div>
                  <div className="flex items-center gap-2">
                    <Clock size={11} className="text-champagne flex-shrink-0" />
                    <span className="text-[11px] text-gray-400">{BUSINESS_INFO.hours}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-gray-600 mb-1">Teléfono</div>
                  <div className="flex items-center gap-2">
                    <Phone size={11} className="text-champagne flex-shrink-0" />
                    <span className="text-[11px] text-gray-400">{BUSINESS_INFO.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll flex items-center justify-between p-5 group transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.06))',
                border: '1px solid rgba(37,211,102,0.25)',
              }}
            >
              <div>
                <div className="text-[12px] font-bold text-titanium mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ¿Dudas sobre el pago?
                </div>
                <div className="text-[10px] text-gray-500">Te guiamos por WhatsApp</div>
              </div>
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>

            {/* Trust note */}
            <div className="animate-on-scroll p-4 flex items-start gap-3" style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
              <ShieldCheck size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-gray-600 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Empresa legalmente constituida en México. RFC disponible para facturación. Aceptamos operaciones con empresas que requieren factura A.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
