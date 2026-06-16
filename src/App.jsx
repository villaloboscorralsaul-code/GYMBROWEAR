import React from 'react';

const whatsappNumber = '19153559631';

const createWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Lotes', href: '#lotes' },
  { label: 'Logística', href: '#logistica' },
  { label: 'Privacidad', href: '#privacidad' },
];

const highlights = [
  { label: 'Operación', value: 'Ciudad Juárez, Chihuahua' },
  { label: 'Cobertura', value: 'Envíos a toda la República' },
  { label: 'Respuesta', value: 'Atención directa por WhatsApp' },
];

const packages = [
  {
    name: 'PAQUETE EMPRENDEDOR',
    pieces: '10 Piezas',
    price: '$3,200',
    note: 'Entrada precisa para probar demanda y comenzar con una selección original.',
    message:
      'Hola, quiero cotizar el PAQUETE EMPRENDEDOR de 10 piezas de GYMBROWEAR.',
  },
  {
    name: 'PAQUETE PRO',
    pieces: '30 Piezas',
    price: '$9,000',
    note: 'Volumen balanceado para boutiques, resellers y aperturas con rotación rápida.',
    message:
      'Hola, quiero consultar disponibilidad del PAQUETE PRO de 30 piezas de GYMBROWEAR.',
  },
  {
    name: 'PAQUETE ÉLITE',
    pieces: '50 Piezas',
    price: '$14,500',
    note: 'Asignación prioritaria para operaciones con enfoque comercial y recompra continua.',
    message:
      'Hola, quiero contactar a ventas por el PAQUETE ÉLITE de 50 piezas de GYMBROWEAR.',
  },
];

const pillars = [
  {
    index: '01',
    title: 'Autenticidad Garantizada',
    body: 'Inventario 100% original con etiquetas de fábrica y validación orientada a clientes que necesitan vender con certeza.',
  },
  {
    index: '02',
    title: 'Selección Premium',
    body: 'Curaduría enfocada en texturas, siluetas y tallas de alta demanda para proteger rotación y percepción de valor.',
  },
  {
    index: '03',
    title: 'Distribución Nacional',
    body: 'Envíos asegurados y directos desde nuestra central en Ciudad Juárez hacia toda la República, con seguimiento comercial puntual.',
  },
];

