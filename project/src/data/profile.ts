// ============================================================
// PROFILE DATA — sourced from GitHub API + LinkedIn narrative
// GitHub: https://api.github.com/users/ILYASSMOUMNI
// ============================================================

export const profile = {
  name: "Ilyass Moumni",
  displayName: "Ilyass Moumni",
  title: "Full-Stack Engineer & AI Enthusiast",
  taglines: [
    "Building intelligent systems.",
    "Crafting data-driven solutions.",
    "Engineering the future of AI.",
    "Turning ideas into scalable products.",
  ],
  email: "moumniilyas6@gmail.com",
  location: "Morocco",
  timezone: "GMT+1",
  avatarUrl: "https://avatars.githubusercontent.com/u/115355716?v=4",
  githubUrl: "https://github.com/ILYASSMOUMNI",
  linkedinUrl: "https://www.linkedin.com/in/ilyass-moumni-251216229/",
  resumeUrl: "/resume.pdf",

  // AI-enhanced bio from LinkedIn narrative
  bio: `I'm a software engineer at the intersection of full-stack development,
  data engineering, and algorithmic trading systems. With a strong foundation
  in Java, Python, and modern web technologies, I build end-to-end solutions
  that are both technically rigorous and product-minded.

  My work spans enterprise backends with Spring Boot, intelligent data pipelines,
  and quantitative trading tools — always driven by clean architecture and an
  obsession with performance. I believe great software isn't just about code;
  it's about solving real problems at scale.`,

  shortBio:
    "Software engineer specializing in full-stack development, AI systems, and data engineering. I build things that matter.",

  // GitHub stats (fetched from API)
  github: {
    username: "ILYASSMOUMNI",
    publicRepos: 8,
    followers: 6,
    following: 16,
    joinedYear: 2022,
  },

  // Personality traits for personal brand
  traits: [
    { label: "Problem Solver", icon: "🧩" },
    { label: "System Thinker", icon: "🏗️" },
    { label: "Data Enthusiast", icon: "📊" },
    { label: "Clean Code Advocate", icon: "✨" },
  ],

  // Stats displayed in hero/dashboard
  stats: [
    { label: "Projects Built", value: "8+" },
    { label: "Technologies", value: "15+" },
    { label: "Years Coding", value: "3+" },
    { label: "Certifications", value: "5+" },
  ],
};

export type Profile = typeof profile;
