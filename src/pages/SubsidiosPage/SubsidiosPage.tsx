import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";

import OfertaImage from "@/assets/images/OfertaEducativa.webp";

import { subsidiosItems } from "@/data/Subsidios/subsidiosItems";
import { PdfAccordion } from "@/components/ui";

export default function SubsidiosPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("U006 SUBSIDIOS 2024");
  }, [updateBanner, updateTitle]);
  return (
    <section className="flex flex-col items-center justify-center py-24 space-y-16">
      {/* Encabezado principal */}
      <div className="w-[65vw] text-center">
        <h2 className="mb-2 text-base lg:text-xl md:text-lg text-neutral-500">
          UNIVERSIDAD TECNOLÓGICA DE NOGALES, SONORA
        </h2>
        <h3 className="mb-10 text-2xl font-medium lg:text-4xl md:text-3xl text-neutral-900">
          U006 Subsidios para Organismos Desentralizados Estatales
        </h3>
      </div>

      {/* Contenedor principal de contenido */}
      <div className="w-full ">
        {/* Acordeón de subsidios */}
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Lista del acordeón */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {subsidiosItems.map((item, index) => (
              <li key={index} className="flex w-full h-full">
                <PdfAccordion
                  key={index}
                  title={item.title}
                  files={item.files}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Encabezado principal */}
      <div className="w-[65vw] text-center">
        <h2 className="mb-2 text-sm lg:text-lg md:text-base text-neutral-500">
          DATOS DE ENLACE
        </h2>
        <h3 className="mb-2 text-lg font-medium lg:text-2xl md:text-xl text-neutral-900">
          M.E. Gilberto García Rocha
        </h3>
        <span className="font-medium">
          Correo Electrónico: gilbertogaro@utnogales.edu.mx, telefono 631 31 1
          18 30
        </span>
      </div>
    </section>
  );
}
