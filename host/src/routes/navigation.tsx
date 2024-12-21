import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import RemoteAppModule from "../modules/AppModule";
// @ts-ignore
const RemoteA = React.lazy(() => import("remoteA/App"));
// @ts-ignore
const RemoteB = React.lazy(() => import("remoteB/App"));

export interface INavigation {
  path: string;
  exact: boolean;
  shield?: boolean;
  component:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType<any>;
}

export const pathRouting = {
  home: "/",
  about: "/about",
  contact: "/contact",
  remoteA: "/remoteA/*",
  remoteB: "/remoteB/*",
  remoteC: "/remoteC/*",
};

export const navigation = [
  { path: "/", exact: true, component: Home },
  { path: "about", exact: true, component: About },
  { path: "contact", exact: true, component: Contact },
  { path: "remoteA/*", exact: true, component: RemoteA },
  { path: "remoteB/*", exact: true, component: RemoteB },
  { path: "remoteC/*", exact: true, component: RemoteAppModule },
];
