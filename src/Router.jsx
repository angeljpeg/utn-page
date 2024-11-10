import { Route, Routes } from "react-router-dom";

import React from "react";

const RootLayout = React.lazy(() => import("./layouts/RootLayout"));
const CarrerasLayout = React.lazy(() => import("./layouts/CarrerasLayout"));

const HomePage = React.lazy(() => import("@pages/Home/HomePage"));
const CarrerasPage = React.lazy(() => import("@pages/Carreras/CarrerasPage"));
const OfertaEducativaPage = React.lazy(() => import("@pages/OfertaEducativa/OfertaEducativaPage"));
const NotFoundPage = React.lazy(() => import("@pages/NotFound/NotFoundPage"));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/carreras" element={<CarrerasLayout />}>
        <Route index element={<OfertaEducativaPage />} />
        <Route path=":carreraId" element={<CarrerasPage />} />
      </Route>
    </Routes>
  );
};
