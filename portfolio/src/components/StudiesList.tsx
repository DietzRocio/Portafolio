import React from "react";
import useLanguage from "../hook/useLanguage";
import EducationCard from "./EducationCard/EducationCard";

const StudiesList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const educations = [
    {
      title: isSpanish
        ? "2020 - Actualidad | Ingeniería en Sistemas de Información | UTN FRSF"
        : "2020 - Present | Information Systems Engineering | UTN FRSF",
      description: [
        isSpanish
          ? "Actualmente estoy cursando la carrera de Ingeniería en Sistemas de Información, esta se centra en la planificación, dirección, ejecución "
          + "y control del relevamiento, análisis, diseño, desarrollo, prueba, implementación y mantenimiento de sistemas de información y de software."
          : "I am currently pursuing a degree in Information Systems Engineering, which focuses on the planning, management, execution, and control of "
          + "the survey, analysis, design, development, testing, implementation, and maintenance of information and software systems.",
        "",
        isSpanish
          ? "Como futura ingeniera, me estoy formando en la interpretación y resolución de problemas mediante metodologías de sistemas y tecnologías de "
          + "procesamiento de información."
          : "As a future engineer, I am being trained to interpret and solve problems through systems methodologies and information processing technologies.",
      ],
      items: [
        isSpanish
          ? "Dirigir proyectos de desarrollo e implementación de sistemas con inteligencia artificial y ciencia de datos."
          : "Leading development and implementation projects involving artificial intelligence and data science systems.",
        isSpanish
          ? "Liderar el planeamiento y control de sistemas de información y comunicación de datos."
          : "Managing the planning and control of information and data communication systems.",
        isSpanish
          ? "Emprender proyectos de innovación, integrando equipos interdisciplinarios."
          : "Initiating innovation projects, working with interdisciplinary teams.",
        isSpanish
          ? "Proyectar y dirigir aspectos relacionados con la seguridad informática."
          : "Designing and overseeing aspects related to cybersecurity."
      ]
    },
    {
      title: 
        isSpanish
          ? "2016 - 2019 | Licenciatura en Sistemas de Información | UADER FCYT"
          : "2016 - 2019 | Bachelor's Degree in Information Systems | UADER FCYT",
      description: [
        isSpanish
          ? "Profesional con sólidos fundamentos teóricos en informática y experiencia práctica en el uso de tecnologías actuales. "
          + "Capacitado para desempeñarse en el análisis, diseño y desarrollo de sistemas de información en diversas áreas."
          : "Professional with a strong theoretical foundation in computer science and practical experience in the use of current "
          + "technologies. Skilled in analyzing, designing, and developing information systems across various domains.",
        "",
        isSpanish
          ? "Además, preparado para dirigir y planificar proyectos de software, gestionar áreas informáticas en organizaciones, "
          + "establecer normas de calidad y seguridad, y realizar auditorías y pericias relacionadas con sistemas informáticos."
          : "Additionally, I am prepared to lead and plan software projects, manage IT areas within organizations, establish "
          + "quality and security standards, and conduct audits and forensic investigations related to information systems.",
      ],
      items: [
        isSpanish
          ? "Análisis, diseño y modelado de sistemas."
          : "Systems analysis, design, and modeling.",
        isSpanish
          ? "Programación de sistemas web, móvil y de escritorio."
          : "Web, mobile, and desktop application development.",
        isSpanish
          ? "Administración de bases de datos SQL y NoSQL."
          : "SQL and NoSQL database administration.",
        isSpanish
          ? "Aseguramiento de la calidad (QA) y pruebas de software."
          : "Quality assurance (QA) and software testing.",
        isSpanish
          ? "Inteligencia de negocio y minería de datos para la toma de decisiones."
          : "Business intelligence and data mining for decision-making.",
      ],
      certificate: "",
      certificateLink: ""
    },
    // Note: Aca se agregan mas elementos
  ];

  return (
    <div>
      {educations.map((Education, index) => (
        <React.Fragment key={index}>
          <EducationCard
            key={index}
            title={Education.title}
            description={Education.description}
            items={Education.items}
          />
          {index < educations.length - 1 && <hr className="hr-gray" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StudiesList;
