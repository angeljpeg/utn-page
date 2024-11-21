import { Card } from "@/components/ui";
import { ViejoModeloItems } from "../data/ViejoModeloItems.ts";

export default function NuevoModeloGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
      {ViejoModeloItems.map(({ ing, tsu, link, icon} ) => (
        <Card title={ing} icon={icon} links={[{title: tsu, url: link}]} extraText="TSU: "/>
      ))}
    </div>
  );
}