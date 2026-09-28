import React, { useState } from 'react';
import { Shield, Search, User, Menu, X, Terminal, Sparkles, ChevronRight, LogOut, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenAuth,
  isLoggedIn,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: 'Home', route: '/' },
    { label: 'Roadmap', route: '/roadmap' },
    { label: 'Courses', route: '/courses' },
    { label: 'Labs', route: '/labs' },
    { label: 'Tools', route: '/tools' },
    { label: 'Projects', route: '/projects' },
    { label: 'CTF', route: '/ctf' },
    { label: 'Careers', route: '/careers' },
    { label: 'Certifications', route: '/certifications' }
  ];

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick('/')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition duration-300">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 rounded-lg bg-cyan-400/10 animate-pulse-slow" />
            </div>
            <div>
              <span className="font-mono text-xl font-bold tracking-wider text-white">
                CYBER<span className="text-cyan-400">PATH</span>
              </span>
              <div className="hidden sm:block text-[9px] font-mono text-cyan-400/70 tracking-widest uppercase">
                SOC & Hacker Academy
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.route || (item.route !== '/' && currentRoute.startsWith(item.route));
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2.5">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition"
              title="Search CyberPath"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Search...</span>
              <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
                ⌘K
              </span>
            </button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleNavClick('/dashboard')}
                  className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/50 transition shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>
                <button
                  onClick={() => handleNavClick('/profile')}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition"
                  title="Profile"
                >
                  <User className="w-4 h-4" />
                </button>
                <button
                  onClick={onLogout}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-rose-400 hover:bg-rose-950/30 transition"
                  title="Log Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="hidden sm:inline-block px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition"
                >
                  Login
                </button>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="relative group px-4 py-1.5 rounded-lg text-xs font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-1">
                    <span>Get Started</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                  </span>
                </button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-cyan-500/20 px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.route || (item.route !== '/' && currentRoute.startsWith(item.route));
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/60 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          {!isLoggedIn && (
            <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
              <button
                onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }}
                className="w-full text-center py-2 text-sm text-slate-300 bg-slate-900 rounded-lg border border-slate-800"
              >
                Login
              </button>
              <button
                onClick={() => { onOpenAuth('register'); setMobileMenuOpen(false); }}
                className="w-full text-center py-2 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
