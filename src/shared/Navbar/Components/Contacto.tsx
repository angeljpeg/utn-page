import { useState, useCallback } from "react";
import { motion } from "framer-motion";

// Components
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function Contacto() {
  const [openContact, setOpenContact] = useState<boolean>(false);

  const onClickContact = useCallback(() => {
    setOpenContact((prev) => !prev);
  }, []);
  return (
    <motion.div
      className="flex items-center justify-between h-full gap-2 p-3 overflow-hidden text-white bg-green-500 rounded-full cursor-pointer"
      onClick={onClickContact}
      initial={{}} // Color inicial (verde)
      animate={{
        width: openContact ? "150px" : "50px", // Tamaño dinámico
      }}
      transition={{ duration: 0.3 }} // Duración de la animación del color y tamaño
    >
      <motion.div
        animate={{ rotate: openContact ? "-115deg" : 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <CallEndIcon />
      </motion.div>
      {openContact && (
        <motion.span
          className="whitespace-nowrap"
          initial={{ opacity: 0, x: -10 }} // Inicialmente invisible y desplazado
          animate={{ opacity: 1, x: 0 }} // Aparece con un desplazamiento
          exit={{ opacity: 0, x: -10 }} // Se oculta con un desplazamiento
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          631 311 1830
        </motion.span>
      )}
    </motion.div>
  );
}
