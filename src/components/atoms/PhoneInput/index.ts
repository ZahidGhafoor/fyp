import { default as BasePhoneInput } from "react-phone-input-2";

export { default } from "./PhoneInput";

export interface PhoneInputOwnProps {
	id?: string;
	name?: string;
	error?: boolean;
	helperText?: string;
}

export type PhoneInputProps = PhoneInputOwnProps &
	React.ComponentProps<typeof BasePhoneInput>;
