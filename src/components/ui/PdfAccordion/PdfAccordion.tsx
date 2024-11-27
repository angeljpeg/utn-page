import { motion } from "framer-motion";
import React from "react";

interface filesType {
  title: string;
  file: string;
}

interface AccordionProps {
  index: number;
  title: string;
  files: filesType[];
}

export default function PdfAccordion({ index, title, files }: AccordionProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
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
          {files.map((file, fileIndex) => (
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
  );
}
