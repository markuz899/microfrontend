import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App/App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeTenantProvider } from "@nyp/tenantuikit";
import { theme } from "./theme/index.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeTenantProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <App />
              <div id="root-modal"></div>
              <div id="root-tooltip"></div>
            </Provider>
          </ThemeProvider>
        </ThemeTenantProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Elemento con ID 'root' non trovato nel DOM.");
}
