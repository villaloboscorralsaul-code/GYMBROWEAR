import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // En desarrollo, cuando uses "vercel dev" esto no se usa.
    // Si corres solo "npm run dev", las llamadas a /api/ darán 404
    // hasta que deploys a Vercel o uses "vercel dev".
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
