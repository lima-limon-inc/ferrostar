import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "",
  server: {
    fs: {
      // Allow serving the wasm module
      allow: [".", "../common/ferrostar/pkg"],
    },
  },
  build: {
    lib: {
      entry: "src/main.ts",
      name: "@stadiamaps/ferrostar-webcomponents",
    },
    rollupOptions: {
      external: ["@stadiamaps/ferrostar", "maplibre-gl", "lit", "@stadiamaps/maplibre-search-box"],
    },
    sourcemap: true,
  },
  plugins: [
      dts()
  ]
});
