import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import { PdfAccordion } from "@/components/ui";
import { igualdadItems } from "@/data/igualdad3/igualdadItems";

export default function IgualdadPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Igualdad");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <div className="flex flex-col items-center justify-center w-full mt-10 mb-12 h-fit">
        <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
          <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
            Publicación y Reglamento
          </h2>
          <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
            Ley para la Igualdad de entre Mujeres y Hombres
          </h3>
        </div>
        {/* Contenedor principal de contenido */}
        <div className="flex flex-col items-center justify-center w-fit">
          {/* Acordeón de subsidios */}
          <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Lista del acordeón */}
            <ul className="gap-6 sm:grid-cols-2 sm:gap-8">
              {igualdadItems.map((item, index) => (
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
