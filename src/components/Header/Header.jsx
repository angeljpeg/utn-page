import PropTypes from "prop-types";
import "./gradient-animation.css";

export default function Header({ componenteHeader }) {
  return (
    <header className="px-6 py-8 mx-4 text-3xl font-semibold lg:min-w-[30%] text-center text-white rounded-lg shadow-xl w-fit animated-gradient backdrop-blur-sm">
      {componenteHeader}
    </header>
  );
}

Header.propTypes = {
  componenteHeader: PropTypes.element,
};
