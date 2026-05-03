import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ArrowUpRight, Code2 } from "lucide-react";
import { projects, categoryLabels, type Project } from "../../data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader, Badge } from "../ui/GlassCard";
import { cn } from "../../lib/utils";
import FloatingShapes from "../ui/FloatingShapes";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <GlassCard className="group flex flex-col h-full overflow-hidden" gradient={project.color} glowColor={project.color.split("-")[1] as string} hover>
    <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-80 rounded-t-2xl`} />
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="glass" size="sm" className="font-mono">{categoryLabels[project.category]}</Badge>
            {project.featured && (
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-dm-cyan/10 border border-dm-cyan/30 text-dm-cyan text-xs font-mono">
                <Star size={10} fill="currentColor" /> Featured
              </div>
            )}
          </div>
          <h3 className="text-dm-text font-bold text-lg leading-tight group-hover:text-dm-cyan transition-colors duration-200">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2 ml-4 flex-shrink-0">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-dm-surface border border-dm-border flex items-center justify-center text-dm-text-dim hover:text-dm-cyan hover:border-dm-cyan/30 transition-all duration-200"
            onClick={(e) => e.stopPropagation()} aria-label="View on GitHub">
            <Github size={14} />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-dm-surface border border-dm-border flex items-center justify-center text-dm-text-dim hover:text-dm-cyan hover:border-dm-cyan/30 transition-all duration-200"
              onClick={(e) => e.stopPropagation()} aria-label="Live demo">
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
      <p className="text-dm-text-dim text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
      {project.highlight && (
        <div className="flex items-center gap-2 mb-4 text-xs text-dm-text-muted font-mono">
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
          {project.highlight}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-dm-border">
        {project.technologies.map((tech) => <Badge key={tech} variant="glass" size="sm">{tech}</Badge>)}
      </div>
    </div>
  </GlassCard>
);

type FilterKey = "all" | "featured" | Project["category"];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filters: Array<{ key: FilterKey; label: string }> = [
    { key: "all", label: "All Projects" }, { key: "featured", label: "Featured" },
    { key: "fullstack", label: "Full Stack" }, { key: "data", label: "Data & AI" },
    { key: "systems", label: "Systems" }, { key: "backend", label: "Backend" }, { key: "frontend", label: "Frontend" },
  ];

  const filtered = filter === "all" ? projects : filter === "featured" ? projects.filter((p) => p.featured) : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-dm-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-dm-cyan/5 rounded-full blur-[100px]" />
      </div>
      <FloatingShapes section="projects" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader tag="Projects" title={<>Built with <GradientText>purpose</GradientText></>} subtitle="A curated selection of projects from GitHub — each one tackling a real problem with production-quality engineering." />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <motion.button key={f.key} onClick={() => setFilter(f.key)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className={cn("flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200",
                  filter === f.key
                    ? "bg-gradient-to-r from-dm-cyan to-dm-purple text-white shadow-[0_0_16px_rgba(0,170,255,0.3)]"
                    : "bg-dm-card/60 border border-dm-border text-dm-text-dim hover:text-dm-text hover:border-dm-cyan/30")}>
                {f.key === "featured" && <Star size={12} fill={filter === f.key ? "white" : "none"} />}
                {f.key === "all" && <Code2 size={12} />}
                {f.label}
                {f.key === "all" && <span className={cn("text-xs px-1.5 py-0.5 rounded-md", filter === f.key ? "bg-white/20" : "bg-dm-surface")}>{projects.length}</span>}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {filtered.map((project) => <StaggerItem key={project.id}><ProjectCard project={project} /></StaggerItem>)}
            </StaggerContainer>
            {filtered.length === 0 && <div className="text-center py-20 text-dm-text-muted font-mono">No projects in this category yet.</div>}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.3} className="mt-16">
          <GlassCard className="p-8 text-center" gradient="from-dm-cyan to-dm-purple">
            <div className="w-16 h-16 rounded-2xl bg-dm-surface border border-dm-border flex items-center justify-center mx-auto mb-4">
              <Github size={28} className="text-dm-cyan" />
            </div>
            <h3 className="text-dm-text text-xl font-bold mb-2">See everything on GitHub</h3>
            <p className="text-dm-text-dim text-sm mb-6 max-w-md mx-auto">Explore all my repositories, contributions, and open-source work — including projects in progress.</p>
            <motion.a href="https://github.com/ILYASSMOUMNI" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,170,255,0.35)" }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-dm-cyan to-dm-purple text-white font-medium font-mono shadow-lg">
              <Github size={18} /> View GitHub Profile <ArrowUpRight size={16} />
            </motion.a>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
