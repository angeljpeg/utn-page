import { useState, useEffect } from "react";

// Components
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return;
  }, []);

  return (
    <nav
      className={`w-full p-4 bg-white transition-shadow duration-300 ${
        scrollY > 100 ? "" : "shadow-xl"
      } sticky top-0`}
    >
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
}
