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

export function TablaDetallesPuesto({ puesto }) {
  return (
    <>
      <TableContainer
        component={Paper}
        className="w-4/5 mx-auto shadow-lg rounded-lg bg-white"
      >
        <Table sx={{ minWidth: 650 }} aria-label="empleados table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" color="initial">
                  Puesto
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" color="initial">
                  Sueldo Quincenal
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={puesto.id} className="hover:bg-gray-100">
              <TableCell>{puesto.nombre}</TableCell>
              <TableCell>{puesto.sueldo_quincenal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
