import Input from "../Input";
import { useState } from "react";
import { DateRangePickerProps } from ".";
import DateService from "utils/date.util";
import { DesktopDateRangePicker } from "@mui/lab";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Grid, IconButton, InputAdornment } from "@mui/material";

export default function DateRangePicker({
	onChange,
	editable,
	InputCellProps,
	InputFieldProps,
	value: { date: value = ["", ""], error = ["", ""] },
	...rest
}: DateRangePickerProps) {
	const [open, setOpen] = useState(false);
	const InputProps = {
		autoComplete: "off",
		InputLabelProps: { shrink: true },
		...InputFieldProps,
		onClick: () => setOpen(true),
		onKeyDown: (e: any) => {
			if (!editable) e.preventDefault();
		},
		InputProps: {
			endAdornment: (
				<InputAdornment position="end">
					<IconButton edge="end">
						<DateRangeIcon />
					</IconButton>
				</InputAdornment>
			),
		},
	};

	return (
		<DesktopDateRangePicker
			open={open}
			value={value}
			calendars={2}
			mask="__.__.____"
			endText="End Date"
			startText="Start Date"
			inputFormat="dd.MM.yyyy"
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			onChange={(date: any) =>
				onChange?.({
					error: ["", ""],
					date: DateService.getDateRange(date),
				})
			}
			onAccept={(date: any) =>
				onChange?.({
					error: ["", ""],
					date: DateService.getDateRange(date),
				})
			}
			onError={(reason: any, date: any) => {
				onChange?.({
					error: reason,
					date: DateService.getDateRange(date),
				});
			}}
			{...rest}
			renderInput={(
				{ ref: s, inputProps: sInputProps, ...startProps }: any,
				{ ref: e, inputProps: eInputProps, ...endProps }: any
			) => (
				<Grid container spacing={2}>
					<Grid item xs={12} {...InputCellProps}>
						<Input
							{...InputProps}
							{...startProps}
							inputProps={{
								...sInputProps,
								value: value[0] ? sInputProps?.value : "",
							}}
							error={
								InputFieldProps?.helperText &&
								InputFieldProps?.error &&
								(error[0] || !value[0] || value[0] === "Invalid Date")
									? true
									: false
							}
							helperText={
								InputFieldProps?.helperText &&
								InputFieldProps?.error &&
								(error[0] || !value[0] || value[0] === "Invalid Date") &&
								InputFieldProps.helperText
							}
						/>
					</Grid>
					<Grid item xs={12} {...InputCellProps}>
						<Input
							{...InputProps}
							{...endProps}
							inputProps={{
								...eInputProps,
								value: value[1] ? eInputProps?.value : "",
							}}
							error={
								InputFieldProps?.helperText &&
								InputFieldProps?.error &&
								(error[1] || !value[1] || value[1] === "Invalid Date")
									? true
									: false
							}
							helperText={
								InputFieldProps?.helperText &&
								InputFieldProps?.error &&
								(error[1] || !value[1] || value[1] === "Invalid Date") &&
								InputFieldProps.helperText
							}
						/>
					</Grid>
				</Grid>
			)}
		/>
	);
}
