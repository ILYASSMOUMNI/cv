import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";
import { profile } from "../../data/profile";

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-dm-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dm-cyan/30 to-transparent" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-dm-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dm-cyan to-dm-purple flex items-center justify-center shadow-[0_0_12px_rgba(0,170,255,0.35)]">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="text-dm-text font-bold font-mono">{profile.name}</span>
            </div>
            <p className="text-dm-text-dim text-sm leading-relaxed mb-4 max-w-xs">{profile.shortBio}</p>
            <div className="flex items-center gap-3">
              {[{ href: profile.githubUrl, icon: Github, label: "GitHub" }, { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" }, { href: `mailto:${profile.email}`, icon: Mail, label: "Email" }].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-dm-card border border-dm-border flex items-center justify-center text-dm-text-dim hover:text-dm-cyan hover:border-dm-cyan/30 hover:bg-dm-card/80 transition-all duration-200"
                  aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-dm-text font-semibold text-sm uppercase tracking-widest mb-4 font-mono">Navigation</p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-dm-text-dim hover:text-dm-cyan font-mono text-sm transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-dm-text font-semibold text-sm uppercase tracking-widest mb-4 font-mono">Quick Contact</p>
            <div className="space-y-3">
              <p className="text-dm-text-dim text-sm font-mono">
                <span className="text-dm-text-muted">→ </span>
                <a href={`mailto:${profile.email}`} className="hover:text-dm-cyan transition-colors duration-200">{profile.email}</a>
              </p>
              <p className="text-dm-text-dim text-sm font-mono"><span className="text-dm-text-muted">→ </span>{profile.location}</p>
              <p className="text-dm-text-dim text-sm font-mono"><span className="text-dm-text-muted">→ </span><span className="text-dm-emerald">Available for opportunities</span></p>
            </div>
            <a href={profile.resumeUrl} download="Ilyass_Moumni_Resume.pdf"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border border-dm-border bg-dm-card text-dm-text-dim hover:text-dm-cyan hover:border-dm-cyan/30 text-sm font-mono transition-all duration-200">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dm-border">
          <p className="text-dm-text-muted text-sm font-mono">
            © {new Date().getFullYear()} {profile.name} · Built with <span className="text-rose-400">♥</span> and React + Framer Motion
          </p>
          <motion.button onClick={scrollToTop} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg bg-dm-card border border-dm-border flex items-center justify-center text-dm-text-dim hover:text-dm-cyan hover:border-dm-cyan/30 transition-all duration-200"
            aria-label="Back to top">
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
