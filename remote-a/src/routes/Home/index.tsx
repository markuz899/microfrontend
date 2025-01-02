import React from "react";
import Layout from "../../containers/Layout";

function Home({ title }: { title?: string }) {
  return (
    <Layout>
      <p>Home Remote A - {title}</p>
    </Layout>
  );
}

export default React.memo(Home);
