import React from "react";

// @ts-ignore
const RemoteModule = await import("mfeRemote/AppModule").then((module) => ({
  default: module.default.mount,
}));

const RemoteExtModule = () => {
  return (
    <div>
      <React.Suspense fallback="...loading">
        {/* @ts-ignore */}
        <RemoteModule />
      </React.Suspense>
    </div>
  );
};

export default RemoteExtModule;
