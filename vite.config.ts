import { defineConfig } from 'vite'
import netlify from "@netlify/vite-plugin";
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To exclude the unnescessary polyfills, specify which ones to include
      include: ['buffer'],
      // Whether to polyfill Globals like 'buffer' and 'process'
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
      }
    }),
    netlify()
  ],
})
