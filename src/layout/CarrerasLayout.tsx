import { Outlet } from "react-router-dom";

// Components
import { ScrollToUp } from "@/shared";

export default function CarrerasLayout() {
  return (
    <>

      {/* Este es el lugar donde las rutas se renderizarán */}
      <main className="min-h-screen overflow-y-hidden">
        <Outlet />
        <ScrollToUp />
      </main>

    </>
  );
}