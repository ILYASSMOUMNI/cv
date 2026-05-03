// ============================================================
// SKILLS DATA — extracted from GitHub repos + LinkedIn
// ============================================================

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
  icon: string; // emoji or icon identifier
  color: string; // tailwind color class
}

export type SkillCategory = "languages" | "backend" | "frontend" | "data" | "devops" | "tools";

export const skillCategories: Record<SkillCategory, { label: string; icon: string; color: string }> = {
  languages: { label: "Languages", icon: "python", color: "blue" },
  backend: { label: "Backend", icon: "springboot", color: "violet" },
  frontend: { label: "Frontend", icon: "react", color: "pink" },
  data: { label: "Data & AI", icon: "pandas", color: "emerald" },
  devops: { label: "DevOps", icon: "git", color: "orange" },
  tools: { label: "Tools", icon: "vscode", color: "slate" },
};

export const skills: Skill[] = [
  // Languages
  { name: "Python", level: 85, category: "languages", icon: "python", color: "yellow" },
  { name: "Java", level: 80, category: "languages", icon: "java", color: "orange" },
  { name: "JavaScript", level: 72, category: "languages", icon: "javascript", color: "yellow" },
  { name: "TypeScript", level: 65, category: "languages", icon: "typescript", color: "blue" },
  { name: "C#", level: 72, category: "languages", icon: "csharp", color: "violet" },
  { name: "C++", level: 68, category: "languages", icon: "cpp", color: "blue" },
  { name: "SQL", level: 82, category: "languages", icon: "sql", color: "blue" },
  { name: "PHP", level: 60, category: "languages", icon: "php", color: "indigo" },

  // Backend
  { name: "Spring Boot", level: 82, category: "backend", icon: "springboot", color: "green" },
  { name: "Flask", level: 70, category: "backend", icon: "flask", color: "slate" },
  { name: "REST APIs", level: 88, category: "backend", icon: "postman", color: "orange" },
  { name: "MySQL", level: 80, category: "backend", icon: "mysql", color: "blue" },
  { name: ".NET", level: 65, category: "backend", icon: "dotnet", color: "violet" },
  { name: "Maven", level: 75, category: "backend", icon: "maven", color: "red" },

  // Frontend
  { name: "React", level: 70, category: "frontend", icon: "react", color: "cyan" },
  { name: "HTML/CSS", level: 85, category: "frontend", icon: "html", color: "orange" },
  { name: "Tailwind CSS", level: 72, category: "frontend", icon: "tailwind", color: "cyan" },
  { name: "Bootstrap", level: 75, category: "frontend", icon: "bootstrap", color: "violet" },

  // Data / AI
  { name: "Pandas", level: 85, category: "data", icon: "pandas", color: "blue" },
  { name: "NumPy", level: 80, category: "data", icon: "numpy", color: "blue" },
  { name: "Matplotlib", level: 78, category: "data", icon: "matplotlib", color: "blue" },
  { name: "Scikit-learn", level: 70, category: "data", icon: "scikitlearn", color: "orange" },
  { name: "TensorFlow", level: 65, category: "data", icon: "tensorflow", color: "orange" },
  { name: "OpenCV", level: 65, category: "data", icon: "opencv", color: "green" },
  { name: "MetaTrader 5", level: 80, category: "data", icon: "metatrader", color: "cyan" },

  // DevOps
  { name: "Git", level: 88, category: "devops", icon: "git", color: "orange" },
  { name: "Linux/Unix", level: 75, category: "devops", icon: "linux", color: "yellow" },
  { name: "Azure", level: 65, category: "devops", icon: "azure", color: "blue" },
  { name: "Docker", level: 55, category: "devops", icon: "docker", color: "blue" },
  { name: "CI/CD", level: 62, category: "devops", icon: "cicd", color: "green" },

  // Tools
  { name: "VS Code", level: 92, category: "tools", icon: "vscode", color: "blue" },
  { name: "IntelliJ IDEA", level: 82, category: "tools", icon: "intellij", color: "violet" },
  { name: "Postman", level: 80, category: "tools", icon: "postman", color: "orange" },
  { name: "GitHub", level: 88, category: "tools", icon: "github", color: "slate" },
];

export const topSkills = skills.sort((a, b) => b.level - a.level).slice(0, 12);
