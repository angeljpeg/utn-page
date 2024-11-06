import { useState, useEffect } from "react"

// Components
import { NavbarDesktop } from "./NavbarDesktop"
import { NavbarMobile } from "./NavbarMobile"

export function Navbar() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 128) {
        setNavbarBg("bg-white shadow-md text-black");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar encima de la imagen */}
      <nav className={`sticky top-0 w-full px-4 py-4 ${navbarBg} transition-all duration-50 z-20 text-white`}>
        <div className="hidden md:block">
          <NavbarDesktop />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </nav>
      
      {/* Imagen con gradiente */}
      <div className="absolute top-0 w-full h-[350px]"> {/* Ajusta la altura según lo necesario */}
        <img
          src="https://th.bing.com/th/id/R.410414bd458dbc5cc001763fe18fa177?rik=VoF4UjKbWaLvwQ&pid=ImgRaw&r=0"
          alt=""
          className="object-cover w-full h-full"
        />

        {/* Gradiente sobre la imagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
      </div>

    </>
  );
}
