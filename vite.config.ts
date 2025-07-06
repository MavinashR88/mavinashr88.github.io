import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',
  build: {
    outDir: 'docs', // Add this line to specify output directory
=======
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
>>>>>>> 520b41b (Initial portfolio deployment with AI/ML experience and GenAI projects)
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
});