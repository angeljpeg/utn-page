import { Outlet } from "react-router-dom";

// Components
import { ScrollToUpButton, Footer, Navbar } from "@components";

export function RootLayout() {
  return (
    <div>
      {/* Barra de navegacion de la pagina */}
      <Navbar />
      
      {/* Este es el lugar donde las rutas se renderizarán */}
      <main className="min-h-screen pb-24">
        <Outlet />
        <ScrollToUpButton />
      </main>

      {/* Pie de Pagina de la Paginas */}
      <Footer />
    </div>
  );
}
