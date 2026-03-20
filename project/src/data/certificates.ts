export interface Certificate {
  id: number;
  name: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
  skills: string[];
  grade: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Foundations: Data, Data, Everywhere",
    organization: "Google",
    date: "2024-01-15",
    grade: "98.87%",
    skills: ["Data Analysis", "Data Visualization", "Google Analytics", "Spreadsheets", "SQL"]
  },
  {
    id: 2,
    name: "Prepare Data for Exploration",
    organization: "Google",
    date: "2024-01-10",
    grade: "97.91%",
    skills: ["Data Collection", "Data Ethics", "Database Design", "Metadata", "Data Governance"]
  },
  {
    id: 3,
    name: "La recherche documentaire",
    organization: "École Polytechnique",
    date: "2023-12-20",
    grade: "97%",
    skills: ["Research Methods", "Information Literacy", "Academic Writing", "Documentation"]
  },
  {
    id: 4,
    name: "Introduction to DevOps",
    organization: "IBM",
    date: "2023-12-15",
    grade: "97%",
    skills: ["DevOps", "CI/CD", "Agile", "Cloud Computing", "Automation", "Git"]
  },
  {
    id: 5,
    name: "Python for Data Science, AI & Development",
    organization: "IBM",
    date: "2023-11-25",
    grade: "95.87%",
    skills: ["Python", "Data Science", "Machine Learning", "Pandas", "NumPy", "APIs"]
  },
  {
    id: 6,
    name: "The Unix Workbench",
    organization: "Johns Hopkins University",
    date: "2023-11-20",
    grade: "94.07%",
    skills: ["Unix", "Linux", "Bash", "Command Line", "Git", "Make"]
  },
  {
    id: 7,
    name: "Ask Questions to Make Data-Driven Decisions",
    organization: "Google",
    date: "2023-11-10",
    grade: "94.16%",
    skills: ["Data Analysis", "Problem Solving", "Decision Making", "Metrics", "KPIs"]
  },
  {
    id: 8,
    name: "Software Engineering: Software Design and Project Management",
    organization: "The Hong Kong University of Science and Technology",
    date: "2023-10-30",
    grade: "93.33%",
    skills: ["Software Design", "Project Management", "UML", "Agile", "Software Architecture"]
  },
  {
    id: 9,
    name: "Process Data from Dirty to Clean",
    organization: "Google",
    date: "2023-10-15",
    grade: "92.70%",
    skills: ["Data Cleaning", "Data Integrity", "SQL", "Spreadsheets", "Data Validation"]
  },
  {
    id: 10,
    name: "Analyze Data to Answer Questions",
    organization: "Google",
    date: "2023-10-05",
    grade: "90.69%",
    skills: ["Data Analysis", "Statistical Analysis", "Data Visualization", "R", "Tableau"]
  }
];