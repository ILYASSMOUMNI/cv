import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-mono font-bold text-white mb-2">
              Iliass Moumni
            </h3>
            <p className="text-slate-400 text-sm font-mono mb-4">
              Full-Stack Software Engineer
            </p>
            <p className="text-slate-500 text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white text-sm transition-colors duration-200 mx-auto"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white text-sm transition-colors duration-200 mx-auto"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white text-sm transition-colors duration-200 mx-auto"
              >
                Certificates
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white text-sm transition-colors duration-200 mx-auto"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://github.com/ILYASSMOUMNI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ilyass-moumni-251216229/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href="mailto:moumniilyas6@gmail.com"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200 font-mono"
            >
              moumniilyas6@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Iliass Moumni. Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200 font-mono"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;