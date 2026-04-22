import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 essentiel pour le réseau local
    port: 5174,
    strictPort: true,
    base: './',
  },
  base: '/kumar/', // IMPORTANT: remplacez par votre vrai nom de repo
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
