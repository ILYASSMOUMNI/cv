import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ChevronDown, ChevronUp, Trophy } from "lucide-react";
import { experiences, certificates } from "../../data/experience";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";
import { GlassCard, GradientText, SectionHeader, Badge } from "../ui/GlassCard";
import { cn, formatDate } from "../../lib/utils";

// Timeline item component
const TimelineItem: React.FC<{
  experience: typeof experiences[0];
  index: number;
  isLast: boolean;
}> = ({ experience, index, isLast }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex gap-6">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-white/[0.15] to-transparent" />
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
        className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center text-lg shadow-lg`}
      >
        {experience.icon}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
        className="flex-1 pb-10"
      >
        <GlassCard className="p-5" hover>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge
                  variant={
                    experience.type === "education"
                      ? "primary"
                      : experience.type === "work"
                      ? "success"
                      : "warning"
                  }
                  size="sm"
                >
                  {experience.type === "education"
                    ? "Education"
                    : experience.type === "work"
                    ? "Project"
                    : "Certification"}
                </Badge>
                {experience.endYear === null && (
                  <Badge variant="glass" size="sm">
                    Present
                  </Badge>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight">
                {experience.title}
              </h3>
              <p className="text-indigo-400 font-mono text-sm mt-0.5">{experience.organization}</p>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono whitespace-nowrap mt-1">
              <Calendar size={12} />
              {experience.period}
            </div>
          </div>

          <AnimatePresence>
            {(expanded || experience.description.length < 120) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {experience.description}
                </p>
                {experience.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="glass" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {experience.description.length >= 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-400 font-mono mt-2 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp size={12} /> Less
                </>
              ) : (
                <>
                  <ChevronDown size={12} /> Read more
                </>
              )}
            </button>
          )}
        </GlassCard>
      </motion.div>
    </div>
  );
};

// Certificate card
const CertCard: React.FC<{ cert: typeof certificates[0] }> = ({ cert }) => (
  <GlassCard className="p-5 flex flex-col gap-3" gradient="from-indigo-500 to-violet-600" glowColor="indigo">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/[0.1] flex items-center justify-center text-xl flex-shrink-0">
        {cert.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold text-sm leading-tight">{cert.name}</h3>
        <p className="text-indigo-400 font-mono text-xs mt-0.5 truncate">{cert.organization}</p>
      </div>
      {cert.grade && (
        <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-xs font-mono border border-emerald-500/20 flex-shrink-0">
          <Trophy size={10} />
          {cert.grade}
        </div>
      )}
    </div>

    <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
      <Calendar size={11} />
      {formatDate(cert.date)}
    </div>

    <div className="flex flex-wrap gap-1.5">
      {cert.skills.slice(0, 3).map((skill) => (
        <Badge key={skill} variant="glass" size="sm">
          {skill}
        </Badge>
      ))}
      {cert.skills.length > 3 && (
        <Badge variant="glass" size="sm">+{cert.skills.length - 3}</Badge>
      )}
    </div>
  </GlassCard>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            tag="Experience"
            title={
              <>
                My{" "}
                <GradientText gradient="from-violet-400 to-purple-400">Journey</GradientText>
              </>
            }
            subtitle="Education, projects, and professional milestones that shaped my engineering mindset."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                  Timeline
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <div>
                {experiences.map((exp, i) => (
                  <TimelineItem
                    key={exp.id}
                    experience={exp}
                    index={i}
                    isLast={i === experiences.length - 1}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Certificates */}
          <div>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <Award size={16} className="text-indigo-400" />
                <span className="text-slate-300 font-semibold">Certifications</span>
              </div>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <CertCard cert={cert} />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
