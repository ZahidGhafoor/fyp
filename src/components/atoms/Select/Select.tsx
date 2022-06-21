import { SelectProps } from ".";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, styled, TextField, InputLabel } from "@mui/material";

const CssTextField = styled(TextField)({
  // Filled Input
  "& .MuiFilledInput-root": {
    backgroundColor: "#F5F5F5",
    borderRadius: "4px",
  },
  "& .MuiSelect-filled": {
    padding: "12px",
  },
  "& .MuiFilledInput-root:after, .MuiFilledInput-root:before": {
    display: "none",
  },
  "& .Mui-disabled": {
    backgroundColor: "#fafafa",
    opacity: "0.5",
  },
  "& .Mui-focused": {
    backgroundColor: "#f7f7f7 !important",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#f7f7f7 !important",
  },
  "& .MuiFilledInput-input:focus": {
    backgroundColor: "#f7f7f7 !important",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 0, 0, 0.6)",
  },
  // Outlined Input
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

export default function Select({
  disabled,
  disabledOnUpdate,
  options = [],
  label,
  ...rest
}: SelectProps) {
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <>
      <InputLabel shrink htmlFor={rest.name} sx={{ fontWeight: "bold" }}>
        {label}
      </InputLabel>
      <CssTextField
        select
        fullWidth
        variant="filled"
        SelectProps={{ MenuProps: { sx: { maxHeight: "300px" } } }}
        {...rest}
        disabled={disabledOnUpdate && id ? true : disabled}
      >
        {options.map(({ value, label }, index) => (
          <MenuItem
            key={index}
            value={value}
            selected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {label}
          </MenuItem>
        ))}
      </CssTextField>
    </>
  );
}
