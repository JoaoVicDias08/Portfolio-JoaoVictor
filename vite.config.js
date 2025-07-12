import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/variables.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})
