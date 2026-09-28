import React from 'react';
import { X, Wrench, Terminal, ExternalLink, CheckCircle, Code, Shield } from 'lucide-react';
import { SecurityTool } from '../types';

interface ToolExplorerModalProps {
  tool: SecurityTool | null;
  onClose: () => void;
}

export const ToolExplorerModal: React.FC<ToolExplorerModalProps> = ({ tool, onClose }) => {
  if (!tool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-950 border border-emerald-500/40 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden my-6 text-left">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 border-b border-emerald-500/20 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
            <span>{tool.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {tool.name}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Tool Architecture & Purpose</h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {tool.longDescription}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Key Features & Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tool.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Commands & Syntax */}
          <div>
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Essential CLI Commands & Syntax</h3>
            <div className="space-y-2 font-mono text-xs">
              {tool.commonCommands.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-emerald-500/20">
                  <div className="text-cyan-300 font-bold mb-1 selection:bg-cyan-500 selection:text-black">
                    $ {item.cmd}
                  </div>
                  <div className="text-slate-400 text-[11px] font-sans">{item.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Official documentation link */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Verified Open-Source & Enterprise Tool</span>
            <a
              href={tool.officialDocUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono bg-emerald-950 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 transition inline-flex items-center space-x-1.5"
            >
              <span>Official Documentation</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
