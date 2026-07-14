import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Using a custom domain (heymehassan.me) via CNAME, so base stays "/".
  // If deploying to username.github.io/repo-name instead, change base to '/repo-name/'.
  base: '/',
  plugins: [react(), tailwindcss()],
})
