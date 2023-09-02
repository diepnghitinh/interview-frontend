import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [svgr(), react({ fastRefresh: true }), tsconfigPaths()],
  optimizeDeps: {
    exclude: ['react-hook-form'],
  },
  build: {
    rollupOptions: {
      plugins: [dynamicImportVars()],
    },
  },
})
