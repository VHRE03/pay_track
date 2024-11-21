import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { EmpleadosPage } from "./pages/Empleados/EmpleadosPage";
import { EmpleadosFormPage } from "./pages/Empleados/EmpleadosFormPage";
import { EmpleadosDetallesPage } from "./pages/Empleados/EmpleadosDetallesPage";
import { AppBar } from "./components/appbar/AppBar";

import { LoginPage } from "./pages/Login/LoginPage";

import { ConceptoNominaPage } from "./pages/ConceptosNomina/ConceptoNominaPage";
import { ConceptoNominaFormPage } from "./pages/ConceptosNomina/ConceptoNominaFormPage";

import { PuestosPage } from "./pages/Puestos/PuestosPage";
import { PuestosFormPage } from "./pages/Puestos/PuestosFormPage";
import { PuestoConceptoPage } from "./pages/Puestos/PuestoConcepto";

function App() {
  return (
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  );
}

function AppWithRouter() {
  const location = useLocation();

  return (
    <>
      {/* Condicionalmente renderizar el AppBar si no estamos en la página de login */}
      {location.pathname !== "/login" && <AppBar />}

      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<EmpleadosPage />} />

        {/* Rutas para el Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas para el CRUD de Empleados */}
        <Route path="/empleados" element={<EmpleadosPage />} />
        <Route path="/crear-empleado" element={<EmpleadosFormPage />} />
        <Route path="/editar-empleado/:id" element={<EmpleadosFormPage />} />
        <Route
          path="/detalles-empleado/:id"
          element={<EmpleadosDetallesPage />}
        />

        {/* Rutas para el CRUD de Conceptos de Nómina */}
        <Route path="/concepto-nomina" element={<ConceptoNominaPage />} />
        <Route path="/crear-concepto" element={<ConceptoNominaFormPage />} />
        <Route
          path="/editar-concepto/:id"
          element={<ConceptoNominaFormPage />}
        />

        {/* Rutas para el CRUD de Puestos */}
        <Route path="/puestos" element={<PuestosPage />} />
        <Route path="/crear-puesto" element={<PuestosFormPage />} />
        <Route path="/editar-puesto/:id" element={<PuestosFormPage />} />
        <Route path="/puesto-conceptos/:id" element={<PuestoConceptoPage />} />
      </Routes>
    </>
  );
}

export default App;
