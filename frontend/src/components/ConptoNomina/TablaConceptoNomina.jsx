import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllConceptosNomina,
  deleteConceptoNomina,
} from "../../api/conceptoNomina.api";
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

export function TablaConceptoNomina() {
  const navigate = useNavigate();
  const [conceptos, setConceptos] = useState([]);

  const handleUpdate = (concepto) => {
    navigate(`/editar-concepto/${concepto}`);
  };

  const handleDelete = async (concepto) => {
    await deleteConceptoNomina(concepto);

    loadConceptosNomina();
  };

  const loadConceptosNomina = async () => {
    const res = await getAllConceptosNomina();
    setConceptos(res.data);
  };

  useEffect(() => {
    loadConceptosNomina();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="conceptos table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conceptos.map((concepto) => (
            <TableRow key={concepto.id}>
              <TableCell>{concepto.nombre}</TableCell>
              <TableCell>{concepto.tipo}</TableCell>
              <TableCell>
                <ButtonGroup variant="text" color="default" aria-label="">
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(concepto.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(concepto.id)}
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
