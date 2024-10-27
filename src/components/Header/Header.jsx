import PropTypes from "prop-types";

export function Header({ title }) {
  return (
    <div className="w-1/3 px-4 py-8 text-center text-white rounded-md shadow-2xl bg-gradient-to-tl from-primary-700 to-primary">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
