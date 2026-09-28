import React from 'react';
import { Shield, Code2, Globe, MessageSquare, ArrowUp, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 text-slate-400 py-12 relative overflow-hidden text-left">
      {/* Glow highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.8)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('/')}>
              <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-mono text-xl font-bold text-white tracking-wider">
                CYBER<span className="text-cyan-400">PATH</span>
              </span>
            </div>

            <div className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
              Learn • Practice • Build • Grow
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The complete A-to-Z cybersecurity learning ecosystem designed for aspiring SOC Analysts, Penetration Testers, DFIR Specialists, and Cloud Security Engineers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Curriculum */}
          <div className="space-y-3 text-xs font-mono">
            <div className="text-cyan-400 font-bold uppercase tracking-wider text-[11px]">Curriculum</div>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/roadmap')} className="hover:text-cyan-300 transition">Roadmap</button></li>
              <li><button onClick={() => onNavigate('/courses')} className="hover:text-cyan-300 transition">Courses Catalog</button></li>
              <li><button onClick={() => onNavigate('/labs')} className="hover:text-cyan-300 transition">Hands-On Labs</button></li>
              <li><button onClick={() => onNavigate('/tools')} className="hover:text-cyan-300 transition">Security Tools</button></li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3 text-xs font-mono">
            <div className="text-blue-400 font-bold uppercase tracking-wider text-[11px]">Platform</div>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/projects')} className="hover:text-blue-300 transition">Featured Projects</button></li>
              <li><button onClick={() => onNavigate('/ctf')} className="hover:text-blue-300 transition">CTF Arena</button></li>
              <li><button onClick={() => onNavigate('/careers')} className="hover:text-blue-300 transition">Cyber Careers</button></li>
              <li><button onClick={() => onNavigate('/certifications')} className="hover:text-blue-300 transition">Certifications Prep</button></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="space-y-3 text-xs font-mono">
            <div className="text-purple-400 font-bold uppercase tracking-wider text-[11px]">Legal & Info</div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple-300 transition">About CYBERPATH</a></li>
              <li><a href="#contact" className="hover:text-purple-300 transition">Contact & Support</a></li>
              <li><a href="#privacy" className="hover:text-purple-300 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-purple-300 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} CYBERPATH Platform. All security labs are designed for legal, sandboxed educational environments.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center space-x-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
