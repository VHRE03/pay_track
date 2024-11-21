import { useEffect, useState } from "react";
import { getEmpleado } from "../../api/empleados.api";
import { getPuesto } from "../../api/puestos.api";
import { getConceptos } from "../../api/puestoConcepto.api";
import { useParams } from "react-router-dom";
import { CardDetallesEmpleado } from "../../components/empleados/CardDetallesEmpleado";
import { TablaDetallesPuesto } from "../../components/empleados/TablaDetallesPuesto";
import { TablaDetallesConceptos } from "../../components/empleados/TablaDetallesConceptos";

export function EmpleadosDetallesPage() {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);
  const [puesto, setPuesto] = useState(null);
  const [conceptos, setConceptos] = useState([]);

  useEffect(() => {
    async function loadEmpleado() {
      const res = await getEmpleado(id);
      setEmpleado(res.data);
      if (res.data.puesto) {
        await loadPuesto(res.data.puesto.id);
        await loadConceptos(res.data.puesto.id);
      }
    }

    async function loadPuesto(puesto_id) {
      const res = await getPuesto(puesto_id);
      setPuesto(res.data);
    }

    async function loadConceptos(puesto_id) {
      const res = await getConceptos(puesto_id);
      setConceptos(res.data);
    }

    loadEmpleado();
  }, [id]);

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="w-4/5">
        {/* Card de Detalles Empleado */}
        <div className="mb-6">
          {empleado ? (
            <CardDetallesEmpleado empleado={empleado} />
          ) : (
            <div>Cargando empleado...</div>
          )}
        </div>

        {/* Contenedor de las tablas */}
        <div className="flex justify-between">
          {/* Tabla Detalles Puesto */}
          <div className="w-1/2 mr-4">
            {puesto ? (
              <TablaDetallesPuesto puesto={puesto} />
            ) : (
              <div>Cargando puesto...</div>
            )}
          </div>

          {/* Tabla Detalles Conceptos */}
          <div className="w-1/2 ml-4">
            {conceptos ? (
              <TablaDetallesConceptos conceptos={conceptos} />
            ) : (
              <div>Cargando conceptos...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
