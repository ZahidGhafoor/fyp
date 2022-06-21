import { Android12Switch } from ".";
import { FormGroup, FormControlLabel } from "@mui/material";

export default function SwitchButton({ label, ...rest }: any) {
	return (
		<FormGroup>
			<FormControlLabel
				color="success"
				control={<Android12Switch color="success" {...rest} />}
				label={label}
			/>
			{/* <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack> */}
		</FormGroup>
	);
}
