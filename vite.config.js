import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Le "base" à la racine est le plus important pour le déploiement
  base: '/kumar/', 
  
  server: {
    host: '0.0.0.0', 
    port: 5174,
    strictPort: true,
    // On retire le base: './' d'ici
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})