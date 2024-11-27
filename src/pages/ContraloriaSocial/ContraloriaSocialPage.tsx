import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function IgualdadPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Contraloria Social");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <div className="flex flex-col items-center justify-center w-full mt-10 mb-12 h-fit">
        <div className="w-full px-4 h-fit lg:w-3/4 md:w-11/12">
          <h2 className="mb-2 text-base text-center lg:text-xl md:text-lg text-neutral-500">
            UNIVERSIDAD TECNOLÓGICA DE NOGALES, SONORA
          </h2>
          <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
            Documentos
          </h3>
          <div className="flex justify-center w-full gap-4">
            <Link
              to="/prodep-2020"
              className="px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500"
            >
              PRODEP-2020
            </Link>
            <Link
              to="/prodep-2023"
              className="px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500"
            >
              PRODEP-2023
            </Link>
            <Link
              to="/006-subsidios"
              className="px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500"
            >
              Subsidios-2024
            </Link>
            <Link
              to="/pfce-2020"
              className="px-2 py-3 text-white transition duration-300 ease-out bg-green-400 rounded-lg shadow-md hover:bg-green-500"
            >
              PFCE-2020
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
