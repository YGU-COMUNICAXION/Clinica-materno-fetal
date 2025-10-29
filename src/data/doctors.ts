import type { Doctor } from "../types/doctors";

import doctorAlfredoImage from "@assets/img/about-us/DrAlfonso.jpg";
import doctorDavidImage from "@assets/img/about-us/DrDavid.jpg";
import doctorDoraImage from "@assets/img/about-us/DrDora.jpg";
import doctorEduardoImage from "@assets/img/about-us/DrEduardo.jpg";
import doctorMayteImage from "@assets/img/about-us/DrEduardoTorres.jpg";
import doctorJanaImage from "@assets/img/about-us/DrJana.jpg";
import doctorManuelImage from "@assets/img/about-us/DrManuel.jpg";
import doctorMonicaImage from "@assets/img/about-us/DrMonica.jpg";
import doctorNancyImage from "@assets/img/about-us/Nancy.jpg";
import doctorSantiagoImage from "@assets/img/about-us/DrSantiago.jpg";
import doctorTaniaImage from "@assets/img/about-us/DrTania.jpg";

const doctors: Doctor[] = [
  {
    id: "nancy-sierra-lozada",
    name: "Dra. Nancy Sierra Lozada",
    image: doctorNancyImage,
  },
  {
    id: "manuel-casillas-barrera",
    name: "Dr. Manuel Casillas Barrera",
    image: doctorManuelImage,
  },
  {
    id: "santiago-castelan-alatorre",
    name: "Dr. Santiago Castelan Alatorre",
    image: doctorSantiagoImage,
  },
  {
    id: "jana-lopez-feliks",
    name: "Dra. Jana López Feliks",
    image: doctorJanaImage,
  },
  {
    id: "eduardo-nieto-vazquez",
    name: "Dr. Eduardo Nieto Vázquez",
    image: doctorEduardoImage,
    featured: true,
  },
  {
    id: "tania-gabriela-ramirez-abarca",
    name: "Dra. Tania Gabriela Ramírez Abarca",
    image: doctorTaniaImage,
  },
  {
    id: "monica-aguinaga-rojo",
    name: "Dra. Mónica Aguinaga Rojo",
    image: doctorMonicaImage,
  },
  {
    id: "alfredo-de-jesus-martinez-garcia",
    name: "Dr. Alfredo de Jesús Martínez García",
    image: doctorAlfredoImage,
  },
  {
    id: "dora-gilda-mijares",
    name: "Dra. Dora Gilda Mijares",
    image: doctorDoraImage,
  },
  {
    id: "mayte-molina",
    name: "Dra. Mayte Molina",
    image: doctorMayteImage,
  },
  {
    id: "david-bojorquez",
    name: "Dr. David Bojórquez",
    image: doctorDavidImage,
  },
];

export default doctors;
