import { Button as BaseButton, ButtonProps } from "@mui/material";

export default function Button(props: ButtonProps) {
  return (
    <BaseButton
      style={{ textTransform: "capitalize" }}
      {...props}
      disableElevation
    />
  );
}
