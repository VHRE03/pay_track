import axios from "axios";

const empleadosApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/empleados",
});

export const getAllEmpleados = () => empleadosApi.get("/");

export const getEmpleado = (empleado) => empleadosApi.get(`/${empleado}/`);

export const createEmpleado = (empleado) => empleadosApi.post("/", empleado);

export const updateEmpleado = (id, empleado) =>
  empleadosApi.put(`/${id}/`, empleado);

export const deleteEmpleado = (empleado) =>
  empleadosApi.delete(`/${empleado}/`);

export const stateEmpleado = (id, empleado) =>
  empleadosApi.put(`/${id}/`, empleado);
