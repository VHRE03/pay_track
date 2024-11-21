import { set, useForm } from "react-hook-form";

import { createPuesto, getPuesto, updatePuesto } from "../../api/puestos.api";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function PuestosFormPage() {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPuesto() {
      if (params.id) {
        const res = await getPuesto(params.id);

        setValue("nombre", res.data.nombre);
      }
    }

    loadPuesto();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatePuesto(params.id, data);
    } else {
      await createPuesto(data);
    }

    navigate("/puestos");
  });

  return (
    <div className="flex justify-center w-full mt-10">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/5 lg:w-2/5 mt-10"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Formulario de Registro
        </h2>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese el nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("nombre", { required: true })}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-1/2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
