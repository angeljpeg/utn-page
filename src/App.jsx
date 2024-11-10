import {
  BrowserRouter as Router
} from "react-router-dom";

import { Suspense } from "react";

import "./app.css";
import { AppRouter } from "./Router";

// Layouts
/* import { RootLayout } from "./layouts";
 */
// Pages
/* import { HomePage, CarrerasPage } from "./pages"
 */
// Define routes
/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Cargando aplicación...</div>}>
          <RootLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<div>Cargando página de inicio...</div>}>
            <HomePage />
          </Suspense>
        }
      />

        <Route
          path="/carrera/:carreraId"
          element={
            <Suspense fallback={<div>Cargando detalles de la carrera...</div>}>
              <CarrerasPage />
            </Suspense>
          }
        />

      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Route>
  )
); */

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Cargando Pagina</div>}>
        <AppRouter />
      </Suspense>
    </Router>
  );
}

export default App;
