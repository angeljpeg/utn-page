import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import { PdfAccordion } from "@/components/ui";
import { planAnualItems } from "@/data/planAnual5/planAnual";

export default function IgualdadPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Plan Anual");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <div className="flex flex-col items-center justify-center w-full mt-10 mb-12 h-fit">
        <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
          <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
            UNIVERSIDAD TECNOLÓGICA DE NOGALES, SONORA
          </h2>
          <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
            PLAN ANUAL DE DESARROLLO ARCHIVÍSTICO
          </h3>
        </div>
        {/* Contenedor principal de contenido */}
        <div className="flex flex-col items-center justify-center w-fit">
          {/* Acordeón de subsidios */}
          <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Lista del acordeón */}
            <ul className="gap-6 sm:grid-cols-2 sm:gap-8">
              {planAnualItems.map((item, index) => (
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
      </div>
    </section>
  );
}
