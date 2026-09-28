import React, { useState } from 'react';
import { Cpu, Network, Terminal, Code, Shield, Globe, Zap, FileSearch, Activity, Cloud, Target, ArrowRight, Sparkles } from 'lucide-react';
import { ROADMAP_NODES } from '../data/cyberData';
import { RoadmapNode } from '../types';
import { RoadmapStageModal } from './RoadmapStageModal';

interface RoadmapSectionProps {
  onNavigate: (route: string) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onNavigate }) => {
  const [selectedStage, setSelectedStage] = useState<RoadmapNode | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Network': return <Network className="w-5 h-5 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-purple-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-rose-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'FileSearch': return <FileSearch className="w-5 h-5 text-blue-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'Target': return <Target className="w-5 h-5 text-red-400" />;
      default: return <Shield className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleStartStage = (stage: RoadmapNode) => {
    setToastMessage(`🚀 Launched Stage ${stage.level}: "${stage.name}"! Accessing Sandboxed Terminal Lab...`);
    setTimeout(() => {
      setToastMessage(null);
      onNavigate('/labs');
    }, 1600);
  };

  return (
    <section className="py-16 lg:py-24 relative border-b border-cyan-500/10 bg-slate-900/40">
      
      {/* Interactive Launch Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-cyan-950/95 border border-cyan-400 text-cyan-200 text-sm font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center space-x-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>CURRICULUM ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Cybersecurity <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Click any stage node below to view curriculum topics, competencies, and launch hands-on terminal labs.
          </p>
        </div>

        {/* Visual Horizontal/Grid Roadmap Timeline */}
        <div className="relative">
          {/* Connection line backdrop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-purple-500/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 relative z-10">
            {ROADMAP_NODES.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedStage(node)}
                className="group relative rounded-xl p-4 glass-panel-interactive border border-slate-800 hover:border-cyan-500/50 cursor-pointer flex flex-col justify-between text-left transition transform hover:-translate-y-1"
              >
                {/* Node Level indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40">
                    STAGE {node.level}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50 transition">
                    {getNodeIcon(node.icon)}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{node.category}</div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition mt-1">
                    {node.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-cyan-400">
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage Detail Popup Modal */}
        <RoadmapStageModal
          stage={selectedStage}
          onClose={() => setSelectedStage(null)}
          onStartStage={handleStartStage}
        />

        {/* View Full Interactive Roadmap.sh Style Tree CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/roadmap')}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition shadow-[0_0_25px_rgba(245,158,11,0.4)] cursor-pointer"
          >
            <span>Explore Full Interactive Roadmap.sh Visual Tree</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
