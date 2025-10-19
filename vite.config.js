import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  server: {
    watch: {
      usePolling: true,
      interval: 300, // ms - adjust if needed
    },
  },
  plugins: [react()],
};

