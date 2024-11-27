import { useEffect } from "react";
import { useHomeStore } from "@/store/RootStore";

import logo_Emprendedores from "@/assets/images/cuadriculaLogos/emprende_logo.webp";
import banner_Emprendedores from "@/assets/images/banners/emprendedor_banner.webp";

export default function EmprendedoresPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(banner_Emprendedores);
    updateTitle("Emprendedores");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full">
      <main className="min-h-screen py-24">
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
              Vinculación
            </h2>
            <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
              Programa Emprendedores
            </h3>
            <div className="lg:flex lg:items-center">
              <img
                src={logo_Emprendedores}
                alt="Imagen"
                className="float-left mr-4 h-30 w-30 min-w-fit lg:h-full lg:w-20"
                loading="lazy"
              />
              <div>
                <p className="text-lg italic font-medium text-neutral-800">
                  Objetivo del Programa Emprendedores:
                </p>
                <p className="mb-2 text-justify">
                  Promover, impulsar y desarrollar en los jóvenes estudiantes y
                  egresados de nuestra Institución Educativa un espíritu
                  independiente, emprendedor y la cultura empresarial para la
                  creación de más y mejores emprendedores integrando habilidades
                  técnicas, humanas y valores. Fomentar con el estudiantes la
                  cultura emprendedora mediante pláticas de sensibilización para
                  el mejoramiento del sistema empresarial, así como transformar
                  la falta de empleos que enfrentan los alumnos al egresar, en
                  oportunidades para iniciar su propia empresa y de esa ,amera
                  sean generadores de empleos. Brindar extensión para que haga
                  realidad su negocio a toda aquella persona que quiere crear su
                  empresa a partir de una idea. Canalizar a las Instituciones
                  Gubernamentales y Asociaciones Civiles del Estado y la
                  Federación, que brindan asesoría gratuita y capacitación para
                  emprendedores que deseen iniciar una empresa con una visión
                  competitiva, dándoles el seguimiento correspondiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
