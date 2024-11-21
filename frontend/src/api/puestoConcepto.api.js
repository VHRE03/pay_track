import axios from "axios";

const puestoConceptoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/puesto_conceptos",
});

export const getConceptos = (puesto) =>
  puestoConceptoApi.get(`/?puesto=${puesto}`);
