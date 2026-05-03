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
    slug: "quantcoreai",
    title: "QuantCoreAI",
    description:
      "Automated algorithmic trading bot on XAUUSD (M5) connected to MetaTrader 5 via official API, with technical strategies, dynamic risk management, and 24/7 Azure VM deployment.",
    longDescription:
      "Designed a fully automated trading bot on XAUUSD (M5) implementing technical strategies: Engulfing Wick Touch, EMA filters, pivot points, and session-based logic. Features dynamic SL/TP based on ATR, trailing stop, break-even automation, and percentage-based position sizing. Includes a high-fidelity backtesting engine (M5 simulation) deployed on Azure VM for continuous 24/7 execution.",
    technologies: ["Python", "MetaTrader5 API", "Pandas", "NumPy", "Azure"],
    category: "data",
    githubUrl: "https://github.com/ILYASSMOUMNI/quantcoreai",
    featured: true,
    highlight: "Algorithmic trading bot running 24/7 on Azure",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 2,
    slug: "trading-journal",
    title: "Quantitative Analytics Platform",
    description:
      "Trading analytics engine computing Sharpe ratio, max drawdown, win rate, and cumulative PnL curves — with interactive Matplotlib dashboards for real-time risk monitoring.",
    longDescription:
      "Built a quantitative trading performance engine with full data pipelines: CSV/API ingestion → cleaning → aggregation → visualization over thousands of records. Computes Sharpe ratio, max drawdown, win rate, and cumulative PnL. Includes an interactive Matplotlib dashboard for near-real-time risk metric tracking.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "CSV/API"],
    category: "data",
    githubUrl: "https://github.com/ILYASSMOUMNI/trading-journal",
    featured: true,
    highlight: "End-to-end quant analytics pipeline",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    slug: "ramadania",
    title: "Ramadania — Visual Recognition App",
    description:
      "Hackathon project (3 days): Computer vision app scanning Moroccan historical monuments and artisanal products in real time with contextual info display.",
    longDescription:
      "Built in 3 days during a hackathon: a real-time visual recognition application using computer vision to identify and classify Moroccan historical monuments and artisanal products via camera. Implemented an object detection model (TensorFlow/OpenCV) with dynamic display of contextual info (history, description, product origin) after detection.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Flask"],
    category: "data",
    githubUrl: "https://github.com/ILYASSMOUMNI/ramadania",
    featured: true,
    highlight: "Real-time CV object detection — built in 3 days",
    color: "from-violet-600 to-purple-700",
  },
  {
    id: 4,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "Production-grade e-commerce backend built with Java and Spring Boot — featuring full authentication, product catalog, cart, and order management.",
    longDescription:
      "Enterprise-level e-commerce application with layered architecture. Implements JWT authentication, role-based access control, RESTful APIs, and JPA/Hibernate ORM. Demonstrates deep understanding of Spring ecosystem and backend engineering.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Maven", "JPA"],
    category: "fullstack",
    githubUrl: "https://github.com/ILYASSMOUMNI/e-com",
    featured: false,
    highlight: "Enterprise-grade Spring Boot architecture",
    color: "from-amber-600 to-amber-800",
  },
  {
    id: 5,
    slug: "airport-management",
    title: "Airport Management System",
    description:
      "Desktop application for airport operations management — flights, gates, staff scheduling, and passenger processing built in C#.",
    longDescription:
      "A comprehensive airport management system featuring flight scheduling, gate assignment algorithms, staff management, and real-time status updates. Demonstrates object-oriented design patterns and systems thinking.",
    technologies: ["C#", ".NET", "WinForms", "SQL Server", "OOP"],
    category: "systems",
    githubUrl: "https://github.com/ILYASSMOUMNI/aeroport",
    featured: false,
    highlight: "Complex domain modeling & OOP",
    color: "from-amber-700 to-stone-700",
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
