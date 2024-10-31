import "../Footer.css";
import { linksFooter } from "../data/dataLinks.js";

export function Links() {
  return (
    <div className="footer-links">
      <span>Sitios de Interés</span>
      <ul className="links-list">
        {linksFooter.map((link) => {
          return (
            <li key={link.name}>
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="link-item"
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
