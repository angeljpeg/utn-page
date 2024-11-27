import { useEffect } from "react";
import { useHomeStore } from "@/store/RootStore";

import OfertaImage from "@/assets/images/OfertaEducativa.webp";

import { CuadriculaItems } from "@/data/CuadriculaLogos/CuadriculaItems";
import { Link } from "react-router-dom";

export default function CuadriculaLinks() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Programa Institucional");
  }, [updateBanner, updateTitle]);
  return (
    <section className="flex justify-center w-full h-fit">
      <main className="w-full pt-24 h-fit lg:w-11/12 lg:mx-0 md:mx-0">
        <div className="grid w-full grid-cols-1 p-4 gap-x-4 gap-y-12 mt-14 lg:grid-cols-5 md:grid-cols-3">
          {CuadriculaItems.map((logo, index) => (
            <Link key={index} to={logo.url}>
              <div className="flex justify-center w-full transition-all duration-200 h-28 lg:h-20 md:h-24 hover:scale-110">
                <img
                  src={logo.imagen}
                  alt="imagen"
                  className="h-full w-fit min-w-fit"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
