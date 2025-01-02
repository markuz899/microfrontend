import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

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
};

export const navigation = [
  { path: "/", exact: true, component: Home },
  { path: "about", exact: true, component: About },
  { path: "contact", exact: true, component: Contact },
];
