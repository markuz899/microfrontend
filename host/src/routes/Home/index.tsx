import React from "react";
import { theme } from "../../theme";
import Layout from "../../containers/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <p style={{ color: theme.colors.error }}>Home Host</p>
      </div>
    </Layout>
  );
};

export default React.memo(Home);
