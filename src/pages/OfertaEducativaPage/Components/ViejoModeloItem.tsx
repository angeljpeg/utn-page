import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { ViejoModeloItem as ViejoModeloItemProps } from "../data/ViejoModeloItems";

export default function ViejoModeloItem({
  ing,
  tsu,
  link,
  icon: Icon,
}: ViejoModeloItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-start p-5 cursor-pointer gap-y-4 rounded-3xl"
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
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
      <div className="flex-col gap-2 text-center ">
        <span className="block mb-2 text-xl font-semibold">{ing}</span>

        <span className="font-semibold">TSU: </span>
        <Link
          to={`/carreras/viejoModelo/${link}`}
          className="text-base font-semibold text-green-600 transition duration-150 ease-in-out hover:text-green-700"
          aria-label={`Link to ${link}`}
        >
          {tsu}
        </Link>
      </div>
    </motion.div>
  );
}
