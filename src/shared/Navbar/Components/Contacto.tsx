import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

// Components
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function Contacto() {
  const [openContact, setOpenContact] = useState(false);
  const textRef = useRef<HTMLAnchorElement>(null);
  const [calculatedWidth, setCalculatedWidth] = useState(50); // Ancho inicial

  useLayoutEffect(() => {
    if (textRef.current && openContact) {
      const contentWidth = textRef.current.offsetWidth;
      setCalculatedWidth(contentWidth + 55); // Agregar espacio adicional
    } else {
      setCalculatedWidth(50); // Ancho cerrado
    }
  }, [openContact]);

  return (
    <motion.div
      className="flex items-center justify-between h-full gap-2 p-3 overflow-hidden text-white bg-green-500 rounded-full cursor-pointer"
      onClick={() => setOpenContact((prev) => !prev)}
      animate={{ width: calculatedWidth }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={{
          rotate: openContact ? -115 : 0,
          scale: openContact ? 1.2 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <CallEndIcon />
      </motion.div>

      {openContact && (
        <motion.a
          ref={textRef}
          href="tel:+526313111830"
          className="transition-colors duration-300 whitespace-nowrap hover:text-white/80"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          631 311 1830
        </motion.a>
      )}
    </motion.div>
  );
}
