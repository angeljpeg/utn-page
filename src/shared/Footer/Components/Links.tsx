import {linksFooter} from "../FooterLinks"

export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-xl font-semibold text-neutral-50">Sitios de Interés</span>
      <ul className="flex flex-col items-center gap-4">
        {linksFooter.map((link) => (
          <li key={link.name}>
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-center transition-colors duration-300 ease-in-out text-neutral-400 hover:text-primary-500 hover:underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

  );
}
