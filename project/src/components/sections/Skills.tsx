import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories, SkillCategory } from "../../data/skills";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader } from "../ui/GlassCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Animated progress bar
const SkillBar: React.FC<{ name: string; level: number; color: string; icon: string; delay?: number }> = ({
  name,
  level,
  icon,
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm text-slate-300 font-mono font-medium">{name}</span>
        </div>
        <motion.span
          className="text-xs text-slate-500 font-mono"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
};

// Language bar sub-component (fixes hooks-in-map)
const LangBar: React.FC<{ lang: string; pct: number; color: string; index: number }> = ({
  lang, pct, color, index,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm text-slate-300 font-mono">{lang}</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">{pct}%</span>
      </div>
      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Tech icon pill (top skills display)
const TechPill: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
  <motion.div
    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.08] transition-all duration-200 cursor-default group"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="text-lg">{skill.icon}</span>
    <div>
      <p className="text-white text-xs font-mono font-medium">{skill.name}</p>
      <div className="flex items-center gap-1 mt-0.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full ${
              i < Math.round(skill.level / 20)
                ? "bg-indigo-400"
                : "bg-white/[0.1]"
            }`}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const categories: Array<{ key: SkillCategory | "all"; label: string; icon: string }> = [
    { key: "all", label: "All", icon: "✦" },
    ...Object.entries(skillCategories).map(([key, val]) => ({
      key: key as SkillCategory,
      label: val.label,
      icon: val.icon,
    })),
  ];

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="Technical Skills"
            title={
              <>
                My{" "}
                <GradientText gradient="from-blue-400 to-indigo-400">Tech Stack</GradientText>
              </>
            }
            subtitle="Skills extracted from GitHub projects and professional experience, with proficiency levels estimated from project complexity and usage frequency."
          />
        </AnimatedSection>

        {/* Category filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.15]"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills grid with animated bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Split filtered into two columns */}
            {[0, 1].map((col) => (
              <GlassCard key={col} className="p-6 space-y-5">
                {filtered
                  .filter((_, i) => i % 2 === col)
                  .map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color={skill.color}
                      delay={i * 0.08}
                    />
                  ))}
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech icon grid — top skills showcase */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">Core Technologies</p>
          </div>
          <StaggerContainer className="flex flex-wrap gap-3 justify-center">
            {skills
              .filter((s) => s.level >= 75)
              .map((skill) => (
                <StaggerItem key={skill.name}>
                  <TechPill skill={skill} />
                </StaggerItem>
              ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Language distribution bar */}
        <AnimatedSection delay={0.2} className="mt-16">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">GitHub Language Distribution</h3>
                <p className="text-slate-500 text-sm font-mono mt-0.5">From public repositories</p>
              </div>
            </div>

            {/* Language bars */}
            <div className="space-y-3">
              {[
                { lang: "Java", pct: 38, color: "#ed8b00" },
                { lang: "Python", pct: 25, color: "#3776ab" },
                { lang: "C#", pct: 13, color: "#178600" },
                { lang: "C++", pct: 12, color: "#f34b7d" },
                { lang: "HTML", pct: 7, color: "#e34c26" },
                { lang: "Shell", pct: 5, color: "#89e051" },
              ].map((item, i) => (
                <LangBar key={item.lang} lang={item.lang} pct={item.pct} color={item.color} index={i} />
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
