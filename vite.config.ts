import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind CSS is configured via postcss.config.js and tailwind.config.js

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
