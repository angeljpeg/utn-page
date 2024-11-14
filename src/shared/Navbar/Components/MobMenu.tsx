// React
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

// Interfaces
import { NavbarItem, SubMenuItem } from "../NavbarItems";

// Components
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";

interface SubMenuProps {
  subMenu: SubMenuItem[] | undefined;
  isActive: boolean;
}

function SubMenu({ subMenu, isActive }: SubMenuProps) {
  const subMenuDrawer = useMemo(
    () => ({
      enter: { height: "auto", overflow: "hidden" },
      exit: { height: 0, overflow: "hidden" },
    }),
    []
  );

  return (
    <motion.ul
      initial="exit"
      animate={isActive ? "enter" : "exit"}
      variants={subMenuDrawer}
      className="ml-5"
    >
      {subMenu?.map(({ title, link }, idx) => (
        <li
          key={idx}
          className="flex items-center p-2 duration-150 ease-in-out rounded-md hover:bg-gray-200 gap-x-2"
        >
          <Link to={link} className="text-gray-700">
            {title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

interface MenuItemProps {
  menu: NavbarItem;
  isActive: boolean;
  onClick: VoidFunction;
}

function MenuItem({ menu, isActive, onClick }: MenuItemProps) {
  const { id, menuName, link, subMenu } = menu;
  const hasSubmenu = subMenu ? true : false;

  return (
    <li key={id}>
      {hasSubmenu ? (
        <span
          className="relative flex items-center justify-between p-4 duration-150 ease-in-out rounded-md cursor-pointer hover:bg-gray-300"
          onClick={onClick}
          aria-expanded={isActive}
          role="button"
        >
          {menuName}
          <KeyboardArrowDownRoundedIcon
            className={`ml-auto transition-transform duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </span>
      ) : (
        <Link
          to={link ? link : ""}
          className="block p-4 duration-150 ease-in-out rounded-md hover:bg-gray-300"
        >
          {menuName}
        </Link>
      )}
      {hasSubmenu && <SubMenu subMenu={subMenu} isActive={isActive} />}
    </li>
  );
}

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
