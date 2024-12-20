import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/remoteB",
  plugins: [
    react(),
    federation({
      name: "remote_b",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
        "./Button": "./src/Button",
      },
      shared: { ...pkg.dependencies },
      // react: {
      //   singleton: true,
      //   version: deps['react']
      // },
      // 'react-dom': {
      //   singleton: true,
      //   version: deps['react-dom']
      // },
      // 'react-router-dom': {
      //   singleton: true,
      //   version: deps['react-router-dom']
      // },
    }),
  ],
  build: {
    target: "esnext", // Set the target environment to esnext
  },
});
