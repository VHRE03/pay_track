import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { TablaPuestos } from "../../components/Puestos/TablaPuestos";

export function PuestosPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crear-puesto");
  };
  return (
    <>
      <div className="flex flex-col items-center w-full mt-4">
        <Typography
          variant="h2"
          className="text-gray-800 text-2xl font-bold mb-6 text-center"
        >
          Puestos
        </Typography>
        <div className="w-4/5">
          <div className="flex justify-start mb-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
            >
              Agregar puesto
            </Button>
          </div>
          <div>
            <TablaPuestos />
          </div>
        </div>
      </div>
    </>
  );
}
