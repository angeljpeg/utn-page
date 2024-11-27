// PDFS
// ASPIRANTES
import PDF_CALENDARIO from "/pdfs/navbar/Calendario.pdf";
import PDF_CONVOCATORIA from "/pdfs/navbar/convocatoria.pdf";
import PDF_INDUCCION from "/pdfs/navbar/induccion.pdf";
import PDF_TRANSPORTE from "/pdfs/navbar/Transporte.pdf";
// MAESTROS
import PDF_CONDUCTA from "/pdfs/navbar/cod_conducta.pdf";
// UNIVERSIDAD
import PDF_CODIGO_DE_ETICA_ESTADO_2022 from '/pdfs/navbar/codigo_etica_estado_2022.pdf'
import PDF_Informe_Anual_de_Actividades_2021_2022 from '/pdfs/navbar/Informe_Anual_de_Actividades_2021_2022.pdf'

import { NavbarItem } from "@/interfaces/navbar.interface";

export const NavbarItems: NavbarItem[] = [
  // INICIO
  {
    id: 1,
    menuName: "INICIO",
    link: "/",
  },
  // ALUMNOS
  {
    id: 2,
    menuName: "ALUMNOS",
    subMenu: [
      {
        title: "CALIFICACIONES",
        link: "https://sescolar.com/sescolar_utnogales/",
      },
      {
        title: "PRE REGISTRO",
        link: "https://siageescolar.net/preregistro_utnogales/utnogales/admision_ing.aspx",
      },
      {
        title: "INGIENERIA 2024",
        link: "https://siageescolar.net/preregistro_utnogales/utnogales/admision_ing.aspx",
      },
      {
        title: "CALENDARIO",
        pdf: PDF_CALENDARIO,
      },
      {
        title: "ACADEMIA DE MATEMATICAS",
        link: "/academia-matematicas",
      },
      {
        title: "IMSS",
        link: "https://www.imss.gob.mx/imssdigital",
      },
    ],
  },
  // CARRERAS
  {
    id: 3,
    menuName: "CARRERAS",
    link: "/carreras",
  },
  // ASPIRANTES
  {
    id: 4,
    menuName: "ASPIRANTES",
    subMenu: [
      {
        title: "CONVOCATORIA",
        pdf: PDF_CONVOCATORIA,
      },
      {
        title: "PRE-REGISTRO",
        link: "https://siageescolar.net/preregistro_utnogales/utnogales/admision_tsu.aspx",
      },
      {
        title: "SEGUIMIENTO",
        link: "https://siageescolar.net/preregistro_utnogales/utnogales/admision_tsu.aspx",
      },
      {
        title: "EXAMEN 2024",
        link: "https://sescolar.com/sescolar_utnogales/evaluaz/evaluaz.aspx",
      },
      {
        title: "CURSO DE INDUCCION",
        pdf: PDF_INDUCCION,
      },
      {
        title: "TRANSPORTE",
        pdf: PDF_TRANSPORTE,
      },
    ],
  },
  // SERVICIOS
  {
    id: 5,
    menuName: "SERVICIOS",
    subMenu: [
      { title: "EDUC. CONTINUA", link: "/edu-continua" },
      { title: "BOLSA DE TRABAJO", link: "/bolsa-trabajo" },
      { title: "CERTIFICACIONES", link: "/certificaciones" },
      { title: "EMPRENDEDORES", link: "/emprendedores" },
      { title: "EGRESADOS", link: "/" },
    ],
  },
  // MAESTROS
  {
    id: 6,
    menuName: "MAESTROS",
    subMenu: [
      {
        title: "CALIFICACIONES",
        link: "https://sescolar.com/sescolar_utnogales/index.aspx",
      },
      {
        title: "TUTORIAS",
        link: "/???",
      },
      {
        title: "CORREO",
        link: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=3af0c911-2bda-9441-3576-c0301c84bb82&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638667283133970588.275b8d9b-8b97-4b3f-812e-a8f509439cca&state=Dcs7FoAgDAVR0ONyIp8IeVkOQWkt3b4p7nQTQwi721zMniCd0btUcGFWyQ04qzTDrUYwFbqMF6HUhwZWy3qxzjmiv0d6v5F-",
      },
      {
        title: "COD. DE CONDUCTA",
        pdf: PDF_CONDUCTA,
      },
    ],
  },
  // UNIVERSIDAD
  {
    id: 7,
    menuName: "UNIVERSIDAD",
    subMenu: [
      {
        title: "DIRECTORIO",
        link: "/directorio",
      },
      {
        title: "SIST. DIRECTORES",
        link: "https://siageescolar.net/siage_utnogales/index.aspx",
      },
      {
        title: "ESCOLARES",
        link: "https://siageescolar.net/siage_utnogales/index.aspx",
      },
      {
        title: "SIST. GESTION",
        link: "https://szurqtzgnvvrzkzwj4ybla.on.drv.tw/SGOE%20UTN/acceder.html",
      },
      {
        title: "SUBSIDIOS",
        link: "/006-subsidios",
      },
      {
        title: "INFORME ANUAL DE ACTIVIDADES 2021-2022",
        pdf: PDF_Informe_Anual_de_Actividades_2021_2022,
      },
      {
        title: "COD. ETICA",
        pdf: PDF_CODIGO_DE_ETICA_ESTADO_2022,
      },
      {
        title: "ISO 21001 : 2018",
        link: "http://www.utnogales.edu.mx/sgoeutn/sgoe.html",
      },
      {
        title: "ART 36 2022",
        link: "/art-36-2022",
      },
      {
        title: "LEGISLACION UNIVERSITARIA",
        link: "/legislacion",
      },
    ],
  },
];
