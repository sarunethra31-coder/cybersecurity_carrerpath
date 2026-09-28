import React from 'react';
import { Flame, Award, BookOpen, Terminal, FolderGit2, Flag, Zap, ArrowRight, Play, RefreshCw, Sparkles, User, Camera } from 'lucide-react';
import { UserProfile } from '../types';
import { COURSES } from '../data/cyberData';

interface DashboardSectionProps {
  user: UserProfile;
  onNavigate: (route: string) => void;
  onResetProgress?: () => void;
  onLoadDemoData?: () => void;
  onOpenEditProfile?: () => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ user, onNavigate, onResetProgress, onLoadDemoData, onOpenEditProfile }) => {
  const isFreshUser = user.completedCoursesCount === 0 && user.completedLabsCount === 0 && user.ctfPoints === 0;

  return (
    <section className="py-12 relative border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        
        {/* Top User Greeting Banner */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            
            {/* Clickable Avatar with Camera Edit Icon Overlay */}
            <div
              className="relative group cursor-pointer"
              onClick={onOpenEditProfile}
              title="Click to customize avatar & profile"
            >
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-2xl border-2 border-cyan-400 object-cover shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:opacity-85 transition" />
              <div className="absolute inset-0 bg-slate-950/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition border-2 border-cyan-400">
                <Camera className="w-5 h-5 text-cyan-300 animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded bg-cyan-400 text-black text-[10px] font-mono font-bold">
                LVL {user.level}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-extrabold text-white">{user.name}</h1>
                <span className="text-xs font-mono text-cyan-400">{user.handle}</span>
              </div>
              <p className="text-xs text-slate-300 font-mono mt-0.5">
                {user.role} • {user.rank > 0 ? `Rank #${user.rank} Global` : 'Fresh Cadet (0% Progress)'}
              </p>
            </div>
          </div>

          {/* Quick Controls: Edit Profile, Fresh Start, Demo Data */}
          <div className="flex flex-wrap items-center gap-3">
            {onOpenEditProfile && (
              <button
                onClick={onOpenEditProfile}
                className="px-3.5 py-2 rounded-xl bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-cyan-900 transition text-xs font-mono flex items-center space-x-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Edit Avatar & Profile</span>
              </button>
            )}

            {onResetProgress && (
              <button
                onClick={onResetProgress}
                className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-rose-500/40 text-rose-300 hover:text-white hover:bg-rose-950/60 transition text-xs font-mono flex items-center space-x-1.5 cursor-pointer"
                title="Reset all progress to 0%"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Start Fresh (0%)</span>
              </button>
            )}

            {onLoadDemoData && (
              <button
                onClick={onLoadDemoData}
                className="px-3.5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900 transition text-xs font-mono flex items-center space-x-1.5 cursor-pointer"
                title="Load sample progress to preview dashboard"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Load Sample Demo</span>
              </button>
            )}

            <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-amber-500/40 flex items-center space-x-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono text-amber-400 font-bold">{user.currentStreakDays} Day Streak</span>
            </div>
          </div>
        </div>

        {/* Recommended Next Step / Get Started Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/40 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
              <Play className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                {isFreshUser ? 'RECOMMENDED FIRST STEP' : 'RECOMMENDED NEXT LESSON'}
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {isFreshUser ? 'Module 1: Cybersecurity Fundamentals & Threat Architecture' : 'Lesson 4: Socket Sniffing with Scapy in Python'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {isFreshUser ? 'Begin your journey from 0% with interactive labs & terminal tasks.' : 'Course: Python for Security Professionals • Est. 25 mins'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate(isFreshUser ? '/labs' : '/courses')}
            className="px-6 py-3 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center space-x-2 cursor-pointer"
          >
            <span>{isFreshUser ? 'Launch First Lab' : 'Resume Lesson'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Metric Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl glass-panel border border-cyan-500/20">
            <div className="flex items-center justify-between text-cyan-400 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">Courses</span>
            </div>
            <div className="text-2xl font-bold text-white">{user.completedCoursesCount} / {COURSES.length}</div>
            <div className="text-xs text-slate-400 mt-1">{user.completedCoursesCount === 0 ? 'Ready to Start' : 'In Progress'}</div>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-blue-500/20">
            <div className="flex items-center justify-between text-blue-400 mb-2">
              <Terminal className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">Labs</span>
            </div>
            <div className="text-2xl font-bold text-white">{user.completedLabsCount} Solved</div>
            <div className="text-xs text-slate-400 mt-1">Sandboxed Shell</div>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-purple-500/20">
            <div className="flex items-center justify-between text-purple-400 mb-2">
              <FolderGit2 className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">Projects</span>
            </div>
            <div className="text-2xl font-bold text-white">{user.completedProjectsCount} Built</div>
            <div className="text-xs text-slate-400 mt-1">Portfolio Repository</div>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-amber-500/20">
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <Flag className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">CTF Flags</span>
            </div>
            <div className="text-2xl font-bold text-white">{user.completedCTFsCount} Solved</div>
            <div className="text-xs text-slate-400 mt-1">+{user.ctfPoints} Total Score</div>
          </div>
        </div>

        {/* Skill Matrix Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-cyan-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" /> Cybersecurity Skill Matrix
              </h3>
              {isFreshUser && (
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded">
                  0% Fresh Start
                </span>
              )}
            </div>

            <div className="space-y-3">
              {user.skillMatrix.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs text-slate-300 font-mono mb-1">
                    <span>{item.skill}</span>
                    <span className="text-cyan-400 font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Earned */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-cyan-500/20 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center">
              <Award className="w-4 h-4 text-amber-400 mr-2" /> Earned Skill Badges
            </h3>

            {user.badges.length === 0 ? (
              <div className="p-8 rounded-xl bg-slate-900/60 border border-dashed border-slate-800 text-center space-y-3">
                <Award className="w-8 h-8 text-slate-600 mx-auto" />
                <div className="text-xs font-bold text-slate-300">No Badges Earned Yet</div>
                <p className="text-[11px] text-slate-400">
                  Complete your first sandboxed lab or CTF flag to unlock your first achievement badge!
                </p>
                <button
                  onClick={() => onNavigate('/labs')}
                  className="px-4 py-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 hover:text-white text-xs font-bold transition"
                >
                  Start First Lab
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {user.badges.map(badge => (
                  <div key={badge.id} className={`p-3 rounded-xl bg-slate-900 border ${badge.color} text-center space-y-1`}>
                    <Award className="w-6 h-6 mx-auto" />
                    <div className="text-xs font-bold text-white">{badge.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{badge.earnedDate}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
