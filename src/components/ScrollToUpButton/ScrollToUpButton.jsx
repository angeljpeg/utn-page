import { useState, useEffect } from "react";

import "./ScrollToUpButton.css";
import { IoCaretUp } from "react-icons/io5";

export function ScrollToUpButton() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className={`ScrollToUpButton ${active ? "opacity-100" : "opacity-0"}`} onClick={handleScrollToTop}>
        <IoCaretUp className="w-6 h-6" />
      </button>
    </div>
  );
}
