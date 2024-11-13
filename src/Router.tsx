import { Route, Routes } from "react-router-dom";

// Pages
import { NotFoundPage, HomePage, TestPage } from "@/pages";

// Components

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
{/*       <Route path="/carreras" element={<CarrerasLayout />}>
        <Route index element={<OfertaEducativaPage />} />
        <Route path=":carreraId" element={<CarrerasPage />} /> 
      </Route> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
