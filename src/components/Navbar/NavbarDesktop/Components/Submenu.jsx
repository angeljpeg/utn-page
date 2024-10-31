// components/Navbar/NavbarDesktop/Components/Submenu.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCurrentLocation } from "@hooks";

export function Submenu({ title, links }) {
  const currentLocation = useCurrentLocation(); // Esto debe estar dentro de CurrentLocationProvider
  const [isInCurrentLocation, setIsInCurrentLocation] = useState(false);

  useEffect(() => {
    const currentLink = links.some((item) => currentLocation === item.link);
    setIsInCurrentLocation(currentLink);
    console.log("Current Location in Submenu:", currentLocation); // Log para verificar el valor
  }, [currentLocation, links]);

  return (
    <li className={`submenu group ${isInCurrentLocation ? "active" : ""}`}>
      <span className="capitalize">{title}</span>
      <div className="transform opacity-0 submenu-dropdown top-full group-hover:opacity-100 group-hover:translate-y-1">
        <ul className="flex flex-col">
          {links.map((item) => (
            <li key={item.title} className="submenu-item">
              <Link to={item.link} className="text-xs">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

Submenu.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
