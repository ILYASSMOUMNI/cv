import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { profile } from "../../data/profile";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/[0.06]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="text-white font-bold font-mono">{profile.name}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xs">
              {profile.shortBio}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-slate-300 font-semibold text-sm uppercase tracking-widest mb-4 font-mono">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-500 hover:text-white font-mono text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact */}
          <div>
            <p className="text-slate-300 font-semibold text-sm uppercase tracking-widest mb-4 font-mono">
              Quick Contact
            </p>
            <div className="space-y-3">
              <p className="text-slate-500 text-sm font-mono">
                <span className="text-slate-600">→ </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  {profile.email}
                </a>
              </p>
              <p className="text-slate-500 text-sm font-mono">
                <span className="text-slate-600">→ </span>
                {profile.location}
              </p>
              <p className="text-slate-500 text-sm font-mono">
                <span className="text-slate-600">→ </span>
                <span className="text-emerald-400">Available for opportunities</span>
              </p>
            </div>

            {/* Download CV */}
            <a
              href={profile.resumeUrl}
              download="Ilyass_Moumni_Resume.pdf"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/[0.2] text-sm font-mono transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-slate-600 text-sm font-mono">
            © {new Date().getFullYear()} {profile.name} · Built with{" "}
            <span className="text-rose-500/70">♥</span> and React + Framer Motion
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
