import { CircularProgress as BaseCircularProgress } from "@mui/material";

type BaseCircularProgressProps = React.ComponentProps<
	typeof BaseCircularProgress
>;

export default function CircularProgress(
	props: BaseCircularProgressProps
) {
	return <BaseCircularProgress color="inherit" {...props} />;
}
