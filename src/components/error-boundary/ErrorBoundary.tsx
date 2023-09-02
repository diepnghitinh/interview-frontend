import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
