import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Terminal, Wrench, FolderGit2, Flag, Briefcase, Award, ArrowRight } from 'lucide-react';
import { COURSES, LABS, SECURITY_TOOLS, PROJECTS, CTF_CHALLENGES, CAREER_PATHS, CERTIFICATIONS } from '../data/cyberData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredCourses = q
    ? COURSES.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q)))
    : COURSES.slice(0, 3);

  const filteredLabs = q
    ? LABS.filter(l => l.title.toLowerCase().includes(q) || l.category.toLowerCase().includes(q) || l.skillsLearned.some(s => s.toLowerCase().includes(q)))
    : LABS.slice(0, 3);

  const filteredTools = q
    ? SECURITY_TOOLS.filter(t => t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
    : SECURITY_TOOLS.slice(0, 3);

  const filteredProjects = q
    ? PROJECTS.filter(p => p.title.toLowerCase().includes(q) || p.technologies.some(t => t.toLowerCase().includes(q)))
    : PROJECTS.slice(0, 2);

  const filteredCTFs = q
    ? CTF_CHALLENGES.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
    : CTF_CHALLENGES.slice(0, 2);

  const filteredCareers = q
    ? CAREER_PATHS.filter(c => c.title.toLowerCase().includes(q) || c.requiredSkills.some(s => s.toLowerCase().includes(q)))
    : CAREER_PATHS.slice(0, 2);

  const filteredCerts = q
    ? CERTIFICATIONS.filter(c => c.name.toLowerCase().includes(q) || c.vendor.toLowerCase().includes(q))
    : CERTIFICATIONS.slice(0, 2);

  const handleSelect = (route: string) => {
    onNavigate(route);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-3xl bg-slate-950 border border-cyan-500/30 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-cyan-500/20 bg-slate-900/80">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, labs, tools, projects, CTFs, careers, certs..."
            className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2 py-1 text-xs font-mono bg-slate-800 border border-slate-700 rounded text-slate-300 hover:text-white">
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1 text-left">
          {/* Courses Section */}
          {filteredCourses.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Courses ({filteredCourses.length})
              </div>
              <div className="space-y-1.5">
                {filteredCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => handleSelect(`/courses/${course.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-left transition group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition">{course.title}</div>
                      <div className="text-xs text-slate-400">{course.category} • {course.difficulty} • {course.duration}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Labs Section */}
          {filteredLabs.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 mr-1.5" /> Sandboxed Labs ({filteredLabs.length})
              </div>
              <div className="space-y-1.5">
                {filteredLabs.map(lab => (
                  <button
                    key={lab.id}
                    onClick={() => handleSelect(`/labs/${lab.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 text-left transition group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition">{lab.title}</div>
                      <div className="text-xs text-slate-400">{lab.category} • {lab.estimatedTime} • +{lab.points} pts</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Security Tools */}
          {filteredTools.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5 mr-1.5" /> Security Tools ({filteredTools.length})
              </div>
              <div className="space-y-1.5">
                {filteredTools.map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => handleSelect(`/tools/${tool.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 text-left transition group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition">{tool.name}</div>
                      <div className="text-xs text-slate-400">{tool.category} • {tool.description.slice(0, 70)}...</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="flex items-center text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider">
                <FolderGit2 className="w-3.5 h-3.5 mr-1.5" /> Real-World Projects ({filteredProjects.length})
              </div>
              <div className="space-y-1.5">
                {filteredProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => handleSelect(`/projects/${proj.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/40 text-left transition group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition">{proj.title}</div>
                      <div className="text-xs text-slate-400">{proj.technologies.join(', ')}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transform group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTFs & Careers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCTFs.length > 0 && (
              <div>
                <div className="flex items-center text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider">
                  <Flag className="w-3.5 h-3.5 mr-1.5" /> CTF Challenges
                </div>
                {filteredCTFs.map(ctf => (
                  <button
                    key={ctf.id}
                    onClick={() => handleSelect('/ctf')}
                    className="w-full flex items-center justify-between p-2 rounded bg-slate-900/60 hover:bg-slate-800 text-left transition text-xs mb-1"
                  >
                    <span className="text-slate-200">{ctf.title}</span>
                    <span className="text-amber-400 font-mono">+{ctf.points}pts</span>
                  </button>
                ))}
              </div>
            )}
            {filteredCareers.length > 0 && (
              <div>
                <div className="flex items-center text-xs font-mono text-rose-400 mb-2 uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5 mr-1.5" /> Cyber Careers
                </div>
                {filteredCareers.map(car => (
                  <button
                    key={car.id}
                    onClick={() => handleSelect('/careers')}
                    className="w-full flex items-center justify-between p-2 rounded bg-slate-900/60 hover:bg-slate-800 text-left transition text-xs mb-1"
                  >
                    <span className="text-slate-200">{car.title}</span>
                    <span className="text-slate-400 text-[10px]">{car.avgSalary}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-900 border-t border-cyan-500/10 text-xs text-slate-400 flex items-center justify-between">
          <span>Search CYBERPATH knowledge index</span>
          <span className="font-mono text-[11px] text-cyan-400/80">Press Ctrl+K anytime</span>
        </div>
      </div>
    </div>
  );
};
