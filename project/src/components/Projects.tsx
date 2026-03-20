import React, { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        {project.featured && (
          <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
            <Star size={12} />
            Featured
          </div>
        )}
      </div>
      
      <p className="text-slate-400 leading-relaxed mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
        >
          <Github size={16} />
          <span className="font-mono text-sm">Code</span>
        </a>
        
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
          >
            <ExternalLink size={16} />
            <span className="font-mono text-sm">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of projects I've built using various technologies and frameworks.
            Each project represents a learning experience and problem-solving challenge.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-colors duration-200 ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Featured ({projects.filter(p => p.featured).length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-slate-400 mb-6">
              Check out my other repositories, contributions, and open source work.
            </p>
            <a
              href="https://github.com/ILYASSMOUMNI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;