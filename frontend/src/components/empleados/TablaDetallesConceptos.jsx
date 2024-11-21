import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export function TablaDetallesConceptos({ conceptos }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="empleados table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" color="initial">
                  Concepto de nómina
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="initial">
                  Importe
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="initial">
                  Tipo
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {conceptos.map((concepto) => (
              <TableRow key={concepto.id} className="hover:bg-gray-100">
                <TableCell>{concepto.concepto.nombre}</TableCell>
                <TableCell>{concepto.importe}</TableCell>
                <TableCell>{concepto.tipo_concepto.tipo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
