import { useState } from "react";
import { motion } from "framer-motion";

// Components
import { MenuLink, Submenu } from "./Components";
import { Link } from "react-router-dom";
// Interface
import { NavbarItem } from "@/interfaces/navbar.interface";

interface MenuProps {
  menu: NavbarItem;
}

export default function NavbarDesktop({ menu }: MenuProps) {
  const [isHover, setIsHover] = useState(false);

  const { link, menuName, subMenu } = menu || {};
  const hasSubmenu = subMenu ? true : false;

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <motion.li
      className="group/link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      aria-haspopup={hasSubmenu}
      aria-expanded={isHover}
    >
      {link ? (
        <Link to={link}>
          <MenuLink menuName={menuName} hasSubmenu={hasSubmenu} />
        </Link>
      ) : (
        <span>
          <MenuLink menuName={menuName} hasSubmenu={hasSubmenu} />
        </span>
      )}
      {hasSubmenu && <Submenu subMenu={subMenu} isHover={isHover} />}
    </motion.li>
  );
}
