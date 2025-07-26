import { Component, ReactElement, ReactNode } from "react";

import FallBack from "./fallback";

declare const process: NodeJS.Process;

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode | ReactElement;
};

type State = {
  hasError: boolean;
};

type ErrorInfo = {
  componentStack: string;
};
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  State
> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.log("ErrorBoundary caught an error:", error);
      console.log("Error Info:", errorInfo);
      console.log(this.props);
    }
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <FallBack />;
    }
    return this.props.children;
  }
}
