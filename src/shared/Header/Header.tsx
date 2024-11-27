interface HeaderProps {
  component?: JSX.Element; // Asegúrate de usar JSX.Element para un componente React válido
  title?: string;
}

export default function Header({ title, component }: HeaderProps) {

  return (
    <div className="px-6 py-8 text-center text-white shadow-xl sm:rounded-lg md:w-1/2 lg:w-1/3 min-w-fit animate-animated-gradient bg-gradient-to-br from-lime-500 to-green-500 bg-[length:300%_300%]">
      {title ? (
        <h1 className="text-2xl font-bold tracking-tight cursor-default sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-lg">
          {title}
        </h1>
      ) : (
        component
      )}
    </div>
  );
}