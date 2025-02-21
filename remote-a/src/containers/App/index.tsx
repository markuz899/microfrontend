import "../../App.css";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeTenantProvider } from "@nyp/tenantuikit";
import { GlobalStyle } from "../../theme/global-styles";
import { theme as defaultTheme } from "../../theme/index.js";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { INavigation, navigation } from "../../routes/navigation";
import ErrorBoundary from "../Error";

interface AppProps {
  title?: string;
  theme?: any;
}

function App({ title, theme = defaultTheme }: AppProps) {
  const global = {};

  return (
    <ThemeTenantProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Suspense fallback={<div></div>}>
            <Routes>
              {navigation.map((route: INavigation) => {
                return (
                  <Route
                    key={`route-${route.path}`}
                    path={route.path}
                    element={<route.component global={global} title={title} />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <GlobalStyle />
        <div id="root-modal"></div>
        <div id="root-tooltip"></div>
      </ThemeProvider>
    </ThemeTenantProvider>
  );
}

export default App;
