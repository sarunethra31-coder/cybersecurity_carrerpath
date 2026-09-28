import React, { useState } from 'react';
import { Wrench, Activity, Globe, Search, Zap, Key, Cpu, BarChart2, Code, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { SECURITY_TOOLS } from '../data/cyberData';
import { SecurityTool } from '../types';
import { ToolExplorerModal } from './ToolExplorerModal';

interface ToolsSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ onNavigate, showTitle = true }) => {
  const [selectedTool, setSelectedTool] = useState<SecurityTool | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Search': return <Search className="w-6 h-6 text-emerald-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Key': return <Key className="w-6 h-6 text-rose-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'BarChart2': return <BarChart2 className="w-6 h-6 text-cyan-400" />;
      case 'Code': return <Code className="w-6 h-6 text-indigo-400" />;
      default: return <Wrench className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredTools = SECURITY_TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 relative border-b border-cyan-500/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>SECURITY TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Popular Cybersecurity <span className="text-gradient-cyan">Tools</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Master industry-standard toolsets used by professional security researchers, SOC analysts, and penetration testers worldwide.
            </p>
          </div>
        )}

        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools (e.g. Wireshark, Nmap, Burp Suite)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 text-sm font-sans"
            />
          </div>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool)}
              className="group relative rounded-xl p-5 glass-panel-interactive border border-slate-800 hover:border-emerald-500/40 cursor-pointer flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/40 transition">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition">
                <span>Learn Tool & Commands</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Explorer */}
        <ToolExplorerModal
          tool={selectedTool}
          onClose={() => setSelectedTool(null)}
        />

      </div>
    </section>
  );
};
