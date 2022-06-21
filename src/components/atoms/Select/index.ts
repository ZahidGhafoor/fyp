import { TextFieldProps } from "@mui/material";

export { default } from "./Select";

export interface SelectOption {
	value: string;
	label: string;
}

export interface SelectOwnProps {
	options?: SelectOption[];
	disabledOnUpdate?: boolean;
}

export type SelectProps = SelectOwnProps & TextFieldProps;
