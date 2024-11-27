import React from "react";

export const HomePage = React.lazy(() => import('./HomePage/HomePage'))
export const OfertaEducativaPage = React.lazy(() => import('./OfertaEducativaPage/OfertaEducativaPage'))
export const CarrerasPage = React.lazy(() => import('./CarrerasPage/CarrerasPage'))
export const NotFoundPage = React.lazy(() => import("./NotFoundPage/NotFoundPage"))
export const LegislacionUniversitariaPage = React.lazy(() => import('./LegislacionUniversitaria/LegislacionUniversitariaPage'))
export const CertificacionesPage = React.lazy(() => import('./CertificacionesPage/CertificacionesPage'))
export const CuadriculaLogosPage = React.lazy(() => import('./CuadriculaLogosPage/CuadriculaLogosPage'))
export const EducacionContinuaPage = React.lazy(() => import('./EducacionContinuaPage/EducacionContinuaPage'))
export const TestPage = React.lazy(() => import("./TestPage/TestPage"))