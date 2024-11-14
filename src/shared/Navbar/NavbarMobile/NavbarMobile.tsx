// React
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

// Interfaces
import { NavbarItem } from "../NavbarItems";

// Components
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { MenuItem } from "./Components";

interface MobMenuProps {
  menus: NavbarItem[];
}

export default function MobMenu({ menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setActiveMenu(null);
  }, []);

  const handleMenuClick = useCallback((index: number) => {
    setActiveMenu((prev) => (prev === index ? null : index)); // Ahora 'prev' puede ser 'number | null'
  }, []);

  return (
    <div>
      <button
        className="text-4xl z-[999] relative"
        onClick={toggleIsOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </button>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0" : "-100%" }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => console.log("Done")}
        className="fixed left-0 right-0 h-full p-6 overflow-y-auto text-gray-800 top-24 bg-gray-100 backdrop-blur z-[1000]"
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
    </div>
  );
}
