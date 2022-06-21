import { FiltersFormProps } from ".";
import { InjectedFormProps, reduxForm, reset } from "redux-form";
import Button from "components/atoms/Button";
import ReduxFormFields from "components/molecules/ReduxFormFields";
import { Stack } from "@mui/material";
import { useAppDispatch } from "redux/hooks";
import { zipcodeActions } from "redux/slices/zipcode/zipcodeSlice";

const FiltersForm = ({
  myFields,
  handleSubmit,
  onClickReset,
  submitBtnText = "Submit",
}: FiltersFormProps & InjectedFormProps<{}, FiltersFormProps>) => {
  return (
    <form onSubmit={handleSubmit}>
      <ReduxFormFields fields={myFields} />
      <br />
      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained" type="submit">
          {submitBtnText}
        </Button>
        {onClickReset && (
          <Button color="error" variant="contained" onClick={onClickReset}>
            RESET
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default reduxForm<{}, FiltersFormProps>({
  form: "FiltersForm",
})(FiltersForm);
