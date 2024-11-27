import { useEffect } from "react";
// Store
import { useHomeStore } from "@/store/RootStore";

// Components
import { DocumentosServicios, FooterHome } from "@/components/Home";
import { TabsModelos } from "@/components/OfertaEducativaPage";
import fondoUTN from "@/assets/images/escuela/fondo-utn.webp"

export default function HomePage() {
  const updateHome = useHomeStore((state) => state.updateHome);
  const updateComponent = useHomeStore((state) => state.updateComponent);

  const info = {
    ofertaEducativa: "",
    matriculaActual: "",
    alumnosEgresadosTSU: "",
    alumnosEgresadosING: "",
  };

  useEffect(() => {
    updateHome(true);
    updateComponent(<h1>hola mundo</h1>);
  }, [updateHome, updateComponent]);

  return (
    <section className="w-full overflow-x-hidden">
      <main className="pt-24">
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
          style={{ backgroundImage: `url(${fondoUTN})` }}
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
        <h2 className="pt-24 text-4xl font-medium text-center text-gray-900">
          Oferta Educativa
        </h2>
        <section className="py-10">
          <TabsModelos />
        </section>

        <DocumentosServicios />

        <FooterHome />
      </main>
    </section>
  );
}
