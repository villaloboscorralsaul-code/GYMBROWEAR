const whatsappNumber = '19153559631';

const createWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Lotes', href: '#lotes' },
  { label: 'Logistica', href: '#logistica' },
  { label: 'Privacidad', href: '#privacidad' },
];

const highlights = [
  { label: 'Operacion', value: 'Ciudad Juarez, Chihuahua' },
  { label: 'Cobertura', value: 'Envios a toda la Republica' },
  { label: 'Respuesta', value: 'Atencion comercial por WhatsApp' },
];

const packages = [
  {
    name: 'PAQUETE EMPRENDEDOR',
    pieces: '10 Piezas',
    price: '$3,200',
    note: 'Entrada precisa para probar demanda y comenzar con una seleccion original.',
    message:
      'Hola, quiero cotizar el PAQUETE EMPRENDEDOR de 10 piezas de GYMBROWEAR.',
  },
  {
    name: 'PAQUETE PRO',
    pieces: '30 Piezas',
    price: '$9,000',
    note: 'Volumen balanceado para boutiques, resellers y aperturas con rotacion rapida.',
    message:
      'Hola, quiero consultar disponibilidad del PAQUETE PRO de 30 piezas de GYMBROWEAR.',
  },
  {
    name: 'PAQUETE ELITE',
    pieces: '50 Piezas',
    price: '$14,500',
    note: 'Asignacion prioritaria para operaciones con enfoque comercial y recompra continua.',
    message:
      'Hola, quiero contactar a ventas por el PAQUETE ELITE de 50 piezas de GYMBROWEAR.',
  },
];

const pillars = [
  {
    index: '01',
    title: 'Autenticidad Garantizada',
    body: 'Inventario 100% original con etiquetas de fabrica y validacion orientada a clientes que necesitan vender con certeza.',
  },
  {
    index: '02',
    title: 'Seleccion Premium',
    body: 'Curaduria enfocada en texturas, siluetas y tallas de alta demanda para proteger rotacion y percepcion de valor.',
  },
  {
    index: '03',
    title: 'Distribucion Nacional',
    body: 'Envios asegurados y directos desde nuestra central en Ciudad Juarez hacia toda la Republica, con seguimiento comercial puntual.',
  },
];

const policies = [
  {
    id: 'envios',
    title: 'Politica de Envio',
    body: 'Cada lote se confirma por WhatsApp antes de apartarse. Los tiempos dependen de volumen, destino y validacion de existencias; la coordinacion sale directamente desde Ciudad Juarez.',
  },
  {
    id: 'privacidad',
    title: 'Politica de Privacidad',
    body: 'Este sitio solo capta solicitudes comerciales. No hay cuentas, carrito, checkout ni almacenamiento de datos de pago; tus datos se usan unicamente para cotizacion, seguimiento y logistica.',
  },
];

const currentYear = new Date().getFullYear();

const primaryCta = createWhatsAppLink(
  'Hola, quiero cotizar un lote mayorista para mi negocio con GYMBROWEAR.',
);
const secondaryCta = createWhatsAppLink(
  'Hola, quiero consultar disponibilidad de lotes mayoristas con GYMBROWEAR.',
);
const footerCta = createWhatsAppLink(
  'Hola, quiero contactar al equipo de ventas de GYMBROWEAR.',
);

