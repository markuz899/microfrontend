import React, { useEffect, useState } from "react";

const RemoteExtModule = ({ title }: { title: string }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadModule() {
      try {
        // @ts-ignore
        const mountExt: any = await import("mfeRemote/AppModule");

        if (mountExt && mountExt.default && mountExt.default.mountExt) {
          mountExt.default.mountExt({ title });
          setIsLoaded(true);
        } else {
          throw new Error(
            "Modulo non trovato o funzione di mountExt non definita."
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
    <div className="external-module">
      {/* @ts-ignore */}
      <app-dashboard title={title}></app-dashboard>
    </div>
  );
};

export default RemoteExtModule;
