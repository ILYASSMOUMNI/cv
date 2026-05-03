import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Code2 } from "lucide-react";
import { profile } from "../../data/profile";
import { cn } from "../../lib/utils";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const current = sections.find(({ el }) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-dm-bg/80 backdrop-blur-xl border-b border-dm-border shadow-[0_1px_0_rgba(0,170,255,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dm-cyan to-dm-purple flex items-center justify-center shadow-[0_0_12px_rgba(0,170,255,0.4)]">
              <Code2 size={16} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-dm-text font-bold text-sm font-mono tracking-tight">
                {profile.name}
              </span>
              <p className="text-dm-text-dim text-xs font-mono leading-none mt-0.5">
                Data Analyst
              </p>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-mono text-sm transition-colors duration-200",
                  activeSection === item.id
                    ? "text-dm-cyan"
                    : "text-dm-text-dim hover:text-dm-text"
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-dm-cyan/10 border border-dm-cyan/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Social + Hire Me */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dm-text-dim hover:text-dm-cyan transition-colors duration-200 p-2 rounded-lg hover:bg-dm-cyan/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dm-text-dim hover:text-dm-cyan transition-colors duration-200 p-2 rounded-lg hover:bg-dm-cyan/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-1 px-4 py-2 rounded-lg bg-gradient-to-r from-dm-cyan to-dm-purple text-white text-sm font-medium font-mono hover:shadow-[0_0_20px_rgba(0,170,255,0.35)] transition-shadow duration-300"
            >
              Hire me
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-dm-text-dim hover:text-dm-text p-2 rounded-lg hover:bg-dm-card transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-dm-bg/95 backdrop-blur-xl border-t border-dm-border px-4 py-4">
              <nav className="flex flex-col gap-1 mb-4">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-xl font-mono text-sm transition-colors duration-200",
                      activeSection === item.id
                        ? "bg-dm-cyan/10 text-dm-cyan border border-dm-cyan/20"
                        : "text-dm-text-dim hover:text-dm-text hover:bg-dm-card"
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="flex items-center gap-3 pt-4 border-t border-dm-border">
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-dm-text-dim hover:text-dm-cyan p-2 rounded-lg hover:bg-dm-card transition-colors">
                  <Github size={20} />
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-dm-text-dim hover:text-dm-cyan p-2 rounded-lg hover:bg-dm-card transition-colors">
                  <Linkedin size={20} />
                </a>
                <button onClick={() => scrollTo("contact")} className="ml-auto px-4 py-2 rounded-lg bg-gradient-to-r from-dm-cyan to-dm-purple text-white text-sm font-medium font-mono">
                  Hire me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
