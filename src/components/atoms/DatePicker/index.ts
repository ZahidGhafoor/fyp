import { InputProps } from "../Input";
import { DesktopDatePickerProps } from "@mui/lab";

export { default } from "./DatePicker";

export interface DatePickerOwnProps {
	editable?: boolean;
	InputFieldProps: InputProps;
	value: { date: any; error: boolean };
}

export type DatePickerProps = DatePickerOwnProps &
	Omit<DesktopDatePickerProps, "renderInput">;
