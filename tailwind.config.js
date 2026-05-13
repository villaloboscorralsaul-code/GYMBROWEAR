/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Official Gymbrowear Brand Palette ──────────────────
        'ocean':      '#003366',  // Primary
        'ocean-dark': '#001829',  // Darkest bg (derived)
        'ocean-mid':  '#002244',  // Mid bg
        'slate-brand':'#2C3E50',  // Secondary
        'cobalt':     '#007BFF',  // Accent
        'cobalt-light':'#4DA6FF', // Lighter accent
        'metallic':   '#BDC3C7',  // Neutral 1
        // white is built into Tailwind
        // ── Legacy aliases (keep for gradual migration) ─────────
        obsidian:       '#001829',
        'obsidian-light':'#002244',
        titanium:       '#FFFFFF',
        champagne:      '#007BFF',
        'champagne-light':'#4DA6FF',
        'ice-blue':     '#BDC3C7',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        heading: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease-out forwards',
        'fade-in':   'fadeIn 1s ease-out forwards',
        shimmer:     'shimmer 3s linear infinite',
        float:       'float 6s ease-in-out infinite',
        'line-grow': 'lineGrow 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        shimmer:  { '0%': { backgroundPosition: '0% center' }, '100%': { backgroundPosition: '200% center' } },
        float:    { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        lineGrow: { '0%': { width: '0%' }, '100%': { width: '100%' } },
      },
      boxShadow: {
        cobalt:    '0 0 40px rgba(0,123,255,0.2)',
        'cobalt-lg':'0 0 80px rgba(0,123,255,0.25)',
        glass:     '0 8px 32px rgba(0,0,0,0.4)',
        tier:      '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,123,255,0.08)',
      },
    },
  },
  plugins: [],
};
