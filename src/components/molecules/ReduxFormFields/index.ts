import { Grid } from "@mui/material";
import { InputProps } from "components/atoms/Input";
import { SelectProps } from "components/atoms/Select";
import { ComboBoxProps } from "components/atoms/ComboBox";
import { PhoneInputProps } from "components/atoms/PhoneInput";
import { DatePickerProps } from "components/atoms/DatePicker";
import { TimePickerProps } from "components/atoms/TimePicker";
import { FileUploadProps } from "components/atoms/FileUpload";
import { CheckBoxProps } from "components/atoms/BaseCheckbox";
import { DateRangePickerProps } from "components/atoms/DateRangePicker";

export { default } from "./ReduxFormFields";

export type CellProps = React.ComponentProps<typeof Grid>;

export enum LANGUAGE {
	"en" = "en",
	"de" = "de",
	"tr" = "tr",
}
export type LanguageType = keyof typeof LANGUAGE;

export type LanguageMapper = {
	[key in LANGUAGE]: string;
};

export const languageMapper: LanguageMapper = {
	en: "English",
	de: "German",
	tr: "Turkish",
}

type Normalizer = (
	value: any,
	previousValue?: any,
	allValues?: any,
	previousAllValues?: any
) => any;

type Validator = (
	value: any,
	allValues?: any,
	props?: any,
	name?: any
) => any;

interface CommonFieldProps {
	name: string;
	label: string;
	cellProps?: CellProps;
	component: React.ElementType;
}

type FieldProps = CommonFieldProps & {
	hideError?: boolean;

	InputProps?: InputProps;
	SelectProps?: SelectProps;
	ComboBoxProps?: ComboBoxProps;
	CheckBoxProps?: CheckBoxProps;
	PhoneInputProps?: PhoneInputProps;
	DatePickerProps?: DatePickerProps;
	TimePickerProps?: TimePickerProps;
	FileUploadProps?: FileUploadProps;
	DateRangePickerProps?: DateRangePickerProps;

	normalize?: Normalizer | undefined;
	validate?: Validator | Validator[] | undefined;

	fieldsArray?: never;
	FieldsProps?: never;
	reduxFormComponent?: never;
};

type CommonFormSectionFieldArrayProps = {
	validate?: never;
	normalize?: never;
	hideError?: never;

	InputProps?: never;
	SelectProps?: never;
	ComboBoxProps?: never;
	CheckBoxProps?: never;
	PhoneInputProps?: never;
	DatePickerProps?: never;
	TimePickerProps?: never;
	FileUploadProps?: never;

	FieldsProps?: {
		languages?: LanguageType[]
		showLabelInHeading?:boolean;
	}
	fieldsArray: ReduxFormField[];
};

type FormSectionProps = CommonFieldProps &
	CommonFormSectionFieldArrayProps & {
		reduxFormComponent: "FormSection";
	};

type FieldArrayProps = CommonFieldProps &
	CommonFormSectionFieldArrayProps & {
		reduxFormComponent: "FieldArray";
	};

export type ReduxFormField =
	| FieldProps
	| FormSectionProps
	| FieldArrayProps;

export interface ReduxFormFieldProps {
	member?: string;
	fields: ReduxFormField[];
}
