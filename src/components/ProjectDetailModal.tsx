import React, { useState } from 'react';
import { X, CheckCircle2, Code2, Copy, Check, Maximize2, Minimize2, Terminal, BookOpen, Bot, Sparkles, FileCode, Play } from 'lucide-react';
import { Project } from '../types';
import { CyberAiTutorChat } from './CyberAiTutorChat';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [viewMode, setViewMode] = useState<'overview' | 'studio'>('studio');
  const [activeCodeTab, setActiveCodeTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<'code' | 'procedure'>('code');
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  if (!project) return null;

  const codeFiles = project.codeSnippets || [];
  const procedureSteps = project.procedureGuide || [];

  const handleCopyCode = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleCopyCommand = (cmdText: string) => {
    navigator.clipboard.writeText(cmdText);
    setCopiedCommand(cmdText);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md overflow-y-auto text-left ${isFullScreen ? 'p-0' : 'p-3 sm:p-6'}`}>
      
      {/* Modal Container */}
      <div className={`relative bg-slate-950 border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)] flex flex-col transition-all duration-300 overflow-hidden ${
        isFullScreen ? 'w-screen h-screen rounded-none' : 'w-full max-w-6xl rounded-2xl max-h-[92vh] my-auto'
      }`}>
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-950 border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-[10px] font-mono font-bold text-purple-300 uppercase">
                  {project.difficulty} PORTFOLIO BUILD
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">• Production Ready Code</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white line-clamp-1">{project.title}</h2>
            </div>
          </div>

          {/* Mode Selector & Controls */}
          <div className="flex items-center space-x-2">
            
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition flex items-center space-x-1.5 cursor-pointer ${
                  viewMode === 'overview'
                    ? 'bg-purple-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setViewMode('studio')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition flex items-center space-x-1.5 cursor-pointer ${
                  viewMode === 'studio'
                    ? 'bg-purple-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Code & AI Studio</span>
              </button>
            </div>

            {/* Full Screen Toggle */}
            <button
              onClick={() => setIsFullScreen(prev => !prev)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-400 transition cursor-pointer"
              title={isFullScreen ? 'Exit Full Screen' : 'Expand Full Screen'}
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-400 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto">

          {/* VIEW MODE 1: PROJECT OVERVIEW */}
          {viewMode === 'overview' && (
            <div className="p-6 space-y-6 max-w-4xl mx-auto">
              
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/20 space-y-3">
                <p className="text-sm text-slate-200 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-purple-500/30 text-xs font-mono text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Blueprint */}
              <div>
                <h3 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">Architectural Blueprint</h3>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Key System Features */}
              <div>
                <h3 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">Key System Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA to open studio */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-purple-950/60 border border-purple-500/40 text-center space-y-3">
                <h4 className="text-base font-bold text-white">Explore Full Source Code & Interactive AI Studio</h4>
                <p className="text-xs text-slate-400">Step-by-step build procedures, downloadable code snippets, and real-time AI doubt solver.</p>
                <button
                  onClick={() => setViewMode('studio')}
                  className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono shadow-[0_0_20px_rgba(168,85,247,0.4)] transition inline-flex items-center space-x-2 cursor-pointer"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Open Interactive Code & AI Studio</span>
                </button>
              </div>

            </div>
          )}

          {/* VIEW MODE 2: INTERACTIVE CODE & AI STUDIO (DUAL PANEL) */}
          {viewMode === 'studio' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-[550px] divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              
              {/* LEFT PANEL: SOURCE CODE & BUILD PROCEDURE (6 COLS) */}
              <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col h-full bg-slate-950">
                
                {/* Sub Tab Switcher: Source Code vs Build Procedure */}
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveSubTab('code')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition flex items-center space-x-1.5 cursor-pointer ${
                        activeSubTab === 'code'
                          ? 'bg-purple-950 border border-purple-500/40 text-purple-300 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>Source Code Files</span>
                    </button>

                    <button
                      onClick={() => setActiveSubTab('procedure')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition flex items-center space-x-1.5 cursor-pointer ${
                        activeSubTab === 'procedure'
                          ? 'bg-purple-950 border border-purple-500/40 text-purple-300 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Build & Setup Procedure</span>
                    </button>
                  </div>
                </div>

                {/* SUB TAB 1: SOURCE CODE VIEWER */}
                {activeSubTab === 'code' && (
                  <div className="flex-1 flex flex-col space-y-3">
                    
                    {/* File Selector Tabs */}
                    {codeFiles.length > 0 ? (
                      <>
                        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                          {codeFiles.map((file, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveCodeTab(idx)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-mono shrink-0 transition flex items-center space-x-1.5 cursor-pointer ${
                                activeCodeTab === idx
                                  ? 'bg-purple-600 text-white font-bold shadow-md'
                                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                              }`}
                            >
                              <FileCode className="w-3.5 h-3.5" />
                              <span>{file.filename}</span>
                            </button>
                          ))}
                        </div>

                        {/* Active File Explanation */}
                        {codeFiles[activeCodeTab] && (
                          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono">
                            <span className="text-purple-400 font-bold">INFO: </span>
                            {codeFiles[activeCodeTab].explanation}
                          </div>
                        )}

                        {/* Code Container with Copy Button */}
                        {codeFiles[activeCodeTab] && (
                          <div className="relative flex-1 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden flex flex-col min-h-[300px]">
                            
                            <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                              <span className="text-[11px] font-mono text-purple-300">{codeFiles[activeCodeTab].filename}</span>
                              
                              <button
                                onClick={() => handleCopyCode(codeFiles[activeCodeTab].code, activeCodeTab)}
                                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-mono transition flex items-center space-x-1 cursor-pointer"
                              >
                                {copiedCodeIndex === activeCodeTab ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3 text-slate-400" />
                                    <span>Copy Code</span>
                                  </>
                                )}
                              </button>
                            </div>

                            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto overflow-y-auto leading-relaxed flex-1 select-text">
                              <code>{codeFiles[activeCodeTab].code}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="p-6 text-center text-slate-400 text-xs font-mono">
                        No code files loaded for this project build.
                      </div>
                    )}

                  </div>
                )}

                {/* SUB TAB 2: BUILD & SETUP PROCEDURE */}
                {activeSubTab === 'procedure' && (
                  <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                    {procedureSteps.length > 0 ? (
                      procedureSteps.map((step, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                          <h4 className="text-xs font-bold text-purple-300 font-mono flex items-center space-x-2">
                            <span className="p-1 rounded bg-purple-950 text-purple-400 border border-purple-500/30">
                              STEP {idx + 1}
                            </span>
                            <span>{step.stepTitle}</span>
                          </h4>

                          <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>

                          {step.commands && step.commands.length > 0 && (
                            <div className="space-y-1.5 pt-1">
                              <div className="text-[10px] font-mono text-slate-400 uppercase">Terminal Commands:</div>
                              {step.commands.map((cmd, cIdx) => (
                                <div key={cIdx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between font-mono text-xs text-cyan-300">
                                  <span className="select-text overflow-x-auto">{cmd}</span>
                                  <button
                                    onClick={() => handleCopyCommand(cmd)}
                                    className="p-1 text-slate-400 hover:text-white transition cursor-pointer"
                                    title="Copy Command"
                                  >
                                    {copiedCommand === cmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="space-y-3">
                        {project.stepByStepGuide.map((step, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                            <div className="font-bold text-cyan-300 font-mono mb-1">{step.step}</div>
                            <div className="text-slate-300">{step.details}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* RIGHT PANEL: EMBEDDED CYBER AI TUTOR (6 COLS) */}
              <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col h-full bg-slate-950/60 min-h-[500px]">
                <CyberAiTutorChat
                  topicTitle={project.title}
                  category="Portfolio Project"
                  aiPrompts={project.aiPrompts || [
                    "Explain the source code architecture for this project.",
                    "How to execute the build procedure step-by-step in Tanglish?",
                    "What are common setup errors and how to fix them?",
                    "Explain the key algorithms used in this security project."
                  ]}
                />
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
