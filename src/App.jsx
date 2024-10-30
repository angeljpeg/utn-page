import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./app.css";

// Context
import { CurrentLocationProvider } from "@context";

// Layouts
import { RootLayout, CarrerasLayout } from "./layouts";

// Pages
import { HomePage, TiPage } from "./pages";

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Rutas de inicio */}
      <Route index element={<HomePage />} />

      {/* Rutas de las carreras */}
      <Route path="technologias-de-la-informacion" element={<TiPage />} />
      <Route path="carreras" element={<CarrerasLayout />}>
        <Route index element={<h1>Carreras</h1>} />
        {/* Rutas de TSU */}
        <Route path="tsu">
          <Route path="hola" element={<TiPage />} />
        </Route>
        {/* Rutas de Ingeniería */}
        <Route path="ingenieria" element={<h1>Ingeniería</h1>} />
      </Route>

      {/* Otras rutas */}
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <CurrentLocationProvider>
        <></>
      </CurrentLocationProvider>
    </RouterProvider>
  );
}

export default App;
