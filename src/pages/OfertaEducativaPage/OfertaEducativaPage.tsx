// Componets
import { TabsModelos } from "@/components/OfertaEducativaPage";
import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
//

export default function OfertaEducativaPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Oferta Educativa");
  }, [updateBanner, updateTitle]);

  return (
    <section className="w-full">
      <section className="py-24">
        <TabsModelos />
      </section>
    </section>
  );
}
