import Chip from "../Chip";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

export default function StatusUpdateChip({ label, menu, data }: any) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event: any) => {
		setAnchorEl(null);

		// if (event.target.textContent)
		// 	dispatch(
		// 		modalActions.openModal({
		// 			width: "500px",
		// 			type: HANDLE_STATUS,
		// 			data: { form: event.target.textContent, ...data },
		// 		})
		// 	);
	};

	return (
		<div>
			<Chip
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				status={label}
				size="small"
				onClick={(e: any) => handleClick(e)}
				style={{ cursor: "pointer" }}
			/>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{menu.map((item: any, index: any) => (
					<MenuItem key={index} onClick={handleClose}>
						{item}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
