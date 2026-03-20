import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume PDF in the public folder
    link.download = 'Iliass_Moumni_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Iliass Moumni
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-slate-300 font-mono mb-8">
              Full-Stack Software Engineer
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Passionate software engineer specializing in full-stack development with Java, Spring Boot, 
              and modern web technologies. I build scalable applications and have a strong foundation 
              in data science and DevOps practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Download size={20} />
                Download Resume
              </button>
              
              <button
                onClick={scrollToProjects}
                className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-slate-700">
                <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600">
                  <div className="text-6xl text-slate-500">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600">
                <span className="text-2xl">☕</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600">
                <span className="text-2xl">🐍</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-600">
                <span className="text-lg">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;