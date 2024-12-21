import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App/App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeTenantProvider } from "@nyp/tenantuikit";
import { theme } from "./theme/index.js";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeTenantProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
            <div id="root-modal"></div>
            <div id="root-tooltip"></div>
          </ThemeProvider>
        </ThemeTenantProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Elemento con ID 'root' non trovato nel DOM.");
}
