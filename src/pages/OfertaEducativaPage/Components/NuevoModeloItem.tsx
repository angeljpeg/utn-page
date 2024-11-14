import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { NuevoModelo as NuevoModeloItemProps } from "../data/NuevoModeloItems";

export default function NuevoModeloItem({
  title,
  area,
  icon: Icon,
}: NuevoModeloItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-start p-5 cursor-pointer gap-y-4 rounded-3xl"
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <div className="flex items-center justify-center p-6 mb-4 text-4xl text-white transition duration-200 rounded-full shadow-lg animated-utn-green hover:bg-green-500">
        <Icon />
      </div>
      <div className="text-center">
        <span className="block mb-2 text-xl font-semibold">{title}</span>
        <ul className="space-y-2">
          {area.map(({ title }) => (
            <li key={title} className="text-base font-medium">
              <span className="font-semibold">Área: </span>
              <Link
                to="#"
                className="text-green-600 transition duration-150 ease-in-out hover:text-green-700"
                aria-label={`Link to ${title}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
