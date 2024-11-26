import React from "react";

export const ScrollToUp = React.lazy(() => import('./ScrollUpButton/ScrollUpButton'))
export const AutoScroll = React.lazy(() => import('./ScrollToTop/ScrollToTop'))
export const Navbar = React.lazy(() => import('./Navbar/Navbar'))
export const Header = React.lazy(() => import('./Header/Header'))
export const Footer = React.lazy(() => import('./Footer/Footer'))
export {Loader} from "./Loader/Loader"