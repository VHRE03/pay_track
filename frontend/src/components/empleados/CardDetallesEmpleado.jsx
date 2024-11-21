import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export function CardDetallesEmpleado({ empleado }) {
  return (
    <div className="flex justify-start items-center w-full mt-10 mb-14">
      {/* Datos del empleado */}
      <div className="md:w-3/5 lg:w-2/5">
        <Typography
          variant="h3"
          className="text-gray-800 font-bold text-left mb-4"
        >
          {empleado.nombre} {empleado.apellido}
        </Typography>

        <Typography variant="h5" className="text-gray-600 mb-2">
          <span className="font-semibold">Estado:</span>{" "}
          {empleado.activo ? "Activo" : "Inactivo"}
        </Typography>
        <Typography variant="h5" className="text-gray-600 mb-2">
          <span className="font-semibold">Región:</span>{" "}
          {empleado.region.nombre}
        </Typography>
        <Typography variant="h5" className="text-gray-600">
          <span className="font-semibold">Puesto:</span>{" "}
          {empleado.puesto.nombre}
        </Typography>
      </div>
    </div>
  );
}
