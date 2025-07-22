import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser when the server starts
    watch: {
      usePolling: true // Enable polling for file changes. It can be useful in some environments where the default file watching doesn't work well
    },
    hmr: true // Enable Hot Module Replacement, which allows Vite to update parts of your application without a full page - reload when you make code changes
  }
});