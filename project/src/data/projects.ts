// ============================================================
// PROJECTS DATA — sourced from GitHub API + enhanced narratives
// GitHub: https://api.github.com/users/ILYASSMOUMNI/repos
// ============================================================

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "backend" | "frontend" | "fullstack" | "data" | "systems" | "tool";
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlight?: string; // Key achievement / differentiator
  color: string; // accent color for card
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "trading-journal",
    title: "Trading Journal",
    description:
      "Algorithmic trading analysis tool built in Python for tracking, visualizing, and evaluating trading performance with real-time data feeds.",
    longDescription:
      "A quantitative trading journal that aggregates trade history, computes risk metrics (Sharpe ratio, max drawdown, win rate), and visualizes PnL curves. Built to support systematic strategy evaluation for algorithmic traders.",
    technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "CSV/API"],
    category: "data",
    githubUrl: "https://github.com/ILYASSMOUMNI/trading-journal",
    featured: true,
    highlight: "Quantitative finance + data analytics",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "Production-grade e-commerce backend built with Java and Spring Boot — featuring full authentication, product catalog, cart, and order management.",
    longDescription:
      "Enterprise-level e-commerce application with layered architecture. Implements JWT authentication, role-based access control, RESTful APIs, and JPA/Hibernate ORM. Demonstrates deep understanding of Spring ecosystem and backend engineering.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Maven", "JPA"],
    category: "fullstack",
    githubUrl: "https://github.com/ILYASSMOUMNI/e-com",
    featured: true,
    highlight: "Enterprise-grade Spring Boot architecture",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    slug: "airport-management",
    title: "Airport Management System",
    description:
      "Desktop application for airport operations management — flights, gates, staff scheduling, and passenger processing built in C#.",
    longDescription:
      "A comprehensive airport management system featuring flight scheduling, gate assignment algorithms, staff management, and real-time status updates. Demonstrates object-oriented design patterns and systems thinking.",
    technologies: ["C#", ".NET", "WinForms", "SQL Server", "OOP"],
    category: "systems",
    githubUrl: "https://github.com/ILYASSMOUMNI/aeroport",
    featured: true,
    highlight: "Complex domain modeling & OOP",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 4,
    slug: "weather-app",
    title: "Weather Application",
    description:
      "Real-time weather application with REST API integration, location-based forecasts, and responsive UI built in Java.",
    longDescription:
      "Weather app consuming third-party weather APIs with location detection, 7-day forecasts, and interactive weather maps. Focuses on API integration patterns and clean UI design.",
    technologies: ["Java", "REST API", "JSON", "Android/UI"],
    category: "frontend",
    githubUrl: "https://github.com/ILYASSMOUMNI/weather-app",
    featured: false,
    highlight: "API integration & real-time data",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: 5,
    slug: "recipe-management",
    title: "Recipe Management System",
    description:
      "Collaborative recipe platform with user authentication, CRUD operations, and AJAX-powered dynamic UI.",
    longDescription:
      "Full-stack recipe management application with PHP backend, MySQL database, and AJAX for seamless user interactions. Features user authentication, recipe CRUD, search/filter, and image uploads.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX"],
    category: "fullstack",
    githubUrl: "https://github.com/ILYASSMOUMNI/fluffy-octo-rotary-kitchen",
    featured: false,
    highlight: "AJAX-powered collaborative platform",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 6,
    slug: "sports-club",
    title: "Sports Club Manager",
    description:
      "C++ application for sports club member management, subscription tracking, and performance statistics.",
    longDescription:
      "Low-level systems application demonstrating strong C++ fundamentals — file I/O, data structures, memory management, and algorithmic problem solving for club management workflows.",
    technologies: ["C++", "File I/O", "Data Structures", "OOP"],
    category: "systems",
    githubUrl: "https://github.com/ILYASSMOUMNI/clubsportif",
    featured: false,
    highlight: "Systems programming & data structures",
    color: "from-rose-500 to-pink-600",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const categoryLabels: Record<Project["category"], string> = {
  backend: "Backend",
  frontend: "Frontend",
  fullstack: "Full Stack",
  data: "Data / ML",
  systems: "Systems",
  tool: "Dev Tool",
};
