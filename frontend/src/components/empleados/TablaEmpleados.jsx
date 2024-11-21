import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllEmpleados,
  stateEmpleado,
  deleteEmpleado,
} from "../../api/empleados.api";
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

export function TablaEmpleados() {
  const navigate = useNavigate();
  const [empleados, setEmpleados] = useState([]);

  const handleRedirect = (page, empleado) => {
    if (page === "detalles") {
      navigate(`/detalles-empleado/${empleado}`);
    }
  };

  const handleUpdate = (empleado) => {
    navigate(`/editar-empleado/${empleado}`);
  };

  const handleState = async (estado, empleado) => {
    empleado = {
      id: empleado.id,
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      activo: estado === "alta" ? true : false,
      region: empleado.region.id,
      puesto: empleado.puesto.id,
    };

    await stateEmpleado(empleado.id, empleado);

    loadEmpleados();
  };

  const handleDelete = async (empleado) => {
    await deleteEmpleado(empleado);

    loadEmpleados();
  };

  const loadEmpleados = async () => {
    const res = await getAllEmpleados();
    setEmpleados(res.data);
  };

  useEffect(() => {
    loadEmpleados();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="empleados table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Puesto</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empleados.map((empleado) => (
            <TableRow key={empleado.id}>
              <TableCell>{empleado.nombre + " " + empleado.apellido}</TableCell>
              <TableCell>{empleado.region.nombre}</TableCell>
              <TableCell>{empleado.puesto.nombre}</TableCell>
              <TableCell>{empleado.activo ? "Activo" : "Inactivo"}</TableCell>
              <TableCell>
                <ButtonGroup variant="text" color="default" aria-label="">
                  <Button
                    color="primary"
                    onClick={() => handleRedirect("detalles", empleado.id)}
                  >
                    Detalles
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => handleUpdate(empleado.id)}
                  >
                    Editar
                  </Button>
                  {empleado.activo ? (
                    <Button
                      color="warning"
                      onClick={() => handleState("baja", empleado)}
                    >
                      Dar de baja
                    </Button>
                  ) : (
                    <Button
                      color="success"
                      onClick={() => handleState("alta", empleado)}
                    >
                      Dar de alta
                    </Button>
                  )}
                  <Button
                    size="small"
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(empleado.id)}
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
