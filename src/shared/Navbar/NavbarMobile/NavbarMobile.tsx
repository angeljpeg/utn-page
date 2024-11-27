// React
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

// Interfaces
import { NavbarItem } from "@/interfaces/navbar.interface";

// Components
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Contacto } from "../Components";

import { MenuItem } from "./Components";
import { useLocation } from "react-router-dom";

interface MobMenuProps {
  menus: NavbarItem[];
}

export default function MobMenu({ menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [currentLocation, setCurrentLocation] = useState(useLocation());
  const location = useLocation();
  useEffect(() => {
    if (currentLocation !== location) {
      setIsOpen(false); // Cierra el navbar si la ruta cambió
      setCurrentLocation(location); // Actualiza la ruta actual
    }
  }, [location, currentLocation]);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setActiveMenu(null);
  }, []);

  const handleMenuClick = useCallback((index: number) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div
      className={`w-full h-full ${
        isOpen && "bg-gray-100 text-black"
      } flex items-center justify-between duration-300 px-3`}
    >
      <button
        className={`text-4xl z-[999] relative`}
        onClick={toggleIsOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 right-0 h-full p-6 overflow-y-auto top-24 text-gray-800 bg-gray-100 z-[900]"
      >
        <ul>
          {menus?.map((menu, i) => (
            <MenuItem
              key={menu.id || i}
              menu={menu}
              isActive={activeMenu === i}
              onClick={() => handleMenuClick(i)}
            />
          ))}
        </ul>
      </motion.div>

      {/* Sección de contacto */}
      <div className="flex items-center justify-end w-[150px]">
        <Contacto />
      </div>
    </div>
  );
}
