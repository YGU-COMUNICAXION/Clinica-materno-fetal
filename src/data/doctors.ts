import type { Doctor } from "../types/doctors";

import doctorAlfonsoImage from "@assets/img/about-us/DrAlfonso.jpg";
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
      "Médico Cirujano egresado de la Universidad Nacional Autónoma de México",
      "Especialista en Ginecología y Obstetricia y Subespecialista en Medicina Materno Fetal",
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia y de Medicina Materno Fetal",
      "Profesor en la Especialidad de Ginecología y Obstetricia del Hospital Ángeles Lomas y del Hospital Ángeles México",
      "Médico Adscrito en la Clínica de Medicina Materno Fetal del Hospital Ángeles Lomas, Ángeles México y en el Instituto de Especialidades para la Mujer y Diagnóstico Prenatal",
      "Profesor Titular del Curso de Ultrasonido en Ginecología y Obstetricia en la Asociación Mexicana de Ultrasonido en Medicina (AMUSEM)",
    ],
  },
  {
    id: "tania-gabriela-ramirez-abarca",
    name: "Dra. Tania Gabriela Ramírez Abarca",
    image: doctorTaniaImage,
    achievements: [
      "Médico Cirujano y Partero por el Instituto Politécnico Nacional",
      "Especialista en Ginecología y Obstetricia Centro Médico ISSEMyM",
      "Especialista en Medicina Materno Fetal Instituto Nacional de Perinatología",
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia y el de Medicina Materno Fetal",
      "Diplomado en ultrasonido obstétrico y cardiología fetal avanzada Fundación Internacional de Medicina Materno Fetal",
      "Diplomado de Cardiología Fetal Universidad Católica de Córdoba",
      "Médica Adscrita a la Clínica de Medicina Materno-Fetal del Hospital Ángeles Lomas",
      "Médica Adscrita a la Clínica de Medicina Materno-Fetal del Hospital Ángeles México",
      "Miembro del profesorado adjunto de residencias médicas en Ginecología y Obstetricia del Hospital Ángeles Lomas",
    ],
  },
  {
    id: "monica-aguinaga-rojo",
    name: "Dra. Mónica Aguinaga Rojo",
    image: doctorMonicaImage,
    achievements: [
      "Licenciatura en Médico Cirujano, Universidad Anáhuac",
      "Especialidad en Genética Médica, UNAM",
      "Certificada por el Consejo Nacional de Genética Humana",
      "Maestría en Ciencias Médicas, UNAM",
      "Miembro del Sistema Nacional de Investigadores",
      "Coordinadora del Servicio de Genética, Instituto Nacional de Perinatología Ciudad de México",
      "Miembro del Cuerpo Médico Centro Médico ABC",
      "Profesor titular del Curso de Genética Perinatal, UNAM",
      "Profesor adjunto de las subespecialidades de Medicina Materno Fetal y Biología de la Reproducción, Instituto Nacional de Perinatología",
    ],
  },
  {
    id: "alfonso-de-jesus-martinez-garcia",
    name: "Dr. Alfonso de Jesús Martínez García",
    image: doctorAlfonsoImage,
    achievements: [
      "Especialista en Cardiología Fetal, egresado del Royal Brompton Hospital y St. George's University Hospital, Londres, Reino Unido",
      "Especialista en Cardiología Pediátrica y Alta Especialidad en Ecocardiografía Pediátrica, egresado del Instituto Nacional de Cardiología, Ignacio Chávez. Ciudad de México",
      "Certificado por el Consejo Mexicano de Cardiología y el Consejo Mexicano de Ecocardiografía Pediátrica",
      "Médico adscrito al Instituto Nacional de Cardiología, Ignacio Chávez",
      "Profesor titular y fundador del Curso de Posgrado de Alta Especialidad en Ecocardiografía Fetal de la Universidad Nacional Autónoma de México (UNAM)",
      "Profesor adjunto de Fisiología de la Licenciatura de Médico Cirujano, Facultad de Medicina, Universidad Nacional Autónoma de México (UNAM)",
      "Coordinador del Capítulo de Eco-pediatría, Sociedad Nacional de Ecocardiografía de México 2021-2022 (SONECOM)",
      "Miembro titular de la Sociedad Mexicana de Cardiología",
      "Miembro titular de la Sociedad Nacional de Ecocardiografía de México",
      "Miembro certificado por el Consejo Mexicano de Cardiología y el Consejo Mexicano de Ecocardiografía Pediátrica",
    ],
  },
  {
    id: "dora-gilda-mayen-molina",
    name: "Dra. Dora Gilda Mayén Molina",
    image: doctorDoraImage,
    achievements: [
      "Médico especialista en Genética, Maestra en Ciencias Médicas, UNAM",
      "Doctora en Ciencias de la Salud, Especialista en Bioética, Universidad Anáhuac",
      "Jefe de la Unidad de Genética, Hospital Ángeles Lomas",
      "Capítulo de Genética, Colegio Mexicano de Ginecología y Obstetricia",
      "Departamento de Genética, Instituto Nacional de Perinatología (1989-2009)",
      "Ex-Presidenta del Consejo Mexicano de Genética (2008-2011)",
      "Ex-Presidenta de la Asociación Mexicana de Genética Humana (2017-2019)",
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
