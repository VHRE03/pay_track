import axios from "axios";

const conceptoNominaApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/concepto_nominas",
});

export const getAllConceptosNomina = () => conceptoNominaApi.get("/");

export const createConceptoNomina = (concepto) =>
  conceptoNominaApi.post("/", concepto);

export const updateConceptoNomina = (id, concepto) =>
  conceptoNominaApi.put(`/${id}/`, concepto);

export const getConceptoNomina = (concepto) =>
  conceptoNominaApi.get(`/${concepto}/`);

export const deleteConceptoNomina = (concepto) =>
  conceptoNominaApi.delete(`/${concepto}/`);
