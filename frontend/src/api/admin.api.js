import axios from "axios";

// Crear una instancia de Axios con una configuración base para la API de Administrador
const adminApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1", // Establece la URL base de la API de Administrador
});

// Función para iniciar sesión
// Envía una solicitud POST con las credenciales del usuario
export const loginAdmin = (credentials) =>
  adminApi.post("/login/", credentials);

// Función para crear un nuevo administrador
// Envía una solicitud POST con los datos del nuevo administrador
export const createAdmin = (admin) => adminApi.post("/", admin);
