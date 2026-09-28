import React from 'react';
import { BookOpen, Terminal, Code2, Flag, TrendingUp, ChevronRight } from 'lucide-react';
import { LEARNING_FLOW_STEPS } from '../data/cyberData';

interface LearningFlowProps {
  onNavigate: (route: string) => void;
}

export const LearningFlow: React.FC<LearningFlowProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-blue-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'Flag': return <Flag className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default: return <BookOpen className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getRoute = (title: string) => {
    switch (title) {
      case 'LEARN': return '/courses';
      case 'PRACTICE': return '/labs';
      case 'BUILD': return '/projects';
      case 'TEST': return '/ctf';
      case 'TRACK': return '/dashboard';
      default: return '/courses';
    }
  };

  return (
    <section className="py-16 bg-slate-950/60 border-b border-cyan-500/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>5-STEP METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How You Will <span className="text-gradient-cyan">Master Cybersecurity</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            A structured, hands-on learning ecosystem designed to turn complete beginners into industry-ready cybersecurity professionals.
          </p>
        </div>

        {/* 5-Step Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {LEARNING_FLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => onNavigate(getRoute(step.title))}
              className={`group relative rounded-xl p-5 glass-panel-interactive border ${step.borderColor} cursor-pointer flex flex-col justify-between text-left`}
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition">
                  STEP {step.step}
                </span>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 group-hover:border-cyan-400/50 transition">
                  {getIcon(step.icon)}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition flex items-center justify-between">
                  <span>{step.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom active indicator line */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">
                <span>Explore Phase</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
