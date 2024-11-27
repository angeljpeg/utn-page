import { headerItems } from "@/data/Home/headerItems";
import ItemGenerator from "./ItemGenerator";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      {headerItems.map((item, idx) => (
        <ItemGenerator
          key={idx}
          title={item.title}
          icon={item.icon}
          pdf={item.pdf}
          link={item.link}
        />
      ))}
    </div>
  );
}
