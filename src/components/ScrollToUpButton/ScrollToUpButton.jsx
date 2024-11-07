import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoCaretUp } from "react-icons/io5";

export function ScrollToUpButton() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="fixed z-50 flex items-center justify-center p-3 text-white rounded-full cursor-pointer bottom-10 right-6 bg-primary-500"
          onClick={handleScrollToTop}
        >
          <IoCaretUp className="w-6 h-6" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
