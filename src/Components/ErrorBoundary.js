import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to your error reporting service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI that works without JavaScript
      return (
        <div className="min-h-screen bg-[#013220] text-white flex items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">Please try refreshing the page or contact us directly.</p>
            <div className="space-y-2">
              <a 
                href="mailto:info@henrycap.com"
                className="block px-4 py-2 bg-white text-[#013220] rounded hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <button
                onClick={() => window.location.reload()}
                className="block w-full px-4 py-2 bg-transparent border border-white rounded hover:bg-white/10 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
