import { Route, Routes } from "react-router-dom";

// Layouts
import { CarrerasLayout } from "@/layout";

// Pages
import {
  NotFoundPage,
  HomePage,
  TestPage,
  OfertaEducativaPage,
  CarrerasPage,
} from "@/pages";

// Components

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/carreras" element={<CarrerasLayout />}>
        <Route index element={<OfertaEducativaPage />} />
        {/* Rutas Carreras Viejo Modelo */}
        <Route
          path=":id"
          element={<CarrerasPage carreraIndex={1} />}
        />        
        <Route
          path="viejoModelo/tecnologias-informacion"
          element={<CarrerasPage carreraIndex={0} />}
        />
        <Route
          path="viejoModelo/mecatronica"
          element={<CarrerasPage carreraIndex={1} />}
        />
        <Route
          path="viejoModelo/procesos-industriales"
          element={<CarrerasPage carreraIndex={2} />}
        />
        <Route
          path="viejoModelo/comercio-internacional"
          element={<CarrerasPage carreraIndex={3} />}
        />
        <Route
          path="viejoModelo/energias-renovables"
          element={<CarrerasPage carreraIndex={4} />}
        />
        <Route
          path="viejoModelo/aeronautica"
          element={<CarrerasPage carreraIndex={5} />}
        />
        <Route
          path="viejoModelo/mantenimiento-industrial"
          element={<CarrerasPage carreraIndex={6} />}
        />
        <Route
          path="viejoModelo/negocios"
          element={<CarrerasPage carreraIndex={7} />}
        />

        {/* Rutas Carreras Nuevo Modelo */}
        {/*          <Route path="nuevoModelo/:carreraId" element={<CarrerasPage />} /> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};