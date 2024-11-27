import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";

import OfertaImage from "@/assets/images/OfertaEducativa.webp";

import { AdquisicionesItems } from "@/data/adquisisiones/adquisisiones";

export default function AdquisicionesPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("ADQUISICIONES");
  }, [updateBanner, updateTitle]);
  return (
    <section className="flex flex-col items-center w-full px-16 py-24">
      <div className="w-[65vw] text-center">
        <h2 className="mb-2 text-base lg:text-xl md:text-lg text-neutral-500">
          UNIVERSIDAD TECNOLÓGICA DE NOGALES, SONORA
        </h2>
        <h3 className="mb-10 text-2xl font-medium lg:text-4xl md:text-3xl text-neutral-900">
          ADQUISICIONES
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {AdquisicionesItems.map((adquisicion) => (
          <div className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md">
            <a
              href={adquisicion.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-gray-700 duration-300 hover:text-green-600"
            >
              {`${adquisicion.title}`}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
