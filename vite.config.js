import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      cache: false,
    },
  },

  resolve: {
    alias: {
      pages: path.resolve(new URL("./src/pages", import.meta.url).pathname),
      components: path.resolve(
        new URL("./src/components", import.meta.url).pathname
      ),
      assets: path.resolve(new URL("./src/assets", import.meta.url).pathname),
      services: path.resolve(
        new URL("./src/services", import.meta.url).pathname
      ),
      styles: path.resolve(new URL("./src/styles", import.meta.url).pathname),
    },
  },
});
