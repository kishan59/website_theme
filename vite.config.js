import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   base: '/demo/'   // ***remove this, this is to upload in subdirectory (/demo) on hostinger 
})
