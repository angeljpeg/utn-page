import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";

export default function LegislacionUniversitariaPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);


  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Legislacion Universitaria");
  }, [updateTitle, updateBanner]);

  return (
    <section className="w-full">
      legislacion Universitaria
    </section>
  );
}
