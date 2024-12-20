import { splitVendorChunkPlugin, defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import { dependencies } from "./package.json";

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if ([].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    federation({
      name: "app",
      remotes: {
        remoteB: "http://localhost:5002/remoteB/assets/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common"],
    }),
  ],
  build: {
    target: "esnext",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
