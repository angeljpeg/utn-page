// Componets

import { Header } from "@/shared";
import { NuevoModeloGrid } from "./Components";

export default function OfertaEducativaPage() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[50vh]">
        <img
          src="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
          alt="imagen"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
      </div>

      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <Header title="OFERTA EDUCATIVA" />
      </div>

      <section className="py-24">
        <NuevoModeloGrid />
      </section>
    </section>
  );
}
