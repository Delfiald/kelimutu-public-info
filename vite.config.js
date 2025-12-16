import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
  react(),
  svgr(),
  ViteImageOptimizer({
   jpg: {
    quality: 75,
   },
   jpeg: {
    quality: 75,
   },
   png: {
    quality: 75,
   },
   webp: {
    quality: 75,
   },
   avif: {
    quality: 60,
   },
  }),
 ],
 test: {
  globals: true,
  environment: "jsdom",
  setupFiles: "./tests/setup.js",
 },
});
