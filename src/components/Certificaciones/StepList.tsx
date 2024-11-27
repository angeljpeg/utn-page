interface StepListProps {
  steps: string[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ul>
      {steps.map((step, index) => (
        <li key={index} className="flex gap-4 pb-4">
          <p>{`${index + 1}.- ${step}`}</p>
        </li>
      ))}
    </ul>
  );
}
