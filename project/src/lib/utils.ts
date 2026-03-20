// Utility functions

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Language color mapping (GitHub-style)
export const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  Java: "#ed8b00",
  "C#": "#178600",
  "C++": "#f34b7d",
  C: "#555555",
  PHP: "#4f5d95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00add8",
  Rust: "#dea584",
  Swift: "#ffac45",
  Kotlin: "#7f52ff",
};

export function getLanguageColor(language: string): string {
  return languageColors[language] ?? "#64748b";
}

// Generate a contribution-like heatmap grid (52 weeks × 7 days)
export function generateHeatmapData(): number[][] {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      // Simulate realistic contribution patterns
      const rand = Math.random();
      if (rand < 0.3) week.push(0); // no contribution
      else if (rand < 0.55) week.push(1); // light
      else if (rand < 0.75) week.push(2); // moderate
      else if (rand < 0.9) week.push(3); // heavy
      else week.push(4); // very heavy
    }
    grid.push(week);
  }
  return grid;
}
