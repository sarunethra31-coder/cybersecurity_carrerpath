import React, { useState } from 'react';
import { Terminal, Clock, Award, Play, Search, CheckCircle2 } from 'lucide-react';
import { LABS } from '../data/cyberData';
import { Lab, UserProfile } from '../types';
import { LabSimulationModal } from './LabSimulationModal';

interface LabsSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
  userProfile?: UserProfile;
  onCompleteLab?: (labId: string, points: number, skillsLearned: string[], labTitle: string) => void;
}

export const LabsSection: React.FC<LabsSectionProps> = ({ onNavigate, showTitle = true, userProfile, onCompleteLab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLab, setActiveLab] = useState<Lab | null>(null);

  const completedSet = new Set(userProfile?.completedLabIds || []);

  const LAB_CATEGORIES = [
    'All',
    'Networking Labs',
    'Linux Labs',
    'Web Security Labs',
    'Cryptography Labs',
    'Password Security',
    'OSINT',
    'Digital Forensics',
    'Malware Analysis',
    'SOC Labs',
    'Cloud Security'
  ];

  const filteredLabs = LABS.filter(lab => {
    const matchesSearch = lab.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lab.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lab.skillsLearned.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || lab.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 relative border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>HANDS-ON SANDBOX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cybersecurity <span className="text-gradient-cyan">Lab Arena</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Practice penetration testing, traffic decoders, memory analysis, and SIEM threat hunting in safe, authorized virtual labs.
            </p>
          </div>
        )}

        {/* Filter Bar */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-cyan-500/20 mb-8 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search labs by skill, tool, or objective..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 text-sm font-sans"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-left no-scrollbar">
            {LAB_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map(lab => {
            const isCompleted = completedSet.has(lab.id);

            return (
              <div
                key={lab.id}
                className={`group relative rounded-xl p-6 glass-panel-interactive border transition flex flex-col justify-between text-left ${
                  isCompleted ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-slate-800 hover:border-blue-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-blue-950/70 border border-blue-500/30 text-blue-400">
                      {lab.category}
                    </span>
                    
                    {isCompleted ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center space-x-1 font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>COMPLETED</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center font-bold">
                        <Award className="w-3 h-3 mr-1 text-amber-400" /> +{lab.points} PTS
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition mb-2">
                    {lab.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {lab.description}
                  </p>

                  {/* Target System */}
                  <div className="text-[11px] font-mono text-slate-400 mb-3 bg-slate-900 p-2 rounded border border-slate-800">
                    Target: <span className="text-cyan-300 font-semibold">{lab.targetSystem}</span>
                  </div>

                  {/* Skills Learned */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lab.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 text-blue-400 mr-1" /> {lab.estimatedTime}
                  </div>

                  <button
                    onClick={() => setActiveLab(lab)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                      isCompleted
                        ? 'text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/80'
                        : 'text-black bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isCompleted ? 'Re-Launch Lab' : 'Start Lab'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Sandbox Modal */}
        <LabSimulationModal
          lab={activeLab}
          userProfile={userProfile}
          onClose={() => setActiveLab(null)}
          onCompleteLab={(lId, points) => {
            if (activeLab && onCompleteLab) {
              onCompleteLab(lId, points, activeLab.skillsLearned, activeLab.title);
            }
          }}
        />

      </div>
    </section>
  );
};
