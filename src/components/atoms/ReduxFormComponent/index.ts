export { default } from "./ReduxFormComponent";

export interface ReduxFormComponentOwnProps {
	reduxFormComponent?: "FieldArray" | "FormSection";
}

export type ReduxFormComponentProps = ReduxFormComponentOwnProps & any;
