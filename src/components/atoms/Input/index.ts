import { styled, TextField, TextFieldProps } from "@mui/material";

export { default } from "./Input";

export interface InputOwnProps {
  showIcon?: boolean;
}

export type InputProps = InputOwnProps & TextFieldProps;

export const CssTextField = styled(TextField)({
  // Filled Input
  "& .MuiFilledInput-root": {
    backgroundColor: "#F5F5F5",
    borderRadius: "4px",
  },
  "& .MuiFilledInput-root input": {
    padding: "12px",
  },
  "& .MuiFilledInput-root:after, .MuiFilledInput-root:before": {
    display: "none",
  },
  "& .Mui-disabled": {
    backgroundColor: "#fafafa",
    opacity: "0.5",
  },
  "& .Mui-focused .MuiInputBase-input": {
    backgroundColor: "#f7f7f7 !important",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#f7f7f7 !important",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 0, 0, 0.6)",
  },
  // Outline Input
  // "& label.Mui-focused": {
  //   color: "rgba(0, 0, 0, 0.53) !important",
  // },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "rgba(0, 0, 0, 0.53) !important",
  // },
  // "& .MuiOutlinedInput-root": {
  //   "& fieldset": {
  //     borderColor: "#1e2731",
  //     transition: "all 0.3s ease",
  //   },
  //   "&:hover fieldset": {
  //     borderColor: "#f5d312",
  //   },
  //   "&.Mui-focused fieldset": {
  //     borderColor: "rgba(0, 0, 0, 0.53) !important",
  //     fontWeight: "500 !important",
  //   },
  // },
});
