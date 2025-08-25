import { defineConfig } from 'vite'

export default defineConfig({
  base: '/hollow-knight-matching-game/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  publicDir: 'public'
}) 