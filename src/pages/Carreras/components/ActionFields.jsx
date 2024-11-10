import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Components
import { TbViewfinder } from "react-icons/tb";

export default function ActionFields({ fields }) {
  return (
    <section className="w-full pb-8 cursor-default sm:pb-10 bg-gray-50 h-fit">
      <div className="w-full max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mt-8 mb-6 text-2xl font-semibold text-center text-green-600 sm:text-3xl">
          Campos de acción
        </h2>
        <ul className="mt-4 list-none">
          {fields.map((field, index) => (
            <motion.li
              key={index}
              className="flex items-start mb-4 text-base transition-all ease-out transform sm:text-lg hover:translate-x-2 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mt-1 mr-3 text-xl text-green-600 sm:text-2xl"
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                }}
                transition={{ type: "spring", stiffness: 0 }}
                // Animación en dispositivos móviles
              >
                <TbViewfinder />
              </motion.div>
              <span className="flex-1">{field}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

ActionFields.propTypes = {
  fields: PropTypes.array,
};
