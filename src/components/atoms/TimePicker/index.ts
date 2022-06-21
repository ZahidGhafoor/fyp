import { InputProps } from "../Input";
import { TimePickerProps as BaseTimePickerProps } from "@mui/lab";

export { default } from "./TimePicker";

export interface TimePickerOwnProps {
	InputFieldProps: InputProps;
	value: {
		date: any;
		error: boolean;
	};
}

export type TimePickerProps = TimePickerOwnProps &
	Omit<BaseTimePickerProps, "renderInput">;
