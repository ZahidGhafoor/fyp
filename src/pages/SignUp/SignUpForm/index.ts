// import { email, required } from "utils/validate.util";
import InputRedux from "components/molecules/InputRedux";
import { ReduxFormField } from "components/molecules/ReduxFormFields/index";

export { default } from "./SignUpForm";

export const fields: ReduxFormField[] = [
  {
    name: "fname",
    label: "First Name",
    // validate: [required, email],
    component: InputRedux,
    cellProps: { lg: 12 },
    // InputProps: { type: "email" },
  },
  {
    name: "lname",
    label: "Last Name",
    // validate: [required, email],
    component: InputRedux,
    cellProps: { lg: 12 },
    // InputProps: { type: "email" },
  },
  {
    name: "email",
    label: "Email",
    // validate: [required, email],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { type: "email" },
  },
  {
    name: "password",
    label: "Password",
    // validate: [required],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { showIcon: true, type: "password" },
  },
  {
    name: "cpassword",
    label: "Confirm Password",
    // validate: [required],
    component: InputRedux,
    cellProps: { lg: 12 },
    InputProps: { showIcon: true, type: "password" },
  },
];
