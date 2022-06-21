import Input from "../Input";
import { TimePickerProps } from ".";
import { useRef, useState } from "react";
import { TimePicker as BaseTimePicker } from "@mui/lab";

export default function TimePicker({
	value,
	onChange,
	InputFieldProps,
	...rest
}: TimePickerProps) {
	const ref = useRef<any>();
	const [open, setOpen] = useState(false);

	return (
		<>
			<BaseTimePicker
				open={open}
				ampm={false}
				ampmInClock={false}
				value={value?.date || ""}
				onOpen={() => setOpen(true)}
				PopperProps={{ placement: "bottom-start", ...rest.PopperProps }}
				renderInput={(params) => (
					<Input
						autoComplete="off"
						InputLabelProps={{ shrink: true }}
						{...params}
						{...InputFieldProps}
						onClick={() => setOpen(true)}
						error={
							InputFieldProps.helperText ? InputFieldProps.error : false
						}
					/>
				)}
				onChange={(date) =>
					onChange?.({ date: date ? `${date}` : "", error: false })
				}
				onAccept={(date) =>
					onChange?.({ date: date ? `${date}` : "", error: false })
				}
				onError={(reason, date) => {
					if (!reason) return;
					onChange?.({ date: date ? `${date}` : "", error: true });
				}}
				onClose={() => {
					setOpen(false);
					setTimeout(() => {
						if (ref.current) ref.current.focus();
					}, 0);
				}}
				{...rest}
			/>
			<div ref={ref} tabIndex={-1} />
		</>
	);
}
