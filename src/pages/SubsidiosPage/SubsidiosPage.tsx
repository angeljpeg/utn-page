import { useHomeStore } from "@/store/RootStore";
import { useEffect } from "react";
import { motion } from "framer-motion";

import OfertaImage from "@/assets/images/OfertaEducativa.webp";

import { subsidiosItems } from "@/data/Subsidios/subsidiosItems";
import React from "react";

export default function SubsidiosPage() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const updateBanner = useHomeStore((state) => state.updateBanner);
  const updateTitle = useHomeStore((state) => state.updateTitle);

  useEffect(() => {
    updateBanner(OfertaImage);
    updateTitle("U006 SUBSIDIOS 2024");
  }, [updateBanner, updateTitle]);
  return (
    <section className="flex flex-col items-center justify-center py-24 space-y-16">
      {/* Encabezado principal */}
      <div className="w-[65vw] text-center">
        <h2 className="mb-2 text-base lg:text-xl md:text-lg text-neutral-500">
          UNIVERSIDAD TECNOLÓGICA DE NOGALES, SONORA
        </h2>
        <h3 className="mb-10 text-2xl font-medium lg:text-4xl md:text-3xl text-neutral-900">
          U006 Subsidios para Organismos Desentralizados Estatales
        </h3>
      </div>

      {/* Contenedor principal de contenido */}
      <div className="w-full ">
        {/* Acordeón de subsidios */}
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Lista del acordeón */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {subsidiosItems.map((item, index) => (
              <li key={index} className="flex w-full h-full">
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Encabezado del acordeón */}
                  <div
                    className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md"
                    onClick={() => toggleAccordion(index)}
                    role="button"
                    aria-expanded={activeIndex === index}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <motion.span
                      className="text-2xl font-bold text-gray-500"
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: activeIndex === index ? 45 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </div>

                  {/* Contenido desplegable */}
                  <motion.div
                    className="overflow-hidden bg-gray-100"
                    initial={{ height: 0 }}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ul className="p-5 space-y-3">
                      {item.files.map((file, fileIndex) => (
                        <li key={fileIndex} className="flex items-center">
                          <a
                            href={file.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-700 underline hover:text-green-600"
                          >
                            {file.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Encabezado principal */}
      <div className="w-[65vw] text-center">
        <h2 className="mb-2 text-sm lg:text-lg md:text-base text-neutral-500">
          DATOS DE ENLACE
        </h2>
        <h3 className="mb-2 text-lg font-medium lg:text-2xl md:text-xl text-neutral-900">
          M.E. Gilberto García Rocha
        </h3>
        <span className="font-medium">
          Correo Electrónico: gilbertogaro@utnogales.edu.mx, telefono 631 31 1
          18 30
        </span>
      </div>
    </section>
  );
}
