import PropTypes from "prop-types";
import "./gradient-animation.css";

export function Header({ title }) {
  return (
    <div className="w-11/12 px-4 py-8 mb-8 text-center text-white rounded-md shadow-lg sm:w-2/3 md:w-1/2 lg:w-1/3 animated-gradient">
      <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
