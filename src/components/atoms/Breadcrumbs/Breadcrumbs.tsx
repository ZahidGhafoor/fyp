import { BsDot } from "react-icons/bs";
import { Breadcrumbs as MuiBreadcrumbs, Stack } from "@mui/material";

export default function Breadcrumbs({ children }: any) {
	//   const breadcrumbs = [
	//     <Link
	//         to=
	//       key="1"
	//       color="inherit"
	//       href="/"
	//       onClick={handleClick}
	//     >
	//       MUI
	//     </Link>,
	//     <Link
	//       underline="hover"
	//       key="2"
	//       color="inherit"
	//       href="/getting-started/installation/"
	//       onClick={handleClick}
	//     >
	//       Core
	//     </Link>,
	//     <Typography key="3" color="text.primary">
	//       Breadcrumb
	//     </Typography>,
	//   ];
	return (
		<Stack spacing={2}>
			<MuiBreadcrumbs
				separator={<BsDot size="24px" />}
				aria-label="breadcrumb"
			>
				{children}
			</MuiBreadcrumbs>
		</Stack>
	);
}
