// Componets
import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";

import { eeffItems } from "@/data/Eeff/items";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { Card } from "@/components/ui";

export default function EeffPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("EEFF");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <h3 className="mb-10 text-2xl font-medium text-center lg:text-4xl md:text-3xl text-neutral-900">
        Estados Financieros dictaminados 2022
      </h3>
      <div className="grid grid-cols-1 gap-5 px-16 sm:grid-cols-2 md:grid-cols-2">
        {eeffItems.map((item) => (
          <Card icon={InsertDriveFileIcon} title={item.title} pdf={item.pdf} />
        ))}
      </div>
    </section>
  );
}
