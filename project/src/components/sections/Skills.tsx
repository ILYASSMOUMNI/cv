import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories, SkillCategory } from "../../data/skills";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader } from "../ui/GlassCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import FloatingShapes from "../ui/FloatingShapes";
import { TechIcon } from "../ui/TechIcon";

const SkillBar: React.FC<{ name: string; level: number; color: string; icon: string; delay?: number }> = ({ name, level, icon, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <TechIcon name={icon} size={18} />
          <span className="text-sm text-dm-text font-mono font-medium">{name}</span>
        </div>
        <motion.span className="text-xs text-dm-text-muted font-mono" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: delay + 0.5 }}>{level}%</motion.span>
      </div>
      <div className="h-1.5 bg-dm-surface rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-dm-cyan to-dm-purple" initial={{ width: 0 }} animate={isVisible ? { width: `${level}%` } : { width: 0 }} transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }} />
      </div>
    </div>
  );
};

const LangBar: React.FC<{ lang: string; pct: number; color: string; index: number }> = ({ lang, pct, color, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm text-dm-text font-mono">{lang}</span>
        </div>
        <span className="text-xs text-dm-text-muted font-mono">{pct}%</span>
      </div>
      <div className="h-2 bg-dm-surface rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full" style={{ backgroundColor: color }} initial={{ width: 0 }} animate={isVisible ? { width: `${pct}%` } : { width: 0 }} transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }} />
      </div>
    </div>
  );
};

const TechPill: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
  <motion.div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-dm-card/60 border border-dm-border hover:border-dm-cyan/30 hover:bg-dm-card/80 transition-all duration-200 cursor-default group" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
    <TechIcon name={skill.icon} size={22} />
    <div>
      <p className="text-dm-text text-xs font-mono font-medium">{skill.name}</p>
      <div className="flex items-center gap-1 mt-0.5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-1 h-1 rounded-full ${i < Math.round(skill.level / 20) ? "bg-dm-cyan" : "bg-dm-border"}`} />
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const categories: Array<{ key: SkillCategory | "all"; label: string; icon: string; isEmoji?: boolean }> = [
    { key: "all", label: "All", icon: "✦", isEmoji: true },
    ...Object.entries(skillCategories).map(([key, val]) => ({ key: key as SkillCategory, label: val.label, icon: val.icon })),
  ];

  const filtered = activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-dm-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-dm-purple/5 rounded-full blur-[100px]" />
      </div>
      <FloatingShapes section="skills" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader tag="Technical Skills" title={<>My <GradientText>Tech Stack</GradientText></>} subtitle="Skills extracted from GitHub projects and professional experience, with proficiency levels estimated from project complexity and usage frequency." />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <motion.button key={cat.key} onClick={() => setActiveCategory(cat.key)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-dm-cyan to-dm-purple text-white shadow-[0_0_16px_rgba(0,170,255,0.3)]"
                    : "bg-dm-card/60 border border-dm-border text-dm-text-dim hover:text-dm-text hover:border-dm-cyan/30"
                }`}>
                {cat.isEmoji ? <span>{cat.icon}</span> : <TechIcon name={cat.icon} size={16} />}{cat.label}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[0, 1].map((col) => (
              <GlassCard key={col} className="p-6 space-y-5">
                {filtered.filter((_, i) => i % 2 === col).map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} color={skill.color} delay={i * 0.08} />
                ))}
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection>
          <div className="text-center mb-8">
            <p className="text-sm text-dm-text-muted font-mono uppercase tracking-widest">Core Technologies</p>
          </div>
          <StaggerContainer className="flex flex-wrap gap-3 justify-center">
            {skills.filter((s) => s.level >= 75).map((skill) => (
              <StaggerItem key={skill.name}><TechPill skill={skill} /></StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-dm-text font-semibold text-lg">GitHub Language Distribution</h3>
                <p className="text-dm-text-dim text-sm font-mono mt-0.5">From public repositories</p>
              </div>
            </div>
            <div className="space-y-3">
              {[{ lang: "Java", pct: 38, color: "#ed8b00" }, { lang: "Python", pct: 25, color: "#3776ab" }, { lang: "C#", pct: 13, color: "#178600" }, { lang: "C++", pct: 12, color: "#f34b7d" }, { lang: "HTML", pct: 7, color: "#e34c26" }, { lang: "Shell", pct: 5, color: "#89e051" }].map((item, i) => (
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
