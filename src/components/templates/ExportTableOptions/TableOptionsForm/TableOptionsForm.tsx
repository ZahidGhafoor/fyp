import { change, reduxForm } from "redux-form";
import Button from "components/atoms/Button";
import { Grid } from "@mui/material";
import ReduxFormComponent from "components/atoms/ReduxFormComponent";
import CheckboxRedux from "components/molecules/CheckboxRedux";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useEffect } from "react";

function TableOptionsForm({ handleSubmit }: any) {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.modal.data);
	const keys = Object.keys(data[0]);

	useEffect(() => {
		keys.forEach((el) => dispatch(change("TableOptionsForm", el, true)));
	}, [keys, dispatch]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					{keys.map((el: any, index: any) => (
						<Grid item key={index}>
							<ReduxFormComponent
								name={el}
								type="checkbox"
								label={el}
								color="secondary"
								component={CheckboxRedux}
							/>
						</Grid>
					))}
				</Grid>
				<Button color="primary" variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
export default reduxForm({ form: "TableOptionsForm" })(TableOptionsForm);
