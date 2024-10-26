import { Outlet } from 'react-router-dom';

// Components
import { ScrollToUpButton } from "../components";

export function RootLayout() {
  return (
    <div>
      {/* Aquí puedes agregar encabezados, navegación, o cualquier elemento común */}
      <header>
        <h1>Mi Aplicación</h1>
      </header>
      
      {/* Este es el lugar donde las rutas se renderizarán */}
      <main>
        <Outlet />
        <ScrollToUpButton />
      </main>

      <footer>
        <p>&copy; 2023 Mi Aplicación</p>
      </footer>
    </div>
  );
}