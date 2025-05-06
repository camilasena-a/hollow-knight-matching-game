import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/hollow-knight-matching-game/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
}) 