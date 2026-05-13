import { BarChart2, Package, Repeat, Globe, ShieldCheck, Layers } from 'lucide-react';

const pillars = [
  { icon: BarChart2, title: 'Selección Basada en Datos',      body: 'Analizamos tendencias de búsqueda y velocidad de venta por región para curar exactamente el inventario que tu mercado demanda.',         accent: '#007BFF' },
  { icon: Repeat,    title: 'Rotación Garantizada',           body: 'Nuestro modelo predictivo asegura un sell-through superior al 90%. No compramos para almacenar — compramos para vender.',               accent: '#4DA6FF' },
  { icon: Package,   title: 'Logística de Élite',             body: 'Packaging premium, trazabilidad en tiempo real y red de mensajería express desde Ciudad Juárez a todo México.',                          accent: '#007BFF' },
  { icon: ShieldCheck,title:'Autenticidad Verificada',        body: 'Cada pieza pasa por protocolo de verificación. Certificado de autenticidad Gymshark incluido en cada envío.',                            accent: '#4DA6FF' },
  { icon: Globe,     title: 'Red de Distribución Nacional',   body: 'Envíos desde Ciudad Juárez, Chihuahua. Entregas express CDMX & GDL en 24–48H, resto de México en 48–72H.',                             accent: '#007BFF' },
  { icon: Layers,    title: 'Inventario Estratificado',       body: 'Diversificación de SKUs por temporada, talla y categoría. Siempre un portafolio equilibrado para tu negocio.',                          accent: '#4DA6FF' },
];

const BIG_STAT = { fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '5rem', lineHeight: 1,
  background: 'linear-gradient(135deg, #007BFF, #4DA6FF)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

export default function Strategy() {
  return (
    <section id="strategy" className="py-32 relative overflow-hidden"
      style={{ background: '#001829' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,123,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="animate-on-scroll flex items-center gap-4 mb-6">
              <div className="w-8 h-px" style={{ background: 'rgba(0,123,255,0.5)' }} />
              <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(0,123,255,0.7)' }}>
                The Strategic Ally
              </span>
            </div>

            <h2 className="animate-on-scroll animate-delay-100 text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '0.02em', lineHeight: 1 }}>
              No Solo Vendemos
              <span className="text-cobalt-gradient block">Ropa.</span>
            </h2>

            <p className="animate-on-scroll animate-delay-200 leading-relaxed mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', lineHeight: '1.8', color: '#BDC3C7' }}>
              Gymbrowear existe para que tu negocio escale. Cada lote que cubramos contiene horas de análisis de mercado, inteligencia competitiva y estrategia de precios — todo para que tu tasa de conversión supere a la competencia.
            </p>

            <p className="animate-on-scroll animate-delay-300 leading-relaxed mb-10"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.95rem', lineHeight: '1.75', color: '#BDC3C7', opacity: 0.7 }}>
              Operamos desde Ciudad Juárez, Chihuahua con distribución a todo México. Nos asociamos con retailers que buscan liderar su categoría, no solo competir.
            </p>

            <div className="animate-on-scroll animate-delay-400 flex items-end gap-6 mb-10">
              <div>
                <div style={BIG_STAT}>92%</div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: '#BDC3C7' }}>Sell-Through Promedio</div>
              </div>
              <div className="w-px h-16" style={{ background: 'rgba(0,123,255,0.2)' }} />
              <div>
                <div style={BIG_STAT}>3X</div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: '#BDC3C7' }}>ROI Promedio / Lote</div>
              </div>
            </div>

            <a href="#pagar"
              className="animate-on-scroll animate-delay-400 btn-primary inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.2em]">
              Conoce Nuestra Metodología
            </a>
          </div>

          {/* Right: pillar grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title}
                  className={`animate-on-scroll animate-delay-${Math.min((i + 1) * 100, 400)} p-6 group hover:-translate-y-1 transition-all duration-400`}
                  style={{ background: 'rgba(0,51,102,0.25)', border: '1px solid rgba(0,123,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-9 h-9 flex items-center justify-center mb-4"
                    style={{ background: `${pillar.accent}12`, border: `1px solid ${pillar.accent}25` }}>
                    <Icon size={16} style={{ color: pillar.accent }} />
                  </div>
                  <h3 className="text-[13px] font-bold text-white mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#BDC3C7' }}>
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
