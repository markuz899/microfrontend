import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import { Button } from "@nyp/tenantuikit";
import { useTheme } from "styled-components";
import { theme } from "./theme";

// @ts-ignore
const RemoteA = React.lazy(() => import("remoteA/App"));
// @ts-ignore
const RemoteB = React.lazy(() => import("remoteB/App"));

function Home() {
  const theme = useTheme();
  return (
    <div>
      <Navbar />
      <p style={{ color: theme.colors.error }}>Home Host</p>
      <Button>Bottone tenantuikit</Button>
    </div>
  );
}

function About() {
  return (
    <div>
      <Navbar />
      <p>About Host</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Navbar />
      <p>Contact Host</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="remoteA/*"
            element={<RemoteA title="Microfrontend Accio" theme={theme} />}
          />
          <Route
            path="remoteB/*"
            element={<RemoteB title="Microfrontend B" />}
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default AppRoutes;

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while loading the microfrontend.</h1>;
    }

    return this.props.children;
  }
}
