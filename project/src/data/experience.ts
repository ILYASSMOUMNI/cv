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
    title: "Software Engineering Degree",
    organization: "University — Big Data & AI Track",
    period: "2022 — Present",
    startYear: 2022,
    endYear: null,
    description:
      "Advanced studies in software engineering with a specialization in Big Data architectures, machine learning pipelines, and distributed systems. Curriculum spans algorithms, data structures, cloud computing, and applied AI.",
    technologies: ["Python", "Java", "Data Engineering", "Machine Learning", "Distributed Systems"],
    location: "Morocco",
    icon: "🎓",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    type: "work",
    title: "Full-Stack Developer (Academic Project)",
    organization: "E-Commerce Platform",
    period: "2023 — 2024",
    startYear: 2023,
    endYear: 2024,
    description:
      "Architected and delivered a production-grade e-commerce system using Java Spring Boot. Implemented JWT authentication, product catalog management, and RESTful APIs following clean architecture principles.",
    technologies: ["Java", "Spring Boot", "MySQL", "Maven", "REST API"],
    icon: "💼",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    type: "work",
    title: "Data Engineer / Quant Developer",
    organization: "Trading Journal System",
    period: "2024 — Present",
    startYear: 2024,
    endYear: null,
    description:
      "Designed and built a quantitative trading analytics platform in Python. Implemented real-time PnL tracking, risk metrics computation (Sharpe ratio, max drawdown), and trade performance visualization dashboards.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    icon: "📊",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    type: "work",
    title: "Systems Developer",
    organization: "Airport Management System",
    period: "2023",
    startYear: 2023,
    endYear: 2023,
    description:
      "Developed a comprehensive airport operations management system in C# with .NET. Focused on complex domain modeling, scheduling algorithms, and data persistence patterns.",
    technologies: ["C#", ".NET", "SQL Server", "OOP", "WinForms"],
    icon: "✈️",
    color: "from-slate-500 to-gray-600",
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
    name: "Introduction to Machine Learning",
    organization: "Coursera / Stanford Online",
    date: "2024-01-15",
    grade: "Distinction",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Neural Networks"],
    icon: "🤖",
  },
  {
    id: 2,
    name: "Java Programming & Software Engineering",
    organization: "Duke University / Coursera",
    date: "2023-08-20",
    grade: "Top 10%",
    skills: ["Java", "OOP", "Algorithms", "Data Structures"],
    icon: "☕",
  },
  {
    id: 3,
    name: "Python for Data Science & AI",
    organization: "IBM / Coursera",
    date: "2023-11-10",
    grade: "Distinction",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Jupyter"],
    icon: "🐍",
  },
  {
    id: 4,
    name: "DevOps & CI/CD Fundamentals",
    organization: "Linux Foundation",
    date: "2024-03-05",
    grade: "Pass",
    skills: ["CI/CD", "Git", "Linux", "Automation", "Docker basics"],
    icon: "🔧",
  },
  {
    id: 5,
    name: "Spring Boot & Microservices",
    organization: "Udemy Professional",
    date: "2024-06-18",
    grade: "Certificate",
    skills: ["Spring Boot", "Microservices", "REST API", "Spring Security"],
    icon: "🍃",
  },
];
