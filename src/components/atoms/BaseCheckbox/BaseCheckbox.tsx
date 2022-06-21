import { CheckBoxProps } from ".";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function BaseCheckbox({
	label,
	FormControlLabelProps,
	...rest
}: CheckBoxProps) {
	return (
		<FormControlLabel
			control={<Checkbox {...rest} />}
			{...FormControlLabelProps}
			label={label}
		/>
	);
}
