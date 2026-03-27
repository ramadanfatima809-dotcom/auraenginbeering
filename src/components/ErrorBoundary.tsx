import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
     children: ReactNode;
}

interface State {
     hasError: boolean;
     error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
     public state: State = {
          hasError: false,
     };

     public static getDerivedStateFromError(error: Error): State {
          return { hasError: true, error };
     }

     public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
          console.error("Uncaught error:", error, errorInfo);
     }

     public render() {
          if (this.state.hasError) {
               return (
                    <div className="min-h-screen flex items-center justify-center bg-background px-4">
                         <div className="text-center max-w-md">
                              <AlertTriangle size={64} className="text-destructive mx-auto mb-4" />
                              <h1 className="text-h2 mb-3">Something went wrong</h1>
                              <p className="text-body text-muted-foreground mb-6">
                                   We're sorry for the inconvenience. Please try refreshing the page.
                              </p>
                              <button
                                   onClick={() => window.location.reload()}
                                   className="bg-accent text-accent-foreground px-6 py-3 rounded font-heading font-semibold hover:opacity-90 transition-opacity"
                              >
                                   Refresh Page
                              </button>
                         </div>
                    </div>
               );
          }

          return this.props.children;
     }
}

export default ErrorBoundary;
