import "./App.css";
import AppRoutes from "./Routes";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeTenantProvider } from "@nyp/tenantuikit";

function App({ title, theme }) {
  return (
    <ThemeTenantProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AppRoutes title={title} theme={theme} />
        <div id="root-modal"></div>
        <div id="root-tooltip"></div>
      </ThemeProvider>
    </ThemeTenantProvider>
  );
}

export default App;
