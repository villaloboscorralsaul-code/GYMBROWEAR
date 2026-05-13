import { useState, useEffect } from 'react';

const NOTIFICATIONS = [
  { name: 'Carlos M.', city: 'Guadalajara, Jal.', action: 'compró Lote Expansión · 50 piezas', ago: '2 min', tier: 'EXPANSIÓN' },
  { name: 'María R.', city: 'Ciudad de México', action: 'compró Lote Maestro · 100 piezas', ago: '7 min', tier: 'MAESTRO' },
  { name: 'Diego S.', city: 'Monterrey, NL', action: 'compró Lote Entrada · 20 piezas', ago: '12 min', tier: 'ENTRADA' },
  { name: 'Ana L.', city: 'Puebla, Pue.', action: 'compró Lote Expansión · 50 piezas', ago: '18 min', tier: 'EXPANSIÓN' },
  { name: 'Roberto V.', city: 'Tijuana, BC', action: 'compró Lote Maestro · 100 piezas', ago: '24 min', tier: 'MAESTRO' },
  { name: 'Laura P.', city: 'León, Gto.', action: 'compró Lote Expansión · 50 piezas', ago: '31 min', tier: 'EXPANSIÓN' },
  { name: 'José A.', city: 'Chihuahua, Chih.', action: 'compró Lote Entrada · 20 piezas', ago: '38 min', tier: 'ENTRADA' },
  { name: 'Sofía T.', city: 'Querétaro, Qro.', action: 'compró Lote Maestro · 100 piezas', ago: '45 min', tier: 'MAESTRO' },
];

export default function LiveNotifications() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => { setStarted(true); setVisible(true); }, 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 700);
    }, 5500);
    return () => clearInterval(interval);
  }, [started]);

  if (!started) return null;

  const n = NOTIFICATIONS[current];

  return (
    <div
      className="fixed bottom-24 left-3 sm:left-5 z-40 w-72 sm:w-80 transition-all duration-500"
      style={{
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="relative overflow-hidden"
        style={{
          background: 'rgba(0,16,36,0.97)',
          border: '1px solid rgba(0,123,255,0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,123,255,0.06), 0 0 30px rgba(0,123,255,0.08)',
        }}>

        {/* Top shimmer line */}
        <div className="h-px shimmer-border" />

        <div className="flex items-start gap-3 p-3.5 pr-4">
          {/* Avatar with initials */}
          <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #003366, #007BFF)', border: '1px solid rgba(0,123,255,0.4)' }}>
            {n.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            {/* Name + badge */}
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-bold text-white truncate">{n.name}</span>
              <span className="flex-shrink-0 text-[8px] px-1.5 py-px font-bold tracking-wide"
                style={{ background: 'rgba(37,211,102,0.15)', color: '#25D366', border: '1px solid rgba(37,211,102,0.25)' }}>
                ✓ VERIFICADO
              </span>
            </div>

            {/* Action */}
            <div className="text-[11px] leading-snug mb-1.5" style={{ color: '#E2E8F0' }}>
              {n.action}
            </div>

            {/* City + time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="live-dot" />
                <span className="text-[9px]" style={{ color: '#BDC3C7', opacity: 0.65 }}>
                  {n.city} · hace {n.ago}
                </span>
              </div>
              <span className="text-[8px] font-bold px-1.5 py-px"
                style={{ background: 'rgba(0,123,255,0.1)', color: '#4DA6FF', border: '1px solid rgba(0,123,255,0.2)' }}>
                {n.tier}
              </span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5" style={{ background: 'rgba(0,123,255,0.1)' }}>
          <div className="h-full" key={current}
            style={{
              background: 'linear-gradient(90deg, #007BFF, #4DA6FF)',
              animation: 'ticker 5.5s linear forwards',
              width: '100%',
              transformOrigin: 'left',
            }} />
        </div>
      </div>
    </div>
  );
}
