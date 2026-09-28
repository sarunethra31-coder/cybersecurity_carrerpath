import React from 'react';
import { Shield, Award, BookOpen, CheckCircle2, Zap, RefreshCw, Sparkles, User, Camera } from 'lucide-react';
import { UserProfile } from '../types';
import { COURSES } from '../data/cyberData';

interface ProfileSectionProps {
  user: UserProfile;
  onNavigate: (route: string) => void;
  onResetProgress?: () => void;
  onLoadDemoData?: () => void;
  onOpenEditProfile?: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ user, onNavigate, onResetProgress, onLoadDemoData, onOpenEditProfile }) => {
  const isFreshUser = user.completedCoursesCount === 0 && user.completedLabsCount === 0 && user.ctfPoints === 0;

  return (
    <section className="py-12 relative border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        
        {/* Profile Header */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div
              className="relative group cursor-pointer shrink-0"
              onClick={onOpenEditProfile}
              title="Click to customize avatar & profile"
            >
              <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-2xl border-2 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:opacity-85 transition" />
              <div className="absolute inset-0 bg-slate-950/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition border-2 border-cyan-400">
                <Camera className="w-6 h-6 text-cyan-300 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{user.name}</h1>
              <div className="text-xs font-mono text-cyan-400 mt-1">{user.handle} • {user.email}</div>
              <div className="inline-flex items-center space-x-2 mt-2 px-3 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>{user.role}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
            {onOpenEditProfile && (
              <button
                onClick={onOpenEditProfile}
                className="px-3.5 py-2 rounded-xl bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-cyan-900 transition flex items-center space-x-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Edit Avatar & Profile</span>
              </button>
            )}

            {onResetProgress && (
              <button
                onClick={onResetProgress}
                className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-rose-500/40 text-rose-300 hover:text-white hover:bg-rose-950/60 transition flex items-center space-x-1.5 cursor-pointer"
                title="Reset progress to 0%"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Start Fresh (0%)</span>
              </button>
            )}

            {onLoadDemoData && (
              <button
                onClick={onLoadDemoData}
                className="px-3.5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900 transition flex items-center space-x-1.5 cursor-pointer"
                title="Load sample progress to preview profile"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Load Sample Demo</span>
              </button>
            )}

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              Rank: <span className="text-cyan-400 font-bold">{user.rank > 0 ? `#${user.rank}` : 'Unranked'}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              Level: <span className="text-blue-400 font-bold">Lvl {user.level}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              CTF Pts: <span className="text-amber-400 font-bold">{user.ctfPoints}</span>
            </div>
          </div>
        </div>

        {/* Skill Progress & Accomplishments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Skill Matrix */}
          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-cyan-500/20 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" /> Verified Skill Matrix
            </h3>

            <div className="space-y-4">
              {user.skillMatrix.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>{item.skill}</span>
                    <span className="text-cyan-400 font-bold">{item.value}% Mastery</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <div className="h-full bg-cyan-400 rounded-full transition-all duration-500" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Badges & CTF Achievements */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Badges */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/20 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center">
                <Award className="w-4 h-4 text-amber-400 mr-2" /> Badges & Credentials
              </h3>

              {user.badges.length === 0 ? (
                <div className="p-6 rounded-xl bg-slate-900/60 border border-dashed border-slate-800 text-center space-y-2">
                  <Award className="w-8 h-8 text-slate-600 mx-auto" />
                  <div className="text-xs text-slate-400">0 Badges Unlocked</div>
                  <p className="text-[11px] text-slate-500">
                    Complete sandboxed terminal labs or submit CTF flags to earn badges.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {user.badges.map(b => (
                    <div key={b.id} className={`p-3 rounded-xl bg-slate-900 border ${b.color} flex items-center space-x-3`}>
                      <Award className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">{b.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{b.earnedDate}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Completed Courses */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/20 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <BookOpen className="w-4 h-4 text-blue-400 mr-2" /> Completed Curriculum
              </h3>

              {isFreshUser ? (
                <div className="p-6 rounded-xl bg-slate-900/60 border border-dashed border-slate-800 text-center space-y-2">
                  <div className="text-xs text-slate-400">0 Courses Completed Yet</div>
                  <button
                    onClick={() => onNavigate('/courses')}
                    className="px-4 py-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 hover:text-white text-xs font-bold transition inline-block"
                  >
                    Browse Courses Catalog
                  </button>
                </div>
              ) : (
                COURSES.slice(0, 2).map(c => (
                  <div key={c.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-200 font-medium">{c.title}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
