import { Route, Routes } from "react-router-dom";

// Layouts
import { RootLayout, CarrerasLayout } from "@/layout";

// Pages
import {
  NotFoundPage,
  HomePage,
  OfertaEducativaPage,
  CarrerasPage,
  LegislacionUniversitariaPage,
  CertificacionesPage,
  CuadriculaLogosPage,
  EducacionContinuaPage,
  SubsidiosPage,
  DirectorioPage,
  AcademiaMatematicasPage,
} from "@/pages";

// Components

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="legislacion" element={<LegislacionUniversitariaPage />} />
        <Route path="certificaciones" element={<CertificacionesPage />} />
        <Route path="edu-continua" element={<EducacionContinuaPage />} />
        <Route path="algunos-logos" element={<CuadriculaLogosPage />} />
        {/* UNIVERSIDAD */}
        <Route path="006-subsidios" element={<SubsidiosPage />} />
        <Route path="directorio" element={<DirectorioPage />} />
        {/* ALUMNOS */}
        <Route
          path="academia-matematicas"
          element={<AcademiaMatematicasPage />}
        />

        {/* CARRERAS */}
        <Route path="carreras" element={<CarrerasLayout />}>
          <Route index element={<OfertaEducativaPage />} />
          {/* CARRERAS VIEJO MODEL */}
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
          <Route
            path="nuevoModelo/desarrollo-software"
            element={<CarrerasPage carreraIndex={0} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/inteligencia-artificial"
            element={<CarrerasPage carreraIndex={1} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/automatizacion"
            element={<CarrerasPage carreraIndex={2} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/robotica"
            element={<CarrerasPage carreraIndex={3} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/mercadotecnia"
            element={<CarrerasPage carreraIndex={4} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/ventas"
            element={<CarrerasPage carreraIndex={5} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/manufactura-aeronautica"
            element={<CarrerasPage carreraIndex={6} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/procesos-productivos"
            element={<CarrerasPage carreraIndex={7} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/maquinados-precision"
            element={<CarrerasPage carreraIndex={8} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/logistica-internacional"
            element={<CarrerasPage carreraIndex={9} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/mantenimiento-industrial"
            element={<CarrerasPage carreraIndex={10} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/energia-solar"
            element={<CarrerasPage carreraIndex={11} isNewModel={true} />}
          />
          <Route
            path="nuevoModelo/energia-turbo-solar"
            element={<CarrerasPage carreraIndex={12} isNewModel={true} />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
