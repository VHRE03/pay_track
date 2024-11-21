import { TablaEmpleados } from "../../components/empleados/TablaEmpleados";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function EmpleadosPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crear-empleado");
  };

  return (
    <>
      <div className="flex flex-col items-center w-full mt-4">
        <Typography
          variant="h2"
          className="text-gray-800 text-2xl font-bold mb-6 text-center"
        >
          Empleados
        </Typography>
        <div className="w-4/5">
          <div className="flex justify-start mb-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
            >
              Agregar Usuario
            </Button>
          </div>
          <div>
            <TablaEmpleados />
          </div>
        </div>
      </div>
    </>
  );
}
