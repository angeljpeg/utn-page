import React from "react";

export const HomePage = React.lazy(() => import('./HomePage/HomePage'))
export const OfertaEducativaPage = React.lazy(() => import('./OfertaEducativaPage/OfertaEducativaPage'))
export const CarrerasPage = React.lazy(() => import('./CarrerasPage/CarrerasPage'))
export const NotFoundPage = React.lazy(() => import("./NotFoundPage/NotFoundPage"))
export const TestPage = React.lazy(() => import("./TestPage/TestPage"))