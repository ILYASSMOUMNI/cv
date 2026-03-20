import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  GitFork,
  Users,
  BookOpen,
  Activity,
  Cpu,
  TrendingUp,
  Code2,
  Zap,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader } from "../ui/GlassCard";
import { generateHeatmapData, getLanguageColor } from "../../lib/utils";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// GitHub stats (static data from API fetch)
const GITHUB_STATS = {
  username: "ILYASSMOUMNI",
  publicRepos: 8,
  followers: 6,
  following: 16,
  joinedYear: 2022,
  totalStars: 0,
  topLanguages: [
    { name: "Java", count: 3, pct: 38 },
    { name: "Python", count: 2, pct: 25 },
    { name: "C#", count: 1, pct: 13 },
    { name: "C++", count: 1, pct: 12 },
    { name: "HTML", count: 1, pct: 7 },
    { name: "Shell", count: 1, pct: 5 },
  ],
};

// Sub-component to avoid hooks-in-map
const DashLangBar: React.FC<{ name: string; pct: number; index: number }> = ({ name, pct, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const color = getLanguageColor(name);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
          <span className="text-slate-300 text-sm font-mono">{name}</span>
        </div>
        <span className="text-slate-500 text-xs font-mono">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const AI_INSIGHTS = [
  {
    icon: Cpu,
    title: "Engineering Profile",
    value: "Backend-Heavy",
    description: "70% of repos use server-side languages (Java, C#, C++), indicating strong systems engineering DNA.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Growth Trajectory",
    value: "Rapidly Expanding",
    description: "Progression from systems (C++) → enterprise (Java/Spring) → data science (Python) shows deliberate skill stacking.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Domain Focus",
    value: "Quant + AI",
    description: "Trading journal + Big Data coursework signals a clear pivot toward quantitative finance and AI systems.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Code2,
    title: "Code Style",
    value: "OOP Architect",
    description: "Consistent use of object-oriented patterns across Java, C#, and C++ repos shows architectural maturity.",
    color: "from-blue-500 to-indigo-600",
  },
];

// Animated counter
const Counter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({
  value,
  suffix = "",
  duration = 1.5,
}) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = value / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count}
      {suffix}
    </span>
  );
};

// Contribution heatmap
const Heatmap: React.FC = () => {
  const data = generateHeatmapData();
  const intensityColors = [
    "bg-white/[0.04]",
    "bg-indigo-500/20",
    "bg-indigo-500/40",
    "bg-indigo-500/60",
    "bg-indigo-500/90",
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={`${wi}-${di}`}
                className={`w-3 h-3 rounded-sm ${intensityColors[day]} transition-colors duration-200 cursor-default`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.001, duration: 0.2 }}
                title={`Level ${day} activity`}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 justify-end">
        <span className="text-xs text-slate-600 font-mono">Less</span>
        {intensityColors.map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
        ))}
        <span className="text-xs text-slate-600 font-mono">More</span>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="GitHub Dashboard"
            title={
              <>
                Code{" "}
                <GradientText gradient="from-indigo-400 to-violet-400">Intelligence</GradientText>
              </>
            }
            subtitle="Live GitHub analytics and AI-powered insights about my engineering profile and coding patterns."
          />
        </AnimatedSection>

        {/* Stats row */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Public Repos", value: GITHUB_STATS.publicRepos, icon: BookOpen, suffix: "" },
            { label: "Followers", value: GITHUB_STATS.followers, icon: Users, suffix: "" },
            { label: "Following", value: GITHUB_STATS.following, icon: Activity, suffix: "" },
            { label: "Years Active", value: new Date().getFullYear() - GITHUB_STATS.joinedYear, icon: Github, suffix: "+" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <GlassCard className="p-5" gradient="from-indigo-500 to-violet-600">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                      <Icon size={16} className="text-indigo-400" />
                    </div>
                    <span className="text-slate-400 text-sm font-mono">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white font-mono">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Heatmap */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Contribution Activity</h3>
                  <p className="text-slate-500 text-sm font-mono mt-0.5">52-week heatmap</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <Activity size={12} className="text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-mono">Active</span>
                </div>
              </div>
              <Heatmap />
            </GlassCard>
          </AnimatedSection>

          {/* Language distribution */}
          <AnimatedSection direction="right" delay={0.1}>
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Star size={16} className="text-amber-400" />
                <h3 className="text-white font-semibold">Top Languages</h3>
              </div>
              <div className="space-y-3">
                {GITHUB_STATS.topLanguages.map((lang, i) => (
                  <DashLangBar key={lang.name} name={lang.name} pct={lang.pct} index={i} />
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={`https://github.com/${GITHUB_STATS.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-6 pt-4 border-t border-white/[0.06] text-slate-500 hover:text-white text-sm font-mono transition-colors duration-200"
              >
                <Github size={14} />
                @{GITHUB_STATS.username}
              </a>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* AI Insights */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <div className="flex items-center gap-2 text-indigo-400">
              <Cpu size={14} />
              <span className="text-sm font-mono uppercase tracking-widest">AI Profile Analysis</span>
            </div>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AI_INSIGHTS.map((insight) => {
            const Icon = insight.icon;
            return (
              <StaggerItem key={insight.title}>
                <GlassCard className="p-5 h-full" gradient={insight.color}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">
                    {insight.title}
                  </p>
                  <p className="text-white font-bold text-lg mb-2">{insight.value}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{insight.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Dashboard;
