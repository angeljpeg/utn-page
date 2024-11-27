// Componets
import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";

import { artItems } from "@/data/Art_36/artItems";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { Card } from "@/components/ui";

export default function Art36Page() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("ART 36 2022");
  }, [updateBanner, updateTitle]);
  return (
    <section className="w-full py-24">
      <div className="grid grid-cols-2 gap-5 px-16">
        {artItems.map((item) => (
          <Card icon={InsertDriveFileIcon} title={item.title} pdf={item.pdf} />
        ))}
      </div>
    </section>
  );
}
