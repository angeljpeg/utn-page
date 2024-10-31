import PropTypes from "prop-types";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronUp } from 'react-icons/hi2';

export function Submenu({ title, links }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pb-1 border-b ">
            <button
                onClick={toggleAccordion}
                className="flex items-center justify-between w-full text-left"
            >
                <span className="text-lg font-semibold">{title}</span>
                <HiChevronUp className={`text-xl transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            <div
                className={`relative transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                style={{ maxHeight: isOpen ? `${links.length * 3}rem` : "0" }}
            >
                {/* Borde animado desde arriba hacia abajo */}
                <div
                    className={`absolute top-0 left-0 h-full transition-all duration-300 ${isOpen ? 'w-2 border-l-2 border-primary-200' : 'w-0'}`}
                ></div>

                <div className="pl-4 mt-2 space-y-2">
                    {links.map((link) => (
                        <Link key={link.title} to={link.link} className="block text-sm gray-600 text- hover:text-gray-800">
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
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
