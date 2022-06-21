import { Component } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from ".";

export default class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error: any, errorInfo: any) {
		this.setState({ error: error, errorInfo: errorInfo });
	}

	render() {
		const { children } = this.props;
		const { error, errorInfo } = this.state;

		return (
			<>
				{errorInfo ? (
					<div style={{ padding: "20px" }}>
						<h2>Something went wrong.</h2>
						<details style={{ whiteSpace: "pre-wrap" }}>
							<div style={{ padding: "20px" }}>
								{error && error.toString()}
								<br />
								{errorInfo.componentStack}
							</div>
						</details>
					</div>
				) : (
					children
				)}
			</>
		);
	}
}
