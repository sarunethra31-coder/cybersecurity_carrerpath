import React, { useState, useEffect, useRef } from 'react';
import { CyberParticles } from './components/CyberParticles';
import { CyberBubbleEffect, CyberBubbleRef } from './components/CyberBubbleEffect';
import { Navbar } from './components/Navbar';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { EditProfileModal } from './components/EditProfileModal';
import { HeroSection } from './components/HeroSection';
import { LearningFlow } from './components/LearningFlow';
import { RoadmapSection } from './components/RoadmapSection';
import { PopularLearningPaths } from './components/PopularLearningPaths';
import { CoursesSection } from './components/CoursesSection';
import { LabsSection } from './components/LabsSection';
import { ToolsSection } from './components/ToolsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CTFSection } from './components/CTFSection';
import { CareersSection } from './components/CareersSection';
import { CertificationsSection } from './components/CertificationsSection';
import { DashboardSection } from './components/DashboardSection';
import { ProfileSection } from './components/ProfileSection';
import { InteractiveCyberRoadmap } from './components/InteractiveCyberRoadmap';
import { Footer } from './components/Footer';

import { NEW_USER_PROFILE, DEMO_USER_PROFILE } from './data/cyberData';
import { UserProfile } from './types';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';

const STORAGE_KEY = 'cyberpath_user_profile';

