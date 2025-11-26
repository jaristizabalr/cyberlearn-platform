// lib/courses.ts

export type CourseLevel = "Básico" | "Intermedio" | "Avanzado";
export type CourseCategory =
  | "Fundamentos"
  | "Protección de datos"
  | "Phishing"
  | "Navegación responsable"
  | "Regulación"
  | "Institucional";

export type CourseStatus = "En progreso" | "No iniciado" | "Completado";

export type Course = {
  id: string;
  title: string;
  shortDescription: string;
  level: CourseLevel;
  category: CourseCategory;
  estimatedTime: string; // ej: "3h", "45 min"
  progress: number; // 0–100
  status: CourseStatus;
  lastAccess?: string; // ej: "Hace 2 días"
  nextLessonTitle?: string;
};

// Historial del usuario (Mis cursos)
export const courses: Course[] = [
  {
    id: "fundamentos-ciberseguridad",
    title: "Fundamentos de Ciberseguridad",
    shortDescription:
      "Conceptos básicos, tipos de amenazas y buenas prácticas iniciales para estudiantes y docentes.",
    level: "Básico",
    category: "Fundamentos",
    estimatedTime: "3h",
    progress: 65,
    status: "En progreso",
    lastAccess: "Hace 2 días",
    nextLessonTitle: "Buenas prácticas de contraseñas",
  },
  {
    id: "proteccion-datos-ley-1581",
    title: "Protección de Datos y Ley 1581 de 2012",
    shortDescription:
      "Lineamientos esenciales para el tratamiento de datos personales en instituciones educativas.",
    level: "Intermedio",
    category: "Protección de datos",
    estimatedTime: "4h",
    progress: 30,
    status: "En progreso",
    lastAccess: "Hoy",
    nextLessonTitle: "Principios de tratamiento de datos",
  },
  {
    id: "correos-sospechosos-phishing",
    title: "Correos sospechosos y Phishing",
    shortDescription:
      "Identificación de correos maliciosos, simulaciones y reportes seguros dentro de la institución.",
    level: "Básico",
    category: "Phishing",
    estimatedTime: "2h",
    progress: 10,
    status: "En progreso",
    lastAccess: "Hace 5 días",
    nextLessonTitle: "Identificación de enlaces maliciosos",
  },
  {
    id: "navegacion-responsable",
    title: "Navegación Responsable y Huella Digital",
    shortDescription:
      "Buenas prácticas de navegación, redes sociales y manejo de información sensible.",
    level: "Básico",
    category: "Navegación responsable",
    estimatedTime: "1h 30min",
    progress: 0,
    status: "No iniciado",
  },
  {
    id: "politicas-internas-seguridad",
    title: "Políticas internas de seguridad de la información",
    shortDescription:
      "Lineamientos internos, roles y responsabilidades para personal administrativo.",
    level: "Avanzado",
    category: "Institucional",
    estimatedTime: "2h 30min",
    progress: 100,
    status: "Completado",
    lastAccess: "Hace 10 días",
  },
];

// Biblioteca ampliada (más cursos / recursos, solo placeholders por ahora)
export type LibraryItemType =
  | "Curso corto"
  | "Ruta guiada"
  | "Simulación"
  | "Recurso descargable";

export type LibraryItem = {
  id: string;
  title: string;
  description: string;
  type: LibraryItemType;
  category: CourseCategory;
  level: CourseLevel;
  estimatedTime: string;
  tags: string[];
};

export const libraryItems: LibraryItem[] = [
  {
    id: "microcurso-contraseñas",
    title: "Microcurso: Contraseñas seguras en 15 minutos",
    description:
      "Pequeño curso práctico para aprender a crear y gestionar contraseñas robustas en contextos educativos.",
    type: "Curso corto",
    category: "Fundamentos",
    level: "Básico",
    estimatedTime: "15 min",
    tags: ["estudiantes", "docentes", "buenas prácticas"],
  },
  {
    id: "simulacion-phishing-basica",
    title: "Simulación guiada de phishing (nivel básico)",
    description:
      "Simulación paso a paso para reconocer correos sospechosos antes de hacer clic.",
    type: "Simulación",
    category: "Phishing",
    level: "Básico",
    estimatedTime: "30 min",
    tags: ["phishing", "correo institucional"],
  },
  {
    id: "ruta-proteccion-datos-docentes",
    title: "Ruta de protección de datos para docentes",
    description:
      "Ruta recomendada para que los docentes comprendan el tratamiento adecuado de datos personales de estudiantes.",
    type: "Ruta guiada",
    category: "Protección de datos",
    level: "Intermedio",
    estimatedTime: "3h",
    tags: ["Ley 1581", "docentes", "regulación"],
  },
  {
    id: "guia-navegacion-responsable-pdf",
    title: "Guía PDF: Navegación responsable en la institución",
    description:
      "Recurso descargable para sensibilizar sobre el uso responsable de internet en la comunidad educativa.",
    type: "Recurso descargable",
    category: "Navegación responsable",
    level: "Básico",
    estimatedTime: "20 min",
    tags: ["guía", "comunidad educativa"],
  },
  {
    id: "curso-ciberseguridad-admin",
    title: "Curso: Ciberseguridad para personal administrativo",
    description:
      "Buenas prácticas para manejo de información sensible, correos y sistemas de gestión institucional.",
    type: "Curso corto",
    category: "Institucional",
    level: "Intermedio",
    estimatedTime: "2h",
    tags: ["administrativos", "riesgos", "procedimientos"],
  },
  {
    id: "simulacion-incidentes",
    title: "Simulación: Respuesta ante incidente de seguridad",
    description:
      "Ejercicio guiado para practicar cómo debe responder la institución ante un posible incidente.",
    type: "Simulación",
    category: "Institucional",
    level: "Avanzado",
    estimatedTime: "1h",
    tags: ["ODS 16", "protocolos", "resiliencia"],
  },
  {
    id: "microcurso-redes-sociales",
    title: "Microcurso: Uso seguro de redes sociales",
    description:
      "Aspectos clave de privacidad y seguridad al usar redes sociales desde cuentas personales e institucionales.",
    type: "Curso corto",
    category: "Navegación responsable",
    level: "Básico",
    estimatedTime: "25 min",
    tags: ["huella digital", "estudiantes"],
  },
  {
    id: "ruta-ods16-seguridad-digital",
    title: "Ruta ODS 16: Seguridad digital en instituciones educativas",
    description:
      "Selección de contenidos que apoyan la construcción de instituciones más sólidas y seguras.",
    type: "Ruta guiada",
    category: "Regulación",
    level: "Intermedio",
    estimatedTime: "4h",
    tags: ["ODS 16", "políticas", "gestión"],
  },
];
