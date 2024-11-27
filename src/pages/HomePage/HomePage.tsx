import { useEffect } from "react";
// Store
import { useHomeStore } from "@/store/RootStore";

// Components
import { DocumentosServicios, FooterHome } from "@/components/Home";
import { TabsModelos } from "@/components/OfertaEducativaPage";

export default function HomePage() {
  const updateHome = useHomeStore((state) => state.updateHome);
  const updateComponent = useHomeStore((state) => state.updateComponent);

  useEffect(() => {
    updateHome(true);
    updateComponent(<h1>hola mundo</h1>);
  }, [updateHome, updateComponent]);

  return (
    <section className="w-full overflow-x-hidden">
      <main className="pt-24">
        <h2 className="pt-24 text-4xl font-medium text-center text-gray-900">
          Oferta Educativa
        </h2>
        <section className="py-10">
          <TabsModelos />
        </section>

        <DocumentosServicios />

        <FooterHome />
      </main>
    </section>
  );
}