const AUTH_STORAGE_KEY = 'cyberpath_is_logged_in';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isEditProfileOpen, setIsEditProfileOpen] = useState<boolean>(false);
  
  const bubbleRef = useRef<CyberBubbleRef>(null);

  // Load user profile from localStorage if exists, else fallback to NEW_USER_PROFILE
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error('Failed to load user profile from storage', err);
    }
    return NEW_USER_PROFILE;
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      return savedAuth === 'true';
    } catch {
      return false;
    }
  });

  // Sync profile changes to localStorage
  const saveUserProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (err) {
      console.error('Failed to save user profile to storage', err);
    }
  };

  // Global Keyboard listener for Cmd/Ctrl+K search shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    bubbleRef.current?.triggerNavigationBubbles(14);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleLoginSuccess = (name: string, email: string) => {
    const updated = {
      ...userProfile,
      name: name || userProfile.name || 'Cadet',
      email: email || userProfile.email || 'cadet@cyberpath.io',
      role: userProfile.role || 'Registered Learner'
    };
    saveUserProfile(updated);
    setIsLoggedIn(true);
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem(AUTH_STORAGE_KEY, 'false');
  };

  const handleResetProgress = () => {
    saveUserProfile(NEW_USER_PROFILE);
  };

  const handleLoadDemoData = () => {
    saveUserProfile(DEMO_USER_PROFILE);
  };

  const handleSaveProfileCustomization = (updatedFields: Partial<UserProfile>) => {
    const updated = {
      ...userProfile,
      ...updatedFields
    };
    saveUserProfile(updated);
  };

  const handleCompleteLab = (labId: string, points: number, skillsLearned: string[] = [], labTitle: string = 'Sandbox Lab') => {
    const existingCompleted = userProfile.completedLabIds || [];
    if (existingCompleted.includes(labId)) {
      // Lab already recorded as completed
      return;
    }

    const updatedLabIds = [...existingCompleted, labId];
    const newCompletedCount = updatedLabIds.length;
    const newCtfPoints = userProfile.ctfPoints + points;
    const newLevel = Math.floor(newCtfPoints / 100) + 1;

    // Create a new Skill Badge for completing this lab
    const today = new Date().toISOString().split('T')[0];
    const badgeId = `badge-lab-${labId}-${Date.now()}`;
    const badgeName = `${labTitle.split(' ')[0]} Master`;
    
    const newBadge = {
      id: badgeId,
      name: badgeName,
      icon: 'Award',
      earnedDate: today,
      color: 'text-emerald-400 border-emerald-400/30'
    };

    const updatedBadges = [...userProfile.badges, newBadge];

    // Update Skill Matrix progress bars based on skillsLearned
    const updatedSkillMatrix = userProfile.skillMatrix.map(item => {
      const match = skillsLearned.some(s =>
        s.toLowerCase().includes(item.skill.toLowerCase()) ||
        item.skill.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        return { ...item, value: Math.min(100, item.value + 35) };
      }
      // Give a subtle +15 boost to general security skills
      if (item.skill === 'Networking' || item.skill === 'Linux Ops') {
        return { ...item, value: Math.min(100, item.value + 20) };
      }
      return item;
    });

    const updatedProfile: UserProfile = {
      ...userProfile,
      completedLabIds: updatedLabIds,
      completedLabsCount: newCompletedCount,
      ctfPoints: newCtfPoints,
      level: newLevel,
      badges: updatedBadges,
      skillMatrix: updatedSkillMatrix
    };

    saveUserProfile(updatedProfile);
    bubbleRef.current?.triggerCompletionBurst(28);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* Background Animated Canvas & Subtle Cyber Mesh */}
      <CyberParticles />
      <CyberBubbleEffect ref={bubbleRef} currentRoute={currentRoute} />

      {/* Global Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={handleOpenAuth}
        onLogout={() => { setIsLoggedIn(false); saveUserProfile(NEW_USER_PROFILE); }}
        isLoggedIn={isLoggedIn}
      />

      {/* Main Page Render based on Route */}
      <main className="relative z-10 pt-16">
        
        {currentRoute === '/' && (
          <>
            <HeroSection user={userProfile} onNavigate={handleNavigate} onOpenAuth={handleOpenAuth} />
            <LearningFlow onNavigate={handleNavigate} />
            <RoadmapSection onNavigate={handleNavigate} />
            <PopularLearningPaths onNavigate={handleNavigate} />
            <CoursesSection onNavigate={handleNavigate} />
            <LabsSection onNavigate={handleNavigate} userProfile={userProfile} onCompleteLab={handleCompleteLab} />
            <ToolsSection onNavigate={handleNavigate} />
            <ProjectsSection onNavigate={handleNavigate} />
            <CTFSection onNavigate={handleNavigate} />
            <CareersSection onNavigate={handleNavigate} />
            <CertificationsSection onNavigate={handleNavigate} />

            {/* Bottom Call-To-Action Banner */}
            <section className="py-20 relative border-b border-cyan-500/10">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.2)] bg-gradient-to-b from-cyan-950/40 via-slate-950 to-slate-950 space-y-6">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>START YOUR CYBERSECURITY JOURNEY TODAY</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Ready to Become a <br className="hidden sm:inline" />
                    <span className="text-gradient-cyan">Cybersecurity Professional?</span>
                  </h2>

                  <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                    Join thousands of learners building hands-on skills with interactive terminal labs, realistic CTF puzzles, and career-aligned portfolio projects.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => handleNavigate('/roadmap')}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Explore Interactive Roadmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleNavigate('/labs')}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-cyan-300 bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 transition flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span>Try Sandboxed Lab</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentRoute === '/roadmap' && (
          <div className="py-4">
            <InteractiveCyberRoadmap onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/courses' && (
          <div className="py-8">
            <CoursesSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/labs' && (
          <div className="py-8">
            <LabsSection onNavigate={handleNavigate} userProfile={userProfile} onCompleteLab={handleCompleteLab} />
          </div>
        )}

        {currentRoute === '/tools' && (
          <div className="py-8">
            <ToolsSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/projects' && (
          <div className="py-8">
            <ProjectsSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/ctf' && (
          <div className="py-8">
            <CTFSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/careers' && (
          <div className="py-8">
            <CareersSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/certifications' && (
          <div className="py-8">
            <CertificationsSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute === '/dashboard' && (
          <DashboardSection
            user={userProfile}
            onNavigate={handleNavigate}
            onResetProgress={handleResetProgress}
            onLoadDemoData={handleLoadDemoData}
            onOpenEditProfile={() => setIsEditProfileOpen(true)}
          />
        )}

        {currentRoute === '/profile' && (
          <ProfileSection
            user={userProfile}
            onNavigate={handleNavigate}
            onResetProgress={handleResetProgress}
            onLoadDemoData={handleLoadDemoData}
            onOpenEditProfile={() => setIsEditProfileOpen(true)}
          />
        )}

      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        user={userProfile}
        onClose={() => setIsEditProfileOpen(false)}
        onSaveProfile={handleSaveProfileCustomization}
      />

    </div>
  );
}

export default App;
