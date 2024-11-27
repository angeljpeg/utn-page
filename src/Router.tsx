import { Route, Routes } from "react-router-dom";

// Layouts
import { RootLayout } from "@/layout";

// Pages
import {
  NotFoundPage,
  HomePage,
  TestPage,
  OfertaEducativaPage,
  CarrerasPage,
  LegislacionUniversitariaPage,
} from "@/pages";

// Components

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="legislacion" element={<LegislacionUniversitariaPage />} />
      </Route>
    </Routes>
  );
};
