import { ReduxFormComponentProps } from ".";
import { Field, FieldArray, FormSection } from "redux-form";

export default function ReduxFormComponent({
	reduxFormComponent: type,
	...rest
}: ReduxFormComponentProps) {
	return (
		<>
			{type === "FieldArray" ? (
				<FieldArray {...rest} />
			) : type === "FormSection" ? (
				<FormSection {...rest} />
			) : (
				<Field id={rest.name} {...rest} />
			)}
		</>
	);
}
