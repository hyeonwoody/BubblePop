import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 51730,
  },
  plugins: [react()],
  base: "/BubblePop/",
})
