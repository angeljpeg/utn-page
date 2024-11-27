import OfertaImage from "@/assets/images/OfertaEducativa.webp";
import { Card } from "@/components/ui";
import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { legislacionItems } from "@/data/LegislacionUniversitaria/legislacionItems";

export default function LegislacionUniversitariaPage() {
  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);


  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("Legislacion Universitaria");
  }, [updateTitle, updateBanner]);

  return (
    <section className="w-full py-24">
      <div className="grid grid-cols-1 gap-5 px-16 sm:grid-cols-2 md:grid-cols-3">
        {legislacionItems.map((item) => (
          <Card icon={InsertDriveFileIcon} title={item.title} pdf={item.pdf} />
        ))}
      </div>
    </section>
  );
}
