import "../../App.css";
import React, { Suspense } from "react";
import { INavigation, navigation } from "../../routes/navigation";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const user = null;
  const global = {};
  return (
    <ErrorBoundary>
      <Suspense fallback={<div></div>}>
        <Routes>
          {navigation.map((route: INavigation) => {
            if (route?.shield && !user) {
              return (
                <Route
                  key={`route-${route.path}`}
                  path={route.path}
                  element={<Navigate to={"/"} replace />}
                />
              );
            } else {
              return (
                <Route
                  key={`route-${route.path}`}
                  path={route.path}
                  element={
                    <route.component global={global} title="Ecco il title" />
                  }
                />
              );
            }
          })}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

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
