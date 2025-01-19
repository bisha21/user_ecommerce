import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables (prefixed with VITE_)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: '/', // Serve from the root
    build: {
      outDir: 'dist', // Output directory for production build
    },
  };
});
