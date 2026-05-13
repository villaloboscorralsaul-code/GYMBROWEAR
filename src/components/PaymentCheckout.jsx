import { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageSquare, User, Mail, Phone, Building2, FileText,
  CheckCircle, ChevronRight, Loader, AlertCircle, RotateCcw,
  Zap, Star, Crown,
} from 'lucide-react';

// ── Clave pública de Mercado Pago ──────────────────────────────────────────
// En producción usa: import.meta.env.VITE_MP_PUBLIC_KEY
// En modo TEST usa la clave que empieza con TEST-
const MP_PUBLIC_KEY = import.meta.env.VITE_MP_PUBLIC_KEY || 'TEST-00000000-0000-0000-0000-000000000000';

const TIERS = [
  {
    id: 'entrada',
    label: 'Lote de Entrada',
    units: '20 piezas',
    price: 5000,
    display: '$5,000',
    margin: '35–45%',
    icon: Zap,
    accent: '#BDC3C7',
    tag: 'Para empezar',
  },
  {
    id: 'expansion',
    label: 'Lote de Expansión',
    units: '50 piezas',
    price: 15000,
    display: '$15,000',
    margin: '40–50%',
    icon: Star,
    accent: '#007BFF',
    tag: '⭐ Más popular',
    featured: true,
  },
  {
    id: 'maestro',
    label: 'Lote Maestro',
    units: '100 piezas',
    price: 30000,
    display: '$30,000',
    margin: '45–55%',
    icon: Crown,
    accent: '#4DA6FF',
    tag: 'Máximo margen',
  },
];

const STEPS = [
  { n: 1, label: 'Paquete' },
  { n: 2, label: 'Tus datos' },
  { n: 3, label: 'Pago' },
  { n: 4, label: '¡Listo!' },
];

// Carga el SDK de Mercado Pago una sola vez
function useMercadoPagoSDK() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.MercadoPago) { setReady(true); return; }
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);
  return ready;
}

