import { Route, Routes } from "react-router-dom";
import React from "react";

const GeneralLayout = React.lazy(() => import("./layouts/GeneralLayout"));

const HomePage = React.lazy(() => import("@pages/Home/HomePage"));
const CertificacionesPage = React.lazy(() =>
  import("@pages/Certificaciones/Certificaciones")
);
const EducacionContinuaPage = React.lazy(() =>
  import("@pages/EducacionContinua/EducacionContinua")
);
const CarrerasPage = React.lazy(() => import("@pages/Carreras/CarrerasPage"));
const DirectorioPage = React.lazy(() => import("@pages/Directorio/Directorio"));
const OfertaEducativaPage = React.lazy(() =>
  import("@pages/OfertaEducativa/OfertaEducativaPage")
);
const NotFoundPage = React.lazy(() => import("@pages/NotFound/NotFoundPage"));

//Componentes para cada Header en cada <GeneralLayout />
const HomeComponent = React.lazy(() =>
  import("@components/Header/components/HomeComponent")
);

const CuadriculaLinks = React.lazy(() =>
  import("@components/CuadriculaLinks/CuadriculaLinks")
);

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GeneralLayout
            componenteHeader={<HomeComponent />}
            url=""
            isHome={true}
          />
        }
      >
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path="/carreras"
        element={
          <GeneralLayout
            componenteHeader={<p>OFERTA EDUCATIVA</p>}
            url="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
            isHome={false}
          />
        }
      >
        <Route index element={<OfertaEducativaPage />} />
        <Route path="id" element={<CarrerasPage />} />
      </Route>
      <Route
        path="/documentos-servicios"
        element={
          <GeneralLayout
            componenteHeader={<p>DOCUMENTOS Y SERVICIOS</p>}
            url="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
            isHome={false}
          />
        }
      >
        <Route index element={<CuadriculaLinks />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path="/certificaciones"
        element={
          <GeneralLayout
            componenteHeader={<p>CERTIFICACIONES</p>}
            url="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
            isHome={false}
          />
        }
      >
        <Route index element={<CertificacionesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path="/educacion-continua"
        element={
          <GeneralLayout
            componenteHeader={<p>ECST</p>}
            url="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
            isHome={false}
          />
        }
      >
        <Route index element={<EducacionContinuaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path="/directorio"
        element={
          <GeneralLayout
            componenteHeader={<p>Directorio</p>}
            url="https://blog.orange.es/wp-content/uploads/sites/4/2024/03/fondos-de-pantalla-3d-paisaje.jpg"
            isHome={false}
          />
        }
      >
        <Route index element={<DirectorioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
