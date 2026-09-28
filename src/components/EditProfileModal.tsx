import React, { useState } from 'react';
import { X, Upload, Check, User, Sparkles, Shield, Camera, Image as ImageIcon, Smile, Link as LinkIcon, RefreshCw } from 'lucide-react';
import { UserProfile } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  user: UserProfile;
  onClose: () => void;
  onSaveProfile: (updatedProfile: Partial<UserProfile>) => void;
}

export const PRESET_AVATARS = [
  {
    id: 'cyber-cadet',
    name: 'Cyber Cadet',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    category: 'Cyber Agent'
  },
  {
    id: 'soc-analyst',
    name: 'SOC Analyst',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    category: 'Blue Team'
  },
  {
    id: 'red-hacker',
    name: 'Red Teamer',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    category: 'Red Team'
  },
  {
    id: 'stealth-phantom',
    name: 'Stealth Phantom',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
    category: 'Stealth'
  },
  {
    id: 'ai-sentinel',
    name: 'AI Sentinel',
    url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80',
    category: 'AI Tech'
  },
  {
    id: 'matrix-operator',
    name: 'Matrix Operator',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    category: 'Ops'
  }
];

export const EMOJI_AVATARS = [
  { emoji: '🥷', label: 'Cyber Ninja' },
  { emoji: '🤖', label: 'AI Sentinel' },
  { emoji: '🦊', label: 'Red Fox' },
  { emoji: '🐉', label: 'Cyber Dragon' },
  { emoji: '👾', label: 'Glitch Monster' },
  { emoji: '🕵️', label: 'Secret Agent' },
  { emoji: '💻', label: 'Tech Wizard' },
  { emoji: '🛡️', label: 'Shield Guardian' },
  { emoji: '⚡', label: 'Cyber Flash' },
  { emoji: '☣️', label: 'Biohazard Spec' },
  { emoji: '🚀', label: 'Orbit Pilot' },
  { emoji: '💀', label: 'Black Hat' },
  { emoji: '🦅', label: 'Cyber Eagle' },
  { emoji: '🐯', label: 'Cyber Tiger' },
  { emoji: '🦁', label: 'Cyber Lion' },
  { emoji: '👑', label: 'Crown Master' },
  { emoji: '🔮', label: 'Quantum Sphere' },
  { emoji: '🛸', label: 'Alien Operative' },
  { emoji: '🌋', label: 'Vulcan Red' },
  { emoji: '🎯', label: 'Targeting System' },
  { emoji: '🌌', label: 'Galaxy Voyager' },
  { emoji: '🧬', label: 'DNA Cybertech' },
  { emoji: '🪐', label: 'Saturn Ring' },
  { emoji: '⚔️', label: 'Cyber Blade' },
  { emoji: '💣', label: 'Exploit Payload' },
  { emoji: '🦾', label: 'Bionic Limb' },
  { emoji: '🔥', label: 'Inferno' },
  { emoji: '🏆', label: 'Champion' },
  { emoji: '☠️', label: 'Ransom Spectre' },
  { emoji: '👻', label: 'Ghost Hacker' },
  { emoji: '👿', label: 'Daemon Spec' },
  { emoji: '📡', label: 'Satellite Array' }
];

export const AVATAR_BG_GRADIENTS = [
  { id: 'cyan', name: 'Cyan Cyber', from: '#0891b2', to: '#1e3a8a', css: 'from-cyan-600 to-blue-900' },
  { id: 'emerald', name: 'Emerald Defense', from: '#059669', to: '#134e4a', css: 'from-emerald-600 to-teal-900' },
  { id: 'purple', name: 'Purple Matrix', from: '#9333ea', to: '#312e81', css: 'from-purple-600 to-indigo-900' },
  { id: 'amber', name: 'Amber Warning', from: '#d97706', to: '#7c2d12', css: 'from-amber-600 to-orange-900' },
  { id: 'crimson', name: 'Crimson Red', from: '#e11d48', to: '#450a0a', css: 'from-rose-600 to-red-950' },
  { id: 'slate', name: 'Neon Slate', from: '#475569', to: '#0f172a', css: 'from-slate-600 to-slate-950' }
];

