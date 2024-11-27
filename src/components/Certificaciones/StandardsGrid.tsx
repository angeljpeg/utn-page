interface Standard {
  code: string;
  description: string;
}

interface StandardsGridProps {
  standards: Standard[];
}

export default function StandardsGrid({ standards }: StandardsGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2">
      {standards.map((standard, index) => (
        <li
          key={index}
          className="flex flex-col items-center p-4 bg-green-100 rounded-lg"
        >
          <p className="text-lg font-medium">{standard.code}</p>
          <p className="text-center">{standard.description}</p>
        </li>
      ))}
    </ul>
  );
}
