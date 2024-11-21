import { Card } from "@/components/ui";

import AddIcon from "@mui/icons-material/Add";

const obj = [
  { title: "ajksdhajksd", icon: AddIcon, link: "/" },
  { title: "asda", icon: AddIcon, link: "/" },
  { title: "adasdasd", icon: AddIcon, links: [{title: "aqui", link: "/hays"}], extraText: "Saludo: " },
  { title: "asdasd", icon: AddIcon, links: [{title: "aqui", link: "/hays"}] },
];

export default function AuditoriaFederacion() {
  return (
    <section className="w-full">
      <section className="px-8 pt-28">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 sm:grid-cols-2">
          {obj.map(({title ,icon, link, links, extraText }) => (
            <Card icon={icon} titleLink={link} title={title} links={links} extraText={extraText}/>
          ))}
        </div>
      </section>
    </section>
  );
}
