import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BeenhereIcon from "@mui/icons-material/Beenhere";

interface DegreeCompetenciesProps {
  isTSU: boolean;
  title: string;
  area: string | undefined;
  competencies: string[];
  directionFlex: string;
}

export default function DegreeCompetencies({
  isTSU,
  title,
  area,
  competencies,
  directionFlex,
}: DegreeCompetenciesProps) {
  const [hasAnimated, setHasAnimated] = useState(false); // Nuevo estado para controlar si la animación ya se hizo
  const [isInView, setIsInView] = useState(false);

  const [flexDirection, setFlexDirection] = useState("normal"); // Determinar Dirección del Flex

  const ref = useRef(null);

  useEffect(() => {
    setFlexDirection(directionFlex); // Cambiar la dirección del Flex cuando se recibe el prop
  }, [directionFlex]); // Dependemos de directionFlex para actualizar

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Solo si no ha sido animado
          setIsInView(true);
          setHasAnimated(true); // Aseguramos que la animación no se repita
        }
      },
      {
        threshold: 0.1, // 10% del elemento debe estar visible para activarse
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]); // Dependemos de 'hasAnimated' para evitar que se repita

  return (
    <div
      ref={ref}
      className={`w-full py-16 sm:py-24 md:py-28 cursor-default ${
        isTSU ? "bg-orange-50" : "bg-blue-50"
      } h-fit`}
    >
      <div
        className={`flex flex-col items-center justify-center w-full gap-4 px-4 mx-auto md:${
          flexDirection === "reverse" ? "flex-row-reverse" : "flex-row"
        } md:px-8 lg:w-9/12`}
      >
        {/* Texto de Competencias */}
        <motion.div
          className="w-full mb-6 md:w-5/6 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-2xl font-medium text-center mb-4 ${
              isTSU ? "text-orange-400" : "text-blue-400"
            }`}
          >
            Competencias del {isTSU ? "TSU" : "Ingeniero"} en {title}{" "}
            {area && `, Área ${area}`}
          </h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="list-none"
          >
            {competencies.map((competencie, index) => (
              <motion.li
                key={index}
                className="flex items-start mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <BeenhereIcon
                  className={`mt-1 mr-3 text-xl ${
                    isTSU ? "text-orange-200" : "text-blue-200"
                  }`}
                />
                <span className="flex-1 text-sm md:text-base">
                  {competencie}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="flex justify-center w-full md:w-fit md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-300 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
            <motion.img
              src="https://picsum.photos/900/900"
              alt="Foto"
              className="object-cover w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
