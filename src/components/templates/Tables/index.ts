import { styled, TableRow, TableCell, tableCellClasses } from "@mui/material";

export { default } from "./Tables";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  td: {
    border: 0,
    // borderBottom: "1px solid #f0f0f0",
    padding: "14px",
  },
  // background: "#fafafa",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    paddingTop: "0",
    paddingLeft: "14px",
    color: "#1e2731",
    fontWeight: "600",
    paddingBottom: "12px",
    borderBottomWidth: "0px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "rgb(0 0 0 / 70%)",
  },
}));
