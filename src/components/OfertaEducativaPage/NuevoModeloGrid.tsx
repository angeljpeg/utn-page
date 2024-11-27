import { Card } from "@/components/ui";
import { NuevoModeloItems } from "@/data/OfertaEducativaPage/NuevoModeloItems";

export default function NuevoModeloGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3">
      {NuevoModeloItems.map(({ id, title, area, icon }) => (
        <Card key={id} title={title} icon={icon} links={area.map((i) => {return {title: i.title, url: `/carreras/nuevoModelo/${i.url}`}})} extraText="Área: " />
      ))}
    </div>
  );
}
