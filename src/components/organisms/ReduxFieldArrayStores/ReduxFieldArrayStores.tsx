import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableLoadingWrapper from "components/templates/TableLoadingWrapper";
import { StyledTableCell, StyledTableRow } from "components/templates/Tables";
import { Field } from "redux-form";

export default function ReduxFieldArrayStores({ fields, fieldsArray }: any) {
  return (
    <TableContainer>
      <Table
        aria-label="customized table"
        sx={{
          minWidth: "100%",
          borderSpacing: "0 10px",
          borderBottomWidth: "0px",
          borderCollapse: "separate",
        }}
      >
        <TableLoadingWrapper
          container
          coloumns={4}
          loading={false}
          length={fields?.length}
          message="No stores available"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Store</StyledTableCell>
              <StyledTableCell>Hide on List</StyledTableCell>
              <StyledTableCell>Hide on Search</StyledTableCell>
              <StyledTableCell>Available</StyledTableCell>
              <StyledTableCell>Stock Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((member: any, i: number) => (
              <StyledTableRow key={i}>
              <StyledTableCell>{fields.get(i).name}</StyledTableCell>

                {fieldsArray.map((field: any, j: number) => (
                  <StyledTableCell key={j}>
                    <Field
                      id={field.name}
                      {...field}
                      name={member ? `${member}.${field.name}` : field.name}
                    />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </TableLoadingWrapper>
      </Table>
    </TableContainer>
  );
}
