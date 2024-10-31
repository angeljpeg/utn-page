import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Submenu } from "./Submenu";

export function Menu({ items }) {
  return (
    <ul className="menu-list">
      <li>
        <Link to="/">INICIO</Link>
      </li>
      {items.map((item) => (
        <Submenu key={item.head} title={item.head} links={item.links} />
      ))}
    </ul>
  );
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
};