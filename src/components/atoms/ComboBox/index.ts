import { InputProps } from "../Input";
import { SelectOption } from "../Select";
import { Autocomplete } from "@mui/material";
import { ChipProps } from "../ClassChip/ClassChip";

export { default } from "./ComboBox";

export interface ComboBoxOwnProps {
	options: SelectOption[];
	ChipProps?: ChipProps;
	InputProps?: InputProps;
}

export type ComboBoxProps = ComboBoxOwnProps &
	Omit<React.ComponentProps<typeof Autocomplete>, "renderInput">;
