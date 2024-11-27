import { Outlet, useLocation } from "react-router-dom";

// Components
import { Footer, Navbar, ScrollToUp, Header } from "@/shared";
import { Carousel } from "@/components/Home";

// Context / Store
import { useHomeStore } from "@/store/RootStore";

import slide1 from "@/assets/images/slider/uni1.webp";
import slide2 from "@/assets/images/slider/uni2.webp";
import slide3 from "@/assets/images/slider/uni3.webp";
import slide4 from "@/assets/images/slider/uni4.webp";
import slide5 from "@/assets/images/slider/uni5.webp";
import { useEffect } from "react";

const SLIDES = [slide1, slide2, slide3, slide4, slide5];

export default function RootLayout() {
  const isHome = useHomeStore((state) => state.isHome);
  const updateHome = useHomeStore((state) => state.updateHome);
  const title = useHomeStore((state) => state.title);
  const component = useHomeStore((state) => state.component);
  const banner = useHomeStore((state) => state.banner);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return updateHome(true);
    }

    updateHome(false);
  }, [updateHome, location]);

  return (
    <>
      <Navbar />

      {isHome ? (
        <Carousel urls={SLIDES} />
      ) : (
        <div className="relative w-full h-[50vh]">
          {/* Imagen de fondo */}
          <img
            src={banner}
            alt="Banner"
            className="object-cover w-full h-full"
            loading="lazy"
          />
          {/* Gradiente superpuesto */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
        </div>
      )}
      {/* Encabezado */}
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <Header title={title} component={component} />
      </div>

      <main className="min-h-screen overflow-y-hidden">
        <Outlet />
        <ScrollToUp />
      </main>

      <Footer />
    </>
  );
}
