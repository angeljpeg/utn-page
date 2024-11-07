import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

// Components
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Menu({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const hasSubmenu = menu?.subMenu?.length > 0;

  // Desestructurar menu para mayor claridad
  const { link, menu: menuName, subMenu } = menu || {};

  // Toggle hover state
  const toggleIsHover = () => setIsHover((prev) => !prev);

  // Animation Variants
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.2 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.2 },
      display: "none",
    },
  };

  // Render link or span with submenu arrow
  const renderMenuLink = () => (
    <span className="flex items-center gap-2 px-3 py-1 font-semibold transition-all duration-150 ease-in cursor-pointer rounded-xl hover:bg-primary-300/50">
      {menuName}
      {hasSubmenu && (
        <FaChevronDown className="mt-[0.5px] group-hover/link:rotate-180 transition-all duration-150 ease-out" />
      )}
    </span>
  );

  // Render submenu if exists
  const renderSubMenu = () => (
    <motion.div
      className="absolute top-[4.2rem] p-4 rounded-md origin-[50%_-170px] backdrop-blur-sm bg-white/[0.9]"
      initial="exit"
      animate={isHover ? "enter" : "exit"}
      variants={subMenuAnimate}
    >
      <div className="grid gap-2">
        {subMenu?.map((submenu, i) => (
          <div key={i} className="relative cursor-pointer">
            <div className="flex items-center group/menubox gap-y-4">
              <Link
                className="text-sm font-semibold duration-200 rounded-lg hover:text-primary-500"
                to={submenu.link}
              >
                {submenu.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleIsHover}
      onHoverEnd={toggleIsHover}
    >
      {link ? (
        <Link to={link}>{renderMenuLink()}</Link>
      ) : (
        <span>{renderMenuLink()}</span>
      )}
      {hasSubmenu && renderSubMenu()}
    </motion.li>
  );
}

Menu.propTypes = {
  menu: PropTypes.object,
};
