import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Avoid stale UI after refresh; applies to dev responses including `/public` assets.
    headers: {
      'Cache-Control': 'no-store',
    },
    // Native file events sometimes miss edits (iCloud/Desktop, network drives). Polling makes reload-on-save reliable.
    watch: {
      usePolling: true,
      interval: 400,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
