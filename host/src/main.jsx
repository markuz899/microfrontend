import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeTenantProvider } from "@nyp/tenantuikit";

const theme = {
  colors: {
    black: "#22252A",
    body: "#f5f5f5",
    borderComponent: "#D5D8DD",
    borderTable: "#D2D7DA",
    dark: "#231F20",
    darkGrey: "#7D7D7D",
    error: "#D83F0D",
    errorDark: "#F42A2A",
    errorLight: "#FFF3F0",
    disabled: "#C7D2DF",
    grey: "#94A0AF",
    greyIcon: "#C7D2DF",
    lightDark: "#615659",
    lightGrey: "#E6EBEF",
    lightGreyMore: "#94A0AF",
    sidebar: "#ffffff",
    navbar: "#ffffff6b",
    navbarText: "#231F20",
    primary: "#4A90E2",
    primaryDark: "#364B69",
    primaryLight: "#9FCAFF",
    primaryLightMore: "#E7F3FF",
    secondary: "#FF7448",
    secondaryDark: "#542212",
    secondaryLight: "#FF9F81",
    secondaryLightMore: "#FBCEC0",
    softWhite: "#FAFAFA",
    success: "#11DB25",
    successDark: "#1DAF7C",
    successLight: "#DEF2E0",
    warning: "#EDBD14",
    warningDark: "#FFB60A",
    warningLight: "#F3EED9",
    white: "#FFFFFF",
    whiteSmoke: "#F1F1F1",
  },
  height: {
    ss: "15px",
    xs: "20px",
    sm: "32px",
    md: "45px",
    lg: "50px",
    xl: "60px",
  },
  font: {
    size: {
      xs: "9px",
      small: "9px",
      mini: "11px",
      minor: "12px",
      tiny: "14px",
      normal: "16px",
      large: "20px",
      medium: "24px",
      big: "34px",
      xl: "36px",
      xxl: "48px",
      xxxl: "64px",
      max: "116px",
    },
    weight: {
      regular: "400",
      medium: "400",
      bold: "700",
    },
    family: {
      primary: "QuickSand",
    },
  },
  spaces: {
    space1: "5px",
    space2: "10px",
    space3: "15px",
    space4: "20px",
    space5: "25px",
    space6: "30px",
    space7: "35px",
    space8: "40px",
    space9: "45px",
    space10: "50px",
    space11: "55px",
    space12: "60px",
    space13: "70px",
    space14: "75px",
    space15: "80px",
    space16: "85px",
    space17: "90px",
    space20: "100px",
  },
  extra: {
    logo: "80px",
    radius: "3px",
    radiusTiny: "8px",
    radiusNormal: "12px",
    radiusBig: "16px",
    radiusRound: "25px",
    radiusRoundXL: "48px",
    transition: "0.5s",
    transitionFluid: "all 0.7s cubic-bezier(0.86, 0, 0.07, 1);",
    shadow: "0px 2px 8px rgba(0, 0, 0, 0.3)",
  },
  breakpoints: {
    first: "320px",
    mobile: "600px",
    tablet: "996px",
  },
  zIndex: {
    zIndex0: 0,
    zIndex1: 100,
    zIndex2: 200,
    zIndex3: 300,
    zIndex4: 400,
    zIndex5: 500,
    zIndex6: 600,
    zIndex7: 700,
    zIndex8: 800,
    zIndex9: 900,
  },
  container: "1380px",
};

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
