// ============================================================
// PROFILE DATA — sourced from GitHub API + LinkedIn narrative
// GitHub: https://api.github.com/users/ILYASSMOUMNI
// ============================================================

export const profile = {
  name: "Iliass Moumni",
  displayName: "Iliass Moumni",
  title: "Data Analyst",
  taglines: [
    "Turning data into decisions.",
    "Building algorithmic trading systems.",
    "Crafting data-driven solutions.",
    "Engineering quantitative insights.",
  ],
  email: "moumniilyas6@gmail.com",
  phone: "+212 655-739-987",
  location: "Morocco",
  timezone: "GMT+1",
  avatarUrl: "https://avatars.githubusercontent.com/u/115355716?v=4",
  githubUrl: "https://github.com/ILYASSMOUMNI",
  linkedinUrl: "https://www.linkedin.com/in/ilyas-moumni-b481102a8/",
  resumeUrl: "/CV_Ilyass_Moumni.pdf",

  bio: `4th-year Software Engineering student (Big Data & AI specialization), passionate about quantitative analysis, data engineering, and financial markets.

  I build algorithmic trading systems, data pipelines, and performance analytics platforms — combining a solid algorithmic foundation with hands-on experience in Python, Pandas, and SQL.

  My work spans automated trading bots on MetaTrader 5, quantitative analytics dashboards, and computer vision applications — always driven by clean architecture and rigorous data thinking.`,

  shortBio:
    "Data Analyst & Software Engineering student specializing in quantitative analysis, algorithmic trading, and data engineering.",

  github: {
    username: "ILYASSMOUMNI",
    publicRepos: 8,
    followers: 6,
    following: 16,
    joinedYear: 2022,
  },

  traits: [
    { label: "Data Analyst", icon: "📈" },
    { label: "Data Engineer", icon: "🔧" },
    { label: "Algo Trader", icon: "💹" },
    { label: "Problem Solver", icon: "🧩" },
  ],

  stats: [
    { label: "Projects Built", value: "8+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "14+" },
    { label: "Years Coding", value: "3+" },
  ],
};

export type Profile = typeof profile;
