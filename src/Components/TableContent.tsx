import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { StyledTableCell, StyledTableRow } from "../Styles/TableContentStyle";

interface TableProps {
  tempAparent: number;
  wind: string;
  pressure: number;
  clouds: number;
  visibility: number;
  uv: number;
}

const TableContent: React.FC<TableProps> = (props: TableProps) => {
  const createData = (name: string, value: any) => {
    return { name, value };
  };

  // const convertLocaleDate = (unixTime : number) =>{
  //     let miliseconds = unixTime * 1000;
  //     let dateObject = new Date(miliseconds);
  //     let dateFormat = dateObject.toLocaleString("es-AR",{timeZoneName: "short"});
  //     return dateFormat;
  // }
  const rows = [
    createData("Temperatura aparente", props.tempAparent + "°"),
    createData("Direccion del viento", props.wind + "°"),
    createData("Presion", props.pressure + "MB"),
    createData("Nubosidad", props.clouds + "%"),
    createData("Visibilidad", props.visibility + "KM"),
    createData("Indice UV", props.uv + " 0-11 +"),
  ];

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Descripciones</StyledTableCell>
            <StyledTableCell align="right">Valores</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
