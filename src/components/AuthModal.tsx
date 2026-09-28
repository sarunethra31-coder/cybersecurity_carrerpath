import React, { useState } from 'react';
import { X, Shield, Lock, Mail, User, ArrowRight, Code2, Globe } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'register';
  onClose: () => void;
  onLoginSuccess: (name: string, email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose, onLoginSuccess }) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(name || 'Alex Vance', email || 'alex.vance@cyberpath.io');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden text-left p-6 sm:p-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-mono text-lg font-bold text-white">
            CYBER<span className="text-cyan-400">PATH</span>
          </span>
        </div>

        {/* Header Tabs */}
        <div className="flex items-center space-x-4 mb-6 border-b border-slate-800 pb-2">
          <button
            onClick={() => setMode('login')}
            className={`text-sm font-bold transition pb-2 border-b-2 ${
              mode === 'login' ? 'text-cyan-400 border-cyan-400' : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('register')}
            className={`text-sm font-bold transition pb-2 border-b-2 ${
              mode === 'register' ? 'text-cyan-400 border-cyan-400' : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Vance"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-sans text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.vance@cyberpath.io"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-sans text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-sans text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center space-x-2"
          >
            <span>{mode === 'login' ? 'Access SOC Platform' : 'Join CYBERPATH Free'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Social auth mockup */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center">
          <div className="text-[11px] text-slate-500 font-mono mb-3">OR CONTINUE WITH</div>
          <div className="flex space-x-2">
            <button
              onClick={() => { onLoginSuccess('Alex Vance', 'alex.vance@cyberpath.io'); onClose(); }}
              className="flex-1 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:bg-slate-800 flex items-center justify-center space-x-2"
            >
              <Code2 className="w-4 h-4 text-white" />
              <span>GitHub Single-Sign-On</span>
            </button>
            <button
              onClick={() => { onLoginSuccess('Alex Vance', 'alex.vance@cyberpath.io'); onClose(); }}
              className="flex-1 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:bg-slate-800 flex items-center justify-center space-x-2"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Google Identity</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
