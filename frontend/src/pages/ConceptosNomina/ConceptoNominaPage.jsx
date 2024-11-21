import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { TablaConceptoNomina } from "../../components/ConptoNomina/TablaConceptoNomina";

export function ConceptoNominaPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/crear-concepto");
  };
  return (
    <>
      <div className="flex flex-col items-center w-full mt-4">
        <Typography
          variant="h2"
          className="text-gray-800 text-2xl font-bold mb-6 text-center"
        >
          Conceptos de Nómina
        </Typography>
        <div className="w-4/5">
          <div className="flex justify-start mb-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
            >
              Agregar concepto de nómina
            </Button>
          </div>
          <div>
            <TablaConceptoNomina />
          </div>
        </div>
      </div>
    </>
  );
}
