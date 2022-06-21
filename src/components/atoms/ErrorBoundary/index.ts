export { default } from "./ErrorBoundary";

export interface ErrorBoundaryProps {
	children: React.ReactNode;
}

export interface ErrorBoundaryState {
	error: any;
	errorInfo: any;
}
