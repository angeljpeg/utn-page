import { Outlet } from "react-router-dom";

// Components
import { ScrollToUpButton, Footer, Navbar } from "@components";

export default function RootLayout() {
  return (
    <>
      {/* Barra de navegacion de la pagina */}
      <Navbar />
      
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
