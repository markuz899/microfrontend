import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteA: "http://localhost:5001/remoteA/assets/remoteEntry.js",
        remoteB: "http://localhost:5002/remoteB/assets/remoteEntry.js",
        // @ts-ignore
        mfeRemote: {
          external: "http://localhost:8080/remoteEntry.js",
          format: "var", // Indica che il remote è un modulo Webpack (non ESM)
        },
      },
      shared: {
        react: { version: "^18.0.0" },
        "react-dom": { version: "^18.0.0" },
        "react-router-dom": { version: "^6.23.1" },
      },
    }),
  ],
  resolve: {
    alias: {
      "@nyp/tenantuikit": "/node_modules/@nyp/tenantuikit",
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      external: ["typescript"],
    },
  },
});
