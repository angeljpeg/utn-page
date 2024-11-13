import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Suspense } from "react";

import "./app.css";

// Layouts
import { RootLayout } from "./layouts";

// Pages
import { HomePage, CarrerasPage } from "./pages"

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Cargando aplicación...</div>}>
          <RootLayout />
        </Suspense>
      }
    >
      {/* Ruta de inicio */}
      <Route
        index
        element={
          <Suspense fallback={<div>Cargando página de inicio...</div>}>
            <HomePage />
          </Suspense>
        }
      />

      {/* Rutas de las carreras */}
        <Route
          path="/carrera/:carreraId"
          element={
            <Suspense fallback={<div>Cargando detalles de la carrera...</div>}>
              <CarrerasPage />
            </Suspense>
          }
        />

      {/* Ruta 404 */}
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
