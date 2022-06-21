import { useState } from "react";
import { CssTextField, InputProps } from ".";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputLabel } from "@mui/material";

export default function Input({ showIcon, type, label, ...rest }: InputProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <InputLabel shrink htmlFor={rest.name} sx={{ fontWeight: "bold" }}>
        {label}
      </InputLabel>
      <CssTextField
        fullWidth
        variant="filled"
        id={rest.name}
        {...rest}
        type={show && showIcon && type === "password" ? "text" : type}
        InputProps={{
          endAdornment: showIcon && type === "password" && (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => setShow(!show)}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="toggle password visibility"
              >
                {show ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          ...rest.InputProps,
        }}
      />
    </>
  );
}
