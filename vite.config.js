import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: './', // Use relative paths for assets
    server: {
      port: env.VITE_PORT || 3000, // Use the VITE_PORT from .env file
    },
    build: {
      outDir: 'dist', // Ensure output directory is correctly named
    },
  };
});
