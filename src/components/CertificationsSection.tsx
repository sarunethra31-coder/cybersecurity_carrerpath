import React, { useState } from 'react';
import { Award, ShieldCheck, Bot, Sparkles, X, MessageSquare, BookOpen, BarChart3, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { CERTIFICATIONS, COURSES } from '../data/cyberData';
import { CertificationPrep } from '../types';
import { CyberAiTutorChat } from './CyberAiTutorChat';

interface CertificationsSectionProps {
  onNavigate?: (route: string) => void;
  showTitle?: boolean;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onNavigate, showTitle = true }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationPrep | null>(null);
  const [activeTab, setActiveTab] = useState<'ai' | 'domains' | 'courses'>('ai');

  const openCertModal = (cert: CertificationPrep) => {
    setSelectedCert(cert);
    setActiveTab('ai');
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="py-16 relative border-b border-cyan-500/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CERTIFICATION PREP & AI DOUBT SOLVER HUB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industry Certification <span className="text-gradient-cyan">Prep Paths</span>
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Explore prep paths for Security+, eJPT, OSCP, CEH, AWS Security and interact with our specialized <span className="text-amber-400 font-semibold">AI Certification Doubt Assistant</span> to solve doubts in real-time.
            </p>
            <div className="mt-2 text-xs font-mono text-cyan-400/80 bg-cyan-950/40 py-1 px-3 rounded-full inline-block border border-cyan-500/20">
              * Select any certification below to ask questions, solve exam doubts, and analyze domain weights with AI.
            </div>
          </div>
        )}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {CERTIFICATIONS.map(cert => (
            <div
              key={cert.id}
              onClick={() => openCertModal(cert)}
              className="group relative rounded-xl p-6 glass-panel-interactive border border-slate-800 hover:border-cyan-500/60 flex flex-col justify-between cursor-pointer transition shadow-lg hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {cert.vendor}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-bold flex items-center space-x-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Prep Progress: 0%</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                      {cert.name} ({cert.code})
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50 transition flex-shrink-0">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Exam Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-[11px] font-mono">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Difficulty: <span className="text-cyan-400 font-bold">{cert.difficulty}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Duration: <span className="text-blue-400 font-bold">{cert.examDuration}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Passing: <span className="text-emerald-400 font-bold">{cert.passingScore}</span>
                  </div>
                </div>

                {/* Exam Domain Weights Breakdown */}
                <div className="space-y-2 mb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold flex items-center justify-between">
                    <span>Official Exam Domain Weight Distribution</span>
                    <span className="text-cyan-400 text-[9px]">Click card to ask AI</span>
                  </div>
                  {cert.domains.map((dom, dIdx) => (
                    <div key={dIdx}>
                      <div className="flex justify-between text-[11px] text-slate-300 mb-0.5 font-mono">
                        <span>{dom.name}</span>
                        <span className="text-slate-400">Weight: <span className="text-cyan-400 font-bold">{dom.percentage}%</span></span>
                      </div>
                      <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                        <div className="bg-slate-700 h-full rounded-full group-hover:bg-cyan-500 transition-all" style={{ width: `${dom.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer action button - Opens AI Chatbot Modal */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>AI Doubts & Prep Available</span>
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openCertModal(cert);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-400 hover:from-amber-300 hover:to-cyan-300 transition cursor-pointer flex items-center space-x-2 shadow-md"
                >
                  <Bot className="w-4 h-4" />
                  <span>Ask AI Doubts</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* AI CERTIFICATION DOUBT SOLVER MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in text-left">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Top Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {selectedCert.vendor}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-bold">
                      Code: {selectedCert.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">{selectedCert.name}</h3>
                </div>
              </div>

              <button
                onClick={closeCertModal}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-slate-900/90 border-b border-slate-800 shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>AI Certification Assistant</span>
              </button>

              <button
                onClick={() => setActiveTab('domains')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'domains'
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Exam Domains ({selectedCert.domains.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'courses'
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Recommended Prep Courses</span>
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 bg-slate-950">
              
              {/* TAB 1: AI CERTIFICATION TUTOR CHATBOT */}
              {activeTab === 'ai' && (
                <div className="h-[520px]">
                  <CyberAiTutorChat
                    topicTitle={`${selectedCert.name} (${selectedCert.code})`}
                    category={`Certification Prep - ${selectedCert.vendor}`}
                    aiPrompts={[
                      `What are the most heavily weighted exam domains for ${selectedCert.code}?`,
                      `Give me 3 practice scenario questions for ${selectedCert.name}.`,
                      `What is the best 30-day preparation strategy to pass ${selectedCert.code}?`,
                      `Explain the passing score requirements and exam format for ${selectedCert.name}.`
                    ]}
                  />
                </div>
              )}

              {/* TAB 2: EXAM DOMAINS BREAKDOWN */}
              {activeTab === 'domains' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <h4 className="text-sm font-bold text-white mb-2">Exam Format Overview</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 block">Exam Duration</span>
                        <span className="text-cyan-400 font-bold text-sm">{selectedCert.examDuration}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 block">Passing Score</span>
                        <span className="text-emerald-400 font-bold text-sm">{selectedCert.passingScore}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 block">Exam Level</span>
                        <span className="text-amber-400 font-bold text-sm">{selectedCert.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Official Domain Weight Distribution</h4>
                    <div className="space-y-4">
                      {selectedCert.domains.map((dom, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-white">{dom.name}</span>
                            <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                              {dom.percentage}% Weight
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden mb-2">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: `${dom.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: RECOMMENDED COURSES */}
              {activeTab === 'courses' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                    The following CyberPath interactive courses provide full domain coverage and practice labs aligned with <strong>{selectedCert.name}</strong>:
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {COURSES.filter(c => selectedCert.recommendedCourses.includes(c.id)).map(course => (
                      <div key={course.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                              {course.category}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {course.syllabus.length} Modules • {course.duration}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white">{course.title}</h4>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-1">{course.description}</p>
                        </div>

                        <button
                          onClick={() => {
                            closeCertModal();
                            if (onNavigate) onNavigate('/courses');
                          }}
                          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition whitespace-nowrap cursor-pointer flex items-center space-x-1.5 shrink-0"
                        >
                          <span>Explore Course</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

