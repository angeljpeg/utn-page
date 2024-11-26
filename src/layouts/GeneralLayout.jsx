import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import { ScrollToUpButton, Footer, Navbar, Carousel, Header } from "@components";

export default function GeneralLayout({ componenteHeader, url, isHome }) {
  return (
    <>
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />

      <section className="w-full">
        <div
          /* className="relative w-full h-[100vh]" */
          className={`relative w-full ${
            isHome ? "h-screen" : "h-[50vh]"
          }`}
        >
          {isHome ? (
            <Carousel />
          ) : (
            <img
              src={url}
              alt="imagen"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
        </div>

        <div className="absolute flex justify-center w-full transform -translate-y-1/2 ">
          <Header componenteHeader={componenteHeader}/>
        </div>
      </section>

      {/* Este es el lugar donde las rutas se renderizarán */}
      <main className="min-h-screen">
        <Outlet />
        <ScrollToUpButton />
      </main>

      {/* Pie de Pagina de la Paginas */}
      <Footer />
    </>
  );
}

GeneralLayout.propTypes = {
  componenteHeader: PropTypes.element,
  url: PropTypes.string,
  isHome: PropTypes.bool
};