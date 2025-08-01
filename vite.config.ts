import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Ensure no unwanted externalization
    },
  },
  assetsInclude: ['**/*.ttf', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.webp', '**/*.mp4']
})
