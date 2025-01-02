import React from "react";
import { theme } from "../../theme";
import Layout from "../../containers/Layout";
import Counter from "../../components/counter";

const Home = () => {
  return (
    <Layout>
      <div>
        <p style={{ color: theme.colors.error }}>Home Host</p>
        <Counter />
      </div>
    </Layout>
  );
};

export default React.memo(Home);
