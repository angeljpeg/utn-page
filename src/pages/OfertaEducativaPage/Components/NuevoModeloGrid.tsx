import { NuevoModeloItems } from "../data/NuevoModeloItems.ts";
import NuevoModeloItem from "./NuevoModeloItem";

export default function NuevoModeloGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3">
      {NuevoModeloItems.map((item) => (
        <NuevoModeloItem
          id={item.id}
          title={item.title}
          area={item.area}
          icon={item.icon}
          key={item.id}
        />
      ))}
    </div>
  );
}
