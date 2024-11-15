import { useState } from "react";
import { motion } from "framer-motion";

import { Iquarters } from "../data/ViejoModelo/TsuItems";

interface SubjectsListProps {
  title: string;
  quarters: Iquarters[];
}

export default function SubjectsList({ title, quarters }: SubjectsListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(); // Estado para manejar el acordeón

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna la expansión y contracción
  };

  return (
    <section className="w-full py-6 cursor-default h-fit">
      <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mt-8 mb-6 text-2xl font-semibold text-center text-green-600 sm:text-3xl">
          {title}
        </h2>
        <ul className="grid grid-cols-1 gap-4 text-gray-800 sm:gap-6 justify-items-stretch md:grid-cols-2 lg:grid-cols-3">
          {quarters.map(({ quarter, title, subjects }, quarterIndex) => (
            <li key={quarter} className="flex w-full h-full">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: quarter * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                  onClick={() => toggleAccordion(quarterIndex)} // Maneja el clic para alternar
                >
                  <h3 className="text-lg font-semibold">{title}</h3>{" "}
                  {/* Título con el número del cuatrimestre */}
                  <span>{activeIndex === quarterIndex ? "-" : "+"}</span>{" "}
                  {/* Muestra + o - según el estado */}
                </div>
                <motion.div
                  className="overflow-hidden bg-gray-50"
                  initial={{ height: 0 }}
                  animate={{
                    height: activeIndex === quarterIndex ? "auto" : 0, // Alterna entre auto y 0
                  }}
                  transition={{ duration: 0.3 }} // Duración de la animación
                >
                  <motion.ul
                    className="flex flex-col p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {subjects.map((subject, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.2 }}
                      >
                        <span className="flex-1 text-base">{subject}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
