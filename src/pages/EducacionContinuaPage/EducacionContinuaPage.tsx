import { useEffect } from "react";
import { useHomeStore } from "@/store/RootStore";

import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import ecst_logo from "@/assets/images/cuadriculaLogos/ecst_logo.webp";


export default function EducacionContinuaPage() {
    const updateBanner = useHomeStore((state) => state.updateBanner);
    const updateTitle = useHomeStore((state) => state.updateTitle);
  
    useEffect(() => {
      updateBanner(OfertaImage);
      updateTitle("Educacion Continua");
    }, [updateBanner, updateTitle]);
  return (
    <section className="w-full">
      <main className="min-h-screen py-24">
        <div className="flex justify-center w-full mt-10 mb-12 h-fit">
          <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
            <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
              Servicios
            </h2>
            <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
              Educación continua y Servicios Tecnológicos
            </h3>
            <div className="lg:flex lg:items-center">
              <img
                src={ecst_logo}
                alt="Imagen"
                className="float-left mr-4 h-30 w-30 min-w-fit lg:h-full lg:w-20"
                loading="lazy"
              />
              <div>
                <p className="text-lg italic font-medium text-neutral-800">
                  Objetivo de ECST
                </p>
                <p className="mb-2 text-justify">
                  Contribuir al desarrollo de la comunidad, fortaleciendo la
                  fuerza laboral, mediante capacitación, cursos, seminarios,
                  asistencia técnica y evaluación de competencias profesionales.
                  La Universidad Tecnológica cuenta con registro ante la
                  Secretaria de Trabajo y Previsión Social como Agente
                  capacitador, conoce nuestro catálogo de Cursos para tu
                  empresa, organización.
                </p>
                <p className="text-neutral-800">
                  <span className="font-medium">Más informes en:</span> capacitacion@utnogales.edu.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
