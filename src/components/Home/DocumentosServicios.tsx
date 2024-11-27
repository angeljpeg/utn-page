import { Link } from "react-router-dom";

export default function DocumentosServicios() {
  return (
    <div className="w-full bg-gray-100 h-fit">
      <div className="items-center justify-center block w-full gap-4 px-6 py-12 m-auto h-fit lg:flex lg:w-3/4 lg:px-0">
        <div className="w-full h-fit lg:w-1/2">
          <h2 className="pb-3 text-3xl font-medium text-gray-900">
            Documentos y servicios
          </h2>
          <p className="mb-4">
            Información relevante sobre la institución como código de conducta,
            código de ética, aviso de privacidad, tramites, programa
            institucional, transparencia, entre otros.
          </p>
          <Link
            className="px-2 py-3 text-white transition duration-300 ease-out bg-green-500 rounded-lg shadow-md hover:bg-green-400 "
            to="/documentos-servicios"
          >
            Ver más
          </Link>
        </div>
        <div className="mt-4 w-[300px] h-[300px] lg:mt-0 lg:w-[350px] lg:h-[350px] md:w-[400px] md:h-[400px] md:m-auto">
          <img
            className="object-cover w-full h-full"
            src="https://picsum.photos/900/900"
            alt="Foto"
          />
        </div>
      </div>
    </div>
  );
}
