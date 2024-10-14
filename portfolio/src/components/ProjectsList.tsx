import { useState } from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import useLanguage from "../hook/useLanguage";
import React from "react";

const ProjectsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const projects = [
    {
      title:
        isSpanish
          ? "Actualización de Portfolio con APIs REST en Node.js"
          : "Portfolio update with REST APIs in Node.js",
      description: [
        isSpanish
          ? "Realicé la actualización de mi portafolio personal integrando APIs REST para permitir la gestión dinámica de contenido. "
          + "Implementé la arquitectura backend en Node.js con un enfoque modular."
          : "I updated my personal portfolio by integrating REST APIs to enable dynamic content management. I implemented the "
          + "backend architecture in Node.js with a modular approach.",
      ],
      items: [
        isSpanish
          ? "Integración de APIs para gestionar proyectos y descripciones."
          : "Integration of APIs to manage projects and descriptions.",
        isSpanish
          ? "Implementación de endpoints para CRUD de contenido."
          : "Implementation of endpoints for CRUD operations on content.",
        isSpanish
          ? "Optimización de consultas y manejo eficiente de datos."
          : "Optimization of queries and efficient data handling.",
      ],
      technologies: [
        "Node",
        "Express",
        "MongoDB",
        "Postman",
      ],
    },
    {
      title: isSpanish
        ? "Sistema de Honey Pots con Azure y Cifrado ECC"
        : "Azure Honey Pot System with ECC Encryption",
      description: [
        isSpanish
          ? "Desarrollé un sistema de honey pots utilizando Azure para detectar actividades maliciosas, implementando cifrado de curvas elípticas (ECC) en C++"
          + " para proteger la información."
          : "I developed a honeypot system using Azure to detect malicious activities, implementing Elliptic Curve Cryptography (ECC) in C++ to protect information.",
      ],
      items: [
        isSpanish
          ? "Configuración de honeypots en la nube de Azure."
          : "Configuration of honeypots in the Azure cloud.",
        isSpanish
          ? "Implementación de ECC para asegurar las comunicaciones."
          : "Implementation of ECC to secure communications.",
        isSpanish
          ? "Monitorización de intentos de ataque y análisis de datos."
          : "Monitoring of attack attempts and data analysis.",
      ],
      technologies: [
        "Azure",
        "C++",
      ],
    },
    {
      title: isSpanish
        ? "Auditoría de Seguridad"
        : "Security Audit",
      description: [
        isSpanish
          ? "Proyecto de auditoría de seguridad automatizada en Python para detectar vulnerabilidades y mejorar la seguridad de aplicaciones web."
          : "Automated security audit project in Python to detect vulnerabilities and enhance the security of web applications.",
      ],
      items: [
        isSpanish
          ? "Desarrollo de scripts para detectar fallos comunes de seguridad."
          : "Development of scripts to detect common security flaws.",
        isSpanish
          ? "Análisis de logs y recomendaciones de seguridad."
          : "Log analysis and security recommendations.",
        isSpanish
          ? "Reportes automáticos de vulnerabilidades."
          : "Automated vulnerability reporting.",
      ],
      technologies: [
        "Python",
        "OWASP",
        "Nmap",
        "Wireshark",
      ],
    },
    {
      title: isSpanish
        ? "Escaneo de Vulnerabilidades"
        : "Vulnerability Scanning",
      description: [
        isSpanish
          ? "Desarrollé un sistema de escaneo de vulnerabilidades en Python, enfocado en detectar puertos abiertos, servicios y potenciales fallos de seguridad en redes."
          : "I developed a vulnerability scanning system in Python, focused on detecting open ports, services, and potential security flaws in networks.",
      ],
      items: [
        isSpanish
          ? "Creación de scripts de análisis de puertos y servicios."
          : "Creation of scripts for port and service analysis.",
        isSpanish
          ? "Identificación de vulnerabilidades en sistemas expuestos."
          : "Identification of vulnerabilities in exposed systems.",
        isSpanish
          ? "Generación de informes detallados."
          : "Generation of detailed reports.",
      ],
      technologies: [
        "Python",
        "Nmap",
        "Wireshark",
      ],
    },
    {
      title: isSpanish
        ? "Detector de Ataques de Fuerza Bruta en Python"
        : "Brute Force Attack Detector in Python",
      description: [
        isSpanish
          ? "Implementé un sistema para detectar y bloquear ataques de fuerza bruta en aplicaciones web mediante análisis de patrones de tráfico y autenticación."
          : "I implemented a system to detect and block brute force attacks on web applications by analyzing traffic patterns and authentication.",
      ],
      items: [
        isSpanish
          ? "Monitorización de intentos de inicio de sesión fallidos."
          : "Monitoring of failed login attempts.",
        isSpanish
          ? "Implementación de bloqueos temporales automáticos."
          : "Implementation of automatic temporary locks.",
        isSpanish
          ? "Generación de alertas en tiempo real."
          : "Generation of real-time alerts.",
      ],
      technologies: [
        "Python",
        "Flask",
        "SQLite",
      ],
    },
    {
      title: isSpanish
        ? "Sistema de Gestión de Clientes (Kunden-ABM) con COBOL"
        : "Customer Management System (Kunden-ABM) with COBOL",
      description: [
        isSpanish
          ? "Desarrollé un sistema de gestión de clientes en COBOL para automatizar los procesos de alta, baja y modificación de registros de clientes."
          : "I developed a customer management system in COBOL to automate the processes of adding, removing, and modifying customer records.",
      ],
      items: [
        isSpanish
          ? "Creación de módulos para ABM (Alta, Baja, Modificación) de clientes."
          : "Creation of modules for CRUD (Create, Read, Update, Delete) operations for customers.",
        isSpanish
          ? "Integración con sistemas Legacy."
          : "Integration with Legacy systems.",
        isSpanish
          ? "Optimización de consultas y manejo de registros grandes."
          : "Optimization of queries and handling of large records.",
      ],
      technologies: [
        "COBOL",
        "DB2",
        "CICS",
      ],
      imageSrc: [
        `${process.env.PUBLIC_URL}/assets/images/cobol/01.jpg`,
      ],
    },
    {
      title: isSpanish
        ? "API de Pokémon (proyecto de fin de curso - Desarrollo Frontend)"
        : "Pokémon API (final project - Frontend Development)",
      description: [
        isSpanish
          ? "Implementé una API para listar y buscar información sobre personajes de Pokémon, como parte del proyecto final de un curso de desarrollo frontend."
          : "I implemented an API to list and search for information about Pokémon characters as part of the final project for a frontend development course.",
      ],
      items: [
        isSpanish
          ? "Consumo de la API pública de Pokémon."
          : "Consumption of the public Pokémon API.",
        isSpanish
          ? "Despliegue de interfaces dinámicas con datos en tiempo real."
          : "Deployment of dynamic interfaces with real-time data.",
        isSpanish
          ? "Gestión de peticiones asíncronas."
          : "Management of asynchronous requests.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      title: isSpanish
        ? "Diseño de Página Web 'Digital Bank'"
        : "Website Design 'Digital Bank'",
      description: [
        isSpanish
          ? "Diseñé y desarrollé una página web informativa para un banco digital, enfocada en la presentación de productos y servicios financieros."
          : "I designed and developed an informative website for a digital bank, focused on showcasing financial products and services.",
      ],
      items: [
        isSpanish
          ? "Diseño moderno y minimalista."
          : "Modern and minimalist design.",
        isSpanish
          ? "Optimización para dispositivos móviles."
          : "Optimization for mobile devices.",
        isSpanish
          ? "Navegación intuitiva con animaciones ligeras."
          : "Intuitive navigation with light animations.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      imageSrc: [
        `${process.env.PUBLIC_URL}/assets/images/banca-digital/01.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/banca-digital/02.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/banca-digital/03.jpg`,
      ],
    },
    {
      title: isSpanish
        ? "Diseño de Página Web en Formato Galería"
        : "Gallery Format Website Design",
      description: [
        isSpanish
          ? "Creé un sitio web en formato galería para la presentación visual de proyectos, con un enfoque en la experiencia de usuario fluida y visualmente atractiva."
          : "I created a gallery format website for the visual presentation of projects, focusing on a smooth and visually appealing user experience.",
      ],
      items: [
        isSpanish
          ? "Implementación de un diseño de galería de imágenes."
          : "Implementation of an image gallery design.",
        isSpanish
          ? "Creación de efectos visuales y transiciones suaves."
          : "Creation of visual effects and smooth transitions.",
        isSpanish
          ? "Optimización para carga rápida de imágenes."
          : "Optimization for fast image loading.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
      ],
      imageSrc: [
        `${process.env.PUBLIC_URL}/assets/images/galeria/01.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/galeria/02.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/galeria/03.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/galeria/04.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/galeria/05.jpg`,
      ],
    },
    {
      title: isSpanish
        ? "CRUD en Java (Primera fase del Proyecto Final)"
        : "CRUD in Java (First Phase of the Final Project)",
      description: [
        isSpanish
          ? "Desarrollé un CRUD en Java como parte del proyecto final de un curso de desarrollo, implementando las operaciones básicas sobre una base de datos."
          : "I developed a CRUD application in Java as part of the final project for a development course, implementing basic operations on a database.",
      ],
      items: [
        isSpanish
          ? "Implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar)."
          : "Implementation of CRUD operations (Create, Read, Update, Delete).",
        isSpanish
          ? "Conexión a base de datos con JDBC."
          : "Database connection using JDBC.",
        isSpanish
          ? "Validación de formularios y manejo de errores."
          : "Form validation and error handling.",
      ],
      technologies: [
        "Java",
        "Hibernate",
        "MySQL",
      ],
    },
    // Note: Aca se agregan mas elementos
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            items={project.items}
            technologies={project.technologies}
            images={project.imageSrc}
          />
          {index < projects.length - 1 && <hr className="hr-gray" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectsList;
