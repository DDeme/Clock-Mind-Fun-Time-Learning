import { Component, type ErrorInfo, type ReactNode } from 'react'

import { Button } from '../../ui'

interface ErrorBoundaryProps {
    children: ReactNode
    fallback?: ReactNode
}

interface ErrorBoundaryState {
    error?: Error
    errorInfo?: ErrorInfo
    hasError: boolean
}

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error, hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        })

        // Log error to console in development
        if (process.env.NODE_ENV === 'development') {
            console.error('ErrorBoundary caught an error:', error, errorInfo)
        }

        // You could also log to an error reporting service here
        // logErrorToService(error, errorInfo)
    }

    handleReset = () => {
        this.setState({
            error: undefined,
            errorInfo: undefined,
            hasError: false,
        })
    }

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback
            }

            // Default fallback UI
            return (
                <div className="bg-background-light flex min-h-screen flex-col items-center justify-center p-4 text-center">
                    <div className="max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <h1 className="text-text-primary mb-4 text-2xl font-bold">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-text-secondary mb-6">
                            We encountered an unexpected error. Please try again
                            or refresh the page.
                        </p>

                        {process.env.NODE_ENV === 'development' &&
                            this.state.error && (
                                <details className="mb-6 text-left">
                                    <summary className="text-text-primary mb-2 cursor-pointer text-sm font-medium">
                                        Error Details
                                    </summary>
                                    <div className="mt-2 overflow-auto rounded bg-gray-100 p-3 text-xs">
                                        <p className="mb-2 font-mono text-red-600">
                                            {this.state.error.toString()}
                                        </p>
                                        {this.state.errorInfo && (
                                            <pre className="whitespace-pre-wrap text-gray-700">
                                                {
                                                    this.state.errorInfo
                                                        .componentStack
                                                }
                                            </pre>
                                        )}
                                    </div>
                                </details>
                            )}

                        <div className="flex justify-center gap-3">
                            <Button
                                onClick={this.handleReset}
                                variant="primary"
                            >
                                Try Again
                            </Button>
                            <Button
                                onClick={() => window.location.reload()}
                                variant="dark"
                            >
                                Refresh Page
                            </Button>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
