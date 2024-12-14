import React, { useEffect } from "react";
// @ts-ignore
const mountExt: any = await import("mfeRemote/AppModule");

const RemoteExtModule = () => {
  useEffect(() => {
    mountExt.default.mountExt();
  }, []);
  return (
    <div className="external-module">
      {/* @ts-ignore */}
      <app-dashboard></app-dashboard>
    </div>
  );
};

export default RemoteExtModule;
