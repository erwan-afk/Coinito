import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // Proxy Netlify Functions to Netlify Dev server (default port 8888)
      // If Netlify Dev is not running, you'll get a connection error
      '/.netlify/functions': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
