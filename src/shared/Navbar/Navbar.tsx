import { useState, useEffect } from "react";

// Components
import UtnLogo from "@/assets/utn.svg";
import UtnLogoBlanco from "@/assets/utn-blanco.svg";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { Contacto } from "./Components";


// Data
import { NavbarItems } from "@/data/navbar/NavbarItems";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass =
    scrollPosition < 250 ? "text-white" : "bg-white text-black"; //

  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow-lg h-24  duration-150 ${headerBgClass} z-[100]`}
    >
      <nav className="flex items-center w-full h-full">
        {/* Menú móvil */}
        <div className="w-full h-full lg:hidden">
          <NavbarMobile menus={NavbarItems} />
        </div>

        <div className="items-center justify-between hidden w-full p-4 text-sm lg:flex">
          {/* Logo */}
          <Link to="/" className="z-[999] items-center gap-x-3">
            <img
              src={scrollPosition < 250 ? UtnLogoBlanco : UtnLogo}
              alt="Logo de la Universidad Tecnológica Nacional"
              className="w-24"
            />
          </Link>

          {/* Menú para pantallas grandes */}
          <ul className="flex items-center gap-x-1">
            {NavbarItems.map((item) => (
              <NavbarDesktop menu={item} key={item.menuName} />
            ))}
          </ul>


          <div className="flex justify-end">
            <Contacto />
          </div>

        </div>
      </nav>
    </header>
  );
}
