/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#000000',
        ink: '#050505',
        graphite: '#9B978E',
        pearl: '#D7D3CC',
        champagne: '#C4A26A',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
