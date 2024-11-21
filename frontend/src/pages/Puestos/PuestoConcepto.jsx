import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPuesto } from "../../api/puestos.api";
import { getConceptos } from "../../api/puestoConcepto.api";

import { Typography } from "@mui/material";

import { TablaDetallesPuesto } from "../../components/empleados/TablaDetallesPuesto";
import { TablaDetallesConceptos } from "../../components/empleados/TablaDetallesConceptos";

export function PuestoConceptoPage() {
  const { id } = useParams();
  const [puesto, setPuesto] = useState(null);
  const [conceptos, setConceptos] = useState([]);

  useEffect(() => {
    async function loadPuesto() {
      try {
        const res = await getPuesto(id);
        setPuesto(res.data);

        if (res.data) {
          await loadConceptos(res.data.id);
        }
      } catch (error) {
        console.error("Error al cargar el puesto:", error);
      }
    }

    async function loadConceptos(puesto_id) {
      try {
        console.log(puesto_id);
        const res = await getConceptos(puesto_id);
        setConceptos(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error al cargar los conceptos:", error);
      }
    }

    loadPuesto();
  }, [id]);

  return (
    <div>
      <Typography
        variant="h2"
        className="text-gray-800 text-2xl font-bold mb-6 text-center"
      >
        Conceptos del puesto: {puesto?.nombre || "Cargando..."}
      </Typography>
      <div>
        {puesto ? (
          <TablaDetallesPuesto puesto={puesto} />
        ) : (
          <Typography variant="body1">
            Cargando detalles del puesto...
          </Typography>
        )}
      </div>

      <div>
        {conceptos ? (
          <TablaDetallesConceptos conceptos={conceptos} />
        ) : (
          <div>Cargando conceptos...</div>
        )}
      </div>
    </div>
  );
}
