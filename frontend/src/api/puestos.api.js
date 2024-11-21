import axios from "axios";

const puestosApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/puestos",
});

export const getAllPuestos = () => puestosApi.get("/");

export const createPuesto = (puesto) => puestosApi.post("/", puesto);

export const updatePuesto = (id, puesto) => puestosApi.put(`/${id}/`, puesto);

export const deletePuesto = (puesto) => puestosApi.delete(`/${puesto}/`);

export const getPuesto = (puesto) => puestosApi.get(`/${puesto}/`);
