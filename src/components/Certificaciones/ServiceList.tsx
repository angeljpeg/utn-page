import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ServiceListProps {
  items: string[];
}

export default function ServiceList({ items } : ServiceListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-4 pb-4">
          <CheckCircleIcon className="text-2xl text-neutral-600" />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
