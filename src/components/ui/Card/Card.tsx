import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CardProps {
  icon: OverridableComponent<SvgIconTypeMap>; // El ícono que se va a mostrar
  title?: string; // El título del card (opcional)
  titleLink?: string; // URL del título (si es un enlace)
  links?: { title: string; url: string }[]; // Array de links adicionales (opcional)
  customStyles?: string; // Estilos personalizados adicionales (opcional)
  extraText?: string; // Un espacio de Text extra para los links
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  titleLink,
  links,
  customStyles,
  extraText,
}) => {

  return (
    <motion.div
      className={`flex items-center justify-start p-5 gap-y-4 cursor-pointer rounded-3xl ${customStyles}  ${
        titleLink ? "md:flex-row gap-4 flex-col" : "flex-col"
      }`}
      whileHover={{
        scale: 1.02,
        translateY: -5,
        boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <div className="flex items-center justify-center p-4 mb-4 text-4xl text-white transition duration-200 rounded-full shadow-lg animated-utn-green hover:bg-green-500">
        <Icon fontSize="large" />
      </div>

      {title && (
        <div className="flex items-center justify-center w-full text-center md:text-start">
          {titleLink ? (
            <Link
              to={titleLink}
              className="block mb-2 text-2xl font-semibold text-black transition duration-300 hover:text-green-600"
            >
              {title}
            </Link>
          ) : (
            <span className="block mb-2 text-xl font-semibold text-center">{title}</span>
          )}
        </div>
      )}

      {links && links.length > 0 && (
        <ul className="w-full space-y-2 text-center">
          {links.map(({ title, url }, index) => (
            <li key={index} className="text-base font-medium">
              {extraText && <span className="font-semibold">{extraText}</span>}
              <Link
                to={url}
                className="text-green-600 transition duration-150 hover:text-green-700"
                aria-label={`Link to ${title}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default Card;
