import { Grid } from "@mui/material";
import { AppContainerProps } from ".";

export default function AppContainer({ children }: AppContainerProps) {
	return (
		<div className="app-container">
			<Grid container>
				<Grid item xs={8}>
					{children}
				</Grid>
			</Grid>
		</div>
	);
}
