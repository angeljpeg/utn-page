import { Link } from "react-router-dom";
import OfertaEducativa from "../OfertaEducativa/OfertaEducativaPage";
import Documentos from "../../assets/img/documentos/documentos.webp";
import FondoUTN from "../../assets/img/escuela/fondo-utn.webp";
import { info } from "./data/utn-info";

export default function HomePage() {
  return (
    <section className="w-full">
      <main className="min-h-screen pt-24">
        {/* Resumen académico */}
        <div className="flex justify-center py-28 w-ful h-fit">
          <div className="w-full px- lg:w-3/4 md:w-11/12 h-fit lg:mx-0 md:mx-0">
            <h2 className="mb-12 text-4xl font-medium text-center text-gray-900">
              Resumen Académico
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <li className="p-4">
                <p className="text-6xl font-bold text-center text-green-500">
                  {info.ofertaEducativa}
                </p>
                <p className="py-2 text-lg font-medium text-center border-b-[3px] border-green-500">
                  Oferta educativa
                </p>
              </li>
              <li className="p-4">
                <p className="text-6xl font-bold text-center text-green-500">
                  {info.matriculaActual}
                </p>
                <p className="py-2 text-lg font-medium text-center border-b-[3px] border-green-500">
                  Matricula actual
                </p>
              </li>
              <li className="p-4">
                <p className="text-6xl font-bold text-center text-green-500">
                  {info.alumnosEgresadosTSU}
                </p>
                <p className="py-2 text-lg font-medium text-center border-b-[3px] border-green-500">
                  Alumnos egresados TSU
                </p>
              </li>
              <li className="p-4">
                <p className="text-6xl font-bold text-center text-green-500">
                  {info.alumnosEgresadosING}
                </p>
                <p className="py-2 text-lg font-medium text-center border-b-[3px] border-green-500">
                  Alumnos egresados ING
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Objetivo */}
        <div
          className="relative w-full bg-fixed bg-center bg-cover py-28 h-fit"
          style={{ backgroundImage: `url(${FondoUTN})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 to-transparent"></div>
          <div className="flex flex-col items-center justify-center h-full px-4">
            <div className="z-10 flex flex-col items-center justify-center gap-4">
              <p className="px-4 py-2 text-xl font-light text-center text-white rounded-md lg:text-2xl md:text-2xl">
                "El objetivo de esta dependencia es formar profesionistas
                competitivos con conocimientos, habilidades y valores, a través
                de un modelo educativo actualizado que les permita integrarse al
                ámbito productivo e impulsar la transformación y el desarrollo
                de la sociedad."
              </p>
              <div className="h-full w-28">
                <img src="/utn-blanco.svg" alt="UTN logo" />
              </div>
            </div>
          </div>
        </div>

        {/* Oferta educativa */}
        <h2 className="pt-24 text-4xl font-medium text-center text-gray-900">
          Oferta educativa
        </h2>
        <OfertaEducativa />

        {/* Documentos y servicios - Redirección a cuadrícula de links */}
        <div className="w-full bg-gray-100 h-fit">
          <div className="items-center justify-center block w-full px-6 py-12 m-auto h-fit lg:flex lg:w-3/4 lg:px-0">
            <div className="w-full lg:w-[calc(100%-350px)] h-fit lg:pr-4">
              <h2 className="pb-3 text-3xl font-medium text-gray-900">
                Documentos y servicios
              </h2>
              <p className="mb-4">
                Información relevante sobre la institución como código de
                conducta, código de ética, aviso de privacidad, tramites,
                programa institucional, transparencia, entre otros.
              </p>
              <button className="px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500 ">
                <Link to="/documentos-servicios">Ver más</Link>
              </button>
            </div>
            <div className="mt-4 lg:m-0 w-[200px] h-[200px] lg:mt-0 lg:w-[350px] lg:h-[350px] md:w-[400px] md:h-[400px] m-auto">
              <img
                className="object-cover w-full h-full"
                src={Documentos}
                alt="Foto"
              />
            </div>
          </div>
        </div>

        {/* Programa Institucional de Desarrollo - Redirección a PDF externo */}
        <div className="w-full h-fit text-center lg:text-left gap-4 py-16 lg:px-36 px-10 items-center flex flex-col lg:flex-row justify-between text-white text-2xl lg:text-4xl font-semibold animate-animated-gradient bg-gradient-to-br from-lime-500 via-green-500 to-lime-500 bg-[length:200%_200%]">
          <p>Programa Institucional de Desarrollo 2022-2027</p>
          <Link className="px-4 py-2 text-base font-medium duration-150 border-2 border-white hover:bg-lime-400/30 w-fit rounded-xl lg:text-lg">
            Leer más
          </Link>
        </div>
      </main>
    </section>
  );
}
