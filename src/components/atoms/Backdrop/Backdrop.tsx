import { Backdrop as BaseBackdrop, BackdropProps } from "@mui/material";

export default function Backdrop(props: BackdropProps) {
	return (
		<BaseBackdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			{...props}
		/>
	);
}
