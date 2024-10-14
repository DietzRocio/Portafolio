import React from "react";
import EducationCard from "./EducationCard/EducationCard";
import useLanguage from "../hook/useLanguage";
import { title } from "process";

const CertificationsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const educations = [
    {
      title: 
        isSpanish
          ? "2024 - Actualidad | Azure AZ-204"
          : "2024 - Present | Azure AZ-204",
      description: [
        isSpanish
          ? "La certificación en Azure capacita a los candidatos para participar en todas las fases del desarrollo de soluciones en la nube, "
          + "abarcando desde la recopilación de requisitos hasta la implementación y supervisión."
          : "The Azure certification prepares candidates to participate in all phases of cloud solution development, covering everything "
          + "from requirements gathering to implementation and monitoring.",
      ],
      items: [
        isSpanish
          ? "Participación en todas las fases de desarrollo (requisitos, diseño, implementación, etc.)"
          : "Participation in all phases of development (requirements, design, implementation, etc.)",
        isSpanish
          ? "Experiencia en Azure SDK, almacenamiento de datos, API, y más."
          : "Experience with Azure SDK, data storage, APIs, and more.",
        isSpanish
          ? "Colaboración con arquitectos de soluciones, DBA, y otros profesionales."
          : "Collaboration with solution architects, DBAs, and other professionals.",
        isSpanish
          ? "Mínimo de dos años de experiencia en programación."
          : "Minimum of two years of programming experience.",
        isSpanish
          ? "Competencia en Azure CLI, PowerShell y herramientas relacionadas."
          : "Proficiency in Azure CLI, PowerShell, and related tools.",
      ],
      certificate: "",
      certificateLink: "",
    },
    {
      title: 
        isSpanish
          ? "2024 - Actualidad | AWS Entrena Argentina"
          : "2024 - Present | AWS Entrena Argentina",
      description: [
        isSpanish
          ? "AWS y organizaciones del sector público local se han unido para desarrollar la fuerza laboral en Argentina y fomentar la "
          + "transformación digital mediante la capacitación en tecnologías de nube."
          : "AWS and local public sector organizations have come together to develop the workforce in Argentina and promote digital "
          + "transformation through training in cloud technologies.",
      ],
      items: [
        isSpanish
          ? "Introducción a los servicios de AWS."
          : "Introduction to AWS services.",
        isSpanish
          ? "AWS EC2: Conceptos de computación en la nube y gestión de instancias."
          : "AWS EC2: Concepts of cloud computing and instance management.",
        isSpanish
          ? "AWS S3: Almacenamiento de objetos en la nube y gestión de datos."
          : "AWS S3: Cloud object storage and data management.",
        isSpanish
          ? "AWS RDS: Bases de datos en la nube y su implementación."
          : "AWS RDS: Cloud databases and their implementation.",
        isSpanish
          ? "AWS IAM: Gestión de identidades y acceso a recursos en la nube."
          : "AWS IAM: Identity and access management for cloud resources.",
        isSpanish
          ? "Arquitecturas escalables: Diseño y construcción de aplicaciones escalables en la nube."
          : "Scalable architectures: Design and construction of scalable applications in the cloud.",
      ],
      certificate: "",
      certificateLink: "",
    },
    {
      title:
        isSpanish
          ? "2022 | Quantum Information & Associated Technologies - Qx10 | Université de Technologie de Troyes (UTT), Francia"
          : "2022 | Quantum Information & Associated Technologies - Qx10 | Université de Technologie de Troyes (UTT), France",
      description: [
        isSpanish
          ? "La Université de Technologie de Troyes (UTT), Francia, ofrece el curso gratuito “Introducción a la información cuántica y tecnologías asociadas”"
          + "(QX01), que se puede realizar de manera virtual. Este curso proporciona una base fundamental para entender las nuevas tecnologías en comunicaciones,"
          + " cálculo y sensores."
          : "The Université de Technologie de Troyes (UTT), in France, offers the free course 'Introduction to Quantum Information and Associated Technologies' "
          + "(QX01), which can be completed virtually. This course provides a fundamental basis for understanding new technologies in communications, computing, and sensors.",
      ],
      items: [
        isSpanish
          ? "Desarrollo de la tecnología cuántica y sus aplicaciones prácticas."
          : "Development of quantum technology and its practical applications.",
        isSpanish
          ? "Fundamentos de la física cuántica: superposición cuántica, entrelazamiento cuántico y no clonación."
          : "Fundamentals of quantum physics: quantum superposition, quantum entanglement, and no-cloning.",
      ],
      certificate: "",
      certificateLink: "",
    },
    {
      title: 
        isSpanish
          ? "2020 | Curso de Programación en Java | GUGLER & Facultad de Ciencia y Tecnología, UADER"
          : "2020 | Java Programming Course | GUGLER & Faculty of Science and Technology, UADER",
      description: [
        isSpanish
          ? "Realicé un curso de Programación en Java orientado a personas con conocimientos básicos en informática. A lo largo del curso, "
          + "pude adquirir una formación integral en el desarrollo de aplicaciones de escritorio utilizando Java. Consta de 6 capítulos que "
          + "cubren tanto teoría como práctica. Desde los fundamentos del lenguaje hasta temas avanzados como la programación orientada a "
          + "objetos y la gestión de bases de datos, el curso me brindó herramientas clave para trabajar en el entorno de Java."
          : "I completed a Java Programming course aimed at individuals with basic computer knowledge. Throughout the course, I gained "
          + "comprehensive training in developing desktop applications using Java. It consists of 6 chapters covering both theory and "
          + "practice. From the basics of language to advanced topics such as object-oriented programming and database management, "
          + "the course provided me with key tools to work in the Java environment.",
      ],
      items: [
        isSpanish
          ? "Introducción a Java y conceptos básicos de la JVM."
          : "Introduction to Java and basic concepts of the JVM.",
        isSpanish
          ? "Programación orientada a objetos: clases, herencia, polimorfismo, interfaces."
          : "Object-oriented programming: classes, inheritance, polymorphism, interfaces.",
        isSpanish
          ? "Operadores, estructuras de control, manejo de strings y la API de Java."
          : "Operators, control structures, string handling, and the Java API.",
        isSpanish
          ? "Manejo de excepciones, colecciones y empaquetado de archivos JAR."
          : "Exception handling, collections, and packaging JAR files.",
        isSpanish
          ? "Conexiones con JDBC y desarrollo de interfaces gráficas (Swing y AWT)."
          : "JDBC connections and development of graphical user interfaces (Swing and AWT).",
        isSpanish
          ? "Programación orientada a objetos avanzada y patrones de diseño."
          : "Advanced object-oriented programming and design patterns.",
      ],
      certificate: "",
      certificateLink: "",
    },
    // Note: Aca se agregan mas elementos
  ];

  return (
    <div>
      {educations.map((Education, index) => (
        <React.Fragment key={index}>
          <EducationCard
            title={Education.title}
            description={Education.description}
            items={Education.items}
            certificate={Education.certificate}
            certificateLink={Education.certificateLink}
          />
          {index < educations.length - 1 && <hr className="hr-gray" />}
          </React.Fragment>
      ))}
    </div>
  );
};

export default CertificationsList;
