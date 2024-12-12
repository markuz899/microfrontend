import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeTenantProvider } from "@nyp/tenantuikit";
import { theme } from "./theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeTenantProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ThemeTenantProvider>
    </BrowserRouter>
  </React.StrictMode>
);
