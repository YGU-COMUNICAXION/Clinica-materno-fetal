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
    achievements: [
      "Especialista en Ginecología y Obstetricia | Instituto Nacional de Perinatología",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia en Medicina Materno Fetal",
      "Presidenta del Consejo Mexicano de Ginecología y Obstetricia",
      "Especialista en la especialidad de Ginecología y Obstetricia",
      "Hospital Ángeles Lomas",
      "Hospital Materno Perinatal Mónica Pretelini Sáenz",
      "Instituto Materno Infantil del Estado de México",
      "Hospital General Dr. Nicolás San Juan",
      "Profesor de pregrado en la Escuela de Medicina Saint Luke",
      "Coordinadora de la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas y del Hospital Ángeles México",
      "Miembro del profesorado internacional de Preis School",
      "International and European School of Perinatal, Neonatal and Reproductive Medicine, Florence, Italy",
    ],
  },
  {
    id: "manuel-casillas-barrera",
    name: "Dr. Manuel Casillas Barrera",
    image: doctorManuelImage,
    achievements: [
      "Especialista en Ginecología y Obstetricia | Instituto Nacional de Perinatología",
      "Medicina Perinatal | Instituto Nacional de Perinatología",
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia y el de Medicina Materno Fetal",
      "Miembro del subcomité de exámenes para la Certificación en Medicina Materno Fetal",
      "Jefe del servicio de Embarazo de Alto Riesgo del Hospital de la Mujer",
      "Adscrito a la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas",
    ],
  },
  {
    id: "santiago-castelan-alatorre",
    name: "Dr. Santiago Castelan Alatorre",
    image: doctorSantiagoImage,
    achievements: [
      "Médico Cirujano por la Universidad Anáhuac México-Norte",
      "Médico especialista en Ginecología y Obstetricia por la Universidad Nacional Autónoma de México y el Hospital Ángeles Lomas",
      "Médico subespecialista en Medicina Materno Fetal por el Hospital Clínic Barcelona y Hospital Sant Joan de Déu de Barcelona",
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia",
      "Profesor adjunto al Programa de Residencias Médicas en Ginecología y Obstetricia del Hospital Ángeles Lomas",
      "Médico adscrito de la Clínica de Medicina Materno Fetal del Hospital Ángeles Lomas",
    ],
  },
  {
    id: "jana-lopez-feliks",
    name: "Dra. Jana López Feliks",
    image: doctorJanaImage,
    achievements: [
      "Especialista en Ginecología y Obstetricia | Instituto Nacional de Perinatología",
      "Especialista en Medicina Materno Fetal | Instituto Nacional de Perinatología",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia y de Medicina Materno Fetal",
      "Formación en biopsia de vellosidades coriales | Hospital Clínic de Barcelona",
      "Adscrita a la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas",
    ],
  },
  {
    id: "eduardo-nieto-vazquez",
    name: "Dr. Eduardo Nieto Vázquez",
    image: doctorEduardoImage,
    featured: true,
    achievements: [
      "Ginecólogo obstetra con alta especialidad en Medicina Materno Fetal",
      "Egresado del Instituto Nacional de Perinatología con enfoque en embarazos de alto riesgo",
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia",
      "Miembro del cuerpo médico de la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas",
      "Profesor invitado en diplomados de actualización en medicina materno fetal",
    ],
  },
  {
    id: "tania-gabriela-ramirez-abarca",
    name: "Dra. Tania Gabriela Ramírez Abarca",
    image: doctorTaniaImage,
    achievements: [
      "Médico especialista en Ginecología y Obstetricia | Universidad Nacional Autónoma de México",
      "Subespecialista en Medicina Materno Fetal | Instituto Nacional de Perinatología",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia",
      "Experta en diagnóstico prenatal y tamizaje de malformaciones fetales",
      "Integrante del equipo multidisciplinario de la Clínica Materno-Fetal Ángeles Lomas",
    ],
  },
  {
    id: "monica-aguinaga-rojo",
    name: "Dra. Mónica Aguinaga Rojo",
    image: doctorMonicaImage,
    achievements: [
      "Especialista en Ginecología y Obstetricia con enfoque en embarazos de alto riesgo",
      "Formación en ultrasonido obstétrico avanzado y medicina materno fetal",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia",
      "Ponente en foros nacionales de salud materno fetal",
      "Adscrita a la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas",
    ],
  },
  {
    id: "alfredo-de-jesus-martinez-garcia",
    name: "Dr. Alfredo de Jesús Martínez García",
    image: doctorAlfredoImage,
    achievements: [
      "Médico cirujano con especialidad en Ginecología y Obstetricia",
      "Subespecialista en Medicina Materno Fetal | Instituto Nacional de Perinatología",
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia",
      "Experiencia en terapia fetal invasiva y procedimientos mínimamente invasivos",
      "Integrante del staff médico de la Clínica Materno-Fetal Ángeles Lomas",
    ],
  },
  {
    id: "dora-gilda-mijares",
    name: "Dra. Dora Gilda Mijares",
    image: doctorDoraImage,
    achievements: [
      "Especialista en Ginecología y Obstetricia | Instituto Nacional de Perinatología",
      "Alta especialidad en Medicina Materno Fetal",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia",
      "Coautora de publicaciones científicas sobre medicina perinatal",
      "Parte del comité de calidad y seguridad del paciente en la Clínica Materno-Fetal",
    ],
  },
  {
    id: "mayte-molina",
    name: "Dra. Mayte Molina",
    image: doctorMayteImage,
    achievements: [
      "Ginecóloga obstetra formada en instituciones de alta especialidad",
      "Subespecialista en Medicina Materno Fetal con enfoque en monitoreo fetal avanzado",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia",
      "Docente en programas de educación continua para médicos residentes",
      "Miembro del equipo de la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas",
    ],
  },
  {
    id: "david-bojorquez",
    name: "Dr. David Bojórquez",
    image: doctorDavidImage,
    achievements: [
      "Médico cirujano con especialidad en Ginecología y Obstetricia",
      "Subespecialista en Medicina Materno Fetal y ultrasonido obstétrico",
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia",
      "Amplia experiencia en vigilancia prenatal y manejo de complicaciones obstétricas",
      "Colaborador activo en proyectos de investigación clínica en medicina materno fetal",
    ],
  },
];

export default doctors;
