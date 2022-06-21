import AutoComplete from "components/atoms/AutoComplete";

export default function AutoCompleteRedux({
	input,
	handleBlur,
	handleFocus,
	meta: { error, touched, invalid },
	InputProps,
	...rest
}: any) {
	const { value, onChange, ...inputRest } = input;

	return (
		<AutoComplete
			{...InputProps}
			{...rest}
			{...inputRest}
			val={value}
			helperText={touched && invalid && error}
			error={touched && invalid && error && true}
			handleChange={onChange}
			onBlur={(e) => {
				handleBlur?.(e);
				e.preventDefault();
			}}
			onFocus={(e) => {
				handleFocus?.(e);
				e.preventDefault();
			}}
		/>
	);
}
