import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/useTypewriter";
import { GradientText } from "../ui/GlassCard";
import FloatingShapes from "../ui/FloatingShapes";

const Hero: React.FC = () => {
  const { displayText, isTyping } = useTypewriter({ words: profile.taglines, typeSpeed: 70, deleteSpeed: 35, pauseDuration: 2200 });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any } } };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShapes section="hero" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(0,170,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.6) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 shadow-[0_0_12px_rgba(0,255,157,0.1)]">
                <span className="w-2 h-2 rounded-full bg-dm-emerald animate-pulse" />
                <span className="text-emerald-400 text-sm font-mono">Available for opportunities</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dm-text mb-3 tracking-tight">
                Ilyass{" "}
                <GradientText gradient="from-dm-cyan via-dm-purple to-dm-cyan">Moumni</GradientText>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="text-xl sm:text-2xl text-dm-text-dim font-mono h-8 flex items-center justify-center lg:justify-start">
                <span>{displayText}</span>
                <span className={`ml-0.5 inline-block w-0.5 h-6 bg-dm-cyan ${isTyping ? "animate-blink" : "opacity-0"}`} />
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-dm-text-dim leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Software engineer specializing in{" "}
              <span className="text-dm-text font-medium">full-stack development</span>,{" "}
              <span className="text-dm-text font-medium">data engineering</span>, and{" "}
              <span className="text-dm-text font-medium">algorithmic trading systems</span>. I build products that are technically rigorous and product-minded.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start mb-8 text-dm-text-muted">
              <MapPin size={14} />
              <span className="text-sm font-mono">{profile.location}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,170,255,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-dm-cyan to-dm-purple text-white font-medium font-mono transition-all duration-300"
              >
                <Sparkles size={16} /> Hire Me
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-dm-border bg-dm-card/50 text-dm-text-dim hover:text-dm-text hover:border-dm-cyan/30 font-medium font-mono transition-all duration-300"
              >
                View Projects <ArrowRight size={16} />
              </motion.button>
              <motion.a
                href={profile.resumeUrl}
                download="Ilyass_Moumni_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-dm-border/50 bg-transparent text-dm-text-muted hover:text-dm-text-dim hover:border-dm-border font-medium font-mono transition-all duration-300 text-sm"
              >
                <Download size={15} /> Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dm-text-dim hover:text-dm-cyan transition-colors duration-200 group">
                <Github size={18} /><span className="text-sm font-mono">GitHub</span>
              </a>
              <span className="text-dm-border">·</span>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dm-text-dim hover:text-dm-cyan transition-colors duration-200 group">
                <Linkedin size={18} /><span className="text-sm font-mono">LinkedIn</span>
              </a>
              <span className="text-dm-border">·</span>
              <a href={`mailto:${profile.email}`} className="text-sm font-mono text-dm-text-dim hover:text-dm-cyan transition-colors duration-200">{profile.email}</a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8, x: 60 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-dm-cyan/20 via-dm-purple/10 to-dm-cyan/20 blur-xl" />
              <div className="absolute -inset-3 rounded-full border border-dashed border-dm-cyan/30 animate-spin-very-slow" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-dm-border shadow-[0_0_40px_rgba(0,170,255,0.2)]">
                <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                    t.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-dm-cyan/20 to-dm-purple/20 flex items-center justify-center text-6xl">👨‍💻</div>';
                  }}
                />
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dm-card/90 border border-dm-border backdrop-blur-sm shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-dm-emerald animate-pulse" />
                  <span className="text-dm-text text-xs font-mono">Open to work</span>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {profile.stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                  className="rounded-xl bg-dm-card/60 border border-dm-border p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-dm-cyan font-mono">{stat.value}</div>
                  <div className="text-xs text-dm-text-dim font-mono mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-dm-text-muted font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-dm-cyan/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
