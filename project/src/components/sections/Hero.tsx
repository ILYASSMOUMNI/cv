import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/useTypewriter";
import { GradientText } from "../ui/GlassCard";

const Hero: React.FC = () => {
  const { displayText, isTyping } = useTypewriter({
    words: profile.taglines,
    typeSpeed: 70,
    deleteSpeed: 35,
    pauseDuration: 2200,
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-mono">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
                Ilyass{" "}
                <GradientText gradient="from-indigo-400 via-violet-400 to-purple-500">
                  Moumni
                </GradientText>
              </h1>
            </motion.div>

            {/* Typewriter tagline */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="text-xl sm:text-2xl text-slate-300 font-mono h-8 flex items-center justify-center lg:justify-start">
                <span>{displayText}</span>
                <span
                  className={`ml-0.5 inline-block w-0.5 h-6 bg-indigo-400 ${isTyping ? "animate-blink" : "opacity-0"}`}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Software engineer specializing in{" "}
              <span className="text-slate-200 font-medium">full-stack development</span>,{" "}
              <span className="text-slate-200 font-medium">data engineering</span>, and{" "}
              <span className="text-slate-200 font-medium">algorithmic trading systems</span>. I
              build products that are technically rigorous and product-minded.
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 justify-center lg:justify-start mb-8 text-slate-500"
            >
              <MapPin size={14} />
              <span className="text-sm font-mono">{profile.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium font-mono transition-all duration-300"
              >
                <Sparkles size={16} />
                Hire Me
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/[0.2] font-medium font-mono transition-all duration-300"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href={profile.resumeUrl}
                download="Ilyass_Moumni_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.08] bg-transparent text-slate-500 hover:text-slate-300 hover:border-white/[0.15] font-medium font-mono transition-all duration-300 text-sm"
              >
                <Download size={15} />
                Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 group"
              >
                <Github size={18} />
                <span className="text-sm font-mono group-hover:text-slate-300">GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 group"
              >
                <Linkedin size={18} />
                <span className="text-sm font-mono group-hover:text-slate-300">LinkedIn</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-mono text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {profile.email}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Profile + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-8"
          >
            {/* Profile image */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20 blur-xl" />

              {/* Rotating dashed ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/20 animate-spin-very-slow" />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/[0.1] shadow-2xl shadow-indigo-500/20">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<div class="w-full h-full bg-gradient-to-br from-indigo-500/30 to-violet-600/30 flex items-center justify-center text-6xl">👨‍💻</div>';
                  }}
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#030712]/90 border border-white/[0.1] backdrop-blur-sm shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white text-xs font-mono">Open to work</span>
                </div>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 text-center"
                >
                  <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
