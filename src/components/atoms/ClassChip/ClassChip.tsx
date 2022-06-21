import { Chip as BaseChip } from "@mui/material";
import { makeStyles } from "@mui/material/styles";

export type ChipProps = React.ComponentProps<typeof BaseChip>;

const useStyles: any = makeStyles((theme: any) => ({
	business: {
		backgroundColor: "#EBE4FE",
		color: "#A783FF",
	},
	first: {
		backgroundColor: "#EBF9FF",
		color: "#00C3FF",
	},
	van: {
		backgroundColor: "#F8FFFA",
		color: "#2FDE9E",
	},
	bus: {
		backgroundColor: "#E6E9F4",
		color: "#2C3559",
	},
	info: {
		backgroundColor: "#FFF5DA",
		color: "#FFC020",
	},
}));

export default function ClassChip(props: ChipProps) {
	const classes = useStyles();

	return (
		<BaseChip
			{...props}
			className={
				props.label === "Business"
					? classes.business
					: props.label === "First"
					? classes.first
					: props.label === "Van"
					? classes.van
					: props.label === "Bus"
					? classes.bus
					: classes.info
			}
			style={{
				fontSize: "12px",
				textTransform: "capitalize",
				paddingLeft: "10px",
				paddingRight: "10px",
			}}
		/>
	);
}
