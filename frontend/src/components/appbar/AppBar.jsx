export function AppBar() {
  return (
    <>
      <div className="bg-gray-800 text-white p-4 mb-12">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">
            <a href="/" className="hover:text-gray-400">
              PayTrack
            </a>
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-400">
              Inicio
            </a>
            <a href="/empleados" className="hover:text-gray-400">
              Empleados
            </a>
            <a href="/concepto-nomina" className="hover:text-gray-400">
              Conceptos de Nómina
            </a>
            <a href="/puestos" className="hover:text-gray-400">
              Puestos
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
