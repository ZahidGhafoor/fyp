import { FieldErrorProps } from ".";

export default function FieldError({ error }: FieldErrorProps) {
	return (
		<div
			style={{
				marginTop: "3px",
				fontSize: "0.75rem",
				color: "rgb(183, 33, 54)",
			}}
		>
			* {error}
		</div>
	);
}
