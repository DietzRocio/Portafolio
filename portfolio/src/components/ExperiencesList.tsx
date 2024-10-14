import { useState } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import useLanguage from "../hook/useLanguage";
import React from "react";

const ExperiencesList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const experiences = [
    {
      title: isSpanish
        ? "2024 - Actualidad | Laboratorio de Conectividad - IAC"
        : "2024 - Present | Connectivity Lab - IAC",
      description: [
        isSpanish
          ? "Actualmente me desempeño como ayudante de segunda en el Laboratorio de Conectividad, donde contribuyo al funcionamiento y mantenimiento del laboratorio."
          : "I currently work as a teaching assistant in the Connectivity Lab, where I contribute to the lab's operation and maintenance.",
      ],
      items: [
        isSpanish
          ? "Supervisión de equipos y recursos del laboratorio."
          : "Supervision of lab equipment and resources.",
        isSpanish
          ? "Asistencia a estudiantes y docentes en proyectos relacionados con conectividad."
          : "Assistance to students and faculty on connectivity-related projects.",
        isSpanish
          ? "Colaboración en la organización de prácticas y actividades educativas."
          : "Collaboration in organizing educational activities and practical sessions.",
      ],
    },
    {
      title: isSpanish
        ? "2022 - 2024 | Docente del curso administración de redes - IAC"
        : "2022 - 2024 | Teacher of network administration course - IAC",
      description: [
        isSpanish
          ? "He impartido clases centradas en los fundamentos de la administración de redes, abordando temas esenciales como escaneo de redes, análisis de protocolos y "
          + "puertos, e implementando el uso de herramientas como Nmap y Wireshark. También se tratan aspectos sobre capas de red, Armitage, topologías y otros conceptos "
          + "relevantes en el ámbito de la seguridad y gestión de redes."
          : "I have taught classes focused on the basics of network administration, covering essential topics such as network scanning, protocol and port analysis, as well"
          + " as the use of tools like Nmap and Wireshark. The course also addresses topics on network layers, Armitage, topologies, and other relevant concepts in the field"
          + " of network security and management.",
      ],
      items: [
        isSpanish
          ? "Escaneo de redes."
          : "Network scanning.",
        isSpanish
          ? "Uso de Nmap y Wireshark."
          : "Use of Nmap and Wireshark.",
        isSpanish
          ? "Análisis de protocolos y puertos."
          : "Protocol and port analysis.",
        isSpanish
          ? "Capas de red."
          : "Network layers.",
        isSpanish
          ? "Herramienta Armitage."
          : "Armitage tool.",
        isSpanish
          ? "Topologías de red."
          : "Network topologies.",
        isSpanish
          ? "Otros conceptos relevantes en el ámbito de la seguridad y gestión de redes."
          : "Other relevant concepts in the field of network security and management.",
      ],
      technologies: [
        "Nmap",
        "Wireshark",
      ]
    },
    {
      title: isSpanish
        ? "2023 | GDP - Gestión Documental para Proveedores - EPE"
        : "2023 | GDP - Document Management for Suppliers - EPE",
      description: [
        isSpanish
          ? "He trabajado en el desarrollo de un incremento de software para el sistema web de EPE (Empresa Provincial de la Energía de Santa Fe). "
          : "I have worked on the development of a software upgrade for the EPE's (Santa Fe Provincial Energy Company) web system. ",
        isSpanish
          ? "El objetivo principal era lograr la gestión digital de la documentación relacionada con las compras de suministros realizadas por la empresa."
          : "The main objective was to achieve digital management of the documentation related to the purchases of supplies made by the company.",
      ],
      items: [
        isSpanish
          ? "Componentes reutilizables, e interfaces dinámicas con Vue."
          : "Reusable components, and dynamic interfaces with Vue.",
        isSpanish
          ? "APIs RESTful y Back End con Express.js y TypeScript"
          : "RESTful APIs and Back End with Express.js and TypeScript",
        isSpanish
          ? "Node.js para gestión de paquetes en el Back End, escalabilidad y eficiencia."
          : "Node.js for Back End package management, scalability and efficiency.",
        isSpanish
          ? "SQL y Oracle SQL para gestionar datos, consultas en la base de datos del sistema y corporativa, respectivamente."
          : "SQL and Oracle SQL to manage data, queries in the system and corporate database, respectively.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Vue",
        "Express",
        "Node",
        "MySQL",
        "Oracle",
      ],
    },
    {
      title: isSpanish
        ? "2022 - 2023 | Docente de Seguridad Informática | UTN FRSF"
        : "2022 - 2023 | Computer Security Teacher | UTN FRSF",
      description: [
        isSpanish
          ? "Durante mi período como docente de seguridad informática, impartí clases sobre diversos temas fundamentales en la materia, "
          + "con un enfoque práctico y aplicado. Utilicé herramientas y entornos de simulación para facilitar la comprensión de los conceptos, "
          + "promoviendo un aprendizaje activo entre los estudiantes."
          : "During my time as a cybersecurity instructor, I taught various fundamental topics in the field, with a practical and hands-on "
          + "approach. I used tools and simulation environments to facilitate the understanding of concepts, promoting active learning among students.",
      ],
      items: [
        isSpanish
          ? "Fundamentos de Seguridad: Conceptos básicos de seguridad informática y su importancia."
          : "Security Fundamentals: Basic concepts of cybersecurity and their importance.",
        isSpanish
          ? "Herramientas de Seguridad:Kali Linux, Nmap, Metasploitable, Metasploit, Meterpreter, Wireshark, Armitage"
          : "Security Tools: Kali Linux, Nmap, Metasploitable, Metasploit, Meterpreter, Wireshark, Armitage.",
        isSpanish
          ? "Virtualización y Redes: Uso de VMware y VPN para entornos seguros."
          : "Virtualization and Networks: Use of VMware and VPN for secure environments.",
        isSpanish
          ? "Cifrado y Seguridad en la Nube: Técnicas de cifrado y principios de seguridad en entornos de nube."
          : "Encryption and Cloud Security: Encryption techniques and security principles in cloud environments.",
        isSpanish
          ? "Temas Adicionales: Otros temas relevantes en el ámbito de la seguridad informática."
          : "Additional Topics: Other relevant topics in the field of cybersecurity.",
      ],
      technologies: [
        "Kali Linux",
        "Nmap",
        "Metasploit",
        "Wireshark",
        "VMware",
      ]
    },
    {
      title: isSpanish
        ? "2022 - 2023 | Laboratorio de Informática | UTN FRSF"
        : "2022 - 2023 | Computer Laboratory | UTN FRSF",
      description: [
        isSpanish
          ? "En mi rol como administradora del laboratorio de informática de la UTN-FRSF, fui responsable de asegurar el correcto funcionamiento "
          + "del servidor de dominio y de los equipos informáticos, además de proporcionar soporte técnico a profesores y estudiantes. Este puesto "
          + "me permitió desarrollar habilidades en gestión de infraestructuras y atención al cliente, garantizando un ambiente de trabajo eficiente "
          + "para todos los usuarios del laboratorio."
          : "In my role as the IT lab administrator at UTN-FRSF, I was responsible for ensuring the proper operation of the domain server and computer "
          + "equipment, as well as providing technical support to faculty and students. This position allowed me to develop skills in infrastructure "
          + "management and customer support, ensuring an efficient working environment for all lab users.",
      ],
      items: [
        isSpanish
          ? "Administración del servidor de dominio del laboratorio."
          : "Administration of the lab's domain server.",
        isSpanish
          ? "Instalación de software en las computadoras."
          : "Software installation on computers.",
        isSpanish
          ? "Mantenimiento del equipamiento informático y sus instalaciones."
          : "Maintenance of IT equipment and facilities.",
        isSpanish
          ? "Asistencia a profesores y estudiantes en la resolución de dudas y problemas de uso."
          : "Assisting faculty and students with troubleshooting and usage issues.",
      ],
    },
    // Note: Aca se agregan mas elementos
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
        <ExperienceCard
          key={index}
          title={experience.title}
          description={experience.description}
          items={experience.items}
          technologies={experience.technologies}
        />
        {index < experiences.length - 1 && <hr className="hr-gray" />}
          </React.Fragment>
      ))}
    </div>
  );
};

export default ExperiencesList;
