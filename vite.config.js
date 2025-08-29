import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/',
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
    cors: true,
  },
})
