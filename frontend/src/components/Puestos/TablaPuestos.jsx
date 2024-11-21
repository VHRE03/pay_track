import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllPuestos, deletePuesto } from "../../api/puestos.api";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonGroup,
  Button,
} from "@mui/material";

export function TablaPuestos() {
  const navigate = useNavigate();
  const [puestos, setPuestos] = useState([]);

  const handleConceptos = (puesto) => {
    navigate(`/puesto-conceptos/${puesto}`);
  };

  const handleUpdate = (puesto) => {
    navigate(`/editar-puesto/${puesto}`);
  };

  const handleDelete = async (puesto) => {
    await deletePuesto(puesto);

    loadPuestos();
  };

  const loadPuestos = async () => {
    const res = await getAllPuestos();
    setPuestos(res.data);
  };

  useEffect(() => {
    loadPuestos();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="puestos table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Sueldo Quincenal</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {puestos.map((puesto) => (
            <TableRow key={puesto.id}>
              <TableCell>{puesto.nombre}</TableCell>
              <TableCell>{puesto.sueldo_quincenal}</TableCell>
              <TableCell>
                <ButtonGroup variant="text" color="default" aria-label="">
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(puesto.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => handleConceptos(puesto.id)}
                  >
                    Conceptos de nómina
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(puesto.id)}
                  >
                    Eliminar
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
