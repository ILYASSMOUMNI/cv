// ============================================================
// GITHUB API CLIENT
// Fetches live data from the GitHub public API.
// Falls back to mock data if rate-limited or offline.
// ============================================================

const GITHUB_USERNAME = "ILYASSMOUMNI";
const BASE_URL = "https://api.github.com";

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  fork: boolean;
}

export interface GitHubStats {
  user: GitHubUser;
  repos: GitHubRepo[];
  languages: Record<string, number>; // language -> repo count
  totalStars: number;
  topLanguage: string;
}

// Fetch GitHub user profile
async function fetchUser(): Promise<GitHubUser> {
  const res = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`, {
    headers: { Accept: "application/vnd.github.v3+json" },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

// Fetch all public repos
async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=50`,
    { headers: { Accept: "application/vnd.github.v3+json" } }
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const repos: GitHubRepo[] = await res.json();
  return repos.filter((r) => !r.fork);
}

// Aggregate language distribution
function aggregateLanguages(repos: GitHubRepo[]): Record<string, number> {
  const langs: Record<string, number> = {};
  repos.forEach((repo) => {
    if (repo.language) {
      langs[repo.language] = (langs[repo.language] || 0) + 1;
    }
  });
  return langs;
}

// Main fetch function with fallback
export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const [user, repos] = await Promise.all([fetchUser(), fetchRepos()]);
    const languages = aggregateLanguages(repos);
    const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const topLanguage =
      Object.entries(languages).sort(([, a], [, b]) => b - a)[0]?.[0] ?? "Java";

    return { user, repos, languages, totalStars, topLanguage };
  } catch (error) {
    console.warn("GitHub API unavailable, using mock data:", error);
    return getMockGitHubStats();
  }
}

// Mock data fallback (matches real API response structure)
function getMockGitHubStats(): GitHubStats {
  return {
    user: {
      login: "ILYASSMOUMNI",
      name: "ilyass moumni",
      bio: "web & mobile dev",
      avatar_url: "https://avatars.githubusercontent.com/u/115355716?v=4",
      html_url: "https://github.com/ILYASSMOUMNI",
      public_repos: 8,
      followers: 6,
      following: 16,
      created_at: "2022-10-08T13:05:40Z",
    },
    repos: [
      {
        id: 1,
        name: "trading-journal",
        full_name: "ILYASSMOUMNI/trading-journal",
        description: "Algorithmic trading journal and performance tracker",
        html_url: "https://github.com/ILYASSMOUMNI/trading-journal",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["python", "trading", "data-analysis"],
        updated_at: "2024-01-01T00:00:00Z",
        created_at: "2023-06-01T00:00:00Z",
        fork: false,
      },
      {
        id: 2,
        name: "e-com",
        full_name: "ILYASSMOUMNI/e-com",
        description: "e-commerce project with JAVA and Spring-boot",
        html_url: "https://github.com/ILYASSMOUMNI/e-com",
        homepage: null,
        language: "Java",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["java", "spring-boot", "e-commerce"],
        updated_at: "2024-01-01T00:00:00Z",
        created_at: "2023-01-01T00:00:00Z",
        fork: false,
      },
      {
        id: 3,
        name: "aeroport",
        full_name: "ILYASSMOUMNI/aeroport",
        description: "Airport management system",
        html_url: "https://github.com/ILYASSMOUMNI/aeroport",
        homepage: null,
        language: "C#",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["csharp", "dotnet", "management"],
        updated_at: "2024-01-01T00:00:00Z",
        created_at: "2023-01-01T00:00:00Z",
        fork: false,
      },
    ],
    languages: { Java: 3, Python: 2, "C#": 1, "C++": 1, HTML: 1 },
    totalStars: 0,
    topLanguage: "Java",
  };
}
