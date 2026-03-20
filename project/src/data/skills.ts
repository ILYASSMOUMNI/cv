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
  languages: { label: "Languages", icon: "💻", color: "blue" },
  backend: { label: "Backend", icon: "⚙️", color: "violet" },
  frontend: { label: "Frontend", icon: "🎨", color: "pink" },
  data: { label: "Data & AI", icon: "📊", color: "emerald" },
  devops: { label: "DevOps", icon: "🔧", color: "orange" },
  tools: { label: "Tools", icon: "🛠️", color: "slate" },
};

export const skills: Skill[] = [
  // Languages (from GitHub repos: Java, Python, C#, C++, HTML, Shell)
  { name: "Java", level: 88, category: "languages", icon: "☕", color: "orange" },
  { name: "Python", level: 82, category: "languages", icon: "🐍", color: "yellow" },
  { name: "C#", level: 72, category: "languages", icon: "#", color: "violet" },
  { name: "C++", level: 68, category: "languages", icon: "⚡", color: "blue" },
  { name: "JavaScript", level: 75, category: "languages", icon: "🌐", color: "yellow" },
  { name: "TypeScript", level: 65, category: "languages", icon: "🔷", color: "blue" },
  { name: "PHP", level: 65, category: "languages", icon: "🐘", color: "indigo" },

  // Backend
  { name: "Spring Boot", level: 85, category: "backend", icon: "🍃", color: "green" },
  { name: "REST APIs", level: 88, category: "backend", icon: "🔌", color: "blue" },
  { name: "MySQL", level: 80, category: "backend", icon: "🗄️", color: "blue" },
  { name: "SQL Server", level: 70, category: "backend", icon: "🏢", color: "red" },
  { name: "JPA/Hibernate", level: 75, category: "backend", icon: "🔗", color: "green" },
  { name: ".NET", level: 65, category: "backend", icon: "🔷", color: "violet" },

  // Frontend
  { name: "React", level: 70, category: "frontend", icon: "⚛️", color: "cyan" },
  { name: "HTML/CSS", level: 85, category: "frontend", icon: "🎨", color: "orange" },
  { name: "Tailwind CSS", level: 72, category: "frontend", icon: "💨", color: "cyan" },
  { name: "Bootstrap", level: 75, category: "frontend", icon: "🅱️", color: "violet" },

  // Data / AI
  { name: "Pandas", level: 80, category: "data", icon: "🐼", color: "blue" },
  { name: "NumPy", level: 75, category: "data", icon: "🔢", color: "blue" },
  { name: "Matplotlib", level: 72, category: "data", icon: "📈", color: "blue" },
  { name: "Data Analysis", level: 82, category: "data", icon: "🔍", color: "emerald" },
  { name: "Algorithmic Trading", level: 70, category: "data", icon: "📉", color: "green" },

  // DevOps
  { name: "Git", level: 85, category: "devops", icon: "📦", color: "orange" },
  { name: "Linux/Unix", level: 72, category: "devops", icon: "🐧", color: "yellow" },
  { name: "Maven", level: 75, category: "devops", icon: "⚙️", color: "red" },
  { name: "CI/CD", level: 60, category: "devops", icon: "🔄", color: "blue" },

  // Tools
  { name: "VS Code", level: 90, category: "tools", icon: "💻", color: "blue" },
  { name: "IntelliJ IDEA", level: 82, category: "tools", icon: "🧠", color: "violet" },
  { name: "Postman", level: 80, category: "tools", icon: "📮", color: "orange" },
  { name: "GitHub", level: 85, category: "tools", icon: "🐙", color: "slate" },
];

export const topSkills = skills.sort((a, b) => b.level - a.level).slice(0, 12);
