import PropTypes from "prop-types"
import { HiOutlineBars3 } from "react-icons/hi2";


export function MenuToggle({ onClick }) {
  return (
    <button onClick={onClick}>
      <HiOutlineBars3 className="text-4xl cursor-pointer text-neutral-500" />
    </button>
  );
}

MenuToggle.propTypes = {
    onClick: PropTypes.func
}


