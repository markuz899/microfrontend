import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";

const RemoteAppModule = ({
  global,
  title,
}: {
  global?: any;
  title: string;
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadModule() {
      try {
        // @ts-ignore
        const module = await import("mfeRemote/AppModule");
        if (module && module.default.mount) {
          module.default.mount({ title });
          setIsLoaded(true);
        } else {
          throw new Error(
            "Modulo non trovato o funzione di mount non definita"
          );
        }
      } catch (err) {
        setError("Impossibile caricare il microfrontend. Riprova più tardi.");
        console.error("Errore durante il caricamento del modulo remoto:", err);
      }
    }

    loadModule();
  }, [title]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!isLoaded) {
  }

  return (
    <Layout>
      {/* @ts-ignore */}
      <app-root></app-root>
    </Layout>
  );
};

export default RemoteAppModule;