const generateEmojiAvatarDataUrl = (emoji: string, gradient: typeof AVATAR_BG_GRADIENTS[0]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${gradient.from}" />
        <stop offset="100%" stop-color="${gradient.to}" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" rx="40" fill="url(#grad)" />
    <text x="50%" y="54%" font-size="100" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  user,
  onClose,
  onSaveProfile
}) => {
  const [activeTab, setActiveTab] = useState<'preset' | 'emoji' | 'upload' | 'url'>('preset');
  
  // Profile Form States
  const [name, setName] = useState<string>(user.name);
  const [handle, setHandle] = useState<string>(user.handle);
  const [terminalUser, setTerminalUser] = useState<string>(user.terminalUser || user.handle.replace('@', '') || 'user');
  const [role, setRole] = useState<string>(user.role);
  const [avatarUrl, setAvatarUrl] = useState<string>(user.avatar);

  // Emoji Creator States
  const [selectedEmoji, setSelectedEmoji] = useState<string>('🥷');
  const [selectedGradient, setSelectedGradient] = useState(AVATAR_BG_GRADIENTS[0]);

  // Custom Upload State
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [customUrlInput, setCustomUrlInput] = useState<string>('');

  if (!isOpen) return null;

  const handleApplyEmoji = (emoji: string, gradient = selectedGradient) => {
    setSelectedEmoji(emoji);
    const dataUrl = generateEmojiAvatarDataUrl(emoji, gradient);
    setAvatarUrl(dataUrl);
  };

  const handleApplyGradient = (gradient: typeof AVATAR_BG_GRADIENTS[0]) => {
    setSelectedGradient(gradient);
    const dataUrl = generateEmojiAvatarDataUrl(selectedEmoji, gradient);
    setAvatarUrl(dataUrl);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image file size must be less than 5MB.');
      return;
    }

    setUploadError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setAvatarUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyCustomUrl = () => {
    if (!customUrlInput.trim()) return;
    setAvatarUrl(customUrlInput.trim());
  };

  const handleSave = () => {
    onSaveProfile({
      name: name.trim() || user.name,
      handle: handle.startsWith('@') ? handle.trim() : `@${handle.trim()}`,
      terminalUser: terminalUser.trim().toLowerCase().replace(/[^a-z0-9_]/g, '') || 'user',
      role: role.trim() || user.role,
      avatar: avatarUrl
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col my-auto text-left">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-950 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">Customize Profile & Avatar</h2>
              <p className="text-xs text-slate-400 font-mono">Personalize your cyber identity, avatar, and callsign</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto max-h-[75vh]">
          
          {/* Live Profile Card Preview */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 flex items-center space-x-4">
            <div className="relative shrink-0">
              <img
                src={avatarUrl}
                alt="Avatar Preview"
                className="w-16 h-16 rounded-2xl border-2 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,240,255,0.4)] bg-slate-900"
              />
              <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded bg-cyan-400 text-black text-[9px] font-mono font-bold">
                LVL {user.level}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">LIVE PREVIEW</div>
              <h3 className="text-base font-bold text-white truncate">{name || 'Your Name'}</h3>
              <div className="text-xs font-mono text-cyan-400">{handle || '@handle'}</div>
              <div className="text-xs text-slate-400 mt-0.5">{role}</div>
            </div>
          </div>

          {/* Profile Details Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Vance"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Callsign / Handle</label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="e.g. @saru_004"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Terminal Username</label>
              <input
                type="text"
                value={terminalUser}
                onChange={(e) => setTerminalUser(e.target.value)}
                placeholder="e.g. saru"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-emerald-400 focus:outline-none focus:border-emerald-400 font-mono"
              />
              <div className="text-[10px] text-slate-400 font-mono mt-1">
                Prompt: <span className="text-cyan-400">{terminalUser || 'user'}@cyberpath:~$</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Security Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
              >
                <option value="Registered Learner">Registered Learner</option>
                <option value="SOC Analyst">SOC Analyst</option>
                <option value="Red Teamer">Red Teamer</option>
                <option value="Security Researcher">Security Researcher</option>
                <option value="Bug Bounty Hunter">Bug Bounty Hunter</option>
                <option value="Cybersecurity Student">Cybersecurity Student</option>
                <option value="DevSecOps Engineer">DevSecOps Engineer</option>
              </select>
            </div>
          </div>

          {/* Avatar Source Tabs */}
          <div>
            <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Choose Avatar Style
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('preset')}
                className={`px-3 py-2 rounded-lg text-xs font-mono transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                  activeTab === 'preset'
                    ? 'bg-cyan-500 text-black font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Cyber Avatars</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('emoji')}
                className={`px-3 py-2 rounded-lg text-xs font-mono transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                  activeTab === 'emoji'
                    ? 'bg-cyan-500 text-black font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smile className="w-3.5 h-3.5" />
                <span>Emoji Badges</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`px-3 py-2 rounded-lg text-xs font-mono transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                  activeTab === 'upload'
                    ? 'bg-cyan-500 text-black font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload File</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('url')}
                className={`px-3 py-2 rounded-lg text-xs font-mono transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                  activeTab === 'url'
                    ? 'bg-cyan-500 text-black font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Image URL</span>
              </button>
            </div>

            {/* TAB 1: PRESET CYBER AVATARS */}
            {activeTab === 'preset' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRESET_AVATARS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setAvatarUrl(preset.url)}
                    className={`p-3 rounded-xl border text-left transition flex items-center space-x-3 cursor-pointer ${
                      avatarUrl === preset.url
                        ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <img src={preset.url} alt={preset.name} className="w-10 h-10 rounded-xl object-cover border border-slate-700 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white line-clamp-1">{preset.name}</div>
                      <div className="text-[10px] text-cyan-400 font-mono">{preset.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* TAB 2: EMOJI BADGE CREATOR */}
            {activeTab === 'emoji' && (
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">1. Choose Emoji Icon:</div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {EMOJI_AVATARS.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleApplyEmoji(item.emoji)}
                        className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                          selectedEmoji === item.emoji
                            ? 'bg-cyan-950 border-cyan-400 shadow-md scale-105'
                            : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-2xl">{item.emoji}</div>
                        <div className="text-[9px] text-slate-400 font-mono mt-1 line-clamp-1">{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">2. Choose Background Color Theme:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {AVATAR_BG_GRADIENTS.map((grad) => (
                      <button
                        key={grad.id}
                        type="button"
                        onClick={() => handleApplyGradient(grad)}
                        className={`p-2.5 rounded-xl border text-left flex items-center space-x-2 transition cursor-pointer ${
                          selectedGradient.id === grad.id
                            ? 'border-cyan-400 bg-slate-900 shadow-md'
                            : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${grad.css} shrink-0 border border-white/20`} />
                        <span className="text-xs font-mono text-slate-200">{grad.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: UPLOAD CUSTOM FILE FROM COMPUTER */}
            {activeTab === 'upload' && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-dashed border-cyan-500/40 text-center space-y-3">
                <div className="p-3 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 w-12 h-12 mx-auto flex items-center justify-center">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-1">Upload Your Custom Picture</div>
                  <p className="text-[11px] text-slate-400">Supports PNG, JPG, WEBP, or SVG files up to 5MB.</p>
                </div>

                <label className="inline-flex items-center px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs cursor-pointer transition shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <span>Select Image File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {uploadError && (
                  <div className="text-xs text-rose-400 font-mono mt-2">{uploadError}</div>
                )}
              </div>
            )}

            {/* TAB 4: CUSTOM IMAGE URL */}
            {activeTab === 'url' && (
              <div className="space-y-3">
                <label className="block text-xs font-mono text-slate-400">Direct Image URL</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="url"
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    placeholder="https://example.com/my-photo.png"
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCustomUrl}
                    className="px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-mono font-bold transition cursor-pointer"
                  >
                    Apply URL
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 hover:text-white transition cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] transition flex items-center space-x-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>

      </div>
    </div>
  );
};
