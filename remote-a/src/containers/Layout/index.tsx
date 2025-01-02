import React from "react";
import styled from "styled-components";
import LayoutContext from "./Context";
import Navbar from "../../navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = ({ global, children }: { global?: any; children: any }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tenant remote</title>
      </Helmet>
      <LayoutContext.Provider value={null}>
        <Navbar />
        <Root>{children}</Root>
      </LayoutContext.Provider>
    </HelmetProvider>
  );
};

export default React.memo(Layout);

const Root = styled.div``;
