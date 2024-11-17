import { Outlet } from "react-router-dom";

// Components
import { ScrollToUp, Navbar, Footer } from "@/shared";

export default function CarrerasLayout() {
  return (
    <>
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />

      {/* Este es el lugar donde las rutas se renderizarán */}
      <main className="min-h-screen overflow-y-hidden">
        <Outlet />
        <ScrollToUp />
      </main>

      {/* Pie de Pagina de la Paginas */}
      <Footer />
    </>
  );
}