export default function App() {
  return (
    <div className="min-h-screen bg-jet text-white antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-32 bg-[radial-gradient(circle_at_top,rgba(196,162,106,0.16),transparent_68%)]"
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#inicio"
            className="text-[0.72rem] font-medium uppercase tracking-[0.5em] text-white transition-opacity duration-300 hover:opacity-80"
          >
            GYMBROWEAR
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.7rem] uppercase tracking-[0.34em] text-pearl/70 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={secondaryCta}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-champagne/40 px-5 text-center text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-champagne hover:bg-white/5"
          >
            <span className="md:hidden">Cotizar Lote</span>
            <span className="hidden md:inline">Consultar Disponibilidad</span>
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="inicio"
          className="scroll-mt-24 overflow-hidden border-b border-white/10"
        >
          <div className="relative isolate">
            <div className="absolute inset-0">
              <img
                src="/hero-editorial.jpeg"
                alt=""
                className="h-full w-full object-cover object-center opacity-35"
              />
              <div className="absolute inset-0 bg-black/75" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.7)_52%,rgba(0,0,0,0.92)_100%)]" />
            </div>

            <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-16 px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pt-28">
              <div className="flex max-w-3xl flex-col justify-end">
                <p className="luxury-kicker mb-6">Division Mayorista</p>
                <h1 className="max-w-4xl font-display text-[3.5rem] uppercase leading-[0.9] tracking-[0.08em] text-white sm:text-[4.9rem] lg:text-[7rem]">
                  ESCALA TU NEGOCIO CON CALIDAD ORIGINAL
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-7 text-graphite sm:text-base">
                  Lotes mayoristas de ropa deportiva premium. Logistica exacta
                  para todo el pais.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={primaryCta}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-center text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-pearl"
                  >
                    Cotizar Lote
                  </a>
                  <a
                    href={footerCta}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-center text-[0.74rem] font-medium uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-champagne/60 hover:bg-white/[0.04]"
                  >
                    Contactar a Ventas
                  </a>
                </div>
              </div>

              <aside className="luxury-panel luxury-shadow self-end p-6 sm:p-8 lg:justify-self-end">
                <div className="mb-8">
                  <p className="text-[0.62rem] uppercase tracking-[0.42em] text-pearl/60">
                    GYMBROWEAR
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-graphite">
                    Plataforma corporativa enfocada en captacion de leads para
                    negocios, boutiques y resellers que buscan inventario
                    premium sin friccion operativa.
                  </p>
                </div>

                <div className="space-y-5">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                    >
                      <p className="text-[0.62rem] uppercase tracking-[0.4em] text-pearl/50">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/90">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="lotes"
          className="scroll-mt-24 border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="luxury-kicker">Inversion en Lotes</p>
              <h2 className="mt-4 font-display text-[2.6rem] uppercase leading-[0.92] tracking-[0.08em] text-white sm:text-[3.6rem]">
                Los lotes que convierten inventario en crecimiento.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-graphite sm:text-base">
                Tres escalas de entrada para negocios que prefieren empezar con
                claridad, volumen real y una conversacion directa con ventas.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {packages.map((item, index) => (
                <article
                  key={item.name}
                  className={`luxury-panel luxury-shadow flex flex-col justify-between p-6 sm:p-8 ${
                    index === 1 ? 'border-champagne/35 bg-white/[0.045]' : ''
                  }`}
                >
                  <div>
                    <p className="text-[0.64rem] uppercase tracking-[0.44em] text-pearl/55">
                      {item.name}
                    </p>
                    <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                      <p className="font-display text-[3rem] uppercase leading-none tracking-[0.08em] text-white">
                        {item.pieces}
                      </p>
                      <p className="text-lg font-medium tracking-[0.18em] text-champagne">
                        {item.price}
                      </p>
                    </div>
                    <p className="mt-6 max-w-sm text-sm leading-7 text-graphite">
                      {item.note}
                    </p>
                  </div>

                  <a
                    href={createWhatsAppLink(item.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-center text-[0.7rem] font-medium uppercase tracking-[0.32em] text-white transition-all duration-300 hover:border-champagne/60 hover:bg-white/[0.04]"
                  >
                    Solicitar Paquete
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="logistica"
          className="scroll-mt-24 border-b border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <p className="luxury-kicker">Confianza y Logistica</p>
              <h2 className="mt-4 font-display text-[2.6rem] uppercase leading-[0.92] tracking-[0.08em] text-white sm:text-[3.6rem]">
                Una operacion sobria, precisa y lista para escalar contigo.
              </h2>
              <p className="mt-5 text-sm leading-7 text-graphite sm:text-base">
                GYMBROWEAR funciona como un frente comercial limpio: menos
                distracciones, mas control de relacion y una sola ruta de
                conversion hacia ventas por WhatsApp Business.
              </p>
            </div>

            <div className="space-y-5">
              {pillars.map((item) => (
                <article
                  key={item.index}
                  className="luxury-panel luxury-shadow p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <p className="font-display text-[2rem] uppercase leading-none tracking-[0.16em] text-champagne">
                      {item.index}
                    </p>
                    <div>
                      <h3 className="text-lg uppercase tracking-[0.2em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-graphite sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="luxury-divider mb-10" />
            <div className="grid gap-5 md:grid-cols-2">
              {policies.map((policy) => (
                <article
                  key={policy.id}
                  id={policy.id}
                  className="luxury-panel scroll-mt-24 p-6 sm:p-8"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.42em] text-pearl/55">
                    Informacion Legal
                  </p>
                  <h3 className="mt-4 text-base uppercase tracking-[0.22em] text-white">
                    {policy.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-graphite sm:text-base">
                    {policy.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href="#inicio"
              className="text-[0.78rem] font-medium uppercase tracking-[0.54em] text-white"
            >
              GYMBROWEAR
            </a>
            <p className="mt-4 max-w-lg text-sm leading-7 text-graphite">
              Landing corporativa orientada a cotizacion de lotes mayoristas de
              ropa deportiva premium.
            </p>
            <p className="mt-4 text-[0.68rem] uppercase tracking-[0.34em] text-pearl/55">
              {currentYear} GYMBROWEAR
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-5 text-[0.7rem] uppercase tracking-[0.28em] text-pearl/65">
              <a href="#envios" className="transition-colors hover:text-white">
                Politica de Envio
              </a>
              <a
                href="#privacidad"
                className="transition-colors hover:text-white"
              >
                Politica de Privacidad
              </a>
            </div>
            <a
              href={footerCta}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-center text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-pearl"
            >
              Contactar a Ventas
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
