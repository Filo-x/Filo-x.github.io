import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ 
 base: '/filo-x/github.io/'
export default defineConfig({
  plugins: [react()],
})
