import { useEffect } from "react";
import { useHomeStore } from "@/store/RootStore";

import logo_BolsaTrabajo from "@/assets/images/cuadriculaLogos/bolsatrabajo.webp";
import banner_bolsatrabajo from "@/assets/images/banners/banner_bolsatrabajo.webp";

export default function BolsaTrabajoPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(banner_bolsatrabajo);
    updateTitle("Bolsa de Trabajo");
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
              Bolsa de trabajo
            </h3>
            <div className="lg:flex lg:items-center">
              <img
                src={logo_BolsaTrabajo}
                alt="Imagen"
                className="float-left mr-4 h-30 w-30 min-w-fit lg:h-full lg:w-20"
                loading="lazy"
              />
              <div>
                <p className="text-lg italic font-medium text-neutral-800">
                  El servicio de Bolsa de Trabajo:
                </p>
                <p className="mb-2 text-justify">
                  Es uno de los servicios adicionales que la institución presta
                  a sus egresados y alumnos, producto de la estrecha vinculación
                  con el sector productivo y de servicios, detectando
                  necesidades de contratación (vacantes) de las empresas, las
                  cuales se promueven con egresados y alumnos de acuerdo al
                  perfil de cada una de las carreras.
                </p>
                <p className="text-neutral-800">
                  <span className="font-medium">
                    Alumnos y egresados pueden enviar sus curriculum a
                  </span>{" "}
                  bolsadetrabajo@utnogales.edu.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
