import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Only apply base path for production build (GitHub Pages)
  // Dev server stays at / so local images work normally
  base: '/UnicenterCommunications_blogsite/'
}))