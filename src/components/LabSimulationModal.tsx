import React, { useState } from 'react';
import { X, Terminal, CheckCircle2, AlertCircle, HelpCircle, Shield, Play, RotateCcw, Award } from 'lucide-react';
import { Lab, UserProfile } from '../types';

interface LabSimulationModalProps {
  lab: Lab | null;
  onClose: () => void;
  onCompleteLab: (labId: string, points: number) => void;
  userProfile?: UserProfile;
}

export const LabSimulationModal: React.FC<LabSimulationModalProps> = ({ lab, onClose, onCompleteLab, userProfile }) => {
  if (!lab) return null;

  const promptUser = userProfile?.terminalUser || userProfile?.handle?.replace('@', '') || 'user';

  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [commandInput, setCommandInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>(
    lab.initialTerminalState || [
      `CYBERPATH Sandboxed Container [Lab: ${lab.title}]`,
      `Target: ${lab.targetSystem}`,
      'Type commands below or click hints for instructions.'
    ]
  );
  const [showHint, setShowHint] = useState(false);
  const [isLabCompleted, setIsLabCompleted] = useState(false);

  const currentStep = lab.steps ? lab.steps[currentStepIdx] : null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim();
    const newLogs = [...terminalHistory, `${promptUser}@cyberpath-sandbox:~$ ${cmd}`];

    if (cmd === 'clear') {
      setTerminalHistory([]);
      setCommandInput('');
      return;
    }

    if (cmd === 'help') {
      newLogs.push('Available commands: tshark, sudo, nmap, sqlmap, volatility, cat, ls, clear, help');
    } else if (currentStep && currentStep.expectedCommand && cmd.includes(currentStep.expectedCommand.split(' ')[0])) {
      newLogs.push('[SUCCESS] Command executed correctly. Step verified!');
      if (currentStepIdx + 1 < (lab.steps?.length || 0)) {
        setCurrentStepIdx(prev => prev + 1);
        setShowHint(false);
      } else {
        newLogs.push('🎉 LAB COMPLETE! All scenarios successfully solved.');
        newLogs.push(`Points Awarded: +${lab.points} CTF/Lab Points`);
        setIsLabCompleted(true);
        onCompleteLab(lab.id, lab.points);
      }
    } else {
      newLogs.push(`[EXEC] Executed: ${cmd}`);
      newLogs.push('[INFO] Step verification checked output.');
      if (currentStep?.expectedCommand) {
        newLogs.push(`[HINT] Try using syntax related to step instructions.`);
      }
    }

    setTerminalHistory(newLogs);
    setCommandInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden my-4 flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-cyan-500/20 text-left">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold text-white">{lab.title}</h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  SANDBOX ACTIVE
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">Target: {lab.targetSystem} • Points: +{lab.points}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Layout: Left Guide & Right Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Left Instructions Panel */}
          <div className="lg:col-span-5 p-5 bg-slate-900/40 border-r border-cyan-500/20 space-y-5 overflow-y-auto text-left">
            <div>
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Lab Scenario & Objective</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lab.description}
              </p>
            </div>

            {/* Skills Acquired */}
            <div>
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Skills Evaluated</h3>
              <div className="flex flex-wrap gap-1.5">
                {lab.skillsLearned.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/20 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps Progress */}
            {lab.steps && lab.steps.length > 0 && (
              <div>
                <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  Scenario Tasks ({currentStepIdx + 1} / {lab.steps.length})
                </h3>
                
                <div className="space-y-3">
                  {lab.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs transition ${
                        idx === currentStepIdx
                          ? 'bg-cyan-950/60 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                          : idx < currentStepIdx
                          ? 'bg-slate-900/60 border-emerald-500/40 text-slate-400'
                          : 'bg-slate-950/60 border-slate-800 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span className={idx === currentStepIdx ? 'text-cyan-300' : idx < currentStepIdx ? 'text-emerald-400' : 'text-slate-400'}>
                          {step.title}
                        </span>
                        {idx < currentStepIdx && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </div>
                      <p className="text-[11px] text-slate-300">{step.instruction}</p>

                      {idx === currentStepIdx && (
                        <div className="mt-2 pt-2 border-t border-cyan-500/20 flex items-center justify-between">
                          <button
                            onClick={() => setShowHint(!showHint)}
                            className="text-[10px] font-mono text-amber-400 flex items-center space-x-1 hover:underline"
                          >
                            <HelpCircle className="w-3 h-3" />
                            <span>{showHint ? 'Hide Hint' : 'Need Hint?'}</span>
                          </button>

                          {step.expectedCommand && (
                            <button
                              onClick={() => setCommandInput(step.expectedCommand || '')}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-800/50"
                            >
                              Auto-Fill Cmd
                            </button>
                          )}
                        </div>
                      )}

                      {idx === currentStepIdx && showHint && step.hint && (
                        <div className="mt-2 p-2 rounded bg-amber-950/60 border border-amber-500/40 text-[11px] text-amber-300 font-mono">
                          💡 Hint: {step.hint}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isLabCompleted && (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2">
                <Award className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                <div className="text-sm font-bold text-white">Lab Completed!</div>
                <div className="text-xs text-emerald-300 font-mono">+{lab.points} CTF / Skill Points added to profile</div>
              </div>
            )}
          </div>

          {/* Right Terminal Console */}
          <div className="lg:col-span-7 bg-slate-950 p-4 flex flex-col justify-between font-mono text-xs text-left overflow-hidden">
            
            {/* Terminal output display */}
            <div className="overflow-y-auto space-y-2 flex-1 pr-2 mb-3">
              <div className="text-slate-500 text-[10px] border-b border-slate-900 pb-1">
                CONNECTED TO SANDBOX SHELL (TTY1) — TYPE 'HELP' OR RUN COMMANDS
              </div>
              {terminalHistory.map((line, idx) => (
                <div key={idx} className={line.startsWith('[SUCCESS]') ? 'text-emerald-400 font-bold' : line.startsWith('🎉') ? 'text-amber-400 font-bold' : line.startsWith('[HINT]') ? 'text-amber-300' : 'text-slate-300'}>
                  {line}
                </div>
              ))}
            </div>

            {/* Command input prompt */}
            <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 pt-2 border-t border-slate-800">
              <span className="text-cyan-400 font-bold">{promptUser}@cyberpath:~$</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Enter command (e.g. tshark, sudo -l, help)..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder-slate-600"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 text-xs font-mono"
              >
                Run
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
