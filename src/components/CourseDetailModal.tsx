import React, { useState } from 'react';
import { 
  X, BookOpen, Clock, Users, Star, CheckCircle2, Play, Sparkles, 
  ArrowLeft, Terminal, Copy, Check, Code2, ChevronRight, Shield, Maximize2, Minimize2
} from 'lucide-react';
import { Course } from '../types';
import { CyberAiTutorChat } from './CyberAiTutorChat';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onStartCourse: (courseId: string) => void;
  initialViewMode?: 'overview' | 'study_hub';
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ 
  course, 
  onClose, 
  onStartCourse,
  initialViewMode = 'overview'
}) => {
  const [viewMode, setViewMode] = useState<'overview' | 'study_hub'>(initialViewMode);
  const [selectedModuleIdx, setSelectedModuleIdx] = useState<number>(0);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  if (!course) return null;

  const activeModule = course.syllabus[selectedModuleIdx] || course.syllabus[0];

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 1500);
  };

  const handleLaunchStudyHub = (moduleIndex: number = 0) => {
    setSelectedModuleIdx(moduleIndex);
    setViewMode('study_hub');
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isFullScreen ? 'p-0' : 'p-2 sm:p-4'} bg-black/85 backdrop-blur-md overflow-hidden`}>
      
      {/* Modal Container */}
      <div className={`relative w-full ${
        isFullScreen 
          ? 'w-screen h-screen max-w-none max-h-none rounded-none border-0' 
          : viewMode === 'study_hub' 
            ? 'max-w-6xl h-[94vh] max-h-[94vh] rounded-2xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)]' 
            : 'max-w-3xl max-h-[92vh] rounded-2xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)]'
      } bg-slate-950 overflow-hidden transition-all duration-300 flex flex-col my-auto`}>
        
        {/* ======================================================================== */}
        {/* OVERVIEW MODE                                                             */}
        {/* ======================================================================== */}
        {viewMode === 'overview' && (
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-950 border-b border-cyan-500/20 text-left shrink-0">
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer"
                  title={isFullScreen ? "Exit Fullscreen" : "Full Screen Mode"}
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
                <span>{course.badge}</span>
                <span>•</span>
                <span>{course.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {course.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-6 text-xs font-mono text-slate-300">
                <span className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 mr-1" /> {course.duration}
                </span>
                <span className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400 mr-1" /> {course.lessonsCount} Lessons
                </span>
                <span className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  <Users className="w-3.5 h-3.5 text-purple-400 mr-1" /> {course.studentsCount.toLocaleString()} Enrolled
                </span>
                <span className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" /> {course.rating} / 5.0
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-left flex-1">
              
              {/* Skills Covered */}
              <div>
                <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Skills You Will Master</h3>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/20 text-xs text-slate-200 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Syllabus Modules */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Course Curriculum</h3>
                  <span className="text-[10px] text-slate-400 font-mono">Click module to open study guide</span>
                </div>
                <div className="space-y-3">
                  {course.syllabus.map((module, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleLaunchStudyHub(idx)}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition cursor-pointer group"
                    >
                      <div className="flex items-center justify-between text-sm font-bold text-white mb-2">
                        <span className="group-hover:text-cyan-300 transition flex items-center">
                          <ChevronRight className="w-4 h-4 text-cyan-400 mr-1 transform group-hover:translate-x-1 transition" />
                          {module.title}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{module.duration}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300 pl-6 list-disc marker:text-cyan-400">
                        {module.topics.map((topic, tIdx) => (
                          <li key={tIdx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-mono">Difficulty: <span className="text-cyan-400 font-semibold">{course.difficulty}</span></div>
                  <div className="text-xs text-slate-400 font-mono">100% Free & Open Access</div>
                </div>
                
                <button
                  onClick={() => handleLaunchStudyHub(0)}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 hover:from-cyan-300 hover:to-blue-400 transition shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center space-x-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{course.progress && course.progress > 0 ? 'Continue Course' : 'Start Course Now'}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================================== */}
        {/* STUDY HUB & CHATGPT/GEMINI AI TUTOR MODE - Interactive Deep-Dive         */}
        {/* ======================================================================== */}
        {viewMode === 'study_hub' && (
          <div className="flex flex-col h-full overflow-hidden text-left min-h-0">
            
            {/* Header Navigation Bar */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setViewMode('overview')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition text-xs font-mono flex items-center space-x-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </button>
                <div className="h-4 w-px bg-slate-800 hidden sm:block" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1 flex items-center">
                    <Shield className="w-4 h-4 text-cyan-400 mr-1.5 shrink-0" />
                    {course.title}
                  </h3>
                  <div className="text-[10px] text-cyan-400 font-mono">
                    Module {selectedModuleIdx + 1} of {course.syllabus.length}: {activeModule.title}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    onStartCourse(course.id);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition shadow-[0_0_15px_rgba(16,185,129,0.3)] hidden sm:flex items-center space-x-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Lab</span>
                </button>

                {/* Full Screen Toggle Button */}
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer"
                  title={isFullScreen ? "Exit Fullscreen" : "Expand Full Screen"}
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Module Selector Tab Ribbon */}
            <div className="bg-slate-900/90 border-b border-slate-800 p-2 overflow-x-auto flex items-center space-x-2 shrink-0 no-scrollbar">
              {course.syllabus.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedModuleIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition flex items-center space-x-2 cursor-pointer ${
                    selectedModuleIdx === idx
                      ? 'bg-cyan-950 border border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono font-bold ${
                    selectedModuleIdx === idx ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{mod.title.replace(/^Module \d+:\s*/, '')}</span>
                  <span className="text-[10px] text-slate-500 font-mono">({mod.duration})</span>
                </button>
              ))}
            </div>

            {/* Main Body Content Grid (2 columns: Study Guide on Left, Cyber AI Tutor on Right) */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
              
              {/* Left Column: Detailed Module Study Guide */}
              <div className="lg:col-span-6 p-4 sm:p-6 overflow-y-auto space-y-5 border-r border-slate-800/80 bg-slate-950/50 h-full">
                
                {/* Active Module Header Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/20 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      Module Study Guide
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-cyan-400" /> {activeModule.duration}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                    {activeModule.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModule.summary || `Comprehensive breakdown of ${activeModule.topics.join(', ')}.`}
                  </p>
                </div>

                {/* Key Concepts Breakdown */}
                {activeModule.keyConcepts && activeModule.keyConcepts.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      Key Core Concepts & Principles
                    </h4>
                    <div className="space-y-2">
                      {activeModule.keyConcepts.map((concept, cIdx) => (
                        <div key={cIdx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 leading-relaxed flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <div>{concept}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Topics Covered Checklist */}
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Topics Covered</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModule.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Command Snippets & Terminal Cheat Sheet */}
                {activeModule.commandSnippets && activeModule.commandSnippets.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center">
                      <Terminal className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                      Essential Terminal Commands & Usage
                    </h4>
                    <div className="space-y-2.5">
                      {activeModule.commandSnippets.map((item, cmdIdx) => (
                        <div key={cmdIdx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
                          <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                            <span>{item.explanation}</span>
                            <button
                              onClick={() => handleCopyText(`cmd-${cmdIdx}`, item.cmd)}
                              className="p-1 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition flex items-center space-x-1"
                              title="Copy Command"
                            >
                              {copiedCmd === `cmd-${cmdIdx}` ? (
                                <span className="text-emerald-400 text-[10px] flex items-center"><Check className="w-3 h-3 mr-0.5" /> Copied</span>
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-950 text-emerald-300 font-mono text-[11px] overflow-x-auto">
                            ${' '}{item.cmd}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Practical Code Example */}
                {activeModule.codeExample && (
                  <div>
                    <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2.5 flex items-center">
                      <Code2 className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                      {activeModule.codeExample.title}
                    </h4>
                    <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden font-mono text-xs">
                      <div className="px-3 py-1.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="uppercase font-bold text-purple-400">{activeModule.codeExample.language}</span>
                        <button
                          onClick={() => handleCopyText('code-ex', activeModule.codeExample!.code)}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition text-[10px] flex items-center"
                        >
                          {copiedCmd === 'code-ex' ? <Check className="w-3 h-3 text-emerald-400 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                          {copiedCmd === 'code-ex' ? 'Copied' : 'Copy Code'}
                        </button>
                      </div>
                      <pre className="p-3 bg-slate-950 text-purple-200 overflow-x-auto text-[11px] leading-relaxed">
                        {activeModule.codeExample.code}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Bottom Practice Prompt */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white mb-0.5">Ready for Hands-on Labs?</h5>
                    <p className="text-[11px] text-slate-400">Apply what you studied in a live sandboxed terminal.</p>
                  </div>
                  <button
                    onClick={() => {
                      onStartCourse(course.id);
                      onClose();
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_0_15px_rgba(0,240,255,0.4)] cursor-pointer shrink-0"
                  >
                    Start Lab
                  </button>
                </div>

              </div>

              {/* Right Column: Cyber AI Tutor Chatbox (flex-col h-full overflow-hidden) */}
              <div className="lg:col-span-6 p-3 sm:p-4 flex flex-col h-full overflow-hidden bg-slate-950">
                <CyberAiTutorChat
                  topicTitle={`${course.title} - ${activeModule.title}`}
                  category={course.category}
                  aiPrompts={activeModule.aiPrompts}
                />
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
