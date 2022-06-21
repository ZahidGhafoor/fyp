import { exportTable } from "utils/export.util";
import TableOptionsForm from "./TableOptionsForm";
import { modalActions } from "redux/slices/modal";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function ExportTableOptions() {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.modal.data);

	const handleSubmit = (values: any) => {
		exportTable(data, values, "Vehicles List");
		dispatch(modalActions.closeModal());
	};

	return (
		<div>
			<h2>Export table</h2>
			<p>Select coloumns you want to export</p>
			<TableOptionsForm onSubmit={handleSubmit} />
		</div>
	);
}
