import { Link } from "react-router-dom";
import DocumentosIMG from "@/assets/images/documentos/documentos.webp";

export default function DocumentosServicios() {
  return (
    <div className="w-full bg-gray-100 h-fit">
      <div className="items-center justify-center block w-full px-6 py-12 m-auto h-fit lg:flex lg:w-3/4 lg:px-0">
        <div className="w-full lg:w-[calc(100%-350px)] h-fit lg:pr-4">
          <h2 className="pb-3 text-3xl font-medium text-gray-900">
            Documentos y servicios
          </h2>
          <p className="mb-4">
            Información relevante sobre la institución como código de conducta,
            código de ética, aviso de privacidad, tramites, programa
            institucional, transparencia, entre otros.
          </p>
          <Link
            className="inline-block px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500"
            to="/algunos-logos"
          >
            Ver más
          </Link>
        </div>
        <div className="hidden sm:block my-4 lg:m-0 w-[200px] h-[200px] lg:mt-0 lg:w-[350px] lg:h-[350px] md:w-[400px] md:h-[400px] m-auto">
          <img
            className="object-cover w-full h-full"
            src={DocumentosIMG}
            alt="Foto"
          />
        </div>
      </div>
    </div>
  );
}
