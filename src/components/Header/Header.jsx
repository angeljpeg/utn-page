import PropTypes from "prop-types";
import './gradient-animation.css';

export function Header({ title }) {

  return (
    <div className="w-1/3 px-4 py-8 mb-16 text-center text-white rounded-md shadow-lg animated-gradient">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
