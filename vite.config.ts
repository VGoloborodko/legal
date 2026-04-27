import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import { vercelPreset } from '@vercel/react-router'

export default defineConfig({
  plugins: [
    reactRouter({
      presets: [vercelPreset()],
    }),
  ],
})