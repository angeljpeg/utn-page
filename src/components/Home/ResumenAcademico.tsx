import { info } from "@/data/Home/utnInfo";

export default function ResumenAcademico() {
  return (
    <div className="w-full px- lg:w-3/4 md:w-11/12 h-fit lg:mx-0 md:mx-0">
      <h2 className="mb-12 text-4xl font-medium text-center text-gray-900">
        Resumen Académico
      </h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {info.map((item) => (
          <li className="flex flex-col justify-between p-4">
            <p className="text-6xl font-bold text-center text-green-500">
              {item.data}
            </p>
            <p className="py-2 text-lg font-medium text-center border-b-[3px] border-green-500">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
