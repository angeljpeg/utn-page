// context/CurrentLocation/CurrentLocationProvider.jsx
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Crear el contexto
const CurrentLocationContext = createContext();

// Proveedor del contexto
export const CurrentLocationProvider = ({ children }) => {
  const location = useLocation(); // Debe estar dentro de un Router
  const [currentLocation, setCurrentLocation] = useState(location.pathname); // Inicializa el estado

  useEffect(() => {
    setCurrentLocation(location.pathname);
    console.log("Current location:", location.pathname); // Agrega este log para depuración
  }, [location]);

  return (
    <CurrentLocationContext.Provider value={currentLocation}>
      {children}
    </CurrentLocationContext.Provider>
  );
};

CurrentLocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CurrentLocationContext };
