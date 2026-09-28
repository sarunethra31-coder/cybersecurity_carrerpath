import React from 'react';
import { X, Clock, BookOpen, Terminal, Sparkles, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { RoadmapNode } from '../types';

interface RoadmapStageModalProps {
  stage: RoadmapNode | null;
  onClose: () => void;
  onStartStage: (stage: RoadmapNode) => void;
}

export const RoadmapStageModal: React.FC<RoadmapStageModalProps> = ({ stage, onClose, onStartStage }) => {
  if (!stage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden my-8">
        
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-950 border-b border-cyan-500/20 text-left">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span>STAGE {stage.level}</span>
            <span>•</span>
            <span>{stage.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {stage.name}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            {stage.description}
          </p>

          <div className="flex items-center space-x-4 mt-4 text-xs font-mono text-slate-300">
            <span className="flex items-center px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400 mr-1.5" /> {stage.estimatedTime}
            </span>
            <span className="flex items-center px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
              <Terminal className="w-3.5 h-3.5 text-emerald-400 mr-1.5" /> Hands-On Terminal Lab
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Key Skills */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Target Competencies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {stage.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/20 text-xs text-slate-200 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum Breakdown */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Syllabus Breakdown</h3>
            <div className="space-y-2">
              {stage.topics.map((topic, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{topic}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">Module 0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="text-xs text-slate-400 font-mono">
              Status: <span className="text-emerald-400 font-semibold">Available for Access</span>
            </div>

            <button
              onClick={() => {
                onStartStage(stage);
                onClose();
              }}
              className="px-6 py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Start Stage Module & Sandboxed Lab</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
