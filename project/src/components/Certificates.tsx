import React from 'react';
import { ExternalLink, Calendar, Award, Trophy } from 'lucide-react';
import { certificates, Certificate } from '../data/certificates';

const Certificates: React.FC = () => {
  const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-slate-600">
            <Award className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              {certificate.name}
            </h3>
            <p className="text-slate-400 font-mono text-sm">
              {certificate.organization}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
          <Trophy size={14} />
          {certificate.grade}
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={14} className="text-slate-500" />
        <span className="text-slate-400 font-mono text-sm">
          {new Date(certificate.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {certificate.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional certifications from leading institutions and technology companies,
            demonstrating expertise in software engineering, data science, and DevOps.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Technical Skills Overview
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-500/30">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Data Science</h4>
              <p className="text-slate-400 text-sm font-mono">Python, R, SQL, Analytics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/30">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="text-white font-semibold mb-2">DevOps</h4>
              <p className="text-slate-400 text-sm font-mono">CI/CD, Git, Unix, Automation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-purple-500/30">
                <span className="text-2xl">☕</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Backend</h4>
              <p className="text-slate-400 text-sm font-mono">Java, Spring Boot, APIs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-orange-500/30">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Frontend</h4>
              <p className="text-slate-400 text-sm font-mono">HTML, CSS, JavaScript, PHP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;