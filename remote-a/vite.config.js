import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "/remoteA",
    plugins: [
      react(),
      federation({
        name: "remote_a",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/containers/App",
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
  };
});
