import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: './codit-react', // Use relative paths for assets
    build: {
      outDir: 'dist', // Ensure output directory is correctly named
    },
  };
});
