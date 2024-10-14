import { useState } from "react";
import PresentationCard from "./PresentationCard/PresentationCard";
import useLanguage from "../hook/useLanguage";

const PresentationsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const presentation = [
    {
      description: [
        isSpanish
          ? "Soy una apasionada desarrolladora de software con una sólida formación en ingeniería en sistemas de información y una experiencia significativa en la enseñanza"
          + " y administración de redes. Mi trayectoria incluye roles como docente en temas de seguridad informática y administración de redes, donde he impulsado el "
          + "aprendizaje práctico de herramientas clave en el ámbito de la conectividad y la ciberseguridad."
          : "I am a passionate software developer with a solid background in information systems engineering and significant experience in teaching and network administration. "
          + "My career includes roles as instructor in cybersecurity and network administration, where I have promoted hands-on learning of key tools in the field of "
          + "connectivity and cybersecurity.",
        " ",
        isSpanish
          ? "Actualmente, me desempeño como ayudante de segunda en el Laboratorio de Conectividad de la UTN FRSF, contribuyendo al mantenimiento y funcionamiento eficiente, "
          + "del laboratorio, así como asistiendo a estudiantes y docentes en sus proyectos. Actualmente, me desempeño como ayudante de segunda en el Laboratorio de Conectividad"
          + " de la UTN FRSF, donde contribuyo al mantenimiento y funcionamiento eficiente del laboratorio, y asisto a estudiantes y docentes en sus proyectos. Además he "
          + "participado en el desarrollo de software para la gestión documental en EPE, donde implementé tecnologías modernas como Vue, Express.js y TypeScript."
          : "Currently, I work as a teaching assistant in the Connectivity Lab at UTN FRSF, where I contribute with maintenance and efficient operation of the lab while "
          + "assisting students and teachers with their projects. Additionally, I have participated in software development for document management at EPE, where I "
          + "implemented modern technologies such as Vue, Express.js, and TypeScript.",
        " ",
        isSpanish
          ? "Con habilidades en diversas tecnologías como HTML, CSS, JavaScript, bases de datos SQL y NoSQL, busco seguir creciendo en el ámbito del desarrollo de software "
          + "y la implementación de soluciones innovadoras. Estoy comprometida con la mejora continua y la colaboración en entornos de trabajo dinámicos. Estoy comprometida "
          + "a seguir creciendo como profesional y colaborar en entornos de trabajo dinámicos."
          : "Having skills in different technologies such as HTML, CSS, JavaScript, SQL and NoSQL databases, I am eager to continue growing in the field of software "
          + "development and the deployment of innovative solutions. I am committed to continuous improvement and collaboration in dynamic work environments.",
      ],
    },
    // Note: Aca se agregan mas elementos
  ];

  return (
    <div>
      {presentation.map((experience, index) => (
        <PresentationCard key={index} description={experience.description} />
      ))}
    </div>
  );
};

export default PresentationsList;
