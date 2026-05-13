import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Lotes', href: '#portfolio' },
  { label: 'Cómo Comprar', href: '#como-comprar' },
  { label: 'Logística', href: '#logistics' },
  { label: 'Contacto', href: '#cta' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'nav-blur py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img src="/logo-neon.png" alt="Gymbrowear" className="h-10 w-auto flex-shrink-0"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0,123,255,0.4))' }} />
          <div className="hidden sm:block">
            <div className="text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '17px', letterSpacing: '0.12em' }}>
              GYMBROWEAR
            </div>
            <div className="text-[8px] tracking-[0.2em] leading-none mt-0.5"
              style={{ color: '#BDC3C7', textTransform: 'uppercase' }}>
              Wholesale Division
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="relative group transition-colors duration-300 text-[11px] font-semibold tracking-[0.15em] uppercase"
              style={{ color: '#BDC3C7' }}
              onMouseEnter={e => e.currentTarget.style.color = '#007BFF'}
              onMouseLeave={e => e.currentTarget.style.color = '#BDC3C7'}>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: '#007BFF' }} />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/19153559631" target="_blank" rel="noopener noreferrer"
            className="btn-secondary px-4 py-2 text-[10px] tracking-[0.15em]">
            WhatsApp
          </a>
          <a href="#pagar" className="btn-primary px-5 py-2.5 text-[10px] tracking-[0.18em]">
            Comprar Ahora
          </a>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <a href="#pagar"
            className="btn-primary px-4 py-2.5 text-[10px] tracking-[0.15em]"
            style={{ fontSize: '10px' }}>
            Comprar
          </a>
          {/* 44px tap target */}
          <button
            className="flex items-center justify-center w-11 h-11 transition-colors rounded-lg"
            style={{ color: '#BDC3C7', background: 'rgba(0,123,255,0.08)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } nav-blur`} style={{ borderTop: '1px solid rgba(0,123,255,0.1)' }}>
        <div className="px-4 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3.5 px-4 text-sm font-semibold tracking-wide rounded-lg transition-colors"
              style={{ color: '#BDC3C7', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#007BFF'; e.currentTarget.style.background = 'rgba(0,123,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#BDC3C7'; e.currentTarget.style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
          {/* Big mobile CTAs */}
          <div className="flex flex-col gap-2 mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,123,255,0.1)' }}>
            <a href="https://wa.me/19153559631?text=Hola%21%20Me%20interesa%20hacer%20un%20pedido."
              target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-bold tracking-wide"
              style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', color: '#25D366' }}>
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp · (915) 355-9631
            </a>
            <a href="#pagar" onClick={() => setMenuOpen(false)}
              className="btn-primary py-3.5 text-sm tracking-wide text-center rounded-none">
              Comprar Ahora — Ver Lotes
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
