import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Base path for GitHub Pages deployment

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // <-- Define the alias to resolve '@' to the 'src' folder
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
