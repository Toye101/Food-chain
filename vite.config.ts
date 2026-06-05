import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Food-chain/',
  plugins: [react()],
  server: {
    port: 4173,
  },
});
