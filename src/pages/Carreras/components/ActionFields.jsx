import PropTypes from "prop-types";

// Components
import { TbViewfinder } from "react-icons/tb";

export function ActionFields({ fields }) {
  return (
    <div className="w-full pb-8 sm:pb-10 bg-gray-50 h-fit">
      <div className="w-full max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mt-8 mb-4 text-2xl font-semibold text-center text-green-600 sm:text-3xl">
          Campos de acción
        </h2>
        <ul className="mt-4 list-none">
          {fields.map((field, index) => (
            <li
              key={index}
              className="flex items-start mb-4 text-base sm:text-lg"
            >
              <TbViewfinder className="mt-1 mr-3 text-xl text-green-600 sm:text-2xl" />
              <span className="flex-1">{field}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ActionFields.propTypes = {
  fields: PropTypes.array,
};
