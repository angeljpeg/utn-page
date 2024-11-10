import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { NuevoModelo } from "../data/NuevoModeloData";

export default function NuevoModeloEducativo() {
  return (
    <section className="px-4 py-12 lg:px-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {NuevoModelo.map(({ title, area, icon }, idx) => {
          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-start pb-5 transition-all duration-300 transform cursor-pointer hover:scale-105 hover:shadow-lg rounded-3xl"
              onHoverStart={{ scale: 1.1 }}
              onHoverEnd={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center p-6 mb-4 text-4xl text-white rounded-full shadow-lg animated-gradient">
                {icon()}
              </div>
              <div className="text-center">
                <span className="block mb-2 text-xl font-semibold">
                  {title}
                </span>
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
