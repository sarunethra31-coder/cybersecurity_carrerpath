import React, { useState } from 'react';
import { X, Flag, Award, HelpCircle, CheckCircle2, AlertTriangle, Key } from 'lucide-react';
import { CTFChallenge } from '../types';

interface CTFFlagModalProps {
  challenge: CTFChallenge | null;
  onClose: () => void;
  onSolve: (challengeId: string, points: number) => void;
}

export const CTFFlagModal: React.FC<CTFFlagModalProps> = ({ challenge, onClose, onSolve }) => {
  if (!challenge) return null;

  const [flagInput, setFlagInput] = useState('');
  const [showHintIdx, setShowHintIdx] = useState<number | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flagInput.trim()) return;

    if (flagInput.trim() === challenge.flagAnswer) {
      setFeedbackMsg({ type: 'success', text: `🎉 Correct Flag! You earned +${challenge.points} CTF Points!` });
      onSolve(challenge.id, challenge.points);
    } else {
      setFeedbackMsg({ type: 'error', text: '❌ Invalid Flag signature. Check capitalization and formatting.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto text-left">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-amber-500/40 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 border-b border-amber-500/20 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
            <Flag className="w-3.5 h-3.5 mr-1 text-amber-400" />
            <span>{challenge.category}</span>
            <span>•</span>
            <span>+{challenge.points} PTS</span>
          </div>

          <h2 className="text-2xl font-extrabold text-white mb-1">
            {challenge.title}
          </h2>
          <div className="text-xs font-mono text-slate-400">
            Difficulty: <span className="text-amber-400">{challenge.difficulty}</span> • Solved by {challenge.solvesCount} hackers
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Challenge Description */}
          <div>
            <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Mission Briefing</h3>
            <p className="text-xs text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-mono">
              {challenge.description}
            </p>
          </div>

          {/* Hints Section */}
          {challenge.hints && challenge.hints.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Intelligence Hints</h3>
              <div className="space-y-2">
                {challenge.hints.map((hint, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden text-xs">
                    <button
                      onClick={() => setShowHintIdx(showHintIdx === idx ? null : idx)}
                      className="w-full p-3 text-left font-mono text-slate-300 hover:text-amber-400 flex items-center justify-between"
                    >
                      <span className="flex items-center">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-400 mr-2" />
                        Hint #{idx + 1}
                      </span>
                      <span>{showHintIdx === idx ? 'Hide' : 'Reveal'}</span>
                    </button>
                    {showHintIdx === idx && (
                      <div className="p-3 bg-amber-950/40 border-t border-amber-500/20 text-amber-300 font-mono text-[11px]">
                        💡 {hint}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Flag Submission Form */}
          <form onSubmit={handleSubmit} className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <label htmlFor="flag-input-field" className="flex items-center">
                <Key className="w-4 h-4 text-amber-400 mr-1.5" />
                Submit Flag ({challenge.flagFormat})
              </label>
            </div>

            <div className="flex space-x-2">
              <input
                id="flag-input-field"
                type="text"
                value={flagInput}
                onChange={(e) => setFlagInput(e.target.value)}
                placeholder="CYBERPATH{...}"
                className="flex-1 px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg font-bold text-xs text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition"
              >
                Submit
              </button>
            </div>

            {feedbackMsg && (
              <div className={`p-3 rounded-lg text-xs font-mono ${
                feedbackMsg.type === 'success'
                  ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
              }`}>
                {feedbackMsg.text}
              </div>
            )}
          </form>

        </div>

      </div>
    </div>
  );
};
