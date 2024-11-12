import React from "react";

export const HomePage = React.lazy(() => import('./HomePage/HomePage'))
export const NotFoundPage = React.lazy(() => import("./NotFoundPage/NotFoundPage"))
export const TestPage = React.lazy(() => import("./TestPage/TestPage"))