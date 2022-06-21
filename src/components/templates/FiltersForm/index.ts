import { ReduxFormField } from "components/molecules/ReduxFormFields";
export { default } from "./FiltersForm";

export type FiltersFormProps = {
  submitBtnText?: string;
  myFields: ReduxFormField[];
  onClickReset?: () => void;
};
