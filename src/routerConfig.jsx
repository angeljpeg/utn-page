import React from "react";

const HomePage = React.lazy(() => import("@pages/Home/HomePage"));
const CarrerasPage = React.lazy(() => import('@pages/Carreras/CarrerasPage'));

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/carrera",
    element: <CarrerasPage />,
  },
];
