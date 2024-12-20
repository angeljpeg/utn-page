import BookmarkIcon from "@mui/icons-material/Bookmark";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import ArticleIcon from "@mui/icons-material/Article";

import INFORME_ANUAL_DE_ACTIVIDADES_2023 from '/pdfs/navbar/INFORME_ANUAL_DE_ACTIVIDADES_2023.pdf'

export const headerItems = [
  {
    title: "Certificación de competencias",
    icon: BookmarkIcon,
    link: "/certificaciones",
  },
  {
    title: "Educación continua",
    icon: SwitchAccountIcon,
    link: "/edu-continua",
  },
  {
    title: "Informe Anual de Resultados 2023",
    icon: ArticleIcon,
    pdf: INFORME_ANUAL_DE_ACTIVIDADES_2023,
  },
];
