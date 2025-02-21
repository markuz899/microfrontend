import React, { lazy } from "react";

// Routes
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const NotFound = lazy(() => import("./NotFound"));

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
  notFound: "*",
};

export const navigation = [
  { path: pathRouting.home, exact: true, component: Home },
  { path: pathRouting.about, exact: true, component: About },
  { path: pathRouting.contact, exact: true, component: Contact },
  { path: pathRouting.notFound, exact: true, component: NotFound },
];
