import { useState, useEffect } from "react";

// Components
import { Menu } from "./components";

// Data
import { NavbarItems } from "./data";
import MobMenu from "./components/MobMenu";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass = scrollPosition < 250 ? "bg-transparent text-white" : "bg-white text-black"; //

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex items-center h-24 text-sm transition-all duration-150 ${headerBgClass} z-[100]`}
      >
        <nav className="px-3.5 flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Menú móvil */}
            <div className="lg:hidden">
              <MobMenu menus={NavbarItems} />
            </div>
            
            {/* Logo */}
            <div className="z-50 flex items-center gap-x-3">
              <img
                src="/utn.svg"
                alt="Logo de la Universidad Tecnológica Nacional"
                className="w-24 h-24"
              />
            </div>

            {/* Menú para pantallas grandes */}
            <ul className="items-center hidden lg:flex gap-x-6">
              {NavbarItems.map((item) => (
                <Menu menu={item} key={item.menu} />
              ))}
            </ul>

            {/* Sección de contacto */}
            <div className="items-center justify-center hidden lg:flex">
              <span
                href="/contacto"
                className="text-xl text-blue-600 hover:text-blue-800"
              >
                Contacto
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
