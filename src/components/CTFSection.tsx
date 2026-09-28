import React, { useState } from 'react';
import { Flag, Trophy, Award, Key, Users, CheckCircle2, ArrowRight, Shield, Zap, Search } from 'lucide-react';
import { CTF_CHALLENGES, LEADERBOARD } from '../data/cyberData';
import { CTFChallenge } from '../types';
import { CTFFlagModal } from './CTFFlagModal';

interface CTFSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
}

export const CTFSection: React.FC<CTFSectionProps> = ({ onNavigate, showTitle = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeChallenge, setActiveChallenge] = useState<CTFChallenge | null>(null);
  const [solvedIds, setSolvedIds] = useState<string[]>([]);

  const CTF_CATEGORIES = [
    'All',
    'Web',
    'Cryptography',
    'Forensics',
    'OSINT',
    'Networking',
    'Reverse Engineering',
    'Linux',
    'Steganography'
  ];

  const filteredChallenges = CTF_CHALLENGES.filter(c => 
    selectedCategory === 'All' || c.category === selectedCategory
  );

  const totalPoints = solvedIds.reduce((sum, id) => {
    const found = CTF_CHALLENGES.find(c => c.id === id);
    return sum + (found ? found.points : 0);
  }, 0);

  const handleSolveChallenge = (challengeId: string, pts: number) => {
    if (!solvedIds.includes(challengeId)) {
      setSolvedIds(prev => [...prev, challengeId]);
    }
  };

  return (
    <section className="py-16 relative border-b border-cyan-500/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>COMPETITIVE CTF ARENA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Capture The <span className="text-gradient-gold">Flag</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Solve realistic security puzzles, extract hidden flags from vulnerable systems, and climb the hacker leaderboard.
            </p>
          </div>
        )}

        {/* User Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 text-left">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Your CTF Points</div>
            <div className="text-2xl font-bold font-mono text-amber-400 flex items-center mt-1">
              <Trophy className="w-5 h-5 mr-2 text-amber-400" /> {totalPoints} PTS
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 text-left">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Solved Challenges</div>
            <div className="text-2xl font-bold font-mono text-cyan-400 flex items-center mt-1">
              <CheckCircle2 className="w-5 h-5 mr-2 text-cyan-400" /> {solvedIds.length} / {CTF_CHALLENGES.length}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-left">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Global Rank</div>
            <div className="text-2xl font-bold font-mono text-purple-400 flex items-center mt-1">
              <Award className="w-5 h-5 mr-2 text-purple-400" /> #14
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-left">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Hacker League</div>
            <div className="text-2xl font-bold font-mono text-emerald-400 flex items-center mt-1">
              <Zap className="w-5 h-5 mr-2 text-emerald-400" /> Diamond
            </div>
          </div>
        </div>

        {/* Full Width Challenges Section */}
        <div className="space-y-6 text-left">
          
          {/* Category Filter Badges */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
            {CTF_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-mono transition ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black font-semibold shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Challenges - Full Width (1 -> 2 -> 3 Cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredChallenges.map(ctf => {
              const isSolved = solvedIds.includes(ctf.id);
              return (
                <div
                  key={ctf.id}
                  className={`group relative rounded-xl p-5 border transition cursor-pointer flex flex-col justify-between ${
                    isSolved
                      ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'glass-panel-interactive border-slate-800 hover:border-amber-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400">
                        {ctf.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">
                        +{ctf.points} PTS
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition mb-1">
                      {ctf.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {ctf.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">{ctf.solvesCount} Solves</span>
                    
                    <button
                      onClick={() => setActiveChallenge(ctf)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                        isSolved
                          ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-950 text-amber-300 border border-amber-500/40 hover:bg-amber-900'
                      }`}
                    >
                      {isSolved ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                          <span>Solved</span>
                        </>
                      ) : (
                        <>
                          <Flag className="w-3.5 h-3.5 text-amber-400 mr-1" />
                          <span>Start Challenge</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Flag Modal */}
        <CTFFlagModal
          challenge={activeChallenge}
          onClose={() => setActiveChallenge(null)}
          onSolve={handleSolveChallenge}
        />

      </div>
    </section>
  );
};
