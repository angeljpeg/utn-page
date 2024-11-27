// Componets
import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";

import { informesItem } from "@/data/informes/informes";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { Card } from "@/components/ui";

export default function InformesMatricula() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Auditoria de la Federación");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <div className="grid grid-cols-1 gap-5 px-16 sm:grid-cols-2 md:grid-cols-3">
        {informesItem.map((item) => (
          <Card icon={InsertDriveFileIcon} title={item.title} pdf={item.pdf} />
        ))}
      </div>
    </section>
  );
}
