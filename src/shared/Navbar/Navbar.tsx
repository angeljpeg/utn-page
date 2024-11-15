import { useState, useEffect } from "react";

// Components
import UtnLogo from "@/assets/utn.svg";
import UtnLogoBlanco from "@/assets/utn-blanco.svg";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { Contacto } from "./Components";

// Data
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass =
    scrollPosition < 250 ? "bg-white/5 text-white" : "bg-white text-black"; //

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex items-center h-24 text-sm shadow-lg  duration-150 ${headerBgClass} z-[100]`}
      >
        <nav className="px-3.5 flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Menú móvil */}
            <div className="lg:hidden">
              <NavbarMobile menus={NavbarItems} />
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="z-[999] hidden lg:flex items-center gap-x-3"
            >
              <img
                src={scrollPosition < 250 ? UtnLogoBlanco : UtnLogo}
                alt="Logo de la Universidad Tecnológica Nacional"
                className="w-24 h-24"
              />
            </Link>

            {/* Menú para pantallas grandes */}
            <ul className="items-center hidden lg:flex gap-x-1">
              {NavbarItems.map((item) => (
                <NavbarDesktop menu={item} key={item.menuName} />
              ))}
            </ul>

            {/* Sección de contacto */}
            <div className="flex items-center justify-end w-[150px]">
              <Contacto />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