// ── Step indicator ─────────────────────────────────────────────────────────
function StepBar({ current }) {
  return (
    <div className="flex items-center mb-8">
      {STEPS.map((s, i) => (
        <div key={s.n} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300"
              style={{
                background: current >= s.n ? '#007BFF' : 'rgba(0,123,255,0.08)',
                color: current >= s.n ? '#FFFFFF' : '#6B7280',
                border: current === s.n ? '2px solid #007BFF' : '1px solid rgba(0,123,255,0.15)',
                boxShadow: current === s.n ? '0 0 16px rgba(0,123,255,0.35)' : 'none',
              }}
            >
              {current > s.n ? <CheckCircle size={14} /> : s.n}
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wide mt-1 text-center w-16 sm:w-20 leading-tight"
              style={{ color: current >= s.n ? '#007BFF' : '#4B5563' }}>
              {s.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="flex-1 h-px mx-1.5 mb-5 transition-all duration-500"
              style={{ background: current > s.n ? '#007BFF' : 'rgba(0,123,255,0.1)' }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Step 1: Elegir paquete ─────────────────────────────────────────────────
function StepSelectTier({ selected, onSelect }) {
  return (
    <div>
      <h3 className="text-white mb-1"
        style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: 'clamp(1.6rem, 6vw, 2rem)', letterSpacing: '0.03em' }}>
        ¿Qué paquete quieres?
      </h3>
      <p className="text-sm mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>
        Toca el que quieras. Puedes cambiarlo antes de pagar.
      </p>

      <div className="flex flex-col gap-3">
        {TIERS.map((tier) => {
          const Icon = tier.icon;
          const isSelected = selected?.id === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => onSelect(tier)}
              className="text-left flex items-center gap-4 p-4 sm:p-5 transition-all duration-300 relative w-full"
              style={{
                background: isSelected ? `${tier.accent}12` : 'rgba(0,51,102,0.25)',
                border: isSelected ? `2px solid ${tier.accent}` : '1px solid rgba(0,123,255,0.15)',
                boxShadow: isSelected ? `0 0 24px ${tier.accent}20` : 'none',
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: `${tier.accent}15`, border: `1px solid ${tier.accent}25` }}>
                <Icon size={20} style={{ color: tier.accent }} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {tier.label}
                  </span>
                  {tier.featured && (
                    <span className="text-[9px] font-bold px-2 py-0.5"
                      style={{ background: '#007BFF', color: '#FFF' }}>
                      {tier.tag}
                    </span>
                  )}
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#BDC3C7' }}>
                  {tier.units} · Ganancia estimada: {tier.margin}
                </div>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <div style={{
                  fontFamily: "'Bebas Neue', Impact, sans-serif",
                  fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
                  lineHeight: 1,
                  background: isSelected
                    ? `linear-gradient(135deg, ${tier.accent}, white)`
                    : 'linear-gradient(135deg, #BDC3C7, white)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {tier.display}
                </div>
                <div className="text-[10px]" style={{ color: '#BDC3C7' }}>MXN</div>
              </div>

              {/* Selected check */}
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <CheckCircle size={18} style={{ color: tier.accent }} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Step 2: Datos del comprador ────────────────────────────────────────────
function StepBuyerInfo({ data, onChange, errors }) {
  const fields = [
    { key: 'name',     label: 'Tu nombre',         placeholder: 'Juan García López',     icon: User,      required: true },
    { key: 'email',    label: 'Tu correo',          placeholder: 'tu@correo.com',         icon: Mail,      required: true,  type: 'email' },
    { key: 'phone',    label: 'WhatsApp / Teléfono',placeholder: 'Ej: 55 1234 5678',      icon: Phone,     required: true,  type: 'tel' },
    { key: 'business', label: 'Nombre de tu tienda',placeholder: 'Mi Tienda Fitness (opcional)', icon: Building2, required: false },
    { key: 'rfc',      label: 'RFC (si necesitas factura)',placeholder: 'GARJ900101ABC',  icon: FileText,  required: false },
  ];

  return (
    <div>
      <h3 className="text-white mb-1"
        style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: 'clamp(1.6rem, 6vw, 2rem)', letterSpacing: '0.03em' }}>
        Tus Datos
      </h3>
      <p className="text-sm mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>
        Solo necesitamos unos datos para enviarte la confirmación. Rápido y fácil.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.key}>
              <label className="block text-xs font-semibold mb-2" style={{ color: '#BDC3C7' }}>
                {field.label} {field.required && <span style={{ color: '#007BFF' }}>*</span>}
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                  <Icon size={15} style={{ color: '#BDC3C7', opacity: 0.6 }} />
                </div>
                <input
                  type={field.type || 'text'}
                  value={data[field.key] || ''}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  // font-size 16px prevents iOS auto-zoom
                  className="w-full pl-10 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(0,51,102,0.25)',
                    border: errors[field.key]
                      ? '1px solid rgba(239,68,68,0.6)'
                      : '1px solid rgba(0,123,255,0.18)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px', // critical — prevents zoom on iOS
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(0,123,255,0.6)';
                    e.target.style.background = 'rgba(0,123,255,0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = errors[field.key]
                      ? '1px solid rgba(239,68,68,0.6)'
                      : '1px solid rgba(0,123,255,0.18)';
                    e.target.style.background = 'rgba(0,51,102,0.25)';
                  }}
                />
              </div>
              {errors[field.key] && (
                <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle size={10} /> {errors[field.key]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-gray-600 mt-6 flex items-start gap-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        <span className="text-champagne mt-0.5">🔒</span>
        Tus datos están protegidos con cifrado SSL. No compartimos tu información con terceros.
      </p>
    </div>
  );
}

// ── Step 3: Brick de pago ──────────────────────────────────────────────────
function StepPayment({ tier, buyer, onSuccess, onError }) {
  const [status, setStatus] = useState('loading'); // loading | ready | processing | error
  const [errorMsg, setErrorMsg] = useState('');
  const controllerRef = useRef(null);
  const sdkReady = useMercadoPagoSDK();

  useEffect(() => {
    if (!sdkReady || !tier) return;

    let cancelled = false;

    async function initBrick() {
      setStatus('loading');

      try {
        // 1. Pedimos al backend que cree una preferencia
        const res = await fetch('/api/create-preference', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tier, buyer }),
        });

        if (!res.ok) throw new Error('No se pudo crear la preferencia.');
        const { id: preferenceId } = await res.json();

        if (cancelled) return;

        // 2. Limpiamos cualquier brick anterior
        if (controllerRef.current) {
          try { await controllerRef.current.unmount(); } catch {}
        }

        // 3. Inicializamos el brick con la preferencia
        const mp = new window.MercadoPago(MP_PUBLIC_KEY, { locale: 'es-MX' });
        const builder = mp.bricks();

        controllerRef.current = await builder.create('payment', 'mp-brick-container', {
          initialization: {
            amount: tier.price,
            preferenceId,
          },
          customization: {
            visual: {
              style: {
                theme: 'dark',
                customVariables: {
                  textPrimaryColor: '#FFFFFF',
                  textSecondaryColor: '#BDC3C7',
                  inputBackgroundColor: '#002244',
                  formBackgroundColor: 'transparent',
                  baseColor: '#007BFF',
                  baseColorFirstVariant: '#4DA6FF',
                  baseColorSecondVariant: '#003366',
                  errorColor: '#F87171',
                  outlinePrimaryColor: 'rgba(0,123,255,0.5)',
                  buttonTextColor: '#FFFFFF',
                },
              },
              hideFormTitle: true,
              hidePaymentButton: false,
            },
            paymentMethods: {
              creditCard: 'all',
              debitCard: 'all',
              ticket: 'all',        // OXXO, pagoefectivo, etc.
              bankTransfer: 'all',  // SPEI
              mercadoPago: 'all',   // Saldo MP, MSI
              maxInstallments: 12,
            },
          },
          callbacks: {
            onReady: () => {
              if (!cancelled) setStatus('ready');
            },
            onSubmit: async ({ formData: paymentData }) => {
              setStatus('processing');
              try {
                const payRes = await fetch('/api/process-payment', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ ...paymentData, buyer, tier }),
                });
                const result = await payRes.json();

                if (result.status === 'approved') {
                  onSuccess(result);
                } else if (result.status === 'pending') {
                  // OXXO / SPEI quedan pendientes — también es éxito
                  onSuccess({ ...result, pending: true });
                } else {
                  setErrorMsg('El pago fue rechazado. Intenta con otro método.');
                  setStatus('error');
                }
              } catch {
                setErrorMsg('Error de conexión. Verifica tu internet e intenta de nuevo.');
                setStatus('error');
              }
            },
            onError: (err) => {
              console.error('[MP Brick]', err);
              if (!cancelled) {
                setErrorMsg('Ocurrió un error en el formulario de pago.');
                setStatus('error');
              }
            },
          },
        });
      } catch (err) {
        if (!cancelled) {
          setErrorMsg(err.message || 'No se pudo cargar el formulario de pago.');
          setStatus('error');
          onError?.(err);
        }
      }
    }

    initBrick();

    return () => {
      cancelled = true;
      if (controllerRef.current) {
        try { controllerRef.current.unmount(); } catch {}
      }
    };
  }, [sdkReady, tier, buyer, onSuccess, onError]);

  return (
    <div>
      <h3
        className="text-titanium mb-1"
        style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2rem', letterSpacing: '0.03em' }}
      >
        Completa tu Pago
      </h3>

      {/* Order summary */}
      <div className="flex items-center justify-between p-3 mb-6 mt-2"
        style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.2)' }}>
        <div>
          <div className="text-[11px] font-bold text-titanium" style={{ fontFamily: "'Inter', sans-serif" }}>{tier?.label}</div>
          <div className="text-[10px] text-gray-500">{tier?.units} · Margen estimado {tier?.margin}</div>
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: '1.6rem',
            background: 'linear-gradient(135deg, #C9A96E, #E8D5B0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {tier?.display} <span style={{ fontSize: '0.9rem', WebkitTextFillColor: '#6B7280' }}>MXN</span>
        </div>
      </div>

      {/* Brick container */}
      <div className="relative min-h-40">
        {/* Loading state */}
        {status === 'loading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
            style={{ background: 'rgba(10,10,10,0.7)' }}>
            <Loader size={22} className="text-champagne animate-spin" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400">Cargando métodos de pago...</span>
          </div>
        )}

        {/* Processing state */}
        {status === 'processing' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
            style={{ background: 'rgba(10,10,10,0.85)' }}>
            <Loader size={22} className="text-champagne animate-spin" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400">Procesando pago...</span>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="p-5 flex flex-col items-center gap-4 text-center"
            style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
            <AlertCircle size={28} className="text-red-400" />
            <p className="text-[13px] text-gray-400" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {errorMsg}
            </p>
            <button
              onClick={() => { setStatus('loading'); setErrorMsg(''); }}
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-champagne hover:underline"
            >
              <RotateCcw size={11} /> Reintentar
            </button>
          </div>
        )}

        {/* El brick de MP se monta aquí */}
        <div id="mp-brick-container" className={status === 'error' ? 'hidden' : ''} />
      </div>

      {/* Security note */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
        <span className="text-green-500 text-xs">🔒</span>
        <p className="text-[10px] text-gray-600">
          Pago procesado por <strong className="text-gray-500">Mercado Pago</strong>. SSL 256-bit · 3D Secure · PCI DSS Nivel 1. Gymbrowear nunca ve los datos de tu tarjeta.
        </p>
      </div>
    </div>
  );
}

// ── Step 4: Éxito ──────────────────────────────────────────────────────────
function StepSuccess({ tier, result, onReset }) {
  const isPending = result?.pending;
  return (
    <div className="text-center py-6">
      <div className="flex items-center justify-center mb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: isPending ? 'rgba(234,179,8,0.1)' : 'rgba(34,197,94,0.1)',
            border: isPending ? '2px solid rgba(234,179,8,0.4)' : '2px solid rgba(34,197,94,0.4)',
          }}
        >
          <CheckCircle size={36} style={{ color: isPending ? '#EAB308' : '#22C55E' }} />
        </div>
      </div>

      <h3
        className="text-titanium mb-3"
        style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2.5rem', letterSpacing: '0.03em' }}
      >
        {isPending ? '¡Pago Recibido!' : '¡Pedido Confirmado!'}
      </h3>

      <p
        className="text-gray-400 max-w-sm mx-auto mb-8 leading-relaxed"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.95rem' }}
      >
        {isPending
          ? 'Tu pago está siendo procesado (OXXO / SPEI puede tardar hasta 24H). Te contactaremos en cuanto confirmemos.'
          : `Tu ${tier?.label} ha sido confirmado. Te enviaremos la guía de rastreo por WhatsApp en cuanto despachemos.`}
      </p>

      <div className="inline-flex flex-col sm:flex-row items-center gap-3">
        <a
          href="https://wa.me/19153559631?text=Hola%21%20Acabo%20de%20realizar%20un%20pago%20en%20la%20página."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-6 py-3 text-[10px] tracking-[0.2em] inline-flex items-center gap-2"
        >
          <MessageSquare size={13} />
          Confirmar por WhatsApp
        </a>
        <button
          onClick={onReset}
          className="text-[10px] tracking-[0.15em] uppercase text-gray-500 hover:text-champagne transition-colors"
        >
          Hacer otro pedido
        </button>
      </div>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────
export default function PaymentCheckout() {
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState(null);
  const [buyerData, setBuyerData] = useState({ name: '', email: '', phone: '', business: '', rfc: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [paymentResult, setPaymentResult] = useState(null);

  function validateStep2() {
    const errs = {};
    if (!buyerData.name.trim()) errs.name = 'Ingresa tu nombre completo.';
    if (!buyerData.email.includes('@')) errs.email = 'Ingresa un email válido.';
    if (buyerData.phone.replace(/\D/g, '').length < 10) errs.phone = 'Ingresa un teléfono de 10 dígitos.';
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleNext = () => {
    if (step === 1 && !selectedTier) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => s + 1);
  };

  const handleSuccess = useCallback((result) => {
    setPaymentResult(result);
    setStep(4);
  }, []);

  const handleReset = () => {
    setStep(1);
    setSelectedTier(null);
    setBuyerData({ name: '', email: '', phone: '', business: '', rfc: '' });
    setFieldErrors({});
    setPaymentResult(null);
  };

  return (
    <section id="pagar" className="py-14 sm:py-24 relative overflow-hidden"
      style={{ background: '#001829' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,123,255,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
            Pago 100% Seguro
          </span>
        </div>

        <div className="animate-on-scroll animate-delay-100 mb-3">
          <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: 'clamp(2.2rem, 8vw, 4rem)', letterSpacing: '0.02em', lineHeight: 1 }}
            className="text-white">
            Paga Aquí Mismo.
            <span className="text-cobalt-gradient block">Sin Complicaciones.</span>
          </h2>
        </div>
        <p className="animate-on-scroll animate-delay-200 text-sm mb-8 sm:mb-12"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7', maxWidth: '30rem' }}>
          Tarjeta, OXXO o transferencia. Sin crear cuenta. En menos de 5 minutos.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* ── Checkout form (2/3) ── */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="p-5 sm:p-8"
              style={{ background: 'rgba(0,34,68,0.6)', border: '1px solid rgba(0,123,255,0.15)', backdropFilter: 'blur(16px)' }}>
              <StepBar current={step} />

              {step === 1 && <StepSelectTier selected={selectedTier} onSelect={setSelectedTier} />}
              {step === 2 && (
                <StepBuyerInfo
                  data={buyerData}
                  onChange={(key, val) => {
                    setBuyerData((d) => ({ ...d, [key]: val }));
                    setFieldErrors((e) => ({ ...e, [key]: '' }));
                  }}
                  errors={fieldErrors}
                />
              )}
              {step === 3 && (
                <StepPayment tier={selectedTier} buyer={buyerData}
                  onSuccess={handleSuccess} onError={() => {}} />
              )}
              {step === 4 && (
                <StepSuccess tier={selectedTier} result={paymentResult} onReset={handleReset} />
              )}

              {/* Navigation buttons — full width on mobile */}
              {step < 3 && (
                <div className="flex items-center justify-between mt-7 pt-5"
                  style={{ borderTop: '1px solid rgba(0,123,255,0.1)' }}>
                  {step > 1 ? (
                    <button onClick={() => setStep((s) => s - 1)}
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 px-3"
                      style={{ color: '#BDC3C7' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#007BFF'}
                      onMouseLeave={e => e.currentTarget.style.color = '#BDC3C7'}>
                      ← Atrás
                    </button>
                  ) : <div />}
                  <button onClick={handleNext}
                    disabled={step === 1 && !selectedTier}
                    className="btn-primary py-4 px-8 text-sm font-bold tracking-wide inline-flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed">
                    {step === 2 ? '💳 Ir a Pagar' : 'Continuar →'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── Sidebar (1/3) — shown first on mobile as trust strip ── */}
          <div className="space-y-4 order-1 lg:order-2">
            {/* Payment methods */}
            <div className="p-5" style={{ background: 'rgba(0,51,102,0.3)', border: '1px solid rgba(0,123,255,0.15)' }}>
              <div className="text-xs font-bold text-white mb-3">Formas de pago aceptadas</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                {[
                  { label: '💳 Tarjeta crédito', color: '#1A56DB' },
                  { label: '💳 Débito',           color: '#059669' },
                  { label: '🏪 OXXO Pay',          color: '#E84B23' },
                  { label: '🏦 SPEI / Transferencia', color: '#007BFF' },
                  { label: '📱 Mercado Pago',      color: '#009EE3' },
                  { label: '📅 Hasta 12 MSI',      color: '#7C3AED' },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2 py-2 px-2.5"
                    style={{ background: `${m.color}10`, border: `1px solid ${m.color}20` }}>
                    <span className="text-xs leading-snug font-medium" style={{ color: '#BDC3C7', fontFamily: "'Inter', sans-serif" }}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security seals — simple and clear */}
            <div className="p-5" style={{ background: 'rgba(0,51,102,0.3)', border: '1px solid rgba(0,123,255,0.15)' }}>
              <div className="text-xs font-bold text-white mb-3">Tu pago está protegido</div>
              <div className="space-y-2.5">
                {[
                  '🔒 Cifrado SSL de 256 bits',
                  '🛡️ PCI DSS — estándar bancario',
                  '✅ Verificación 3D Secure',
                  '🏦 Procesado por Mercado Pago',
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="text-[13px] leading-snug" style={{ color: '#BDC3C7', fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp alternative */}
            <a href="https://wa.me/19153559631?text=Hola%21%20Quiero%20hacer%20un%20pedido%20mayorista."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ¿Prefieres por WhatsApp?
                </div>
                <div className="text-xs" style={{ color: '#BDC3C7' }}>(915) 355-9631 · también aceptamos pedidos ahí</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
