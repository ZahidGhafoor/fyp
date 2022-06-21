import { CheckboxProps, FormControlLabelProps } from "@mui/material";

export { default } from "./BaseCheckbox";

export interface CheckBoxOwnProps {
	label: string | number | React.ReactElement;
	FormControlLabelProps?: Omit<FormControlLabelProps, "control">;
}

export type CheckBoxProps = CheckBoxOwnProps & CheckboxProps;
