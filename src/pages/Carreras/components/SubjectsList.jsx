import PropTypes from "prop-types";

export function SubjectsList({ title, quarters }) {
  return (
    <div className="w-full py-6 h-fit">
      <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mt-8 mb-6 text-2xl font-normal text-center text-stone-700 sm:text-3xl">
          {title}
        </h2>
        <ul className="grid grid-cols-1 gap-4 text-gray-800 sm:gap-6 justify-items-stretch md:grid-cols-2 lg:grid-cols-3">
          {quarters.map((quarter, quarterIndex) => (
            <li key={quarterIndex} className="flex w-full h-full">
              <ul className="flex flex-col w-full h-full p-4 bg-gray-100 rounded-lg">
                {quarter.subjects.map((subject, index) => (
                  <li key={index} className="flex items-center mb-2">
                    {index === 0 ? (
                      <h2 className="mb-2 text-lg font-semibold">{subject}</h2>
                    ) : (
                      <span className="flex-1 text-base">{subject}</span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SubjectsList.propTypes = {
  title: PropTypes.string,
  quarters: PropTypes.array,
};
