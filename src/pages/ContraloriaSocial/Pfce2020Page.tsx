import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import { PdfAccordion } from "@/components/ui";
import { pfce2020Items } from "@/data/PFCE/2020/pfce2020Items";

export default function IgualdadPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("PFCE 2020");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <div className="flex flex-col items-center justify-center w-full mt-10 mb-12 h-fit">
        <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
          <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
            2020
          </h2>
          <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
            PFCE
          </h3>
        </div>
        {/* Contenedor principal de contenido */}
        <div className="w-full ">
          {/* Acordeón de subsidios */}
          <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Lista del acordeón */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {pfce2020Items.map((item, index) => (
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
