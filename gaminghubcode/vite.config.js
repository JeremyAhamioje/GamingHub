import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // You can add other libraries as well
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit to 1000 KB
  },
})
