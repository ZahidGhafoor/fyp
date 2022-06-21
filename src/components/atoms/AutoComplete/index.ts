export { default } from "./AutoComplete";

export interface Suggestion {
	place_id: any;
	description: any;
}

export interface IValue {
	value: any;
	details?: any;
}

export interface AutoCompleteOwnProps {
	val: IValue;
	handleChange: (value: any) => void;
}

export interface AutoCompletesOwnProps {
	value: IValue;
	onChange: (value: IValue) => void;
}

export const fields = [
	"url",
	"name",
	"types",
	"place_id",
	"formatted_address",
	"geometry.location",
	"address_components",
];