const policies = [
  {
    id: 'envios',
    title: 'Política de Envío',
    body: 'Cada lote se confirma por WhatsApp antes de apartarse. Los tiempos dependen de volumen, destino y validación de existencias; la coordinación sale directamente desde Ciudad Juárez.',
  },
  {
    id: 'privacidad',
    title: 'Política de Privacidad',
    body: 'Este sitio solo capta solicitudes comerciales. No hay cuentas, carrito, checkout ni almacenamiento de datos de pago; tus datos se usan únicamente para cotización, seguimiento y logística.',
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
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      <header className="sticky top-0 z-40 border-b border-[#1A1A1A] bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">
          <a
            href="#inicio"
            className="font-sans text-[0.85rem] font-medium uppercase tracking-[0.6em] text-white transition-opacity duration-300 hover:opacity-70"
          >
            GYMBROWEAR
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-[0.7rem] font-light uppercase tracking-[0.4em] text-graphite transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={secondaryCta}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-white px-6 py-3 text-center font-sans text-[0.65rem] font-medium uppercase tracking-[0.35em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <span className="md:hidden">Cotizar</span>
            <span className="hidden md:inline">Cotizar Lote</span>
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="scroll-mt-24 border-b border-[#1A1A1A]">
          <div className="relative isolate flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-1/2 lg:min-h-[calc(100vh-80px)] overflow-hidden">
              <img
                src="/portada_horizontal_panorámica_editorial_premium_202606161623.jpeg"
                alt="GymbroWear Premium"
                className="h-full w-full object-cover object-center grayscale-[0.5] opacity-80"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="flex w-full flex-col justify-center px-6 py-20 sm:px-12 lg:w-1/2 lg:px-20 lg:py-0">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.5em] text-graphite mb-6">
                División Mayorista
              </p>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.1] tracking-[0.12em] text-white font-light">
                Escala tu negocio con <br />
                <span className="font-medium">calidad original</span>
              </h1>
              <p className="mt-8 max-w-lg font-sans text-sm leading-relaxed tracking-[0.05em] text-graphite sm:text-base font-light">
                Lotes mayoristas de ropa deportiva premium. Logística exacta
                para todo el país. Operación directa y sin intermediarios.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={primaryCta}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-white px-8 py-4 text-center font-sans text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-black transition-opacity duration-300 hover:opacity-80"
                >
                  Solicitar Paquete
                </a>
                <a
                  href={footerCta}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-[#333333] px-8 py-4 text-center font-sans text-[0.75rem] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:border-white"
                >
                  Contactar a Ventas
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="lotes"
          className="scroll-mt-24 border-b border-[#1A1A1A] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.5em] text-graphite">
                Inversión en Lotes
              </p>
              <h2 className="mt-6 font-sans text-3xl sm:text-4xl uppercase leading-[1.2] tracking-[0.1em] text-white font-light">
                Lotes que convierten <br /><span className="font-medium">inventario en crecimiento</span>
              </h2>
              <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed tracking-[0.05em] text-graphite sm:text-base font-light">
                Tres escalas de entrada para negocios que prefieren empezar con
                claridad, volumen real y una conversación directa con ventas. Sin carritos, sin fricciones.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {packages.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col justify-between border border-[#1A1A1A] bg-black p-8 transition-colors duration-500 hover:border-[#333333]"
                >
                  <div>
                    <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.4em] text-graphite">
                      {item.name}
                    </p>
                    <div className="mt-10 flex items-end justify-between border-t border-[#1A1A1A] pt-8">
                      <p className="font-sans text-4xl uppercase leading-none tracking-[0.1em] text-white font-light">
                        {item.pieces}
                      </p>
                      <p className="font-sans text-xl font-medium tracking-[0.15em] text-champagne opacity-80">
                        {item.price}
                      </p>
                    </div>
                    <p className="mt-8 font-sans text-sm leading-relaxed tracking-[0.05em] text-graphite font-light">
                      {item.note}
                    </p>
                  </div>

                  <a
                    href={createWhatsAppLink(item.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-12 flex w-full items-center justify-center border border-[#333333] px-6 py-4 text-center font-sans text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                    Cotizar Lote
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="logistica" className="border-b border-[#1A1A1A] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] items-center">
             <div className="w-full">
              <img
                src="/traducelo_a_espanol_2K_202606161623.jpeg"
                alt="GymbroWear Premium Selection"
                className="w-full object-cover grayscale-[0.5] opacity-90 border border-[#1A1A1A]"
              />
            </div>
            <div className="max-w-xl">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.5em] text-graphite">
                Confianza y Logística
              </p>
              <h2 className="mt-6 font-sans text-3xl sm:text-4xl uppercase leading-[1.2] tracking-[0.1em] text-white font-light">
                Operación sobria, <br /><span className="font-medium">precisa y lista</span>
              </h2>
              <div className="mt-12 flex flex-col gap-10">
                {pillars.map((item) => (
                  <article key={item.index} className="flex flex-col sm:flex-row gap-6">
                    <p className="font-sans text-2xl uppercase leading-none tracking-[0.1em] text-champagne opacity-80 font-light">
                      {item.index}
                    </p>
                    <div>
                      <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-white font-medium">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-relaxed tracking-[0.05em] text-graphite font-light">
                        {item.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="privacidad" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-[#333333] to-transparent" />
            <div className="grid gap-10 md:grid-cols-2">
              {policies.map((policy) => (
                <article
                  key={policy.id}
                  className="scroll-mt-24 p-8 border border-[#1A1A1A] bg-black"
                >
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-graphite">
                    Información Legal
                  </p>
                  <h3 className="mt-6 font-sans text-sm uppercase tracking-[0.2em] text-white font-medium">
                    {policy.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed tracking-[0.05em] text-graphite font-light">
                    {policy.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1A1A1A] bg-black px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href="#inicio"
              className="font-sans text-[0.8rem] font-medium uppercase tracking-[0.6em] text-white"
            >
              GYMBROWEAR
            </a>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed tracking-[0.05em] text-graphite font-light">
              Plataforma corporativa enfocada en captación de leads para
              negocios, boutiques y resellers.
            </p>
            <p className="mt-12 font-sans text-[0.65rem] uppercase tracking-[0.4em] text-[#666666]">
              &copy; {currentYear} GYMBROWEAR. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex flex-col md:flex-row gap-6 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-[#666666]">
              <a href="#envios" className="transition-colors hover:text-white">
                Política de Envío
              </a>
              <a href="#privacidad" className="transition-colors hover:text-white">
                Política de Privacidad
              </a>
            </div>
            <a
              href={footerCta}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-center font-sans text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-black transition-opacity duration-300 hover:opacity-80"
            >
              Contactar a Ventas
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
