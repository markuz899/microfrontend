import React, { useEffect } from "react";
// @ts-ignore
const mountExt: any = await import("mfeRemote/AppModule");

const RemoteExtModule = ({ title }: { title: string }) => {
  useEffect(() => {
    mountExt.default.mountExt({ title });
  }, []);
  return (
    <div className="external-module">
      {/* @ts-ignore */}
      <app-dashboard title={title}></app-dashboard>
    </div>
  );
};

export default RemoteExtModule;
