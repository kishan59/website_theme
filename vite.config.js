import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   base: '/website_theme/'   // ***this is to upload in subdirectory (/website_theme) on github, github requires project name after / 
})
