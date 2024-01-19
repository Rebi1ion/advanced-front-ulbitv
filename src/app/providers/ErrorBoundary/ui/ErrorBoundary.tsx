import React, { Suspense, type ErrorInfo, type ReactNode } from "react";
import { ErrorPage } from "widgets/ErrorPage";

interface ErrorBoundaryProps {
  children: ReactNode;
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

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
