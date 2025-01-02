import React from "react";
import Layout from "../../containers/Layout";

function Contact({ title }: { title?: string }) {
  return (
    <Layout>
      <p>Contact Remote A - {title}</p>
    </Layout>
  );
}

export default React.memo(Contact);
