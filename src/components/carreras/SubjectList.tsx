import { useState } from "react";
import { motion } from "framer-motion";

import { quarterType } from "@/interfaces/carrera.interface";

interface SubjectsListProps {
  title: string;
  quarters: quarterType[];
}

export default function SubjectsList({ title, quarters }: SubjectsListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 cursor-default h-fit bg-gray-50">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-green-600 sm:text-4xl">
          {title}
        </h2>
        <ul className="grid grid-cols-1 gap-6 text-gray-800 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quarters.map(({ quarter, title, subjects }, quarterIndex) => (
            <li key={quarterIndex} className="flex w-full h-full">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: quarter * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center justify-between p-5 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md"
                  onClick={() => toggleAccordion(quarterIndex)}
                  role="button"
                  aria-expanded={activeIndex === quarterIndex}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <motion.span
                    className="text-2xl font-bold text-gray-500"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === quarterIndex ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </div>
                <motion.div
                  className="overflow-hidden bg-gray-100"
                  initial={{ height: 0 }}
                  animate={{
                    height: activeIndex === quarterIndex ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <motion.ul
                    className="flex flex-col p-5 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {subjects.map((subject, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center p-2 transition-colors rounded-md hover:bg-gray-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <span className="flex-1 font-medium text-gray-700">{subject}</span>
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
