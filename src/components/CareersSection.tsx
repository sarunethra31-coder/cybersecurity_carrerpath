import React, { useState } from 'react';
import { Briefcase, DollarSign, TrendingUp, CheckCircle, BookOpen, FolderGit2, Award, ChevronRight, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { CAREER_PATHS } from '../data/cyberData';
import { CareerPath } from '../types';

interface CareersSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onNavigate, showTitle = true }) => {
  const [selectedCareer, setSelectedCareer] = useState<CareerPath>(CAREER_PATHS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPaths = CAREER_PATHS.filter(path =>
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-16 relative border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CAREER NAVIGATOR (10 SPECIALIZED TRACKS)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cybersecurity <span className="text-gradient-cyan">Career Paths</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Explore 10 industry-aligned career roadmaps with salary benchmarks, required technical competencies, recommended certifications, and phase-by-phase prep guides.
            </p>
          </div>
        )}

        {/* Career Grid & Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left List Selector (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            
            {/* Search Input & Counter */}
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter 10 career roles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500/50 font-mono"
                />
              </div>
              <span className="text-[10px] font-mono text-rose-400 bg-rose-950/80 px-2 py-1 rounded border border-rose-500/30 whitespace-nowrap">
                {filteredPaths.length} Roles
              </span>
            </div>

            {/* Scrollable Career List */}
            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
              {filteredPaths.map(path => (
                <button
                  key={path.id}
                  onClick={() => setSelectedCareer(path)}
                  className={`w-full p-3.5 rounded-xl text-left transition flex items-center justify-between border cursor-pointer ${
                    selectedCareer.id === path.id
                      ? 'bg-rose-950/70 border-rose-500/60 text-white shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <div className="pr-2 min-w-0">
                    <div className="text-xs font-bold truncate">{path.title}</div>
                    <div className="text-[11px] font-mono text-rose-400 mt-0.5">{path.avgSalary}</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition ${selectedCareer.id === path.id ? 'text-rose-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              ))}

              {filteredPaths.length === 0 && (
                <div className="p-6 text-center text-xs text-slate-500 font-mono bg-slate-900/40 rounded-xl border border-slate-800">
                  No matching career paths found.
                </div>
              )}
            </div>

          </div>

          {/* Right Career Roadmap & Skills Inspector (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-rose-500/30 space-y-6 flex flex-col justify-between">
            
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">{selectedCareer.title}</h3>
                <span className="px-3 py-1 rounded-full bg-rose-950 border border-rose-500/40 text-xs font-mono text-rose-300 font-bold">
                  Demand: {selectedCareer.demandLevel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedCareer.description}</p>
            </div>

            {/* Salary & Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Average Industry Salary</div>
                <div className="text-lg font-bold font-mono text-rose-400 mt-1">{selectedCareer.avgSalary}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Recommended Certifications</div>
                <div className="text-xs font-mono text-cyan-300 font-semibold mt-1 truncate" title={selectedCareer.certifications.join(', ')}>
                  {selectedCareer.certifications.join(', ')}
                </div>
              </div>
            </div>

            {/* Required Skills Matrix */}
            <div>
              <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-3">Required Technical Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCareer.requiredSkills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-rose-500/20 text-xs text-slate-200 flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-400 mr-1.5 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Beginner-to-Job Phase Roadmap */}
            <div>
              <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-3">Beginner-to-Job Preparation Roadmap</h4>
              <div className="space-y-3">
                {selectedCareer.roadmapSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                    <span className="px-2.5 py-1 rounded bg-rose-950 border border-rose-500/40 text-[11px] font-mono text-rose-300 font-bold shrink-0">
                      {step.phase}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">{step.title}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
