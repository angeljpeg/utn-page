import { Outlet } from 'react-router-dom';

// Components
import { ScrollToUpButton, Footer } from "../components";

export function RootLayout() {
  return (
    <div>
      {/* Aquí puedes agregar encabezados, navegación, o cualquier elemento común */}
      <header>
        <h1>Mi Aplicación</h1>
      </header>
      
      {/* Este es el lugar donde las rutas se renderizarán */}
      <main className='min-h-screen pb-24'>
        <Outlet />
        <ScrollToUpButton />
      </main>

      {/* Pie de Pagina de la Paginas */}
      <Footer />
    </div>
  );
}