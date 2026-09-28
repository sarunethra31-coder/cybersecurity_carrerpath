import React, { useState } from 'react';
import {
  Shield, Cpu, Network, Terminal, Code, Globe, Zap, FileSearch, Activity, Cloud, Target,
  CheckCircle, Sparkles, BookOpen, ExternalLink, X, ArrowRight, Layers, Award, Flag, Monitor,
  BookMarked, Bot, Command, HelpCircle
} from 'lucide-react';
import {
  CYBER_ROADMAP_MAIN_BRANCHES,
  ROADMAP_SIDEBAR_CTFS,
  ROADMAP_SIDEBAR_CERTS,
  ROADMAP_VIRTUALIZATION_TECH,
  RoadmapTopic
} from '../data/cyberRoadmapGraph';
import { CyberAiTutorChat } from './CyberAiTutorChat';

interface InteractiveCyberRoadmapProps {
  onNavigate: (route: string) => void;
}

export const InteractiveCyberRoadmap: React.FC<InteractiveCyberRoadmapProps> = ({ onNavigate }) => {
  const [selectedTopic, setSelectedTopic] = useState<RoadmapTopic | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'Roadmap' | 'Projects' | 'AI Tutor'>('Roadmap');
  const [modalActiveTab, setModalActiveTab] = useState<'guide' | 'ai'>('guide');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleTopicCompletion = (id: string, name: string) => {
    setCompletedTopics(prev => {
      const nextState = { ...prev, [id]: !prev[id] };
      if (nextState[id]) {
        setToastMessage(`🎉 Topic "${name}" marked as Mastered!`);
        setTimeout(() => setToastMessage(null), 1800);
      }
      return nextState;
    });
  };

  const openModalForCustomItem = (title: string, category: 'ctf' | 'cert' | 'virtualization', desc: string) => {
    setSelectedTopic({
      id: title.toLowerCase().replace(/\s+/g, '-'),
      title: title,
      category: category as any,
      tagline: `Interactive Study Guide for ${title}`,
      description: desc,
      keyConcepts: ['Hands-On Practice', 'Industry Standards', 'Real-World Execution'],
      difficulty: 'Intermediate',
      studyGuide: {
        overview: `${title} is a core component of cybersecurity learning and industry operations. Understanding its architecture and operational usage is vital for penetration testing, threat auditing, and defense.`,
        modules: [
          { title: `1. Understanding ${title}`, content: `Detailed architectural overview and best practice methodology for working with ${title}.` }
        ],
        cheatsheet: [
          { cmd: `${title.toLowerCase()} --help`, usage: 'Display official usage instructions and flags' }
        ]
      },
      aiPrompts: [
        `What is ${title} and why is it important in cybersecurity?`,
        `How do security professionals utilize ${title} in the field?`
      ]
    });
    setModalActiveTab('guide');
  };

  return (
    <div className="w-full min-h-screen bg-[#070b14] text-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-cyan-950/95 border border-cyan-400 text-cyan-200 text-sm font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center space-x-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Block matching roadmap.sh style */}
        <div className="bg-slate-950/90 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)] text-left relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-2">
                <span>UPDATED 2026 EDITION</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Cyber Security <span className="text-amber-400">Expert</span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-1">
                Step by step interactive guide to becoming a Cyber Security Expert in 2026. Click any box to view in-depth study guides or ask the AI Tutor (Gemini/ChatGPT).
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab('Roadmap')}
                className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition ${
                  activeTab === 'Roadmap' ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Roadmap</span>
              </button>

              <button
                onClick={() => onNavigate('/projects')}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center space-x-2 transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Projects</span>
              </button>

              <button
                onClick={() => onNavigate('/labs')}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 flex items-center space-x-2 transition cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>AI Cyber Tutor</span>
              </button>
            </div>
          </div>

          {/* Banner notification bar */}
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between text-xs text-amber-200">
            <span className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Click any topic node box to view detailed study guides ("What is OS?") or chat with the embedded AI Cyber Tutor.</span>
            </span>
            <span className="hidden sm:inline font-mono text-amber-400">roadmap.sh • CYBERPATH AI Edition</span>
          </div>
        </div>

        {/* Interactive Roadmap Layout (Left Sidebar + Center Connected Tree) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: CTFs, Certifications, Virtualization */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* CTFs Section */}
            <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                <Flag className="w-4 h-4" />
                <span>CTFs (Capture The Flag)</span>
              </div>
              <div className="space-y-2">
                {ROADMAP_SIDEBAR_CTFS.map(ctf => (
                  <button
                    key={ctf.id}
                    onClick={() => openModalForCustomItem(ctf.name, 'ctf', ctf.desc)}
                    className="w-full text-left p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/40 transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-bold text-amber-200 group-hover:text-amber-300">{ctf.name}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{ctf.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-400 transform group-hover:translate-x-1 transition shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                <Award className="w-4 h-4" />
                <span>Industry Certifications</span>
              </div>

              {/* Beginner Certs */}
              <div className="mb-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">Beginner Certifications</div>
                <div className="grid grid-cols-2 gap-2">
                  {ROADMAP_SIDEBAR_CERTS.beginner.map(cert => (
                    <button
                      key={cert.id}
                      onClick={() => openModalForCustomItem(cert.name, 'cert', `Official study guide for ${cert.name} (${cert.code}) provided by ${cert.vendor}.`)}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:bg-slate-800 transition text-center cursor-pointer"
                    >
                      <div className="text-xs font-bold text-cyan-300 line-clamp-1">{cert.name}</div>
                      <div className="text-[10px] font-mono text-slate-400">{cert.code}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Certs */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">Advanced Certifications</div>
                <div className="grid grid-cols-2 gap-2">
                  {ROADMAP_SIDEBAR_CERTS.advanced.map(cert => (
                    <button
                      key={cert.id}
                      onClick={() => openModalForCustomItem(cert.name, 'cert', `Advanced certification prep for ${cert.name} (${cert.vendor}).`)}
                      className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/40 transition text-center cursor-pointer"
                    >
                      <div className="text-xs font-bold text-amber-300 line-clamp-1">{cert.name}</div>
                      <div className="text-[10px] font-mono text-slate-400">{cert.vendor}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Virtualization Technologies */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                <Monitor className="w-4 h-4" />
                <span>Virtualization & Hypervisors</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {ROADMAP_VIRTUALIZATION_TECH.map(v => (
                  <button
                    key={v.id}
                    onClick={() => openModalForCustomItem(v.name, 'virtualization', v.desc)}
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-400 hover:bg-slate-800 transition text-left cursor-pointer"
                  >
                    <div className="text-xs font-bold text-emerald-300 line-clamp-1">{v.name}</div>
                    <div className="text-[10px] text-slate-400 line-clamp-1">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: Visual Connected Flowchart Tree */}
          <div className="lg:col-span-8 bg-slate-950/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* Top Root Node */}
            <div className="flex justify-center mb-6">
              <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-black text-xl tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-300 uppercase">
                Cyber Security
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-8 bg-amber-400 mx-auto -mt-6 mb-4" />

            {/* Main Branches Stack */}
            <div className="space-y-8 relative">

              {CYBER_ROADMAP_MAIN_BRANCHES.map((branch, bIdx) => {
                const isMastered = completedTopics[branch.id];

                return (
                  <div key={branch.id} className="relative group text-left">
                    
                    {/* Branch Header Box */}
                    <div
                      onClick={() => {
                        setSelectedTopic(branch);
                        setModalActiveTab('guide');
                      }}
                      className={`p-5 rounded-2xl border transition duration-300 cursor-pointer relative z-10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isMastered
                          ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                          : 'bg-amber-950/20 border-amber-400 hover:border-amber-300 hover:bg-amber-950/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-500/30">
                            STEP 0{bIdx + 1}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{branch.category}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition">
                          {branch.title}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">{branch.tagline}</p>
                      </div>

                      <div className="flex items-center space-x-3 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTopicCompletion(branch.id, branch.title);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center space-x-1.5 ${
                            isMastered ? 'bg-emerald-500 text-black' : 'bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-950'
                          }`}
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>{isMastered ? 'Mastered' : 'Mark Done'}</span>
                        </button>

                        <button className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Sub-branches Diagram Nodes */}
                    {branch.subBranches && branch.subBranches.length > 0 && (
                      <div className="mt-3 ml-4 sm:ml-8 pl-4 border-l-2 border-dashed border-amber-500/40 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {branch.subBranches.map(sub => (
                            <div
                              key={sub.id}
                              onClick={() => {
                                setSelectedTopic({
                                  id: sub.id,
                                  title: sub.name,
                                  category: branch.category,
                                  tagline: branch.title,
                                  description: sub.description,
                                  keyConcepts: branch.keyConcepts,
                                  difficulty: branch.difficulty,
                                  studyGuide: branch.studyGuide,
                                  aiPrompts: branch.aiPrompts
                                });
                                setModalActiveTab('guide');
                              }}
                              className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 hover:bg-slate-800 transition cursor-pointer text-left"
                            >
                              <div className="text-xs font-bold text-amber-200">{sub.name}</div>
                              <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{sub.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Connecting Vertical Line between main branches */}
                    {bIdx < CYBER_ROADMAP_MAIN_BRANCHES.length - 1 && (
                      <div className="w-0.5 h-6 bg-amber-500/40 mx-auto my-2" />
                    )}

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

      {/* Interactive Topic Modal Popup with In-Depth Study Guide & Cyber AI Tutor (ChatGPT / Gemini style) */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-slate-950 border border-amber-500/40 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,0.3)] overflow-hidden my-6 text-left flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-950 border-b border-amber-500/20 relative shrink-0">
              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-amber-400 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
                  {selectedTopic.category} • {selectedTopic.difficulty}
                </span>
                <span className="text-xs font-mono text-slate-400">Interactive Curriculum Study Hub</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {selectedTopic.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {selectedTopic.description}
              </p>

              {/* View Switcher Tabs inside Modal */}
              <div className="flex items-center space-x-3 mt-4 pt-3 border-t border-slate-800">
                <button
                  onClick={() => setModalActiveTab('guide')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 transition cursor-pointer ${
                    modalActiveTab === 'guide'
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <BookMarked className="w-4 h-4" />
                  <span>Comprehensive Study Guide ("What is {selectedTopic.title}?")</span>
                </button>

                <button
                  onClick={() => setModalActiveTab('ai')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 transition cursor-pointer ${
                    modalActiveTab === 'ai'
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                  <span>Cyber AI Tutor (ChatGPT / Gemini)</span>
                </button>
              </div>
            </div>

            {/* Split Content Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* LEFT HALF PAGE: Detailed Study Guide */}
                <div className={`space-y-6 ${modalActiveTab === 'guide' ? 'lg:col-span-7 block' : 'hidden lg:block lg:col-span-6'}`}>
                  
                  {/* Overview Block */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 text-left">
                    <h3 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider mb-2 flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>What is {selectedTopic.title}?</span>
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {selectedTopic.studyGuide?.overview || selectedTopic.description}
                    </p>
                  </div>

                  {/* Modules Deep Dive */}
                  {selectedTopic.studyGuide?.modules && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Core Syllabus Modules</h4>
                      {selectedTopic.studyGuide.modules.map((mod, idx) => (
                        <div key={idx} className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-4 text-left">
                          <h5 className="text-xs font-bold text-amber-300 font-mono mb-1">{mod.title}</h5>
                          <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-wrap">{mod.content}</p>
                          {mod.codeSnippet && (
                            <pre className="mt-2.5 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                              {mod.codeSnippet}
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Cheatsheet Table */}
                  {selectedTopic.studyGuide?.cheatsheet && (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-left">
                      <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
                        <Command className="w-3.5 h-3.5" />
                        <span>Command & Tool Cheatsheet</span>
                      </h4>
                      <div className="space-y-2">
                        {selectedTopic.studyGuide.cheatsheet.map((c, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                            <span className="font-mono text-emerald-300 font-bold">{c.cmd}</span>
                            <span className="text-slate-400 text-[11px]">{c.usage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mark Completed Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => toggleTopicCompletion(selectedTopic.id, selectedTopic.title)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs font-mono transition flex items-center space-x-2 cursor-pointer ${
                        completedTopics[selectedTopic.id]
                          ? 'bg-emerald-500 text-black'
                          : 'bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-950'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{completedTopics[selectedTopic.id] ? 'Topic Mastered' : 'Mark Topic Done'}</span>
                    </button>
                  </div>

                </div>

                {/* RIGHT HALF PAGE: Cyber AI Tutor (ChatGPT / Gemini) */}
                <div className={`h-[520px] ${modalActiveTab === 'ai' ? 'lg:col-span-12 block' : 'hidden lg:block lg:col-span-6'}`}>
                  <CyberAiTutorChat
                    topicTitle={selectedTopic.title}
                    category={selectedTopic.category}
                    aiPrompts={selectedTopic.aiPrompts}
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
