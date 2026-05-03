// ============================================================
// EXPERIENCE & EDUCATION DATA — from LinkedIn narrative
// ============================================================

export interface Experience {
  id: number;
  type: "work" | "education" | "certification";
  title: string;
  organization: string;
  period: string;
  startYear: number;
  endYear: number | null; // null = present
  description: string;
  technologies?: string[];
  location?: string;
  icon: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    type: "education",
    title: "Diplôme d'ingénieur — Génie Logiciel",
    organization: "École d'ingénierie & technologie — Big Data & IA",
    period: "2024 — 2027",
    startYear: 2024,
    endYear: null,
    description:
      "Engineering degree in Software Engineering with specialization in Big Data & AI. Key courses: algorithms, data structures, distributed systems, machine learning, data pipelines, cloud computing.",
    technologies: ["Python", "Java", "Machine Learning", "Distributed Systems", "Cloud Computing", "Data Pipelines"],
    location: "Morocco",
    icon: "🎓",
    color: "from-amber-700 to-stone-600",
  },
  {
    id: 2,
    type: "education",
    title: "DTS — Développement Digital, spécialisation Mobile",
    organization: "OFPPT — Office de la Formation Professionnelle",
    period: "2022 — 2024",
    startYear: 2022,
    endYear: 2024,
    description:
      "Specialized technician diploma in digital development with mobile specialization. Covered mobile app development, web development, databases, and algorithmics.",
    technologies: ["Mobile Development", "Web Development", "Databases", "Algorithmics"],
    location: "Morocco",
    icon: "🎓",
    color: "from-stone-500 to-stone-700",
  },
  {
    id: 3,
    type: "work",
    title: "Quant Developer — Algorithmic Trading Bot",
    organization: "QuantCoreAI (Personal Project)",
    period: "2025 — 2026",
    startYear: 2025,
    endYear: null,
    description:
      "Designed an automated trading bot on XAUUSD (M5) connected to MetaTrader 5 via official API. Implemented Engulfing Wick Touch strategies, EMA filters, pivot points, and session logic. Built dynamic SL/TP based on ATR with trailing stop and break-even automation. Developed a high-fidelity backtesting engine (M5 simulation) deployed on Azure VM for 24/7 execution.",
    technologies: ["Python", "MetaTrader5 API", "Pandas", "NumPy", "Azure"],
    icon: "📈",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 4,
    type: "work",
    title: "Data Analyst — Quantitative Analytics Platform",
    organization: "Trading Journal (Personal Project)",
    period: "2025 — Present",
    startYear: 2025,
    endYear: null,
    description:
      "Built a trading performance analytics engine computing Sharpe ratio, max drawdown, win rate, and cumulative PnL curves. Implemented data pipelines (CSV/API ingestion → cleaning → aggregation → visualization) over thousands of records. Constructed an interactive Matplotlib dashboard for near-real-time risk metric monitoring.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    icon: "📊",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    type: "work",
    title: "Computer Vision Developer — Hackathon",
    organization: "Ramadania (3-Day Hackathon)",
    period: "2025",
    startYear: 2025,
    endYear: 2025,
    description:
      "Built in 3 days: a real-time visual recognition app scanning Moroccan historical monuments and artisanal products. Implemented object detection model (TensorFlow/OpenCV) with dynamic contextual info display after detection.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Flask"],
    icon: "🏆",
    color: "from-violet-600 to-purple-700",
  },
];

export interface Certificate {
  id: number;
  name: string;
  organization: string;
  date: string;
  grade?: string;
  skills: string[];
  credentialUrl?: string;
  icon: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Python for Data Science, AI & Dev",
    organization: "IBM / Coursera",
    date: "2023-11-10",
    grade: "95.87%",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Jupyter"],
    icon: "🐍",
  },
  {
    id: 2,
    name: "Foundations: Data, Data, Everywhere",
    organization: "Google",
    date: "2023-09-01",
    grade: "98.87%",
    skills: ["Data Analysis", "Spreadsheets", "SQL", "Data Visualization"],
    icon: "📊",
  },
  {
    id: 3,
    name: "Introduction to Machine Learning",
    organization: "Stanford / Coursera",
    date: "2024-01-15",
    grade: "Distinction",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Neural Networks"],
    icon: "🤖",
  },
  {
    id: 4,
    name: "Java Programming & Software Engineering",
    organization: "Duke University / Coursera",
    date: "2023-08-20",
    grade: "Top 10%",
    skills: ["Java", "OOP", "Algorithms", "Data Structures"],
    icon: "☕",
  },
  {
    id: 5,
    name: "Process Data — Dirty to Clean",
    organization: "Google",
    date: "2023-10-05",
    grade: "92.70%",
    skills: ["Data Cleaning", "SQL", "Spreadsheets", "Data Integrity"],
    icon: "🧹",
  },
  {
    id: 6,
    name: "DevOps & CI/CD Fundamentals",
    organization: "Linux Foundation",
    date: "2024-03-05",
    grade: "Pass",
    skills: ["CI/CD", "Git", "Linux", "Automation", "Docker"],
    icon: "🔧",
  },
  {
    id: 7,
    name: "Spring Boot & Microservices",
    organization: "Udemy Professional",
    date: "2024-06-18",
    grade: "Certificate",
    skills: ["Spring Boot", "Microservices", "REST API", "Spring Security"],
    icon: "🍃",
  },
  {
    id: 8,
    name: "Analyze Data to Answer Questions",
    organization: "Google",
    date: "2024-02-10",
    grade: "90.69%",
    skills: ["Data Analysis", "SQL", "Visualization", "Reporting"],
    icon: "🔍",
  },
  {
    id: 9,
    name: "The Unix Workbench",
    organization: "Johns Hopkins University",
    date: "2024-04-20",
    grade: "94.07%",
    skills: ["Linux", "Unix", "Bash", "Shell Scripting"],
    icon: "🐧",
  },
  {
    id: 10,
    name: "Introduction to DevOps",
    organization: "IBM",
    date: "2024-05-15",
    grade: "97%",
    skills: ["DevOps", "CI/CD", "Agile", "Cloud"],
    icon: "⚙️",
  },
  {
    id: 11,
    name: "Software Eng. & Project Management",
    organization: "HKUST",
    date: "2023-12-01",
    grade: "93.33%",
    skills: ["Software Engineering", "Project Management", "Agile", "SDLC"],
    icon: "🏗️",
  },
  {
    id: 12,
    name: "Prepare Data for Exploration",
    organization: "Google",
    date: "2023-11-01",
    grade: "97.91%",
    skills: ["Data Exploration", "SQL", "BigQuery", "Metadata"],
    icon: "🗄️",
  },
  {
    id: 13,
    name: "Ask Questions — Data Decisions",
    organization: "Google",
    date: "2023-08-15",
    grade: "94.16%",
    skills: ["Analytical Thinking", "Data Questions", "Decision Making"],
    icon: "❓",
  },
  {
    id: 14,
    name: "La recherche documentaire",
    organization: "École Polytechnique",
    date: "2024-01-01",
    grade: "97%",
    skills: ["Research", "Documentation", "Scientific Writing"],
    icon: "📚",
  },
];
