import NoResult from "../NoResult";
import { Table } from "@mui/material";
import TableLoader from "../TableLoader";
import { TableLoadingWrapperProps } from ".";

export default function TableLoadingWrapper({
	length,
	loading,
	children,
	container,
	rows = 10,
	coloumns = 10,
	message = "No result found",
}: TableLoadingWrapperProps) {
	return (
		<>
			{loading && length === 0 ? (
				<>
					{container ? (
						<Table
							aria-label="customized table"
							sx={{
								minWidth: "100%",
								borderSpacing: "0 10px",
								borderBottomWidth: "0px",
								borderCollapse: "separate",
							}}
						>
							<TableLoader rows={rows} coloumns={coloumns} />
						</Table>
					) : (
						<TableLoader rows={rows} coloumns={coloumns} />
					)}
				</>
			) : length === 0 ? (
				<NoResult message={message} />
			) : (
				<>{children}</>
			)}
		</>
	);
}
