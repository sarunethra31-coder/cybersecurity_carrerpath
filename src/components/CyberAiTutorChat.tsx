import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, Terminal, Copy, Check, HelpCircle, Languages } from 'lucide-react';

export type LanguageMode = 'en' | 'ta' | 'tanglish';

interface CyberAiTutorChatProps {
  topicTitle: string;
  category: string;
  aiPrompts?: string[];
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  codeSnippet?: string;
  lang?: LanguageMode;
}

export const CyberAiTutorChat: React.FC<CyberAiTutorChatProps> = ({ topicTitle, category, aiPrompts = [] }) => {
  const [selectedLang, setSelectedLang] = useState<LanguageMode>('en');

  const getGreetingText = (lang: LanguageMode) => {
    if (lang === 'ta') {
      return `வணக்கம் தோழா! 🛡️ நான் உங்கள் CyberPath AI Tutor (தமிழ் வழி கற்றல்). **"${topicTitle}"** (${category}) பாடத்தின் தகவல்கள் தயார்.\n\nஏதேனும் சந்தேகங்கள் இருந்தால் தமிழில் கேளுங்கள்!`;
    }
    if (lang === 'tanglish') {
      return `Vanakkam Cadet! 🚀 Naan unga CyberPath AI Tutor. **"${topicTitle}"** (${category}) pathi edhavadhu doubt irundha, Tanglish la free-ah kelunga. Code, Commands and Concepts simple-ah explain panren!`;
    }
    return `Greetings Cadet! I am your CyberPath AI Tutor (Gemini-powered). I have loaded the full curriculum context for **"${topicTitle}"** (${category}).\n\nAsk me any questions, request code/command breakdowns, or click one of the suggested prompts below!`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'ai',
      text: getGreetingText('en'),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      lang: 'en'
    }
  ]);

  const [inputQuery, setInputQuery] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getPromptsForLang = (lang: LanguageMode) => {
    if (lang === 'ta') {
      return [
        `${topicTitle} என்றால் என்ன? முக்கியத்துவம் என்ன?`,
        `${topicTitle}-ல் 3 முக்கிய Commands தருக.`,
        `${topicTitle} பாதுகாப்பு தமிழில் விளக்குக.`
      ];
    }
    if (lang === 'tanglish') {
      return [
        `${topicTitle} na enna bro? Simple-ah sollu!`,
        `${topicTitle} la top 3 commands enna?`,
        `${topicTitle} security epdi work agudhu?`
      ];
    }
    return aiPrompts.length > 0 ? aiPrompts : [
      `What is ${topicTitle} and why is it critical in cybersecurity?`,
      `Give me 3 essential commands and tools used in ${topicTitle}.`,
      `Explain the core architecture of ${topicTitle} in simple terms.`
    ];
  };

  const handleLanguageSwitch = (lang: LanguageMode) => {
    setSelectedLang(lang);
    const systemNotice: ChatMessage = {
      id: `notice-${Date.now()}`,
      sender: 'ai',
      text: getGreetingText(lang),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      lang
    };
    setMessages(prev => [...prev, systemNotice]);
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      lang: selectedLang
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = '';
      let snippet: string | undefined = undefined;
      const lower = query.toLowerCase();

      // TAMIL RESPONSE GENERATION
      if (selectedLang === 'ta') {
        aiText = `**"${topicTitle}"** பற்றிய கேள்வி: **"${query}"**\n\n`;

        if (lower.includes('gdpr') || lower.includes('compliance') || lower.includes('விதி') || lower.includes('சட்டம்')) {
          aiText += `**GDPR & தரவு பாதுகாப்பு தமிழ் விளக்கம்**:\n- **தரவு பாதுகாப்பு**: பயனர்களின் தனிப்பட்ட தகவல்களை அனுமதியின்றி சேமிக்கக் கூடாது.\n- **72 மணிநேர அறிவிப்பு**: Breach நடந்தால் 72 மணிநேரத்தில் அறிவிக்க வேண்டும்.\n- **அபராதம்**: 20M Euro அல்லது 4% வருடாந்திர வருவாய் அபராதம்.`;
          snippet = `# PII Data Masking in Python:\nimport re\ndef sanitize_email(email):\n    return re.sub(r"(?<=.)[^@](?=[^@]*?@)", "*", email)\n\nprint(sanitize_email("user@cyberpath.in")) # u***@cyberpath.in`;
        } else if (lower.includes('command') || lower.includes('கட்டளை') || lower.includes('tools')) {
          aiText += `**${topicTitle} பாடத்திற்கான 3 முக்கிய Commands**:\n\n1. **System Audit**: \`lynis audit system\`\n2. **Network Ports**: \`netstat -tulpn\`\n3. **Integrity Hash**: \`sha256sum /etc/passwd\``;
          snippet = `sudo lynis audit system --quick\nsha256sum /etc/shadow`;
        } else {
          aiText += `**பாதுகாப்பு கோட்பாடுகள் (Security Principles)**:\n- **ரகசியம் காத்தல் (Confidentiality)**: தரவு ரகசியமாக இருக்க வேண்டும்.\n- **உண்மைத்தன்மை (Integrity)**: தரவு மாற்றப்படாமல் இருக்க வேண்டும்.\n- **கிடைக்கும்தன்மை (Availability)**: 24/7 சேவை இயக்கத்தில் இருக்க வேண்டும்.`;
          snippet = `sudo ufw status verbose`;
        }
      } 
      // TANGLISH RESPONSE GENERATION
      else if (selectedLang === 'tanglish') {
        aiText = `**"${topicTitle}"** pathi unga question: **"${query}"**\n\n`;

        if (lower.includes('gdpr') || lower.includes('compliance') || lower.includes('law') || lower.includes('rule')) {
          aiText += `**GDPR Compliance Tanglish breakdown**:\n\n1. **Data Privacy**: Personal data capture panna permission mukkiyam.\n2. **72 Hours Alert**: Hack aachuna 72 hours kulla alert anupanum.\n3. **Penalty**: Max 4% global revenue penalty poduvanga bro!`;
          snippet = `# Python PII Masking:\nimport re\ndef mask_email(email):\n    u, d = email.split('@')\n    return f"{u[0]}***@{d}"\n\nprint(mask_email("cadet@cyberpath.com"))`;
        } else if (lower.includes('command') || lower.includes('tools') || lower.includes('terminal')) {
          aiText += `**${topicTitle} la TOP 3 Power Commands**:\n\n1. **\`lynis audit system\`**: System hardening check.\n2. **\`netstat -tulpn\`**: Open ports check.\n3. **\`sha256sum /etc/passwd\`**: File hash integrity verify panna!`;
          snippet = `sudo lynis audit system\nnetstat -tulpn | grep ESTABLISHED`;
        } else {
          aiText += `**Cybersecurity Main Pillars (Tanglish)**:\n\n- **Confidentiality**: Secret-ah irukkanum, leak aaga koodadhu.\n- **Integrity**: Data alter aagadhadhu nu SHA-256 hash verify pannanum.\n- **Availability**: 24/7 Server active-ah irukkanum.\n\n👉 *Mass Tip*: PoLP (Least Privilege) follow panna super safe!`;
          snippet = `sudo ufw status verbose\nwhoami`;
        }
      } 
      // ENGLISH RESPONSE GENERATION
      else {
        aiText = `Here is a detailed analysis for **"${query}"** regarding **${topicTitle}**:\n\n`;

        if (lower.includes('gdpr') || lower.includes('compliance') || lower.includes('iso')) {
          aiText += `**Governance & GDPR Compliance Framework**:\n1. **Privacy by Design**: Systems must enforce PII anonymization.\n2. **Incident Disclosure**: Breaches must be reported within 72 hours.\n3. **Sanctions**: Fines up to €20M or 4% of global turnover.`;
          snippet = `# PII Data Anonymization in Python:\nimport hashlib\ndef anonymize(id):\n    return hashlib.sha256(id.encode()).hexdigest()[:16]\nprint(anonymize("user_10294"))`;
        } else if (lower.includes('command') || lower.includes('tool')) {
          aiText += `**Key Operational Security Commands**:\n- \`lynis audit system\` - Hardening audit scan.\n- \`netstat -tulpn\` - Open ports inspection.\n- \`sha256sum /etc/passwd\` - System file integrity verification.`;
          snippet = `sudo lynis audit system --quick\nsha256sum /etc/passwd`;
        } else {
          aiText += `In **${topicTitle}**, defensive posture requires layered controls across endpoints and network policies.\n\nKey Takeaways:\n- Enforce Principle of Least Privilege (PoLP).\n- Audit system logs continuously.\n- Validate all inputs at system boundaries.`;
          snippet = `sudo ufw status verbose`;
        }
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        codeSnippet: snippet,
        lang: selectedLang
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-left min-h-0">
      
      {/* Header with Language Selector Toggle */}
      <div className="p-3 sm:p-4 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-xl bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">CYBER AI TUTOR</h4>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[10px] text-amber-300 font-mono line-clamp-1">Context: {topicTitle}</p>
          </div>
        </div>

        {/* Multi-Language Selector Toggle Pill */}
        <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-amber-500/30">
          <button
            onClick={() => handleLanguageSwitch('en')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition cursor-pointer ${
              selectedLang === 'en'
                ? 'bg-amber-400 text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            English
          </button>

          <button
            onClick={() => handleLanguageSwitch('ta')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition cursor-pointer ${
              selectedLang === 'ta'
                ? 'bg-amber-400 text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            தமிழ்
          </button>

          <button
            onClick={() => handleLanguageSwitch('tanglish')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition cursor-pointer ${
              selectedLang === 'tanglish'
                ? 'bg-amber-400 text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tanglish
          </button>
        </div>
      </div>

      {/* Suggested Prompt Chips */}
      <div className="p-2.5 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto shrink-0 max-h-[100px]">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <HelpCircle className="w-3 h-3 text-amber-400 mr-1" />
            <span>Suggested Questions ({selectedLang === 'ta' ? 'தமிழ்' : selectedLang === 'tanglish' ? 'Tanglish' : 'English'}):</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {getPromptsForLang(selectedLang).map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-lg bg-amber-950/20 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/50 transition text-[11px] text-amber-200 text-left line-clamp-1 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Message History - flex-1 min-h-0 guarantees scrollable message list inside available height */}
      <div className="flex-1 min-h-0 p-3 sm:p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-slate-800">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <div className={`p-1.5 rounded-lg shrink-0 ${msg.sender === 'user' ? 'bg-cyan-500 text-black' : 'bg-amber-400 text-black'}`}>
              {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            <div className={`max-w-[88%] rounded-2xl p-3 text-xs leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-100 rounded-tr-none'
                : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              {/* Language Tag */}
              {msg.lang && msg.sender === 'ai' && (
                <div className="text-[9px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                  [{msg.lang === 'ta' ? 'தமிழ்' : msg.lang === 'tanglish' ? 'Tanglish' : 'English'}]
                </div>
              )}

              <div className="whitespace-pre-wrap">{msg.text}</div>

              {/* Code Snippet Box */}
              {msg.codeSnippet && (
                <div className="mt-2.5 rounded-xl bg-slate-950 border border-slate-800 p-2 font-mono text-[11px] text-emerald-300 relative group">
                  <button
                    onClick={() => handleCopyCode(msg.id, msg.codeSnippet!)}
                    className="absolute top-2 right-2 p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                    title="Copy Code"
                  >
                    {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <pre className="overflow-x-auto pr-6">{msg.codeSnippet}</pre>
                </div>
              )}

              <div className="text-[9px] font-mono text-slate-400 mt-1 text-right">{msg.timestamp}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center space-x-2 text-slate-400 text-xs font-mono">
            <Bot className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Cyber AI Tutor ({selectedLang.toUpperCase()}) is thinking...</span>
          </div>
        )}
      </div>

      {/* Input Box - shrink-0 ensures input box is ALWAYS pinned at bottom */}
      <div className="p-3 bg-slate-900/90 border-t border-slate-800 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={
              selectedLang === 'ta'
                ? `${topicTitle} பற்றி தமிழில் கேளுங்கள்...`
                : selectedLang === 'tanglish'
                ? `Ask anything in Tanglish about ${topicTitle}...`
                : `Ask Cyber AI Tutor anything about ${topicTitle}...`
            }
            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="p-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold disabled:opacity-40 transition cursor-pointer shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
