/* eslint-disable react-refresh/only-export-components */
import './globals.css';

export const metadata = {
  title: 'GYMBROWEAR | Lotes Mayoristas de Ropa Deportiva Premium',
  description:
    'GYMBROWEAR es una landing corporativa para cotizar lotes mayoristas de ropa deportiva premium con atencion comercial por WhatsApp y distribucion nacional.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
