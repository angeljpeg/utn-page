import { Link } from "react-router-dom";
import { NuevoModelo as NuevoModeloItemProps } from "../data/NuevoModeloItems";

export default function NuevoModeloItem({
  title,
  area,
  icon,
}: NuevoModeloItemProps) {
  return (
    <>
      <div className="flex items-center justify-center p-6 mb-4 text-4xl text-white rounded-full shadow-lg animated-gradient">
        {}
      </div>
      <div className="text-center">
        <span className="block mb-2 text-xl font-semibold">{title}</span>
        <ul className="space-y-2">
          {area.map(({ title }, idx) => (
            <li key={idx} className="text-base font-medium">
              <span className="font-semibold">Área: </span>
              <Link
                to="#"
                className="transition duration-150 ease-in-out text-primary-500 hover:text-primary-700"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
