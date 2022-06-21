import { fields } from ".";
import { reduxForm } from "redux-form";
import Button from "components/atoms/Button";
import ReduxFormFields from "components/molecules/ReduxFormFields";

function SignUpForm({ handleSubmit }: any) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ReduxFormFields fields={fields} />
        <br />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default reduxForm({ form: "SignUpForm" })(SignUpForm);
