import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensure relative paths are used
  build: {
    outDir: 'dist', // Default output directory
  },
});
