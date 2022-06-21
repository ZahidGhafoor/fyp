import { PhoneInputProps } from ".";
import { default as BasePhoneInput } from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./PhoneInput.css";

export default function PhoneInput({
	id,
	name,
	error,
	onChange,
	helperText,
	...rest
}: PhoneInputProps) {
	return (
		<>
			<BasePhoneInput
				enableSearch
				country="de"
				// regions={"europe"}
				inputProps={{ id, name }}
				dropdownClass={"phone-input-dropdown"}
				containerClass={`phone-input ${error ? "phone-input-error" : ""}`}
				onChange={(value, data, e, formattedValue) => {
					onChange?.(value, data, e, formattedValue);
				}}
				{...rest}
			/>
			{helperText && (
				<p className="phone-input-helper-text">{helperText}</p>
			)}
		</>
	);
}
