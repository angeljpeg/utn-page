import { useEffect } from "react";
// Store
import { useHomeStore } from "@/store/RootStore";

// Components
import {
  DocumentosServicios,
  FooterHome,
  Objetivo,
  ResumenAcademico,
  Header,
} from "@/components/Home";
import { TabsModelos } from "@/components/OfertaEducativaPage";

export default function HomePage() {
  const updateHome = useHomeStore((state) => state.updateHome);
  const updateComponent = useHomeStore((state) => state.updateComponent);

  useEffect(() => {
    updateHome(true);
    updateComponent(<Header />);
  }, [updateHome, updateComponent]);

  return (
    <section className="w-full">
      <main className="pt-24">
        <div className="flex justify-center w-full py-28">
          <ResumenAcademico />
        </div>

        {/* Objetivo */}
        <Objetivo />

        <h2 className="pt-24 text-4xl font-medium text-center text-gray-900">
          Oferta Educativa
        </h2>
        <section className="py-24">
          <TabsModelos />
        </section>

        <DocumentosServicios />

        <FooterHome />
      </main>
    </section>
  );
}
