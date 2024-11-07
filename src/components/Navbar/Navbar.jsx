import { useState, useEffect } from "react";

// Components
import { Menu } from "./components";

// Data
import { NavbarItems } from "./data";

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass =
    scrollPosition < 250 ? "bg-white/50 backdrop-blur-[2px]" : "bg-white";

  return (
    <>
      <header
        className={`fixed inset-0 flex items-center h-24 text-sm transition-all duration-500 ease-in-out ${headerBgClass}`}
      >
        <nav className="px-3.5 flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="z-50 flex items-center gap-x-3">
            <img src="/utn.svg" alt="logo" className="w-24 h-24" />
          </div>
          <ul className="flex items-center">
            {NavbarItems.map((item) => (
              <Menu menu={item} key={item.menu} />
            ))}
          </ul>
          <div>Contacto</div>
        </nav>
      </header>
    </>
  );
}
