import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/cyberData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showTitle = true }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-16 relative border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>PORTFOLIO BUILDER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Cybersecurity <span className="text-gradient-purple">Projects</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Build production-grade cybersecurity software to showcase in technical interviews and GitHub repositories.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className="group relative rounded-xl p-6 glass-panel-interactive border border-slate-800 hover:border-purple-500/40 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-purple-500/40 transition">
                    <FolderGit2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded border ${
                    project.difficulty === 'Beginner' ? 'bg-emerald-950 text-emerald-400 border-emerald-500/30' :
                    project.difficulty === 'Intermediate' ? 'bg-blue-950 text-blue-400 border-blue-500/30' :
                    'bg-purple-950 text-purple-400 border-purple-500/30'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-purple-500/20 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-400 transition flex items-center space-x-1 cursor-pointer"
                >
                  <span>View Details & Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                </button>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-2 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-900 transition text-xs font-mono flex items-center space-x-1 cursor-pointer"
                  title="Open Source Code & AI Studio"
                >
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>View Source Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
