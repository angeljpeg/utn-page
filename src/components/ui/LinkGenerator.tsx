import { Link } from "react-router-dom";

interface LinkGeneratorProps {
  pdf?: string;
  link?: string;
  title: string;
  className?: string;
}

export default function LinkGenerator({
  pdf,
  link = "/",
  className = "block mb-2 text-xl font-semibold text-black break-words transition duration-300 hover:text-green-600",
  title,
}: LinkGeneratorProps) {
  return (
    <div className="flex items-center justify-center text-center md:text-start">
      {pdf ? (
        <a
          href={pdf}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : link ? (
        <Link to={link} className={className}>
          {title}
        </Link>
      ) : (
        <span className={className}>{title}</span>
      )}
    </div>
  );
}

