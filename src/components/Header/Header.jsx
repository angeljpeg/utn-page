import PropTypes from "prop-types";
import "./gradient-animation.css";

export default function Header({ title }) {
  return (
    <header className="w-11/12 px-6 py-8 text-center text-white shadow-xl md:rounded-lg sm:w-2/3 md:w-1/2 lg:w-1/3 min-w-fit animated-gradient backdrop-blur-sm">
      <h1 className="text-2xl font-bold tracking-tight cursor-default sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-lg">
        {title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
