import { Card } from "@/components/ui";
import { ViejoModeloItems } from "../data/ViejoModeloItems.ts";

export default function NuevoModeloGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
      {ViejoModeloItems.map(({ id, ing, tsu, link, icon} ) => (
        <Card key={id} title={ing} icon={icon} links={[{title: tsu, url: `viejoModelo/${link}`}]} extraText="TSU: "/>
      ))}
    </div>
  );
}