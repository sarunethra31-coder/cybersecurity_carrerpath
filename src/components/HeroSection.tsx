import React, { useState, useEffect } from 'react';
import { Shield, Terminal, ArrowRight, Zap, Play, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface HeroSectionProps {
  user: UserProfile;
  onNavigate: (route: string) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ user, onNavigate }) => {
  // Terminal animated lines simulation
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '[SYSTEM] Initializing CYBERPATH Defense Engine v4.8...',
    '[LOG] Network sensor [US-EAST-1] connected. Status: ONLINE',
    '[ALERT] Blocked SQLi payload from 185.220.101.5 -> Target: /api/v1/auth',
    '[SEC] Sandbox container #lab-882 spun up in 420ms'
  ]);

  useEffect(() => {
    const attackTypes = [
      'Blocked SYN flood from 192.168.1.105 (Rate: 15k pps)',
      'Intercepted brute force RDP attempt on Port 3389',
      'YARA Rule match: Malware.Win32.RansomwareSignature',
      'CTF Flag verified for user @CyberViper_0x (+150 pts)',
      'Lab session #lab-401 completed with score 100%'
    ];

    const interval = setInterval(() => {
      const nextLog = attackTypes[Math.floor(Math.random() * attackTypes.length)];
      const timestamp = new Date().toLocaleTimeString();
      setTerminalLogs(prev => [...prev.slice(-3), `[${timestamp}] ${nextLog}`]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Compute overall progress percentage
  const totalCompleted = user.completedCoursesCount + user.completedLabsCount + user.completedCTFsCount;
  const progressPercent = totalCompleted === 0 ? 0 : Math.min(100, Math.round((totalCompleted / 30) * 100));

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-cyan-500/10 text-left">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>NEXT-GEN CYBERSECURITY ACADEMY</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Master Cybersecurity <br />
              <span className="text-gradient-cyan">From A to Z</span>
            </h1>

            {/* Supporting Tagline */}
            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-mono font-semibold text-cyan-400/90 tracking-widest uppercase">
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">Learn</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20">Practice</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">Build</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/20">Test</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">Track</span>
            </div>

            {/* Comprehensive Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              One complete platform to learn cybersecurity fundamentals, practice hands-on sandboxed labs, explore security tools, build real-world portfolio projects, and prepare for cybersecurity careers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/courses')}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Play className="w-4 h-4 fill-current" />
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                </span>
              </button>

              <button
                onClick={() => onNavigate('/roadmap')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition shadow-lg cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Explore Roadmap</span>
                </span>
              </button>
            </div>

            {/* Trust metrics row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">100+</div>
                <div className="text-xs text-slate-400">Interactive Labs</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">16+</div>
                <div className="text-xs text-slate-400">Learning Paths</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">50K+</div>
                <div className="text-xs text-slate-400">Active Hackers</div>
              </div>
            </div>
          </div>

          {/* Right Futuristic Cyber SOC Dashboard Visualization */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-panel p-4 sm:p-6 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] overflow-hidden">
              
              {/* Header Bar of Dashboard */}
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-slate-400 ml-2">CYBERPATH_SOC_MONITOR_V4</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>DEFENSE READY</span>
                </div>
              </div>

              {/* Threat Map Simulation Canvas */}
              <div className="relative my-4 h-48 sm:h-52 rounded-xl bg-slate-950/90 border border-slate-800 cyber-grid overflow-hidden flex items-center justify-center">
                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-44 h-44 rounded-full border border-cyan-500/20 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border border-cyan-500/30 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-cyan-400 animate-pulse-slow" />
                    </div>
                  </div>
                  <div className="absolute w-48 h-48 rounded-full border-t-2 border-cyan-400/80 animate-radar" />
                </div>

                {/* Threat Node Pings on Map */}
                <div className="absolute top-6 left-12 flex items-center space-x-1.5 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/40 text-[10px] font-mono text-rose-300">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <span>US-EAST: SQLi Attack</span>
                </div>

                <div className="absolute bottom-8 right-10 flex items-center space-x-1.5 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>EU-WEST: Lab #402 Active</span>
                </div>

                <div className="absolute top-10 right-16 flex items-center space-x-1.5 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>APAC: Honeypot 100%</span>
                </div>

                {/* Threat Map overlay label */}
                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Live Global Threat Radar
                </div>
              </div>

              {/* Progress Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-left">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Progress</div>
                  <div className="text-base font-bold font-mono text-cyan-400">{progressPercent}%</div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-cyan-400 h-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-blue-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Courses</div>
                  <div className="text-base font-bold font-mono text-blue-400">{user.completedCoursesCount} / 16</div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-blue-400 h-full transition-all duration-500" style={{ width: `${Math.min(100, (user.completedCoursesCount / 16) * 100)}%` }} />
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-purple-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Labs</div>
                  <div className="text-base font-bold font-mono text-purple-400">{user.completedLabsCount} Done</div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-purple-400 h-full transition-all duration-500" style={{ width: `${Math.min(100, (user.completedLabsCount / 20) * 100)}%` }} />
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-amber-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">CTF Score</div>
                  <div className="text-base font-bold font-mono text-amber-400">{user.ctfPoints.toLocaleString()} pts</div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-amber-400 h-full transition-all duration-500" style={{ width: `${Math.min(100, (user.ctfPoints / 2000) * 100)}%` }} />
                  </div>
                </div>
              </div>

              {/* Terminal CLI Stream */}
              <div className="rounded-lg bg-slate-950 p-3 border border-slate-800 text-left font-mono text-[11px] space-y-1 overflow-hidden">
                <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-900">
                  <span className="flex items-center space-x-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>COMMAND TERMINAL STREAM</span>
                  </span>
                  <span className="text-emerald-400">● LIVE</span>
                </div>
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="text-slate-300 truncate">
                    <span className="text-cyan-400">&gt; </span>
                    {log}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
