import React from 'react';
import { Zap, ShieldCheck, Crosshair, Search, CloudLightning, Lock, ArrowRight } from 'lucide-react';
import { POPULAR_LEARNING_PATHS } from '../data/cyberData';

interface PopularLearningPathsProps {
  onNavigate: (route: string) => void;
}

export const PopularLearningPaths: React.FC<PopularLearningPathsProps> = ({ onNavigate }) => {
  const getPathIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Crosshair': return <Crosshair className="w-6 h-6 text-purple-400" />;
      case 'Search': return <Search className="w-6 h-6 text-emerald-400" />;
      case 'CloudLightning': return <CloudLightning className="w-6 h-6 text-amber-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-rose-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 relative border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>JOB-READY TRACKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Popular Learning <span className="text-gradient-cyan">Paths</span>
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Specialized learning trajectories aligned with enterprise role requirements and real-world security engineering tasks.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_LEARNING_PATHS.map((path) => (
            <div
              key={path.id}
              onClick={() => onNavigate('/courses')}
              className="group relative rounded-xl p-6 glass-panel-interactive border border-slate-800 hover:border-cyan-500/40 cursor-pointer flex flex-col justify-between text-left"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 group-hover:border-cyan-500/40 transition duration-300">
                    {getPathIcon(path.icon)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    {path.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition mb-2">
                  {path.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {path.description}
                </p>
              </div>

              {/* Progress & Modules Footer */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{path.modulesCount} Modules</span>
                  <span className="text-cyan-400 font-bold">{path.progress}% Completed</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>

                {/* Action button */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition">
                  <span>Start Path</span>
                  <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-400 flex items-center justify-center transition">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
