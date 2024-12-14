import React, { useEffect } from "react";

// @ts-ignore

const RemoteAppModule = ({ title }: { title: string }) => {
  useEffect(() => {
    async function loadModule() {
      // @ts-ignore
      const module = await import("mfeRemote/AppModule");
      if (module && module.default.mount) {
        module.default.mount({ title });
      }
    }

    loadModule();
  }, []);
  return (
    <div className="remote-module">
      {/* @ts-ignore */}
      <app-root></app-root>
    </div>
  );
};

export default RemoteAppModule;
