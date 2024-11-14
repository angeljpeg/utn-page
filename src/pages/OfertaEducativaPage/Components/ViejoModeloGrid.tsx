import { ViejoModeloItems } from "../data/ViejoModeloItems.ts";
import ViejoModeloItem from "./ViejoModeloItem.tsx";

export default function NuevoModeloGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3">
      {ViejoModeloItems.map(({id, ing, tsu, area, icon} ) => (
        <ViejoModeloItem
          id={id}
          ing={ing}
          tsu={tsu}
          area={area}
          icon={icon}
          key={id}
        />
      ))}
    </div>
  );
}