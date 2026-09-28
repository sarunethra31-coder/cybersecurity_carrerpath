import {
  Course,
  Lab,
  SecurityTool,
  Project,
  CTFChallenge,
  LeaderboardUser,
  CareerPath,
  CertificationPrep,
  UserProfile,
  RoadmapNode
} from '../types';

export const LEARNING_FLOW_STEPS = [
  {
    step: '01',
    title: 'LEARN',
    description: 'Understand cybersecurity concepts from fundamentals to advanced topics.',
    icon: 'BookOpen',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/40',
    glowColor: 'shadow-cyan-500/20'
  },
  {
    step: '02',
    title: 'PRACTICE',
    description: 'Apply your knowledge through safe hands-on sandboxed labs.',
    icon: 'Terminal',
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-500/40',
    glowColor: 'shadow-blue-500/20'
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'Create real-world cybersecurity portfolio projects.',
    icon: 'Code2',
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/40',
    glowColor: 'shadow-purple-500/20'
  },
  {
    step: '04',
    title: 'TEST',
    description: 'Challenge yourself with quizzes and competitive CTF arenas.',
    icon: 'Flag',
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-500/40',
    glowColor: 'shadow-amber-500/20'
  },
  {
    step: '05',
    title: 'TRACK',
    description: 'Monitor your skills, progress and job-ready career journey.',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/40',
    glowColor: 'shadow-emerald-500/20'
  }
];

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: '1',
    name: 'Computer Fundamentals',
    category: 'Foundation',
    icon: 'Cpu',
    level: '01',
    description: 'Master binary, CPU architecture, memory layouts, OS internals, and hardware fundamentals.',
    estimatedTime: '12 Hours',
    skills: ['CPU Architecture', 'RAM & Memory Storage', 'Binary & Hexadecimal', 'OS Processes'],
    topics: ['Computer Hardware & Logic Gates', 'Memory Hierarchy (RAM, Cache, Registers)', 'Operating System Concepts', 'Process Execution & Threads'],
    courseId: 'course-1',
    recommendedLabId: 'lab-1'
  },
  {
    id: '2',
    name: 'Networking Basics',
    category: 'Foundation',
    icon: 'Network',
    level: '02',
    description: 'Understand TCP/IP, OSI model, subnetting, DNS resolution, and packet structures.',
    estimatedTime: '18 Hours',
    skills: ['OSI 7-Layer Model', 'IPv4 & Subnetting', 'TCP/UDP Handshakes', 'Wireshark Analysis'],
    topics: ['TCP/IP Stack Breakdown', 'IP Addressing & Subnet Masks', 'DNS, HTTP, SSH, FTP Protocols', 'Packet Inspection with Wireshark'],
    courseId: 'course-1',
    recommendedLabId: 'lab-1'
  },
  {
    id: '3',
    name: 'Linux Mastery',
    category: 'System',
    icon: 'Terminal',
    level: '03',
    description: 'Command line operations, file permissions, shell environments, and system administration.',
    estimatedTime: '20 Hours',
    skills: ['Bash Terminal', 'CHMOD & CHOWN', 'Linux System Administration', 'Process Management'],
    topics: ['Essential Shell Commands & Nav', 'File Permissions & User Groups', 'Package Managers (apt, pacman)', 'Cron Jobs & System Services (systemd)'],
    courseId: 'course-1',
    recommendedLabId: 'lab-1'
  },
  {
    id: '4',
    name: 'Python & Shell Scripting',
    category: 'Programming',
    icon: 'Code',
    level: '04',
    description: 'Automate security auditing, write custom socket scripts, and parse packet data.',
    estimatedTime: '25 Hours',
    skills: ['Python Sockets', 'Automation Scripts', 'JSON/Regex Parsing', 'Paramiko & Requests'],
    topics: ['Python Control Flow & Functions', 'Network Socket Programming', 'Parsing Log Files & JSON', 'Building Port Scanners in Python'],
    courseId: 'course-2',
    recommendedLabId: 'lab-2'
  },
  {
    id: '5',
    name: 'Cybersecurity Fundamentals',
    category: 'Security Core',
    icon: 'Shield',
    level: '05',
    description: 'CIA triad, threat vectors, cryptography basics, authentication, and security policy frameworks.',
    estimatedTime: '15 Hours',
    skills: ['CIA Triad', 'Symmetric & Asymmetric Encryption', 'Access Control (RBAC)', 'Threat Modeling'],
    topics: ['Confidentiality, Integrity, Availability', 'Symmetric vs Asymmetric Crypto (RSA, AES)', 'Hashing Functions (SHA-256, MD5)', 'Identity & Access Management (IAM)'],
    courseId: 'course-1',
    recommendedLabId: 'lab-1'
  },
  {
    id: '6',
    name: 'Web Security & OWASP',
    category: 'Offensive',
    icon: 'Globe',
    level: '06',
    description: 'Identify and exploit OWASP Top 10 vulnerabilities including SQLi, XSS, and CSRF.',
    estimatedTime: '30 Hours',
    skills: ['OWASP Top 10', 'SQL Injection (SQLi)', 'Cross-Site Scripting (XSS)', 'Burp Suite Proxy'],
    topics: ['HTTP Requests & Headers Inspection', 'Reflected & Stored XSS', 'Union & Blind SQL Injection', 'CSRF & Broken Authentication'],
    courseId: 'course-2',
    recommendedLabId: 'lab-2'
  },
  {
    id: '7',
    name: 'Ethical Hacking & Pentesting',
    category: 'Offensive',
    icon: 'Zap',
    level: '07',
    description: 'Hands-on penetration testing methodologies, Nmap reconnaissance, and Metasploit exploitation.',
    estimatedTime: '40 Hours',
    skills: ['Nmap Reconnaissance', 'Metasploit Framework', 'Privilege Escalation', 'Post-Exploitation'],
    topics: ['Information Gathering & OSINT', 'Port Scanning & Service Fingerprinting', 'Exploiting Vulnerable Services', 'Linux & Windows Privilege Escalation'],
    courseId: 'course-3',
    recommendedLabId: 'lab-2'
  },
  {
    id: '8',
    name: 'Digital Forensics & Incident',
    category: 'Defensive',
    icon: 'FileSearch',
    level: '08',
    description: 'Extract digital evidence, analyze memory dumps, inspect disk images, and investigate attacks.',
    estimatedTime: '35 Hours',
    skills: ['Memory Dump Analysis', 'Autopsy & Volatility', 'Registry Forensics', 'Evidence Chain of Custody'],
    topics: ['Digital Evidence Collection Methods', 'Volatility RAM Artifact Extraction', 'Windows Registry Analysis', 'Browser & System Event Log Forensics'],
    courseId: 'course-5',
    recommendedLabId: 'lab-5'
  },
  {
    id: '9',
    name: 'SOC & Blue Team Ops',
    category: 'Defensive',
    icon: 'Activity',
    level: '09',
    description: 'Enterprise SIEM analysis, incident response workflows, and real-time intrusion monitoring.',
    estimatedTime: '35 Hours',
    skills: ['SIEM Alert Triage', 'Splunk Queries', 'Snort/Suricata IDS', 'Incident Response (NIST)'],
    topics: ['Security Information & Event Management (SIEM)', 'Writing Custom IDS Rules (Snort)', 'Investigating Malicious Network Traffic', 'NIST SP 800-61 Incident Response'],
    courseId: 'course-4',
    recommendedLabId: 'lab-4'
  },
  {
    id: '10',
    name: 'Cloud Security (AWS/Azure)',
    category: 'Advanced',
    icon: 'Cloud',
    level: '10',
    description: 'Secure cloud infrastructure, IAM policies, container clusters, and serverless environments.',
    estimatedTime: '30 Hours',
    skills: ['AWS IAM & S3 Security', 'Azure Key Vault', 'Docker & K8s Hardening', 'Terraform Auditing'],
    topics: ['Cloud Shared Responsibility Model', 'Securing AWS S3 & IAM Least Privilege', 'Container Isolation & Kubernetes Hardening', 'Auditing Cloud Security Posture (CSPM)'],
    courseId: 'course-6',
    recommendedLabId: 'lab-6'
  },
  {
    id: '11',
    name: 'Advanced Threat Hunting',
    category: 'Mastery',
    icon: 'Target',
    level: '11',
    description: 'Proactively search through enterprise networks to detect hidden, persistent adversary threats.',
    estimatedTime: '45 Hours',
    skills: ['MITRE ATT&CK Mapping', 'Sysmon & EDR Telemetry', 'YARA Rule Creation', 'Behavioral Anomaly Detection'],
    topics: ['MITRE ATT&CK Matrix Navigation', 'Sysmon Event Log Analysis', 'Creating YARA Rules for Malware Detection', 'Hunting Advanced Persistent Threats (APTs)'],
    courseId: 'course-4',
    recommendedLabId: 'lab-4'
  }
];


export const POPULAR_LEARNING_PATHS = [
  {
    id: 'ethical-hacker',
    title: 'Ethical Hacker',
    description: 'Learn to think like a hacker and discover system vulnerabilities before adversaries do.',
    modulesCount: 24,
    progress: 0,
    icon: 'Zap',
    badge: 'Offensive',
    accentColor: 'cyan'
  },
  {
    id: 'soc-analyst',
    title: 'SOC Analyst',
    description: 'Monitor, detect and respond to enterprise threats in real-time within security operations.',
    modulesCount: 28,
    progress: 0,
    icon: 'ShieldCheck',
    badge: 'Defensive',
    accentColor: 'blue'
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester',
    description: 'Find and exploit vulnerabilities in authorized corporate environments with industry tools.',
    modulesCount: 30,
    progress: 0,
    icon: 'Crosshair',
    badge: 'Offensive',
    accentColor: 'purple'
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    description: 'Investigate digital evidence, extract artifacts, and solve complex cybercrime cases.',
    modulesCount: 18,
    progress: 0,
    icon: 'Search',
    badge: 'Forensics',
    accentColor: 'emerald'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    description: 'Secure cloud infrastructure, container clusters, and IAM configurations across AWS and Azure.',
    modulesCount: 22,
    progress: 0,
    icon: 'CloudLightning',
    badge: 'Cloud',
    accentColor: 'amber'
  },
  {
    id: 'application-security',
    title: 'Application Security',
    description: 'Build secure codebases, conduct code audits, and prevent modern web application attacks.',
    modulesCount: 20,
    progress: 0,
    icon: 'Lock',
    badge: 'AppSec',
    accentColor: 'rose'
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Cybersecurity Fundamentals & Threat Architecture',
    category: 'Cybersecurity Fundamentals',
    description: 'Master core principles of CIA triad, threat modeling, security policies, and modern cyber risk management.',
    difficulty: 'Beginner',
    duration: '12 Hours',
    lessonsCount: 18,
    studentsCount: 14200,
    rating: 4.9,
    badge: 'Essential',
    skills: ['CIA Triad', 'Threat Modeling', 'Risk Assessment', 'Access Control'],
    syllabus: [
      { 
        title: 'Module 1: Introduction to Cyber Defense', 
        duration: '2h', 
        topics: ['Core Terminology', 'CIA Triad', 'Defense in Depth'],
        summary: 'Fundamental building blocks of information security, focusing on Confidentiality, Integrity, and Availability alongside multi-layered perimeter defense.',
        keyConcepts: [
          'Confidentiality: Protecting sensitive data from unauthorized exposure.',
          'Integrity: Guarding data against unauthorized modification or tampering.',
          'Availability: Ensuring timely and reliable access to systems and services.',
          'Defense in Depth: Layered security controls across physical, network, endpoint, and application tiers.'
        ],
        commandSnippets: [
          { cmd: 'sha256sum /etc/passwd', explanation: 'Verify system file integrity using SHA-256 cryptographic hashes.' },
          { cmd: 'sudo ufw status verbose', explanation: 'Audit host firewall rules to restrict network availability to trusted ports.' }
        ],
        codeExample: {
          language: 'python',
          title: 'CIA Triad Integrity Verification in Python',
          code: `import hashlib\n\ndef verify_file_integrity(filepath, expected_hash):\n    hasher = hashlib.sha256()\n    with open(filepath, 'rb') as f:\n        while chunk := f.read(8192):\n            hasher.update(chunk)\n    calculated = hasher.hexdigest()\n    is_valid = calculated == expected_hash\n    print(f"File: {filepath} | Valid: {is_valid}")
    return is_valid\n\n# Example: check system file\n# verify_file_integrity('/etc/shadow', 'a1b2c3...')`
        },
        aiPrompts: [
          'Explain the CIA Triad with a real-world banking scenario.',
          'What is Defense in Depth and how does it prevent zero-day exploits?',
          'Give me command line examples for auditing file integrity.',
          'Quiz me on Module 1 concepts with 3 multiple choice questions.'
        ]
      },
      { 
        title: 'Module 2: Threat Actors & Attack Vectors', 
        duration: '3h', 
        topics: ['Nation State APTs', 'Ransomware Ecosystems', 'Social Engineering'],
        summary: 'Deep dive into adversary profiles, Advanced Persistent Threats (APTs), ransomware delivery chains, and psychological manipulation methods.',
        keyConcepts: [
          'APTs (Advanced Persistent Threats): Stealthy, long-term state-sponsored cyber espionage operators.',
          'Ransomware-as-a-Service (RaaS): Double-extortion models involving data encryption & exfiltration leaks.',
          'Phishing & Spearfishing: Targeted social engineering via spoofed domain vectors.'
        ],
        commandSnippets: [
          { cmd: 'nmap -sS -p 445 10.0.0.0/24', explanation: 'Scan local network for vulnerable SMB ports exploited by WannaCry/EternalBlue.' },
          { cmd: 'crontab -l', explanation: 'Check cron schedules for malicious persistence mechanisms installed by ransomware.' }
        ],
        codeExample: {
          language: 'bash',
          title: 'Detecting Suspicious Outbound C2 Callback Connections',
          code: `# Inspect active established network connections & process PIDs
netstat -tupn | grep ESTABLISHED | awk '{print $5, $6, $7}'

# Audit running processes for hidden execution from /tmp
ps aux | grep -i "/tmp/"`
        },
        aiPrompts: [
          'What is the difference between an APT attack and opportunistic malware?',
          'How does a ransomware double-extortion scheme operate?',
          'Show me how to detect spear-phishing email headers.',
          'How can I spot persistent cron job backdoors in Linux?'
        ]
      },
      { 
        title: 'Module 3: Security Architecture & Controls', 
        duration: '4h', 
        topics: ['NIST Framework', 'Zero Trust Architecture', 'Security Controls'],
        summary: 'Architecting resilient enterprise networks using NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover) and Never Trust, Always Verify controls.',
        keyConcepts: [
          'NIST CSF 2.0: Core functions governing enterprise cybersecurity risk.',
          'Zero Trust Architecture (ZTA): Micro-segmentation, continuous identity verification, and least privilege.',
          'Technical, Administrative, & Physical Controls: Defensive layers across hardware, policy, and locks.'
        ],
        commandSnippets: [
          { cmd: 'iptables -L -v -n', explanation: 'Inspect packet filtering rules for active micro-segmentation enforcement.' },
          { cmd: 'ssh -i ~/.ssh/id_ed25519 -o ClearAllForwardings=yes root@server', explanation: 'Enforce hardened SSH key-based access control.' }
        ],
        codeExample: {
          language: 'json',
          title: 'Zero Trust Least-Privilege AWS IAM Policy',
          code: `{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject"],\n      "Resource": "arn:aws:s3:::corporate-finance-bucket/*",\n      "Condition": {\n        "IpAddress": {"aws:SourceIp": "192.168.10.0/24"},\n        "Bool": {"aws:MultiFactorAuthPresent": "true"}\n      }\n    }\n  ]\n}`
        },
        aiPrompts: [
          'Explain the 5 core functions of the NIST Cybersecurity Framework.',
          'How does Zero Trust Architecture differ from perimeter-based security?',
          'Give me JSON policy examples for implementing Least Privilege.',
          'What are Technical vs Administrative controls?'
        ]
      },
      { 
        title: 'Module 4: Governance & Compliance', 
        duration: '3h', 
        topics: ['ISO 27001', 'GDPR', 'HIPAA Basics'],
        summary: 'Regulatory frameworks, data privacy laws, compliance audits, and security governance standard operating procedures.',
        keyConcepts: [
          'ISO/IEC 27001: International ISMS (Information Security Management System) standard.',
          'GDPR (General Data Protection Regulation): Data subject rights, 72h breach notifications, and privacy by design.',
          'HIPAA: Safeguarding Protected Health Information (PHI) across electronic systems.'
        ],
        commandSnippets: [
          { cmd: 'lynis audit system', explanation: 'Automated system audit against CIS and ISO 27001 hardening benchmarks.' }
        ],
        codeExample: {
          language: 'python',
          title: 'Automated PII Data Masking for GDPR Compliance',
          code: `import re\n\ndef mask_pii_email(email):\n    # Mask email user part for privacy compliance\n    pattern = r"^(.)(.*)(@.*)$"\n    return re.sub(pattern, lambda m: m.group(1) + "*" * len(m.group(2)) + m.group(3), email)\n\nprint(mask_pii_email("john.doe@company.com")) # Output: j*******e@company.com`
        },
        aiPrompts: [
          'What are the penalties and requirements for GDPR compliance?',
          'How does ISO 27001 certification help security teams?',
          'Give me Python examples of sanitizing PII data.',
          'Explain HIPAA technical safeguards for electronic medical records.'
        ]
      }
    ],
    progress: 0
  },
  {
    id: 'course-2',
    title: 'Computer Networking & Protocol Security',
    category: 'Networking',
    description: 'Deep dive into OSI 7-layer model, TCP/IP handshake, DNS, ARP, packet inspection, and firewall rules.',
    difficulty: 'Beginner',
    duration: '18 Hours',
    lessonsCount: 24,
    studentsCount: 18900,
    rating: 4.8,
    badge: 'Foundation',
    skills: ['TCP/IP', 'DNS & DHCP', 'Wireshark', 'Subnetting', 'Firewall Rules'],
    syllabus: [
      { title: 'Module 1: OSI & TCP/IP Architecture', duration: '4h', topics: ['Packet Headers', 'Layer 2 to Layer 7 Protocols'] },
      { title: 'Module 2: IP Addressing & Subnetting', duration: '5h', topics: ['IPv4/IPv6', 'CIDR Notation', 'VLANs'] },
      { title: 'Module 3: Network Attacks & Defense', duration: '5h', topics: ['ARP Spoofing', 'DNS Poisoning', 'SYN Flood Mitigation'] }
    ],
    progress: 0
  },
  {
    id: 'course-3',
    title: 'Linux Security Hardening & Shell Scripting',
    category: 'Linux Security',
    description: 'Command line power, Linux permission models, SSH hardening, SELinux, auditd, and bash automation.',
    difficulty: 'Intermediate',
    duration: '16 Hours',
    lessonsCount: 22,
    studentsCount: 12400,
    rating: 4.9,
    badge: 'Hands-on',
    skills: ['Bash Scripting', 'SSH Keys', 'Sudoers Config', 'SELinux', 'logrotate'],
    syllabus: [
      { title: 'Module 1: Linux System Administration', duration: '4h', topics: ['Process Management', 'File Permissions', 'Cron Jobs'] },
      { title: 'Module 2: Server Hardening', duration: '6h', topics: ['SSH Hardening', 'Fail2ban', 'UFW/IPTables'] }
    ],
    progress: 0
  },
  {
    id: 'course-4',
    title: 'Python for Security Professionals & Offensive Tools',
    category: 'Python for Cybersecurity',
    description: 'Build custom port scanners, keyloggers, packet sniffers, and automated web vulnerability scrapers with Python.',
    difficulty: 'Intermediate',
    duration: '20 Hours',
    lessonsCount: 28,
    studentsCount: 15600,
    rating: 4.9,
    badge: 'Popular',
    skills: ['Scapy', 'Socket Programming', 'Requests', 'Exploit Automation'],
    syllabus: [
      { title: 'Module 1: Python Socket Programming', duration: '5h', topics: ['Custom Port Scanners', 'TCP Client/Server'] },
      { title: 'Module 2: Packet Manipulation with Scapy', duration: '7h', topics: ['Crafting Custom Packets', 'Network Sniffers'] }
    ],
    progress: 0
  },
  {
    id: 'course-5',
    title: 'Ethical Hacking & Penetration Testing Mastery',
    category: 'Ethical Hacking',
    description: 'Full lifecycle pentesting: Reconnaissance, Nmap scanning, exploitation with Metasploit, and post-exploitation privilege escalation.',
    difficulty: 'Intermediate',
    duration: '32 Hours',
    lessonsCount: 42,
    studentsCount: 28400,
    rating: 5.0,
    badge: 'Best Seller',
    skills: ['Nmap', 'Metasploit', 'Privilege Escalation', 'Pivot Attacks', 'OSINT'],
    syllabus: [
      { title: 'Module 1: Reconnaissance & OSINT', duration: '6h', topics: ['Subdomain Enumeration', 'Shodan', 'Google Dorking'] },
      { title: 'Module 2: Vulnerability Scanning & Exploitation', duration: '10h', topics: ['Nmap Scripts', 'Metasploit Framework', 'Payload Crafting'] }
    ],
    progress: 0
  },
  {
    id: 'course-6',
    title: 'OWASP Top 10 Web Application Security',
    category: 'Web Application Security',
    description: 'Master SQL Injection, Cross-Site Scripting (XSS), CSRF, SSRF, IDOR, and API security auditing with Burp Suite.',
    difficulty: 'Intermediate',
    duration: '24 Hours',
    lessonsCount: 30,
    studentsCount: 21300,
    rating: 4.9,
    badge: 'Essential',
    skills: ['Burp Suite', 'SQL Injection', 'Stored & Reflected XSS', 'SSRF', 'IDOR'],
    syllabus: [
      { title: 'Module 1: Injection Vulnerabilities', duration: '6h', topics: ['SQLi Payloads', 'Blind SQLi', 'Command Injection'] },
      { title: 'Module 2: Broken Access Control & XSS', duration: '8h', topics: ['DOM XSS', 'Session Hijacking', 'IDOR Bypass'] }
    ],
    progress: 0
  },
  {
    id: 'course-7',
    title: 'SOC Analyst & Blue Team Operations',
    category: 'SOC Analyst',
    description: 'Learn threat detection, SIEM log analysis with Splunk, ELK stack query language, YARA rules, and alert triage.',
    difficulty: 'Intermediate',
    duration: '26 Hours',
    lessonsCount: 35,
    studentsCount: 16700,
    rating: 4.8,
    badge: 'Defense',
    skills: ['Splunk SPL', 'ELK Stack', 'YARA Rules', 'Alert Triage', 'Sysmon Log Analysis'],
    syllabus: [
      { title: 'Module 1: Security Information & Event Management (SIEM)', duration: '8h', topics: ['Splunk Dashboards', 'Querying Logs', 'Correlation Rules'] }
    ],
    progress: 0
  },
  {
    id: 'course-8',
    title: 'Digital Forensics & Memory Analysis',
    category: 'Digital Forensics',
    description: 'Extract evidence from disk images using Autopsy, conduct RAM analysis with Volatility, and timeline incident reconstruction.',
    difficulty: 'Advanced',
    duration: '28 Hours',
    lessonsCount: 36,
    studentsCount: 9800,
    rating: 4.9,
    badge: 'Advanced',
    skills: ['Volatility 3', 'Autopsy', 'FTK Imager', 'Memory Dump Analysis', 'Registry Forensics'],
    syllabus: [
      { title: 'Module 1: Memory Forensics', duration: '10h', topics: ['RAM Artifacts', 'Process Trees', 'Malicious DLL Injection Detection'] }
    ],
    progress: 0
  },
  {
    id: 'course-9',
    title: 'Malware Analysis & Reverse Engineering',
    category: 'Malware Analysis',
    description: 'Disassemble binaries with Ghidra and x64dbg, unpack obfuscated code, examine PE headers, and build dynamic behavioral sandboxes.',
    difficulty: 'Advanced',
    duration: '35 Hours',
    lessonsCount: 45,
    studentsCount: 8200,
    rating: 5.0,
    badge: 'Expert',
    skills: ['Ghidra', 'Assembly x86/x64', 'Dynamic Analysis', 'x64dbg', 'Unpacking'],
    syllabus: [
      { title: 'Module 1: Static Analysis', duration: '8h', topics: ['PE Header Inspection', 'String Extraction', 'Import Address Tables'] }
    ],
    progress: 0
  },
  {
    id: 'course-10',
    title: 'AWS & Azure Cloud Security Engineering',
    category: 'Cloud Security',
    description: 'Secure S3 buckets, IAM roles, Kubernetes pods, AWS GuardDuty alerts, CloudTrail logs, and Terraform infrastructure security.',
    difficulty: 'Advanced',
    duration: '22 Hours',
    lessonsCount: 28,
    studentsCount: 11100,
    rating: 4.8,
    badge: 'Cloud Standard',
    skills: ['AWS IAM', 'GuardDuty', 'CloudTrail', 'Terraform', 'Kubernetes Security'],
    syllabus: [
      { title: 'Module 1: Cloud IAM & Access Management', duration: '6h', topics: ['Least Privilege', 'Cross-Account Roles', 'Policy Auditing'] }
    ],
    progress: 0
  }
];

export const LABS: Lab[] = [
  {
    id: 'lab-1',
    title: 'Wireshark Packet Analysis & Protocol Decoding',
    category: 'Networking Labs',
    description: 'Analyze suspicious PCAP files to identify unauthorized credentials, DNS exfiltration, and TCP SYN flood signatures.',
    difficulty: 'Beginner',
    estimatedTime: '45 mins',
    skillsLearned: ['Wireshark Filters', 'PCAP Reconstruction', 'HTTP Credential Extraction', 'DNS Tunneling'],
    targetSystem: 'Ubuntu 22.04 LTS (Sandboxed)',
    scenariosCount: 4,
    points: 150,
    initialTerminalState: [
      'CYBERPATH Sandboxed Terminal v4.2 [Lab ID: NET-WSH-01]',
      'Target Host: 10.0.4.15 | Capture File: /var/captures/incident_0823.pcap',
      'Type "help" or run tshark commands to inspect traffic.'
    ],
    steps: [
      {
        title: 'Step 1: Inspect HTTP GET Requests',
        instruction: 'Execute tshark command to filter for HTTP GET requests containing login forms.',
        expectedCommand: 'tshark -r /var/captures/incident_0823.pcap -Y "http.request.method == GET"',
        hint: 'Use the -Y flag to apply display filters.'
      },
      {
        title: 'Step 2: Identify Malicious IP Address',
        instruction: 'Extract the top 5 talker IP addresses sending TCP SYN packets.',
        expectedCommand: 'tshark -r /var/captures/incident_0823.pcap -z ip,hosts',
        hint: 'Look for the IP sending unusual SYN floods to port 80.'
      }
    ]
  },
  {
    id: 'lab-2',
    title: 'Linux Privilege Escalation via Sudo Misconfigurations',
    category: 'Linux Labs',
    description: 'Exploit binary permissions (GTFOBins) and custom scripts running with root privileges on a target server.',
    difficulty: 'Intermediate',
    estimatedTime: '60 mins',
    skillsLearned: ['Sudoers Audit', 'GTFOBins', 'LinPEAS', 'Cron Job Exploitation'],
    targetSystem: 'Debian 11 Target (192.168.50.12)',
    scenariosCount: 5,
    points: 250,
    initialTerminalState: [
      'Connected to target via SSH as user "lowpriv"',
      'lowpriv@victim-host:~$ sudo -l'
    ],
    steps: [
      {
        title: 'Step 1: Enumerate Sudo Rights',
        instruction: 'Run sudo -l to view commands the current user can execute without a password.',
        expectedCommand: 'sudo -l',
        hint: 'Check if binaries like find, vim, or python have NOPASSWD configured.'
      }
    ]
  },
  {
    id: 'lab-3',
    title: 'SQL Injection & Database Dump (OWASP Lab)',
    category: 'Web Security Labs',
    description: 'Perform error-based and boolean-based SQL injection on a vulnerable e-commerce web API to dump user hashes.',
    difficulty: 'Intermediate',
    estimatedTime: '50 mins',
    skillsLearned: ['SQL Injection', 'SQLmap', 'Database Enumeration', 'Hash Cracking'],
    targetSystem: 'Vulnerable Node/Express App',
    scenariosCount: 3,
    points: 200,
    initialTerminalState: [
      'Web Target URL: http://lab.target.local:3000/product?id=1',
      'Goal: Extract the admin user password hash from the users table.'
    ]
  },
  {
    id: 'lab-4',
    title: 'RAM Memory Analysis with Volatility 3',
    category: 'Digital Forensics',
    description: 'Analyze a 4GB Windows memory dump from a infected workstation to uncover process injection and C2 IP connection.',
    difficulty: 'Advanced',
    estimatedTime: '75 mins',
    skillsLearned: ['Volatility 3', 'Process Trees (pstree)', 'Malfind', 'Network Connections (netscan)'],
    targetSystem: 'Windows 10 Pro Memory Image',
    scenariosCount: 6,
    points: 350
  },
  {
    id: 'lab-5',
    title: 'Splunk Threat Detection & SIEM Rule Creation',
    category: 'SOC Labs',
    description: 'Correlate Sysmon Event ID 1 (Process Creation) and Event ID 3 (Network Connection) to flag lateral movement attacks.',
    difficulty: 'Intermediate',
    estimatedTime: '55 mins',
    skillsLearned: ['Splunk SPL', 'Sysmon Events', 'Mitre ATT&CK Mapping', 'Alerting Rules'],
    targetSystem: 'Enterprise Splunk Enterprise Instance',
    scenariosCount: 4,
    points: 220
  },
  {
    id: 'lab-6',
    title: 'Hash Cracking with Hashcat & Custom Wordlists',
    category: 'Password Security',
    description: 'Use GPU acceleration syntax in Hashcat with rule-based modifications to crack NTLMv2 hashes.',
    difficulty: 'Beginner',
    estimatedTime: '40 mins',
    skillsLearned: ['Hashcat Syntax', 'NTLM Hashes', 'Rule Files', 'Rockyou Wordlist'],
    targetSystem: 'Hacker Sandbox GPU Node',
    scenariosCount: 3,
    points: 180
  },
  {
    id: 'lab-7',
    title: 'Command Injection & Remote Code Execution',
    category: 'Web Security Labs',
    description: 'Exploit un-sanitized user input in a ping utility web backend to gain interactive shell access on the host server.',
    difficulty: 'Intermediate',
    estimatedTime: '45 mins',
    skillsLearned: ['Command Injection', 'Payload Bypass', 'Reverse Shells', 'Input Sanitization'],
    targetSystem: 'Vulnerable PHP Web App',
    scenariosCount: 3,
    points: 220,
    initialTerminalState: [
      'Target URL: http://lab.target.local/ping.php?host=8.8.8.8',
      'Goal: Execute "cat /etc/passwd" and capture the root flag.'
    ],
    steps: [
      {
        title: 'Step 1: Test Command Chaining Operators',
        instruction: 'Append semicolon or pipe operators to inspect payload execution behavior.',
        expectedCommand: 'curl "http://lab.target.local/ping.php?host=127.0.0.1;id"',
        hint: 'Try using ;, &&, or | to execute secondary system commands.'
      }
    ]
  },
  {
    id: 'lab-8',
    title: 'Snort IDS Rule Writing & Traffic Detection',
    category: 'SOC Labs',
    description: 'Write custom Snort NIDS detection rules to detect malicious ICMP echo requests and TCP Nmap SYN scans.',
    difficulty: 'Intermediate',
    estimatedTime: '50 mins',
    skillsLearned: ['Snort Syntax', 'Packet Header Matching', 'Alert Logging', 'NIDS Configuration'],
    targetSystem: 'Ubuntu Security Gateway',
    scenariosCount: 4,
    points: 200,
    initialTerminalState: [
      'Snort Config Path: /etc/snort/rules/local.rules',
      'Test PCAP: /var/log/scans.pcap'
    ],
    steps: [
      {
        title: 'Step 1: Write Custom ICMP Rule',
        instruction: 'Add a rule to /etc/snort/rules/local.rules that triggers an alert on any ICMP packet.',
        expectedCommand: 'echo "alert icmp any any -> any any (msg:\\"ICMP Detected\\"; sid:1000001;)" >> /etc/snort/rules/local.rules',
        hint: 'Format rule as: alert <protocol> <src> <port> -> <dst> <port> (options)'
      }
    ]
  },
  {
    id: 'lab-9',
    title: 'Active Directory Kerberoasting Attack',
    category: 'Active Directory Labs',
    description: 'Extract Service Principal Names (SPNs) using GetUserSPNs.py and crack TGS tickets offline with Hashcat.',
    difficulty: 'Advanced',
    estimatedTime: '65 mins',
    skillsLearned: ['Kerberos TGS Tickets', 'Impacket Tools', 'Hashcat Mode 13100', 'Domain Escalation'],
    targetSystem: 'Windows Server 2022 AD Domain',
    scenariosCount: 4,
    points: 320,
    initialTerminalState: [
      'Domain: CORP.LOCAL | Domain Controller IP: 10.0.10.5',
      'Authenticated user: CORP\\jdoe'
    ]
  },
  {
    id: 'lab-10',
    title: 'Linux x86 Buffer Overflow & EIP Control',
    category: 'Exploit Development',
    description: 'Analyze a vulnerable C binary using GDB to find buffer offsets, overwrite the Instruction Pointer (EIP), and jump to shellcode.',
    difficulty: 'Advanced',
    estimatedTime: '80 mins',
    skillsLearned: ['GDB / PEDA', 'Memory Offsets', 'EIP Control', 'Nopsled & Shellcode'],
    targetSystem: 'Debian 32-bit VulnHost',
    scenariosCount: 5,
    points: 380
  },
  {
    id: 'lab-11',
    title: 'Docker Container Escape & Host Takeover',
    category: 'Cloud Security',
    description: 'Exploit privileged Docker container execution and mounted host sockets (/var/run/docker.sock) to compromise the host OS.',
    difficulty: 'Intermediate',
    estimatedTime: '50 mins',
    skillsLearned: ['Container Isolation', 'Docker Socket Hijacking', 'Host Chroot Escape', 'Linux Capabilities'],
    targetSystem: 'Containerized Alpine Microservice',
    scenariosCount: 3,
    points: 260
  },
  {
    id: 'lab-12',
    title: 'Stored XSS & Session Cookie Theft',
    category: 'Web Security Labs',
    description: 'Inject malicious JavaScript into a public comment board to steal admin session cookies and hijack administrative sessions.',
    difficulty: 'Beginner',
    estimatedTime: '40 mins',
    skillsLearned: ['DOM Manipulation', 'Document.cookie Exfiltration', 'HttpOnly Flags', 'XSS Sanitization'],
    targetSystem: 'Vulnerable Social App',
    scenariosCount: 3,
    points: 170
  },
  {
    id: 'lab-13',
    title: 'AWS S3 Bucket Security & Audit Configuration',
    category: 'Cloud Security',
    description: 'Audit public AWS S3 bucket ACLs, misconfigured policy wildcards, and repair exposed object storage permissions.',
    difficulty: 'Beginner',
    estimatedTime: '45 mins',
    skillsLearned: ['AWS CLI Syntax', 'S3 Bucket Policies', 'Public Access Block', 'IAM Least Privilege'],
    targetSystem: 'AWS Cloud Sandbox Environment',
    scenariosCount: 3,
    points: 190
  },
  {
    id: 'lab-14',
    title: 'Malware C2 Beaconing Traffic Analysis',
    category: 'SOC Labs',
    description: 'Analyze PCAP network captures to detect beaconing intervals, Cobalt Strike C2 frames, and DNS tunneling activity.',
    difficulty: 'Intermediate',
    estimatedTime: '55 mins',
    skillsLearned: ['Wireshark I/O Graphs', 'Beacon Interval Analysis', 'C2 Detection', 'Snort PCAP Validation'],
    targetSystem: 'SOC Workstation PCAP Suite',
    scenariosCount: 4,
    points: 240
  },
  {
    id: 'lab-15',
    title: 'Reverse Engineering ELF Binaries with Ghidra',
    category: 'Reverse Engineering',
    description: 'Decompile stripped Linux x64 executables in Ghidra, analyze main functions, and bypass license key validations.',
    difficulty: 'Advanced',
    estimatedTime: '70 mins',
    skillsLearned: ['Ghidra Decompiler', 'Assembly Instruction Set', 'String Reference Search', 'Function Patching'],
    targetSystem: 'Linux Analysis Workstation',
    scenariosCount: 4,
    points: 300
  },
  {
    id: 'lab-16',
    title: 'Automated Network Vulnerability Scan with OpenVAS',
    category: 'Networking Labs',
    description: 'Configure and launch automated vulnerability scans across corporate subnets using OpenVAS, filtering high-severity CVEs.',
    difficulty: 'Beginner',
    estimatedTime: '40 mins',
    skillsLearned: ['OpenVAS / GVM CLI', 'CVE Score Analysis', 'Subnet Scanning', 'Remediation Reporting'],
    targetSystem: 'Enterprise Vulnerability Management Node',
    scenariosCount: 3,
    points: 160
  }
];

export const SECURITY_TOOLS: SecurityTool[] = [
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Packet Analyzer',
    iconName: 'Activity',
    description: 'The world\'s foremost multi-platform network protocol analyzer for deep packet inspection and troubleshooting.',
    longDescription: 'Wireshark lets you see what\'s happening on your network at a microscopic level. It is the de facto standard across commercial and non-profit enterprises, government agencies, and educational institutions.',
    keyFeatures: [
      'Deep inspection of hundreds of protocols',
      'Live capture and offline analysis',
      'Rich display filter syntax',
      'Decryption support for IPsec, ISAKMP, Kerberos, SNMPv3, SSL/TLS, WEP, and WPA/WPA2'
    ],
    commonCommands: [
      { cmd: 'tshark -i eth0 -w output.pcap', usage: 'Capture live traffic on interface eth0 to pcap file' },
      { cmd: 'http.request.method == "POST"', usage: 'Filter display for HTTP POST submissions' },
      { cmd: 'ip.addr == 192.168.1.50 && tcp.port == 443', usage: 'Filter for traffic with specific IP on HTTPS port' }
    ],
    useCases: ['Network Troubleshooting', 'Malware Traffic Analysis', 'Protocol Verification', 'Security Forensic Auditing'],
    officialDocUrl: 'https://www.wireshark.org/docs/'
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite',
    category: 'Web Security',
    iconName: 'Globe',
    description: 'Leading web vulnerability scanner and proxy tool for penetration testing modern web applications and APIs.',
    longDescription: 'Burp Suite is an integrated platform for performing security testing of web applications. Its various tools work seamlessly together to support the entire testing process, from initial mapping and analysis of an application\'s attack surface to finding and exploiting security vulnerabilities.',
    keyFeatures: [
      'Interception Proxy with SSL pass-through',
      'Application-aware Web Crawler',
      'Repeater for manual request modification & replay',
      'Intruder for automated custom parameter fuzzing'
    ],
    commonCommands: [
      { cmd: 'Proxy Listener: 127.0.0.1:8080', usage: 'Standard proxy config for intercepting browser traffic' },
      { cmd: 'Intruder Attack Type: Cluster Bomb', usage: 'Fuzz username and password fields simultaneously' }
    ],
    useCases: ['Web Application Pentesting', 'API Vulnerability Assessment', 'OWASP Top 10 Auditing'],
    officialDocUrl: 'https://portswigger.net/burp'
  },
  {
    id: 'nmap',
    name: 'Nmap',
    category: 'Network Scanner',
    iconName: 'Search',
    description: 'Open source utility for network discovery, port scanning, and OS detection across large networks.',
    longDescription: 'Nmap ("Network Mapper") uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems they are running, and what type of packet filters/firewalls are in use.',
    keyFeatures: [
      'Flexible target specification (IP, CIDR, hostname)',
      'NSE (Nmap Scripting Engine) vulnerability scripts',
      'OS fingerprinting & service version detection',
      'Fast SYN stealth scanning (-sS)'
    ],
    commonCommands: [
      { cmd: 'nmap -sC -sV -p- 10.10.10.25', usage: 'Full port scan with default scripts and service version detection' },
      { cmd: 'nmap --script vuln 192.168.1.0/24', usage: 'Run vulnerability scan scripts against entire subnet' },
      { cmd: 'nmap -sU --top-ports 100 10.0.0.1', usage: 'UDP port scan for top 100 common ports' }
    ],
    useCases: ['Network Inventory', 'Port Auditing', 'Vulnerability Discovery', 'Firewall Rule Testing'],
    officialDocUrl: 'https://nmap.org/book/man.html'
  },
  {
    id: 'metasploit',
    name: 'Metasploit',
    category: 'Exploitation Framework',
    iconName: 'Zap',
    description: 'The world\'s most used penetration testing framework for discovering, exploiting, and validating vulnerabilities.',
    longDescription: 'Metasploit simplifies the exploitation process by providing thousands of pre-configured exploits, payloads, encoders, and post-exploitation modules in an easy-to-use CLI interface (msfconsole).',
    keyFeatures: [
      'Over 2,300+ vetted exploit modules',
      'Meterpreter advanced stager payloads',
      'Post-exploitation hash dumping and token manipulation',
      'Database integration for tracking target hosts'
    ],
    commonCommands: [
      { cmd: 'msfconsole', usage: 'Launch the main Metasploit console' },
      { cmd: 'use exploit/multi/handler', usage: 'Set up reverse shell handler' },
      { cmd: 'set PAYLOAD windows/x64/meterpreter/reverse_tcp', usage: 'Configure Meterpreter reverse TCP stager' }
    ],
    useCases: ['Exploitation Validation', 'Red Team Engagements', 'Payload Crafting'],
    officialDocUrl: 'https://docs.metasploit.com/'
  },
  {
    id: 'hashcat',
    name: 'Hashcat',
    category: 'Password Cracker',
    iconName: 'Key',
    description: 'Advanced GPU-accelerated password recovery engine supporting over 300+ hash types.',
    longDescription: 'Hashcat is the world\'s fastest password cracker. It features kernel-level GPU optimizations for OpenCL and CUDA, allowing multi-billion hash comparisons per second.',
    keyFeatures: [
      'Multi-GPU scaling across NVIDIA/AMD',
      'Combinator, mask, and dictionary attack modes',
      'Custom rule engine for character permutations',
      'Supports NTLM, MD5, SHA256, bcrypt, WPA2, PDF, Zip'
    ],
    commonCommands: [
      { cmd: 'hashcat -m 1000 -a 0 hashes.txt rockyou.txt', usage: 'Dictionary attack on NTLM hashes (-m 1000)' },
      { cmd: 'hashcat -m 2500 -a 3 capture.hccapx ?d?d?d?d?d?d?d?d', usage: 'Mask attack for 8-digit WPA key' }
    ],
    useCases: ['Credential Auditing', 'Post-Exploitation Hash Recovery', 'Password Strength Verification'],
    officialDocUrl: 'https://hashcat.net/wiki/'
  },
  {
    id: 'volatility',
    name: 'Volatility Framework',
    category: 'Memory Forensics',
    iconName: 'Cpu',
    description: 'Open-source memory forensics framework for extracting digital artifacts from volatile RAM dumps.',
    longDescription: 'Volatility is an advanced memory forensic framework used by incident response teams to extract running processes, DLLs, network connections, rootkits, and injected code from memory dumps.',
    keyFeatures: [
      'Support for Windows, Linux, and macOS memory formats',
      'Process tree construction (windows.pstree)',
      'Code injection detection (windows.malfind)',
      'RAM network connection recovery (windows.netscan)'
    ],
    commonCommands: [
      { cmd: 'vol -f mem.raw windows.pstree', usage: 'Display parent-child process tree hierarchy' },
      { cmd: 'vol -f mem.raw windows.malfind', usage: 'Find hidden or injected code in process memory' }
    ],
    useCases: ['Incident Response', 'Rootkit Investigation', 'Malware Artifact Extraction'],
    officialDocUrl: 'https://volatility3.readthedocs.io/'
  },
  {
    id: 'splunk',
    name: 'Splunk Enterprise',
    category: 'SIEM & Analytics',
    iconName: 'BarChart2',
    description: 'Industry-standard SIEM platform for security monitoring, log aggregation, and real-time threat intelligence.',
    longDescription: 'Splunk indexes and correlates machine data from any source—servers, firewalls, cloud platforms, endpoints—to give SOC analysts instantaneous visibility into security events.',
    keyFeatures: [
      'Powerful Search Processing Language (SPL)',
      'Real-time automated alert triggers',
      'Interactive SOC dashboards & visualization',
      'MITRE ATT&CK framework mapping'
    ],
    commonCommands: [
      { cmd: 'index=windows EventCode=4625 | stats count by TargetUserName', usage: 'Query failed RDP/SMB login attempts by user' },
      { cmd: 'index=proxy status=200 | stats count by dest_ip | sort - count', usage: 'Identify top outbound web destinations' }
    ],
    useCases: ['SOC Monitoring', 'Log Correlation', 'Threat Detection', 'Compliance Auditing'],
    officialDocUrl: 'https://docs.splunk.com/'
  },
  {
    id: 'ghidra',
    name: 'Ghidra',
    category: 'Reverse Engineering',
    iconName: 'Code',
    description: 'NSA-developed software reverse engineering (SRE) suite with decompiler and interactive disassembler.',
    longDescription: 'Ghidra is a powerful software reverse engineering framework featuring high-grade decompilation from machine code to C pseudo-code, supporting x86, ARM, MIPS, and PowerPC architectures.',
    keyFeatures: [
      'Decompiler producing readable C pseudo-code',
      'Support for Windows PE, ELF, Mach-O binaries',
      'Collaborative team project repository',
      'Scriptable in Python and Java'
    ],
    commonCommands: [
      { cmd: 'Analyze -> Auto Analyze', usage: 'Perform automated function signature and string analysis' },
      { cmd: 'Window -> Decompiler', usage: 'View decompiled C code side-by-side with Assembly' }
    ],
    useCases: ['Malware Reverse Engineering', 'Vulnerability Research', 'Binary Patch Analysis'],
    officialDocUrl: 'https://ghidra-sre.org/'
  },
  {
    id: 'snort',
    name: 'Snort',
    category: 'Network Intrusion Detection',
    iconName: 'Shield',
    description: 'Open-source network intrusion detection and prevention system (NIDS/NIPS) capable of real-time traffic analysis and packet logging.',
    longDescription: 'Snort uses a rule-based language to perform protocol analysis, content searching/matching, and can be used to detect a variety of attacks and probes, such as buffer overflows, stealth port scans, CGI attacks, and SMB probes.',
    keyFeatures: [
      'Real-time packet sniffing & traffic logging',
      'Rule-based attack detection engine',
      'Protocol anomaly & signature matching',
      'Integration with Barnyard2 and Squel'
    ],
    commonCommands: [
      { cmd: 'snort -v -i eth0', usage: 'Print IP packet headers to stdout' },
      { cmd: 'snort -dev -r capture.pcap', usage: 'Analyze offline PCAP file with application layer data' },
      { cmd: 'snort -c /etc/snort/snort.conf -i eth0', usage: 'Run Snort in NIDS mode with custom ruleset' }
    ],
    useCases: ['NIDS Deployment', 'Malware Beaconing Alerts', 'Network Intrusion Logging'],
    officialDocUrl: 'https://www.snort.org/documents'
  },
  {
    id: 'autopsy',
    name: 'Autopsy',
    category: 'Digital Forensics',
    iconName: 'Search',
    description: 'Premier digital forensics platform and graphical interface to The Sleuth Kit for disk image investigation.',
    longDescription: 'Autopsy is an open-source digital forensics tool used by law enforcement, military, and corporate examiners to investigate what happened on a computer, extracting web browser history, deleted files, and EXIF data.',
    keyFeatures: [
      'Timeline analysis for event reconstruction',
      'Hash filtering against known bad databases (NSRL)',
      'Keyword search across unallocated space',
      'EXIF metadata and geotag extraction'
    ],
    commonCommands: [
      { cmd: 'autopsy', usage: 'Launch Autopsy GUI web service on localhost' },
      { cmd: 'tsk_recovered -i raw image.dd', usage: 'Extract deleted files from disk dump' }
    ],
    useCases: ['Hard Drive Forensics', 'Incident Reconstruction', 'Deleted File Recovery'],
    officialDocUrl: 'https://www.autopsy.com/documentation/'
  },
  {
    id: 'john-the-ripper',
    name: 'John the Ripper',
    category: 'Password Cracker',
    iconName: 'Key',
    description: 'Fast, open-source password cracker designed to detect weak Unix, Windows, and application hashes.',
    longDescription: 'John the Ripper auto-detects hash types, supports dictionary attacks, rules, and brute-force modes. It is widely used by security auditors to verify user password strength across organizations.',
    keyFeatures: [
      'Automatic hash type auto-detection',
      'Dictionary attack with wordlist rules',
      'Support for /etc/shadow, NTLM, PDF, Zip hashes',
      'Custom mangle rules engine'
    ],
    commonCommands: [
      { cmd: 'john --wordlist=rockyou.txt hashes.txt', usage: 'Run dictionary attack against hash file' },
      { cmd: 'john --format=NTLM --rules hashes.txt', usage: 'Crack NTLM hashes applying standard rules' },
      { cmd: 'john --show hashes.txt', usage: 'Display cracked passwords' }
    ],
    useCases: ['Credential Strength Auditing', 'Shadow File Cracking', 'Penetration Testing'],
    officialDocUrl: 'https://www.openwall.com/john/doc/'
  },
  {
    id: 'nikto',
    name: 'Nikto Web Scanner',
    category: 'Web Security Scanner',
    iconName: 'Globe',
    description: 'Open-source web server scanner that tests for dangerous files, outdated software versions, and server misconfigurations.',
    longDescription: 'Nikto performs comprehensive tests against web servers for over 6,700 potentially dangerous files/CGIs, checks for outdated server software, and inspects HTTP security headers.',
    keyFeatures: [
      'Scans for over 6,700 dangerous files/programs',
      'Checks server version vulnerabilities',
      'SSL/TLS certificate validation',
      'HTTP proxy and authentication support'
    ],
    commonCommands: [
      { cmd: 'nikto -h http://example.com', usage: 'Run basic web server security scan' },
      { cmd: 'nikto -h 192.168.1.1 -p 80,443 -ssl', usage: 'Scan both HTTP and HTTPS ports' }
    ],
    useCases: ['Web Server Hardening', 'Vulnerability Assessment', 'Outdated CGI Detection'],
    officialDocUrl: 'https://github.com/sullo/nikto/wiki'
  },
  {
    id: 'sqlmap',
    name: 'SQLmap',
    category: 'Database Exploitation',
    iconName: 'Database',
    description: 'Automatic SQL injection tool that automates detecting and exploiting SQL injection flaws and taking over database servers.',
    longDescription: 'SQLmap comes with a powerful detection engine, ultimate features for database fingerprinting, data fetching from DBs, accessing underlying file systems, and executing out-of-band commands.',
    keyFeatures: [
      'Full support for MySQL, PostgreSQL, Oracle, MSSQL, SQLite',
      'Support for 6 SQLi techniques (Boolean, Error, Union, Stacked, Time, Inline)',
      'Automated password hash extraction & cracking',
      'Arbitrary file download & upload capability'
    ],
    commonCommands: [
      { cmd: 'sqlmap -u "http://target.com/page.php?id=1" --dbs', usage: 'Enumerate databases from vulnerable parameter' },
      { cmd: 'sqlmap -u "http://target.com/login" --data="user=a&pass=b" --dump', usage: 'Automate POST parameter injection and dump tables' }
    ],
    useCases: ['Database Vulnerability Auditing', 'SQLi Exploitation', 'Post-Exploitation DB Dumping'],
    officialDocUrl: 'https://github.com/sqlmapproject/sqlmap/wiki'
  },
  {
    id: 'openvas',
    name: 'OpenVAS / GVM',
    category: 'Vulnerability Scanner',
    iconName: 'ShieldAlert',
    description: 'Full-featured vulnerability scanner providing authenticated and unauthenticated testing across enterprise networks.',
    longDescription: 'OpenVAS (Greenbone Vulnerability Manager) tests for thousands of CVE vulnerabilities across servers, network appliances, and IoT devices, generating detailed executive risk reports.',
    keyFeatures: [
      'Daily updated Network Vulnerability Tests (NVTs)',
      'Authenticated credentialed scanning',
      'Compliance & vulnerability risk scoring (CVSS)',
      'Custom scan profiles and scheduled tasks'
    ],
    commonCommands: [
      { cmd: 'gvm-cli socket --xml "<get_version/>"', usage: 'Check GVM daemon operational status' },
      { cmd: 'gvm-script socket --gmp-username admin --gmp-password secret scan.py', usage: 'Trigger automated network subnet scan via CLI' }
    ],
    useCases: ['Enterprise Vulnerability Management', 'Compliance Audit Readiness', 'Network Perimeter Hardening'],
    officialDocUrl: 'https://greenbone.github.io/docs/'
  },
  {
    id: 'aircrack-ng',
    name: 'Aircrack-ng',
    category: 'Wireless Security',
    iconName: 'Wifi',
    description: 'Complete suite of utilities to assess Wi-Fi network security, capture packets, and crack WPA/WPA2-PSK keys.',
    longDescription: 'Aircrack-ng focuses on monitoring, attacking, testing, and cracking 802.11 wireless networks. It captures 4-way WPA handshakes and performs dictionary-based key recovery.',
    keyFeatures: [
      '802.11 packet capture & monitor mode switching',
      'Deauthentication attacks for handshake capture',
      'WPA/WPA2-PSK dictionary passphrase recovery',
      'Injection capabilities for fake access points'
    ],
    commonCommands: [
      { cmd: 'airmon-ng start wlan0', usage: 'Put wireless interface into monitor mode' },
      { cmd: 'airodump-ng wlan0mon', usage: 'Scan nearby Wi-Fi APs and client connections' },
      { cmd: 'aircrack-ng -w wordlist.txt capture.cap', usage: 'Crack WPA 4-way handshake using dictionary' }
    ],
    useCases: ['Wireless Pentesting', 'Wi-Fi Encryption Auditing', 'Rogue AP Detection'],
    officialDocUrl: 'https://www.aircrack-ng.org/documentation.html'
  },
  {
    id: 'mimikatz',
    name: 'Mimikatz',
    category: 'Post-Exploitation',
    iconName: 'Lock',
    description: 'Leading Windows post-exploitation tool for extracting plain-text passwords, hashes, PIN codes, and Kerberos tickets from memory.',
    longDescription: 'Developed by Benjamin Delpy, Mimikatz demonstrates Windows security flaws by extracting credentials from the Local Security Authority Subsystem Service (LSASS) process in memory.',
    keyFeatures: [
      'LSASS process memory password extraction (sekurlsa::logonpasswords)',
      'Pass-the-Hash and Pass-the-Ticket attacks',
      'Golden & Silver Kerberos Ticket forgery',
      'DPAPI master key recovery'
    ],
    commonCommands: [
      { cmd: 'privilege::debug', usage: 'Enable SeDebugPrivilege required to access LSASS' },
      { cmd: 'sekurlsa::logonpasswords', usage: 'Dump plain-text credentials and NTLM hashes from memory' },
      { cmd: 'kerberos::golden /user:Admin /domain:corp.local /sid:S-1-5-...', usage: 'Forge Golden Kerberos Ticket' }
    ],
    useCases: ['Red Team Operations', 'Credential Dumping', 'Active Directory Privilege Escalation'],
    officialDocUrl: 'https://github.com/gentilkiwi/mimikatz/wiki'
  },
  {
    id: 'radare2',
    name: 'Radare2',
    category: 'Reverse Engineering',
    iconName: 'Cpu',
    description: 'UNIX-like command-line reverse engineering framework and binary disassembler supporting dozens of architectures.',
    longDescription: 'Radare2 is a portable reverse engineering framework that can disassemble, assemble, debug, patch, and analyze ELF, PE, Mach-O, and raw firmware binaries.',
    keyFeatures: [
      'Multi-architecture disassembler (x86, ARM, MIPS, RISC-V)',
      'Binary patching and hex editor mode',
      'Control Flow Graph (CFG) visualization in terminal',
      'Scriptable via Python (r2pipe)'
    ],
    commonCommands: [
      { cmd: 'r2 -d ./binary', usage: 'Open binary in interactive debugger mode' },
      { cmd: 'aaa', usage: 'Perform deep automated analysis of functions and calls' },
      { cmd: 'pdf @ main', usage: 'Print disassembly of the main function' }
    ],
    useCases: ['Binary Analysis', 'Exploit Development', 'Malware Deobfuscation'],
    officialDocUrl: 'https://book.radare.org/'
  },
  {
    id: 'semgrep',
    name: 'Semgrep',
    category: 'SAST & Code Auditing',
    iconName: 'Code',
    description: 'Fast, open-source static analysis engine for searching code, enforcing coding standards, and detecting vulnerabilities.',
    longDescription: 'Semgrep analyzes code locally without compiling. It uses syntax-aware rules that look like source code to catch SQL injection, hardcoded secrets, and unsafe logic across 30+ languages.',
    keyFeatures: [
      'Syntax-aware pattern matching rules',
      'Supports 30+ programming languages',
      'Fast scanning integrated into CI/CD pipelines',
      'Custom YAML security rule creation'
    ],
    commonCommands: [
      { cmd: 'semgrep --config p/security-audit .', usage: 'Run full security audit ruleset against repository' },
      { cmd: 'semgrep --config p/owasp-top-10 src/', usage: 'Scan src/ directory against OWASP Top 10 vulnerabilities' }
    ],
    useCases: ['Static Application Security Testing (SAST)', 'Code Review', 'DevSecOps Automation'],
    officialDocUrl: 'https://semgrep.dev/docs/'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Network Packet Analyzer & IDS Dashboard',
    description: 'A high-performance Python & React network analyzer that performs real-time packet capture with Scapy, decodes protocols, detects SYN floods, and visualizes network throughput in an interactive glassmorphic dashboard.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Scapy', 'React', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    architectureOverview: 'The backend uses Python Scapy socket sniffing combined with an asynchronous event loop to stream decoded packets over WebSockets. The React frontend computes bandwidth metrics and flags malicious signatures.',
    keyFeatures: [
      'Real-time packet capture & protocol breakdown (TCP, UDP, ICMP, DNS)',
      'Threat detection engine for ARP spoofing and port scans',
      'Bandwidth throughput telemetry graphs',
      'Exportable PCAP file logging and PCAP file upload analysis'
    ],
    githubUrl: 'https://github.com/cyberpath/packet-analyzer',
    stepByStepGuide: [
      { step: '1. Socket Initialization', details: 'Setup raw socket sniffer using Scapy in non-blocking thread.' },
      { step: '2. Protocol Decoder', details: 'Parse Ethernet frames, IP headers, and TCP payload flags.' },
      { step: '3. WebSocket Streamer', details: 'Push JSON formatted packet data to React UI every 100ms.' }
    ],
    codeSnippets: [
      {
        filename: 'sniffer.py',
        language: 'python',
        explanation: 'Core packet sniffer engine using Scapy. Listens on raw sockets, decodes TCP/UDP/ICMP headers, and checks for SYN flood rate thresholds.',
        code: `# sniffer.py - Raw Socket Packet Sniffer & Anomaly Engine
from scapy.all import sniff, IP, TCP, UDP, ICMP
import json
import time

packet_counts = {"TCP": 0, "UDP": 0, "ICMP": 0}
recent_syn_rates = {}

def process_packet(packet):
    if packet.haslayer(IP):
        ip_src = packet[IP].src
        ip_dst = packet[IP].dst
        proto = "OTHER"
        
        if packet.haslayer(TCP):
            proto = "TCP"
            packet_counts["TCP"] += 1
            # SYN Flood Detection logic
            if packet[TCP].flags == "S":
                recent_syn_rates[ip_src] = recent_syn_rates.get(ip_src, 0) + 1
                if recent_syn_rates[ip_src] > 50:
                    print(f"[ALERT] High SYN rate detected from {ip_src} -> {ip_dst}")
        elif packet.haslayer(UDP):
            proto = "UDP"
            packet_counts["UDP"] += 1
        elif packet.haslayer(ICMP):
            proto = "ICMP"
            packet_counts["ICMP"] += 1

        print(f"[{proto}] {ip_src} -> {ip_dst} ({len(packet)} bytes)")

def start_sniffing(interface="eth0"):
    print(f"[*] Starting Packet Capture on {interface}...")
    sniff(iface=interface, prn=process_packet, store=False)

if __name__ == "__main__":
    start_sniffing()`
      },
      {
        filename: 'server.py',
        language: 'python',
        explanation: 'Flask & Socket.IO server broadcasting live packet telemetry to connected React dashboards in real time.',
        code: `# server.py - WebSocket Telemetry Streamer
from flask import Flask
from flask_socketio import SocketIO, emit
import random
import time
import threading

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

def telemetry_emitter():
    while True:
        payload = {
            "timestamp": time.strftime("%H:%M:%S"),
            "bandwidth": round(random.uniform(12.4, 88.9), 2),
            "activeSockets": random.randint(140, 520),
            "threatsDetected": random.randint(0, 2)
        }
        socketio.emit('packet_telemetry', payload)
        time.sleep(1)

@socketio.on('connect')
def client_connected():
    print('[+] React Dashboard Client Connected')

if __name__ == '__main__':
    threading.Thread(target=telemetry_emitter, daemon=True).start()
    socketio.run(app, host='0.0.0.0', port=5000)`
      },
      {
        filename: 'PacketVisualizer.jsx',
        language: 'javascript',
        explanation: 'React frontend component displaying real-time bandwidth graphs, active sockets count, and live telemetry log stream.',
        code: `// PacketVisualizer.jsx - Glassmorphic Telemetry Dashboard
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export const PacketVisualizer = () => {
  const [telemetry, setTelemetry] = useState({ bandwidth: 0, activeSockets: 0, threatsDetected: 0 });
  const [logStream, setLogStream] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.on('packet_telemetry', (data) => {
      setTelemetry(data);
      setLogStream(prev => [data, ...prev.slice(0, 14)]);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div className="p-6 bg-slate-950 text-cyan-400 font-mono rounded-2xl border border-cyan-500/30">
      <h2 className="text-lg font-bold mb-4">LIVE PACKET TELEMETRY</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">THROUGHPUT</div>
          <div className="text-2xl font-bold text-white">{telemetry.bandwidth} MB/s</div>
        </div>
        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">ACTIVE SOCKETS</div>
          <div className="text-2xl font-bold text-cyan-400">{telemetry.activeSockets}</div>
        </div>
      </div>
    </div>
  );
};`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Prerequisites & Virtual Environment Setup',
        description: 'Initialize a Python 3.10+ virtual environment and install Scapy, Flask, and Flask-SocketIO dependencies.',
        commands: [
          'python -m venv venv',
          'source venv/bin/activate  # On Windows: venv\\Scripts\\activate',
          'pip install scapy flask flask-socketio websockets'
        ]
      },
      {
        stepTitle: '2. Raw Socket Packet Sniffer Execution',
        description: 'Run sniffer.py with root/administrator privileges to allow promiscuous mode packet listening on your network interface.',
        commands: [
          'sudo python sniffer.py  # Run on Linux/macOS',
          'python sniffer.py       # On Windows (Run command prompt as Administrator)'
        ],
        codeReference: 'sniffer.py'
      },
      {
        stepTitle: '3. Start WebSocket Server & Frontend Dashboard',
        description: 'Start server.py to broadcast live JSON packet metrics over WebSocket port 5000, then launch the React dashboard.',
        commands: [
          'python server.py',
          'npm install socket.io-client',
          'npm run dev'
        ],
        codeReference: 'server.py'
      }
    ],
    aiPrompts: [
      'How does Scapy perform raw socket sniffing in Python?',
      'Explain the SYN flood threat detection logic step-by-step in Tanglish/Tamil.',
      'How to run the Python packet sniffer without administrator privileges?',
      'Can you explain the socket connection between Python backend and React frontend?'
    ]
  },
  {
    id: 'proj-2',
    title: 'SIEM Log Correlation & Alert Dashboard',
    description: 'Full-stack SOC dashboard that aggregates Windows Event Logs and Linux Syslog feeds, parses authentication anomalies, and triggers instant Slack/Email alerts using elastic correlation rules.',
    difficulty: 'Intermediate',
    technologies: ['Node.js', 'Express', 'React', 'Elasticsearch', 'Chart.js'],
    architectureOverview: 'Log ingestion pipeline built with Node.js parsing JSON syslogs, indexing into Elasticsearch, and rendering MITRE ATT&CK mapped alerts on the frontend.',
    keyFeatures: [
      'Brute-force login detection rules (Event ID 4625 thresholding)',
      'Interactive timeline chart of security alerts',
      'Mitre ATT&CK framework technique tagging',
      'Alert notification webhooks'
    ],
    githubUrl: 'https://github.com/cyberpath/siem-log-dashboard',
    stepByStepGuide: [
      { step: '1. Ingestion', details: 'Create Syslog server receiver listening on UDP 514.' },
      { step: '2. Rule Engine', details: 'Evaluate incoming log streams against alert rules.' }
    ],
    codeSnippets: [
      {
        filename: 'syslog_receiver.js',
        language: 'javascript',
        explanation: 'UDP syslog receiver listening on port 514 for incoming authentication logs and Windows Event ID 4625 brute-force attempts.',
        code: `// syslog_receiver.js - UDP Syslog Server & Correlation Rule Engine
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const failedLogins = new Map();

server.on('message', (msg, rinfo) => {
  const logStr = msg.toString();
  console.log(\`[LOG] Received from \${rinfo.address}:\${rinfo.port} -> \${logStr}\`);

  // Detect Windows Event ID 4625 (Failed Logon)
  if (logStr.includes('4625') || logStr.includes('Failed password')) {
    const count = (failedLogins.get(rinfo.address) || 0) + 1;
    failedLogins.set(rinfo.address, count);

    if (count >= 5) {
      console.log(\`[CRITICAL ALERT] Brute-force attempt detected from IP \${rinfo.address} (\${count} failures)\`);
    }
  }
});

server.bind(514, () => {
  console.log('[*] Syslog Receiver running on UDP port 514');
});`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Node.js Syslog Setup',
        description: 'Initialize Node project and start the UDP syslog server.',
        commands: ['npm init -y', 'node syslog_receiver.js']
      }
    ],
    aiPrompts: [
      'Explain how SIEM correlation rules detect brute force attempts.',
      'How to connect Node.js syslog server to Elasticsearch?'
    ]
  },
  {
    id: 'proj-3',
    title: 'Automated Malware Analysis Sandbox',
    description: 'Isolated Docker-based sandbox orchestrator that executes suspicious binaries, monitors API calls, network callbacks, and registry modifications, generating automated PDF threat reports.',
    difficulty: 'Advanced',
    technologies: ['Python', 'Docker', 'Cuckoo Sandbox', 'Volatility', 'FastAPI'],
    architectureOverview: 'Python controller orchestrates a headless QEMU/KVM virtual machine, monitors process behavior during execution, captures PCAPs, and generates YARA rule matches.',
    keyFeatures: [
      'Isolated execution environment for PE and ELF binaries',
      'Dynamic behavior monitoring & API hooking',
      'Automated YARA rule scanning against memory dumps',
      'Comprehensive HTML & PDF report generator'
    ],
    githubUrl: 'https://github.com/cyberpath/malware-sandbox',
    stepByStepGuide: [
      { step: '1. VM Snapshot', details: 'Revert QEMU guest environment to clean baseline snapshot.' },
      { step: '2. Binary Injection', details: 'Transfer sample into VM and trigger execution logger.' }
    ],
    codeSnippets: [
      {
        filename: 'sandbox_orchestrator.py',
        language: 'python',
        explanation: 'Docker container runner that spins up an isolated sandbox, executes the binary, monitors API calls, and collects RAM dumps.',
        code: `# sandbox_orchestrator.py - Isolated Binary Execution Controller
import subprocess
import os

def analyze_sample(sample_path):
    print(f"[*] Copying {sample_path} into isolated Docker Sandbox...")
    cmd = f"docker run --rm -v {sample_path}:/sample:ro sandbox-runner /sample"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    
    print("[*] Running YARA Memory Scan on target...")
    yara_cmd = "yara -r /rules/malware_index.yar /sample"
    matches = subprocess.run(yara_cmd, shell=True, capture_output=True, text=True)
    
    return {
        "execution_output": result.stdout,
        "yara_matches": matches.stdout
    }

if __name__ == "__main__":
    analyze_sample("/tmp/suspicious_sample.exe")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Build Docker Sandbox Container',
        description: 'Build isolated sandbox image with YARA and Volatility rules.',
        commands: ['docker build -t sandbox-runner .', 'python sandbox_orchestrator.py']
      }
    ],
    aiPrompts: [
      'How does YARA rule scanning work on memory dumps?',
      'Explain dynamic malware analysis vs static analysis in Tanglish/Tamil.'
    ]
  },
  {
    id: 'proj-4',
    title: 'Cloud Security & IAM Misconfiguration Scanner',
    description: 'Automated infrastructure auditor that scans AWS accounts and Terraform codebases for public S3 buckets, permissive security groups, and unencrypted databases.',
    difficulty: 'Intermediate',
    technologies: ['AWS SDK (Boto3)', 'Python', 'Terraform', 'React', 'Docker'],
    architectureOverview: 'Python Boto3 scripts query AWS APIs against CIS Benchmarks and custom security policies, identifying IAM policy wildcards and exposed ports.',
    keyFeatures: [
      'AWS CIS Benchmark Compliance Scoring',
      'Public S3 Bucket & Secret Leak Detection',
      'Terraform HCL Static Code Analysis',
      'Automated remediation script recommendations'
    ],
    githubUrl: 'https://github.com/cyberpath/cloud-security-scanner',
    stepByStepGuide: [
      { step: '1. API Authentication', details: 'Connect via read-only AWS IAM role.' },
      { step: '2. Policy Evaluation', details: 'Evaluate S3 bucket ACLs and EC2 security group ingress rules.' }
    ],
    codeSnippets: [
      {
        filename: 's3_auditor.py',
        language: 'python',
        explanation: 'AWS Boto3 script scanning all S3 buckets for public read/write ACLs and unencrypted data.',
        code: `# s3_auditor.py - AWS S3 Bucket Security Scanner
import boto3

s3 = boto3.client('s3')

def audit_s3_buckets():
    buckets = s3.list_buckets()['Buckets']
    print(f"[*] Auditing {len(buckets)} AWS S3 Buckets...")
    
    for b in buckets:
        name = b['Name']
        try:
            public_access = s3.get_public_access_block(Bucket=name)
            block_config = public_access['PublicAccessBlockConfiguration']
            if not block_config['BlockPublicAcls']:
                print(f"[WARN] Bucket {name} has Public ACLs enabled!")
        except Exception as e:
            print(f"[ALERT] Bucket {name} may be publicly exposed!")

if __name__ == '__main__':
    audit_s3_buckets()`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. AWS CLI Configuration',
        description: 'Configure AWS credentials and run the audit script.',
        commands: ['pip install boto3', 'aws configure', 'python s3_auditor.py']
      }
    ],
    aiPrompts: [
      'What are the most common AWS S3 misconfigurations?',
      'How to enforce least privilege IAM policies in Terraform?'
    ]
  },
  {
    id: 'proj-5',
    title: 'AI Phishing Detection & Domain Reputation System',
    description: 'Machine learning powered email classifier and domain monitor that detects spear-phishing attempts, homograph domain squatting, and malicious URL redirects.',
    difficulty: 'Advanced',
    technologies: ['Python', 'Scikit-Learn', 'FastAPI', 'React', 'WHOIS API'],
    architectureOverview: 'TF-IDF vectorizer and Random Forest model trained on 50,000+ phishing emails paired with domain WHOIS age check API.',
    keyFeatures: [
      'Email header and body NLP phishing classification',
      'Typosquatting domain scanner for brand protection',
      'Zero-day URL redirect expansion analysis'
    ],
    githubUrl: 'https://github.com/cyberpath/phishing-detector',
    stepByStepGuide: [
      { step: '1. Feature Extraction', details: 'Extract URL entropy, domain creation date, and urgent keyword triggers.' }
    ],
    codeSnippets: [
      {
        filename: 'phishing_classifier.py',
        language: 'python',
        explanation: 'NLP email classifier extracting TF-IDF features to score phishing probability.',
        code: `# phishing_classifier.py - ML Email Phishing Detector
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier

emails = [
    "URGENT: Your bank account is locked! Click here to verify password immediately.",
    "Hey team, here is the weekly project status report document.",
    "Action Required: Verify PayPal credentials to avoid account termination."
]
labels = [1, 0, 1]  # 1 = Phishing, 0 = Legitimate

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(emails)
model = RandomForestClassifier()
model.fit(X, labels)

def predict_email(text):
    test_vec = vectorizer.transform([text])
    prob = model.predict_proba(test_vec)[0][1]
    print(f"Phishing Probability: {prob * 100:.1f}%")

predict_email("Immediate action required: update your password now!")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Train ML Classifier Model',
        description: 'Install Scikit-Learn and execute model training.',
        commands: ['pip install scikit-learn numpy', 'python phishing_classifier.py']
      }
    ],
    aiPrompts: [
      'How does TF-IDF vectorization detect phishing keywords?',
      'Explain typosquatting and homograph domain attacks in Tanglish/Tamil.'
    ]
  },
  {
    id: 'proj-6',
    title: 'Automated Web Vulnerability Scanner',
    description: 'Custom Python web scanner that crawls target web domains, detects SQL Injection, XSS, exposed sensitive files, and missing security headers.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'BeautifulSoup', 'Requests', 'Click', 'Rich'],
    architectureOverview: 'Asynchronous crawler recursively visits internal URLs, injecting safe test payloads into inputs and query params to analyze HTTP response behavior.',
    keyFeatures: [
      'Recursive web spidering & link extraction',
      'Reflected XSS payload test engine',
      'Security header inspector (CSP, HSTS, X-Frame-Options)',
      'Beautiful terminal CLI output with Rich formatting'
    ],
    githubUrl: 'https://github.com/cyberpath/vuln-scanner',
    stepByStepGuide: [
      { step: '1. Crawler Engine', details: 'Build thread pool to crawl all domain subroutes.' }
    ],
    codeSnippets: [
      {
        filename: 'scanner.py',
        language: 'python',
        explanation: 'Python HTTP crawler injecting XSS and SQLi test payloads into web application parameters.',
        code: `# scanner.py - Automated Vulnerability Scanner
import requests
from bs4 import BeautifulSoup

xss_payload = "<script>alert('XSS_FOUND')</script>"
sqli_payload = "' OR '1'='1"

def scan_url(target_url):
    print(f"[*] Scanning target: {target_url}")
    res = requests.get(target_url)
    
    # Check security headers
    headers = res.headers
    if 'Content-Security-Policy' not in headers:
        print("[WARN] Missing Content-Security-Policy header!")
    if 'X-Frame-Options' not in headers:
        print("[WARN] Missing X-Frame-Options header (Clickjacking risk)!")

    # Test XSS Reflection
    test_res = requests.get(f"{target_url}?search={xss_payload}")
    if xss_payload in test_res.text:
        print("[CRITICAL] Reflected XSS Vulnerability detected!")

if __name__ == "__main__":
    scan_url("http://example.com")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Run Web Scanner CLI',
        description: 'Install Requests and BeautifulSoup4, then execute vulnerability scanner.',
        commands: ['pip install requests beautifulsoup4 rich', 'python scanner.py']
      }
    ],
    aiPrompts: [
      'How does the scanner test for reflected XSS vulnerability?',
      'Why are Content-Security-Policy (CSP) headers essential for web defense?'
    ]
  },
  {
    id: 'proj-7',
    title: 'Snort NIDS Alert Monitoring & Incident Response Dashboard',
    description: 'A real-time network intrusion monitoring portal that ingests Snort alert logs, parses alert signatures, and maps malicious traffic patterns onto an interactive SOC dashboard.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Snort', 'FastAPI', 'React', 'Tailwind CSS'],
    architectureOverview: 'Snort outputs fast alert logs to /var/log/snort/alert. A Python watchdog script parses alert signatures, parses IP protocols, and streams structured alerts to a React SOC frontend via SSE.',
    keyFeatures: [
      'Real-time Snort alert log ingestion and parsing',
      'Severity level scoring (Low, Medium, High, Critical)',
      'Source and destination IP threat distribution charts',
      'One-click rule filter generator'
    ],
    githubUrl: 'https://github.com/cyberpath/snort-nids-dashboard',
    stepByStepGuide: [
      { step: '1. Snort Log Configuration', details: 'Set up Snort alert output format to unified2 or fast log.' },
      { step: '2. Log Watchdog', details: 'Python script tails fast.log and posts JSON alerts to API.' }
    ],
    codeSnippets: [
      {
        filename: 'snort_watcher.py',
        language: 'python',
        explanation: 'Python file tailer monitoring Snort alert log and broadcasting real-time alert events.',
        code: `# snort_watcher.py - Snort Fast Alert Parser
import time
import re

ALERT_LOG = "/var/log/snort/alert"

def watch_alerts():
    print(f"[*] Monitoring Snort Alert Log: {ALERT_LOG}")
    with open(ALERT_LOG, "r") as f:
        f.seek(0, 2) # Move to end of file
        while True:
            line = f.readline()
            if not line:
                time.sleep(0.5)
                continue
            if "[**]" in line:
                print(f"[NIDS ALERT] {line.strip()}")

if __name__ == "__main__":
    watch_alerts()`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Start Snort Alert Watcher',
        description: 'Run Snort in NIDS mode and execute snort_watcher.py.',
        commands: ['sudo snort -A fast -c /etc/snort/snort.conf -i eth0', 'python snort_watcher.py']
      }
    ],
    aiPrompts: [
      'How to parse Snort alert logs using Python regex?',
      'Explain Snort NIDS integration with web dashboards.'
    ]
  },
  {
    id: 'proj-8',
    title: 'Active Directory LDAP Misconfiguration & PrivEsc Auditor',
    description: 'An automated PowerShell & Python tool that audits Active Directory domain controllers for Kerberoastable accounts, AS-REP roasting, and unconstrained delegation.',
    difficulty: 'Advanced',
    technologies: ['Python', 'PowerShell', 'Impacket', 'LDAP3', 'React'],
    architectureOverview: 'Queries Active Directory via LDAP protocols without requiring domain admin privileges, auditing SPN attributes, UserAccountControl flags, and ACL permissions.',
    keyFeatures: [
      'Automated SPN Kerberoastable account detection',
      'AS-REP Roastable account enumeration (DONT_REQ_PREAUTH)',
      'Unconstrained and Constrained delegation check',
      'HTML vulnerability audit report generation'
    ],
    githubUrl: 'https://github.com/cyberpath/ad-security-auditor',
    stepByStepGuide: [
      { step: '1. LDAP Bind', details: 'Authenticate with low-privilege domain user credentials.' },
      { step: '2. Attribute Audit', details: 'Query user objects where servicePrincipalName is populated.' }
    ],
    codeSnippets: [
      {
        filename: 'ad_auditor.py',
        language: 'python',
        explanation: 'Python LDAP auditor enumerating Kerberoastable SPN accounts from Active Directory.',
        code: `# ad_auditor.py - LDAP AD Security Auditor
from ldap3 import Server, Connection, ALL

def audit_ad(dc_ip, domain, username, password):
    server = Server(dc_ip, get_info=ALL)
    conn = Connection(server, user=f"{domain}\\\\{username}", password=password, auto_bind=True)
    
    print("[*] Querying Kerberoastable Accounts (SPNs)...")
    search_filter = "(&(objectClass=user)(servicePrincipalName=*)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))"
    conn.search("dc=corp,dc=local", search_filter, attributes=['sAMAccountName', 'servicePrincipalName'])
    
    for entry in conn.entries:
        print(f"[SPN FOUND] User: {entry.sAMAccountName} | SPN: {entry.servicePrincipalName}")

if __name__ == "__main__":
    audit_ad("10.0.10.5", "CORP", "jdoe", "Password123!")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Run AD Auditor',
        description: 'Install ldap3 and query Domain Controller.',
        commands: ['pip install ldap3', 'python ad_auditor.py']
      }
    ],
    aiPrompts: [
      'What makes Kerberoasting possible in Active Directory?',
      'How does LDAP search filtering identify vulnerable SPN accounts?'
    ]
  },
  {
    id: 'proj-9',
    title: 'Python Web Application Firewall (WAF) & Reverse Proxy',
    description: 'A custom lightweight WAF and reverse proxy built in Python that inspects HTTP headers, GET/POST parameters, and blocks SQLi, XSS, and path traversal attacks in real-time.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Asyncio', 'Aiohttp', 'Regex Engine', 'Docker'],
    architectureOverview: 'Acts as a transparent reverse proxy in front of web servers. Intercepts HTTP requests, evaluates regex inspection rules, and drops malicious payloads with 403 Forbidden.',
    keyFeatures: [
      'Real-time SQLi, XSS, and Path Traversal inspection engine',
      'Configurable IP rate-limiting & IP blacklisting',
      'Custom regex rule definition in JSON',
      'Low latency proxying with Python asyncio'
    ],
    githubUrl: 'https://github.com/cyberpath/python-waf',
    stepByStepGuide: [
      { step: '1. Proxy Setup', details: 'Bind asyncio server to port 80 and forward clean traffic to port 8080.' }
    ],
    codeSnippets: [
      {
        filename: 'waf_proxy.py',
        language: 'python',
        explanation: 'Python asyncio HTTP reverse proxy inspecting payloads for SQLi and XSS attack patterns.',
        code: `# waf_proxy.py - WAF Inspection Engine
import re

SQLI_PATTERN = re.compile(r"('|\"|--|UNION|SELECT|DROP|INSERT)", re.IGNORECASE)
XSS_PATTERN = re.compile(r"(<script|javascript:|onload=)", re.IGNORECASE)

def inspect_request(path, query_params):
    if SQLI_PATTERN.search(path) or SQLI_PATTERN.search(query_params):
        print(f"[WAF BLOCK] SQL Injection payload detected in {path}")
        return False
    if XSS_PATTERN.search(query_params):
        print(f"[WAF BLOCK] XSS payload detected in query params")
        return False
    return True

if __name__ == "__main__":
    is_safe = inspect_request("/search.php", "q=<script>alert(1)</script>")
    print(f"Request Safe: {is_safe}")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Deploy Python WAF',
        description: 'Start proxy script to safeguard backend web service.',
        commands: ['python waf_proxy.py']
      }
    ],
    aiPrompts: [
      'How does a Web Application Firewall inspect HTTP request parameters?',
      'What are the performance considerations of regex WAF rules?'
    ]
  },
  {
    id: 'proj-10',
    title: 'Container Security & Vulnerability Auditor (Trivy API)',
    description: 'An automated container security scanner that inspects Docker images, scans OS package vulnerabilities (CVEs), and validates Dockerfile security best practices.',
    difficulty: 'Intermediate',
    technologies: ['Go', 'Docker', 'Trivy API', 'React', 'GitHub Actions'],
    architectureOverview: 'Integrates with Docker daemon and Trivy engine to extract image layers, analyze OS packages against NVD CVE database, and report high/critical risks.',
    keyFeatures: [
      'Docker image layer CVE scanning',
      'Dockerfile static misconfiguration check (Root user, exposed ports)',
      'JSON & JUnit XML report generation for CI/CD integration',
      'Severity filtering threshold enforcement'
    ],
    githubUrl: 'https://github.com/cyberpath/container-sec-scanner',
    stepByStepGuide: [
      { step: '1. Image Inspection', details: 'Pull target Docker image and dissect layer manifests.' }
    ],
    codeSnippets: [
      {
        filename: 'docker_scanner.py',
        language: 'python',
        explanation: 'Python script wrapping Trivy container vulnerability scanner to audit Docker images.',
        code: `# docker_scanner.py - Container CVE Auditor
import subprocess
import json

def scan_container_image(image_name):
    print(f"[*] Scanning Docker Image: {image_name} for CVE vulnerabilities...")
    cmd = f"trivy image --severity HIGH,CRITICAL --format json {image_name}"
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    
    if res.returncode == 0:
        data = json.loads(res.stdout)
        vuln_count = len(data.get("Results", [{}])[0].get("Vulnerabilities", []))
        print(f"[RESULT] Found {vuln_count} High/Critical CVEs in {image_name}")

if __name__ == "__main__":
    scan_container_image("ubuntu:20.04")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Run Container Scanner',
        description: 'Install Trivy CLI and run docker_scanner.py.',
        commands: ['apt-get install trivy', 'python docker_scanner.py']
      }
    ],
    aiPrompts: [
      'Why is container layer vulnerability scanning vital in DevSecOps?',
      'How to prevent running Docker containers as root?'
    ]
  },
  {
    id: 'proj-11',
    title: 'Zero-Trust Microsegmentation & IPTables Firewall Generator',
    description: 'An automated network policy generator that creates dynamic IPTables microsegmentation rules and Zero-Trust firewall policies based on application telemetry.',
    difficulty: 'Advanced',
    technologies: ['Python', 'IPTables', 'Linux Systemd', 'JSON Policy Engine'],
    architectureOverview: 'Analyzes application traffic mappings, constructs default-deny firewall policies, and automatically generates IPTables / UFW scripts enforcing least-privilege network access.',
    keyFeatures: [
      'Default-Deny microsegmentation policy builder',
      'Automated IPTables rule generation',
      'Port and interface binding restriction',
      'Rollback script generation for emergency network recovery'
    ],
    githubUrl: 'https://github.com/cyberpath/zero-trust-firewall',
    stepByStepGuide: [
      { step: '1. Traffic Mapping', details: 'Parse required ports (e.g. 443, 5432) for application tier.' }
    ],
    codeSnippets: [
      {
        filename: 'firewall_gen.py',
        language: 'python',
        explanation: 'Python script generating hardened Zero-Trust IPTables rule script.',
        code: `# firewall_gen.py - Zero-Trust IPTables Generator
policy = {
    "allowed_ports": [22, 80, 443],
    "trusted_subnets": ["192.168.10.0/24"]
}

def generate_iptables():
    print("#!/bin/bash")
    print("# Zero-Trust Firewall Hardening Rules")
    print("iptables -F")
    print("iptables -P INPUT DROP") # Default Deny
    print("iptables -P FORWARD DROP")
    print("iptables -P OUTPUT ACCEPT")
    print("iptables -A INPUT -i lo -j ACCEPT")
    
    for port in policy["allowed_ports"]:
        print(f"iptables -A INPUT -p tcp --dport {port} -j ACCEPT")
        
    print("echo '[+] Zero Trust IPTables Firewall Applied successfully'")

if __name__ == "__main__":
    generate_iptables()`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Execute IPTables Hardening',
        description: 'Generate and apply IPTables rules script.',
        commands: ['python firewall_gen.py > apply_fw.sh', 'chmod +x apply_fw.sh', 'sudo ./apply_fw.sh']
      }
    ],
    aiPrompts: [
      'What is Zero Trust Microsegmentation and how does it prevent lateral movement?',
      'Explain IPTables Default-Deny policy configuration.'
    ]
  },
  {
    id: 'proj-12',
    title: 'Cross-Platform Endpoint Telemetry & Keylogger Detector',
    description: 'An endpoint security agent built in Python that monitors running processes for keyboard hook injections, unauthorized persistence mechanisms, and hidden DLLs.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Psutil', 'Win32API', 'Syslog', 'FastAPI'],
    architectureOverview: 'Periodically polls system API calls, verifies binary digital signatures, inspects SetWindowsHookEx injections, and reports endpoint anomalies to a central SIEM server.',
    keyFeatures: [
      'Process memory & DLL injection detection',
      'Keyboard hook / keylogger detection',
      'Persistence audit (Registry Run keys & Cron jobs)',
      'Centralized syslog telemetry exporter'
    ],
    githubUrl: 'https://github.com/cyberpath/endpoint-telemetry-agent',
    stepByStepGuide: [
      { step: '1. Process Enumeration', details: 'Enumerate running processes and compare SHA-256 hashes against whitelist.' }
    ],
    codeSnippets: [
      {
        filename: 'agent_monitor.py',
        language: 'python',
        explanation: 'Python endpoint monitoring script inspecting process memory paths and persistent run keys.',
        code: `# agent_monitor.py - Endpoint Telemetry Monitor
import psutil

def audit_processes():
    print("[*] Auditing running processes for unauthorized execution...")
    for proc in psutil.process_iter(['pid', 'name', 'exe']):
        try:
            exe_path = proc.info['exe'] or ''
            if "/tmp/" in exe_path or "AppData\\Local\\Temp" in exe_path:
                print(f"[SUSPICIOUS PROC] PID {proc.info['pid']} ({proc.info['name']}) running from Temp directory: {exe_path}")
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass

if __name__ == "__main__":
    audit_processes()`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Run Endpoint Agent',
        description: 'Install psutil and execute endpoint audit script.',
        commands: ['pip install psutil', 'python agent_monitor.py']
      }
    ],
    aiPrompts: [
      'How do endpoint telemetry agents spot process injection?',
      'Why is monitoring temp directory process execution critical?'
    ]
  },
  {
    id: 'proj-13',
    title: 'Honeypot Network Traps & Intrusion Logging System',
    description: 'A multi-protocol decoy honeypot trap (SSH, HTTP, FTP) that logs unauthorized login attempts, captures attacker payloads, and alerts security teams instantly.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Paramiko', 'Socket', 'Docker', 'Discord Webhooks'],
    architectureOverview: 'Spins up simulated SSH/FTP service ports. Traps unauthorized connections, records keystrokes and credentials, and forwards alerts to Discord/Slack webhooks.',
    keyFeatures: [
      'Simulated SSH/FTP honeypot services',
      'Attacker keystroke & session recording',
      'IP Geolocation lookup for adversary attribution',
      'Instant Webhook notification alerts'
    ],
    githubUrl: 'https://github.com/cyberpath/honeypot-traps',
    stepByStepGuide: [
      { step: '1. Service Binding', details: 'Listen on port 2222 with custom Paramiko SSH server.' }
    ],
    codeSnippets: [
      {
        filename: 'ssh_honeypot.py',
        language: 'python',
        explanation: 'Python SSH Honeypot using Paramiko capturing attacker username/password attempts.',
        code: `# ssh_honeypot.py - Simulated SSH Decoy Trap
import socket
import threading

def handle_client(client_socket, addr):
    print(f"[HONEYPOT TRAP] Connection from {addr[0]}:{addr[1]}")
    client_socket.send(b"SSH-2.0-OpenSSH_8.2p1 Ubuntu-4ubuntu0.5\\r\\n")
    data = client_socket.recv(1024)
    print(f"[ATTACK DATA] {addr[0]} sent: {data}")
    client_socket.close()

def start_honeypot():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(("0.0.0.0", 2222))
    server.listen(5)
    print("[*] SSH Honeypot listening on port 2222...")
    while True:
        client, addr = server.accept()
        threading.Thread(target=handle_client, args=(client, addr)).start()

if __name__ == "__main__":
    start_honeypot()`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Deploy SSH Honeypot',
        description: 'Launch honeypot script on external facing port.',
        commands: ['python ssh_honeypot.py']
      }
    ],
    aiPrompts: [
      'What is the purpose of low-interaction vs high-interaction honeypots?',
      'How to log attacker credentials safely without risking system compromise?'
    ]
  },
  {
    id: 'proj-14',
    title: 'AES-256 & RSA Cryptographic Vault & Ransomware Defense Simulator',
    description: 'A security demonstration suite that implements hybrid AES-256-GCM + RSA-4096 file encryption, safe sandbox file locking simulations, and automated recovery key backups.',
    difficulty: 'Advanced',
    technologies: ['Python', 'Cryptography Library', 'PyCryptodome', 'React'],
    architectureOverview: 'Demonstrates hybrid cryptography mechanics: encrypts files using fast symmetric AES keys, then encrypts the AES key using public RSA keys.',
    keyFeatures: [
      'AES-256-GCM authenticated file encryption',
      'RSA-4096 keypair generation & key exchange',
      'Canary file monitoring for ransomware defense alerts',
      'Decryption key recovery workflow'
    ],
    githubUrl: 'https://github.com/cyberpath/crypto-vault-simulator',
    stepByStepGuide: [
      { step: '1. Keypair Generation', details: 'Generate 4096-bit RSA public and private keypair.' }
    ],
    codeSnippets: [
      {
        filename: 'crypto_vault.py',
        language: 'python',
        explanation: 'Python script performing AES-256 GCM authenticated file encryption and decryption.',
        code: `# crypto_vault.py - AES-256 GCM Encryption Suite
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

def encrypt_data(data, key):
    aesgcm = AESGCM(key)
    nonce = os.urandom(12)
    ciphertext = aesgcm.encrypt(nonce, data, None)
    return nonce + ciphertext

def decrypt_data(encrypted, key):
    aesgcm = AESGCM(key)
    nonce = encrypted[:12]
    ciphertext = encrypted[12:]
    return aesgcm.decrypt(nonce, ciphertext, None)

if __name__ == "__main__":
    key = AESGCM.generate_key(bit_length=256)
    secret = b"CONFIDENTIAL FINANCIAL RECORDS"
    enc = encrypt_data(secret, key)
    dec = decrypt_data(enc, key)
    print(f"Decrypted: {dec.decode()}")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Test Hybrid Encryption',
        description: 'Install cryptography package and run crypto_vault.py.',
        commands: ['pip install cryptography', 'python crypto_vault.py']
      }
    ],
    aiPrompts: [
      'Explain hybrid cryptography (AES + RSA) used in secure file transfer.',
      'How does AES-GCM ensure confidentiality and data integrity?'
    ]
  },
  {
    id: 'proj-15',
    title: 'Automated OSINT Subdomain & Attack Surface Enumerator',
    description: 'An OSINT reconnaissance framework that queries SecurityTrails, CRT.sh SSL logs, AlienVault OTX, and DNS brute-forcing to map an enterprise attack surface.',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Asyncio', 'Aiohttp', 'DNSPython', 'Rich CLI'],
    architectureOverview: 'Asynchronously queries public Certificate Transparency logs (crt.sh) and DNS resolvers to extract active subdomains, IP bindings, and open ports.',
    keyFeatures: [
      'CRT.sh Certificate Transparency log scraping',
      'Asynchronous DNS resolution with DNSPython',
      'Subdomain takeover vulnerability check (CNAME pointing to unclaimed S3/GitHub pages)',
      'Exportable JSON and CSV attack surface maps'
    ],
    githubUrl: 'https://github.com/cyberpath/osint-surface-mapper',
    stepByStepGuide: [
      { step: '1. CT Log Scraping', details: 'Fetch JSON certificate history for domain from crt.sh.' }
    ],
    codeSnippets: [
      {
        filename: 'subdomain_enum.py',
        language: 'python',
        explanation: 'Python script querying crt.sh SSL certificate logs to discover active subdomains.',
        code: `# subdomain_enum.py - Certificate Transparency OSINT Enumerator
import requests
import json

def get_subdomains(domain):
    print(f"[*] Querying Certificate Transparency Logs for: {domain}")
    url = f"https://crt.sh/?q=%.{domain}&output=json"
    res = requests.get(url)
    
    if res.status_code == 200:
        subdomains = set()
        for entry in res.json():
            name = entry['name_value']
            subdomains.update(name.split('\\n'))
        
        print(f"[FOUND {len(subdomains)} SUBDOMAINS]:")
        for sub in list(subdomains)[:10]:
            print(f" -> {sub}")

if __name__ == "__main__":
    get_subdomains("github.com")`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Run OSINT Subdomain Scan',
        description: 'Install requests package and run subdomain_enum.py.',
        commands: ['pip install requests', 'python subdomain_enum.py']
      }
    ],
    aiPrompts: [
      'How do Certificate Transparency (CT) logs help OSINT reconnaissance?',
      'What is a subdomain takeover vulnerability?'
    ]
  },
  {
    id: 'proj-16',
    title: 'DevSecOps GitHub Actions CI/CD Security Pipeline',
    description: 'A complete DevSecOps pipeline template incorporating SAST (Semgrep), Dependency Scanning (Trivy), Secret Scanning (GitLeaks), and DAST (OWASP ZAP) into automated GitHub Actions.',
    difficulty: 'Intermediate',
    technologies: ['YAML', 'GitHub Actions', 'Semgrep', 'Trivy', 'GitLeaks', 'OWASP ZAP'],
    architectureOverview: 'Embeds multi-stage security checks into pull requests, blocking code merges if critical vulnerabilities or leaked API secrets are detected.',
    keyFeatures: [
      'Automated SAST code scanning on git push',
      'GitLeaks secret scanner preventing credential leaks',
      'Trivy dependency CVE scanner for package.json / requirements.txt',
      'SARIF output uploaded to GitHub Security tab'
    ],
    githubUrl: 'https://github.com/cyberpath/devsecops-pipeline-template',
    stepByStepGuide: [
      { step: '1. Workflow Setup', details: 'Create .github/workflows/security.yml in repository.' }
    ],
    codeSnippets: [
      {
        filename: 'security.yml',
        language: 'yaml',
        explanation: 'GitHub Actions workflow file automating SAST and secret scanning.',
        code: `# security.yml - DevSecOps CI/CD Security Pipeline
name: DevSecOps Automated Security Scan

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  sast_scan:
    name: Semgrep SAST Audit
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Semgrep Security Rules
        run: npx semgrep --config p/security-audit --error

  secret_scan:
    name: GitLeaks Secret Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: gitleaks/gitleaks-action@v2`
      }
    ],
    procedureGuide: [
      {
        stepTitle: '1. Commit DevSecOps Pipeline',
        description: 'Add security.yml to .github/workflows directory and push to GitHub.',
        commands: ['mkdir -p .github/workflows', 'git add .github/workflows/security.yml', 'git commit -m "Add DevSecOps Pipeline"']
      }
    ],
    aiPrompts: [
      'How to integrate security tools into CI/CD pipelines without slowing down developers?',
      'What is SARIF format in GitHub Security?'
    ]
  }
];

export const CTF_CHALLENGES: CTFChallenge[] = [
  {
    id: 'ctf-1',
    title: 'The Hidden Token (JWT Bypass)',
    category: 'Web',
    points: 100,
    difficulty: 'Beginner',
    solvesCount: 1420,
    description: 'A developer set the JWT algorithm to "none" on the admin authentication endpoint. Crack the token and retrieve the flag from /admin/secret.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{jwt_alg_none_bypass_master}',
    hints: ['Check the JWT header alg field.', 'You can decode and modify JWTs without signature when alg=none.']
  },
  {
    id: 'ctf-2',
    title: 'Caesar\'s Secret Vault',
    category: 'Cryptography',
    points: 150,
    difficulty: 'Beginner',
    solvesCount: 1890,
    description: 'Intercepted cipher text: "HBEBDWDWK{gd_ehxw_euhdn_duyh}". Decrypt the shift cipher to reveal the flag.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{ba_ezqu_brnk_arxe}',
    hints: ['Try a Caesar cipher shift value between 1 and 25.', 'Look for the signature prefix pattern.']
  },
  {
    id: 'ctf-3',
    title: 'Corrupted PNG Header',
    category: 'Forensics',
    points: 200,
    difficulty: 'Intermediate',
    solvesCount: 840,
    description: 'An analyst recovered an image file from a darkweb server, but the file header bytes are corrupted. Fix the PNG magic bytes in a hex editor to view the image containing the flag.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{png_magic_bytes_restored_88}',
    hints: ['Standard PNG magic bytes start with 89 50 4E 47 0D 0A 1A 0A.', 'Use a hex editor like xxd or GHex.']
  },
  {
    id: 'ctf-4',
    title: 'Corporate Whistleblower OSINT',
    category: 'OSINT',
    points: 150,
    difficulty: 'Beginner',
    solvesCount: 1120,
    description: 'Find the secret codename hidden in the EXIF metadata of the profile picture uploaded to target alias "cyber_ghost_99" on Twitter/GitHub.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{exif_metadata_geolocation_found}',
    hints: ['Exiftool can extract GPS coordinates and creator comments from JPEG files.']
  },
  {
    id: 'ctf-5',
    title: 'DNS Tunneling Investigation',
    category: 'Networking',
    points: 250,
    difficulty: 'Intermediate',
    solvesCount: 610,
    description: 'Examine the attached packet capture file. Data was exfiltrated using base64-encoded subdomains in TXT queries to a rogue DNS server.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{dns_exfil_base64_reconstructed}',
    hints: ['Extract all subdomains queried to port 53 and concatenate the base64 strings.']
  },
  {
    id: 'ctf-6',
    title: 'Linux SUID Binary Exploitation',
    category: 'Linux',
    points: 300,
    difficulty: 'Advanced',
    solvesCount: 420,
    description: 'Target machine has a custom SUID binary located at /usr/local/bin/backup that vulnerable to relative path execution. Exploit PATH variable manipulation to gain root.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{path_hijack_suid_root_shell}',
    hints: ['The binary calls system("tar -czf ..."). Can you hijack the tar executable in /tmp?']
  },
  {
    id: 'ctf-7',
    title: 'Binary Reverse Engineering (x64 Assembly)',
    category: 'Reverse Engineering',
    points: 350,
    difficulty: 'Advanced',
    solvesCount: 290,
    description: 'Disassemble keygen.elf in Ghidra. Reverse the XOR string transformation function to derive the valid validation key.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{xor_assembly_keygen_master_2026}',
    hints: ['Look at the cmp instruction in main after the loop in function transform_str().']
  },
  {
    id: 'ctf-8',
    title: 'LSB Steganography Audio Track',
    category: 'Steganography',
    points: 200,
    difficulty: 'Intermediate',
    solvesCount: 530,
    description: 'An audio file contains hidden text embedded in the least significant bits of the WAV audio data. Extract the hidden flag.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{audio_lsb_stego_frequency_found}',
    hints: ['Use StegHide or Sonic Visualiser spectrogram analysis.']
  },
  {
    id: 'ctf-9',
    title: 'Command Injection RCE Bypass',
    category: 'Web',
    points: 200,
    difficulty: 'Intermediate',
    solvesCount: 510,
    description: 'A web application ping diagnostic script fails to sanitize input shell meta-characters. Bypass space filtering using ${IFS} to read the secret flag file.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{cmd_injection_rce_ifs_bypass}',
    hints: ['Try using environment variables like ${IFS} or $IFS$9 to substitute spaces in Linux shell commands.']
  },
  {
    id: 'ctf-10',
    title: 'RSA Weak Prime Factorization',
    category: 'Cryptography',
    points: 250,
    difficulty: 'Intermediate',
    solvesCount: 430,
    description: 'Intercepted RSA Public Key parameters with a tiny modulus N = p * q. Factorize N using Wiener\'s attack or Factordb to compute private exponent d.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{rsa_factorization_weak_e_3}',
    hints: ['Check Factordb.com or use python-rsa / sagemath to factor small modulus values.']
  },
  {
    id: 'ctf-11',
    title: 'LSASS Memory Dump Credential Recovery',
    category: 'Forensics',
    points: 220,
    difficulty: 'Intermediate',
    solvesCount: 480,
    description: 'An attacker dumped lsass.dmp on a compromised domain controller. Use Mimikatz or pypykatz offline parser to recover the admin NTLM hash and flag.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{mem_volatility_lsass_dump}',
    hints: ['Run pypykatz lsa minidump lsass.dmp to parse memory credentials without Windows.']
  },
  {
    id: 'ctf-12',
    title: 'Git Commit History Leaked API Secret',
    category: 'OSINT',
    points: 150,
    difficulty: 'Beginner',
    solvesCount: 920,
    description: 'A developer accidentally committed AWS access keys to a GitHub repository before deleting the file in a later commit. Retrieve the deleted secret from git commit log history.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{git_commit_leak_recovered}',
    hints: ['Use git log -p or git reflog to view diffs of previous deleted commits.']
  },
  {
    id: 'ctf-13',
    title: 'Linux x86 Buffer Overflow & Shellcode Execution',
    category: 'Pwn',
    points: 300,
    difficulty: 'Advanced',
    solvesCount: 310,
    description: 'Exploit a vulnerable strcpy() buffer in a SUID binary. Calculate exact offset to EIP, craft a NOP sled with shellcode, and spawn a root shell.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{eip_hijack_ret2shellcode}',
    hints: ['Use cyclic 100 in pwntools to calculate the offset to the EIP register.']
  },
  {
    id: 'ctf-14',
    title: 'Anti-Debugging Ptrace Bypass',
    category: 'Reverse Engineering',
    points: 350,
    difficulty: 'Advanced',
    solvesCount: 220,
    description: 'A Linux binary detects when GDB is attached using ptrace(PTRACE_TRACEME). Patch the ptrace call return value in Ghidra or GDB to extract the decryption key.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{ptrace_anti_debug_bypassed}',
    hints: ['Set a breakpoint on ptrace and force RAX/EAX register to return 0.']
  },
  {
    id: 'ctf-15',
    title: 'Blind Time-Based SQL Injection',
    category: 'Web',
    points: 280,
    difficulty: 'Advanced',
    solvesCount: 340,
    description: 'The search parameter returns no visible database errors or data output. Inject SLEEP() conditions to exfiltrate the flag character-by-character based on HTTP response delay.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{time_based_sqli_exfiltrated}',
    hints: ['Use binary search timing scripts in Python or SQLmap with --technique=T.']
  },
  {
    id: 'ctf-16',
    title: 'Invisible Whitespace Polyglot Steganography',
    category: 'Steganography',
    points: 180,
    difficulty: 'Intermediate',
    solvesCount: 560,
    description: 'A Python script contains hidden tabs and spaces embedded at the end of code lines encoding binary 0s and 1s. Extract the hidden ASCII text.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{invisible_whitespace_stego_cracked}',
    hints: ['Map spaces to 0 and tabs to 1, then convert 8-bit binary groups back to ASCII characters.']
  },
  {
    id: 'ctf-17',
    title: 'Wireshark Kerberos AS-REP Roasting Ticket',
    category: 'Networking',
    points: 240,
    difficulty: 'Intermediate',
    solvesCount: 490,
    description: 'An attacker captured Kerberos AS-REP packets in a PCAP file. Extract the encrypted ticket from Wireshark and crack the user password hash with Hashcat.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{kerberos_asrep_roast_ticket}',
    hints: ['Filter for kerberos.msg_type == 11 in Wireshark and use Hashcat mode 18200.']
  },
  {
    id: 'ctf-18',
    title: 'Assembly License Keygen Disassembly',
    category: 'Reverse Engineering',
    points: 400,
    difficulty: 'Advanced',
    solvesCount: 180,
    description: 'Decompile validating_keygen.exe in Ghidra. Reverse the key validation math (XOR 0x5A, bitwise ROL 3) to write a valid serial key generator for the flag.',
    flagFormat: 'CYBERPATH{...}',
    flagAnswer: 'CYBERPATH{asm_license_keygen_cracked_2026}',
    hints: ['Look at the transform function at address 0x00401120. Invert ROL 3 to ROR 3 and XOR 0x5A.']
  }
];

export const LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: 'CyberViper_0x', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', points: 4250, challengesSolved: 38, country: 'USA', badge: 'Grandmaster' },
  { rank: 2, name: 'NullPointer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', points: 3980, challengesSolved: 35, country: 'UK', badge: 'Master' },
  { rank: 3, name: 'Hex_Ghost', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', points: 3650, challengesSolved: 32, country: 'Germany', badge: 'Master' },
  { rank: 4, name: 'Alex_Sec', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', points: 3100, challengesSolved: 28, country: 'Canada', badge: 'Diamond' },
  { rank: 5, name: 'ByteHunter', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80', points: 2850, challengesSolved: 25, country: 'Japan', badge: 'Diamond' }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: 'soc-analyst',
    title: 'SOC Analyst (L1/L2)',
    tagline: 'The frontline defender who monitors, detects, and triages cyber threats.',
    avgSalary: '₹6.5 Lakhs - ₹12.5 Lakhs / yr',
    demandLevel: 'Critical',
    description: 'Security Operations Center analysts monitor enterprise networks around the clock, analyze alerts from SIEM platforms, perform initial malware triaging, and respond to security incidents.',
    requiredSkills: ['Splunk / ELK Stack', 'Sysmon Log Analysis', 'Wireshark Traffic Analysis', 'TCP/IP Protocols', 'YARA & Sigma Rules'],
    recommendedCourses: ['course-1', 'course-2', 'course-7'],
    recommendedProjects: ['proj-2', 'proj-1'],
    certifications: ['CompTIA Security+', 'Cisco CyberOps Associate', 'BTL1 (Blue Team Level 1)'],
    roadmapSteps: [
      { phase: 'Month 1-2', title: 'Network & OS Mastery', description: 'Master OSI model, Wireshark, Linux cli, and Windows Event logs.' },
      { phase: 'Month 3-4', title: 'SIEM & Detection Rules', description: 'Learn Splunk SPL query language, Sysmon configuration, and alert triaging.' },
      { phase: 'Month 5-6', title: 'Incident Response & Portfolio', description: 'Build SIEM log correlation project and prepare for Security+ exam.' }
    ]
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester / Red Teamer',
    tagline: 'Authorized offensive specialist who simulates realistic cyber attacks.',
    avgSalary: '₹8.5 Lakhs - ₹18.5 Lakhs / yr',
    demandLevel: 'Very High',
    description: 'Penetration testers assess corporate defenses by attempting to breach network perimeters, exploit web applications, execute privilege escalation, and pivot across internal subnets.',
    requiredSkills: ['Nmap & Metasploit', 'Burp Suite Pro', 'Active Directory Attacks', 'Python Exploit Scripting', 'Privilege Escalation'],
    recommendedCourses: ['course-4', 'course-5', 'course-6'],
    recommendedProjects: ['proj-6', 'proj-1'],
    certifications: ['eJPT (Junior Pentester)', 'OSCP (OffSec Certified Professional)', 'PNPT'],
    roadmapSteps: [
      { phase: 'Month 1-2', title: 'Recon & Scripting', description: 'Master Nmap scanning, OSINT, and Python automation.' },
      { phase: 'Month 3-5', title: 'Web & Network Exploitation', description: 'Deep dive into OWASP Top 10 and Metasploit exploitation.' },
      { phase: 'Month 6-9', title: 'Buffer Overflow & OSCP Prep', description: 'Practice 50+ HackTheBox / TryHackMe machines and attempt OSCP.' }
    ]
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics & Incident Responder (DFIR)',
    tagline: 'The cyber detective who investigates breaches and reconstructs attack timelines.',
    avgSalary: '₹8 Lakhs - ₹16.5 Lakhs / yr',
    demandLevel: 'High',
    description: 'DFIR specialists extract volatile memory artifacts, analyze hard drive images, trace malicious lateral movement, and provide legal evidence reports following high-profile data breaches.',
    requiredSkills: ['Volatility Framework', 'Autopsy / FTK', 'Memory Dump Analysis', 'Registry Artifacts', 'Timeline Analysis'],
    recommendedCourses: ['course-2', 'course-8', 'course-9'],
    recommendedProjects: ['proj-3', 'proj-2'],
    certifications: ['GCFA (GIAC Certified Forensic Analyst)', 'eCDFP', 'GCIH'],
    roadmapSteps: [
      { phase: 'Month 1-3', title: 'Disk & File System Forensics', description: 'Learn NTFS MFT records, registry hives, and Autopsy.' },
      { phase: 'Month 4-6', title: 'Volatile RAM Analysis', description: 'Master Volatility 3 plugins, process injection detection, and malware extraction.' }
    ]
  },
  {
    id: 'cloud-security-engineer',
    title: 'Cloud Security Engineer',
    tagline: 'Architects and safeguards multi-cloud environments across AWS, Azure and GCP.',
    avgSalary: '₹10 Lakhs - ₹22 Lakhs / yr',
    demandLevel: 'Critical',
    description: 'Cloud Security Engineers design least-privilege IAM policies, secure containerized Kubernetes clusters, audit Terraform infrastructure as code, and implement cloud native threat detection.',
    requiredSkills: ['AWS IAM & Security Groups', 'Terraform Security', 'Docker & Kubernetes', 'GuardDuty & CloudTrail', 'Python Boto3'],
    recommendedCourses: ['course-10', 'course-3'],
    recommendedProjects: ['proj-4', 'proj-5'],
    certifications: ['AWS Certified Security - Specialty', 'CCSP', 'Azure Security Engineer AZ-500'],
    roadmapSteps: [
      { phase: 'Month 1-3', title: 'Cloud Core & IAM', description: 'Learn AWS core services, IAM policies, and VPC architecture.' },
      { phase: 'Month 4-6', title: 'DevSecOps & Automation', description: 'Implement CI/CD security scanning, Terraform static analysis, and GuardDuty.' }
    ]
  },
  {
    id: 'malware-analyst',
    title: 'Malware Analyst & Reverse Engineer',
    tagline: 'Deconstructs malicious software to neutralize ransomware and zero-day threats.',
    avgSalary: '₹9.5 Lakhs - ₹20 Lakhs / yr',
    demandLevel: 'High',
    description: 'Malware Analysts analyze suspicious executables using disassemblers like Ghidra, debug code in x64dbg, unpack obfuscated binaries, and extract indicators of compromise (IOCs) for threat intelligence.',
    requiredSkills: ['Ghidra & IDA Pro', 'x86/x64 Assembly', 'Dynamic Sandboxing', 'PE/ELF Header Analysis', 'YARA Rule Writing'],
    recommendedCourses: ['course-9', 'course-8'],
    recommendedProjects: ['proj-3', 'proj-1'],
    certifications: ['GREM (GIAC Reverse Engineering Malware)', 'eCRE', 'IDA Pro Certified'],
    roadmapSteps: [
      { phase: 'Month 1-2', title: 'Assembly & C Fundamentals', description: 'Master x86/x64 stack frames, CPU registers, and pointer arithmetic.' },
      { phase: 'Month 3-4', title: 'Static & Dynamic Triage', description: 'Learn Ghidra decompilation, API hooking, and behavioral sandboxing in Docker.' },
      { phase: 'Month 5-8', title: 'Unpacking & Ransomware Reverse', description: 'Reverse engineer packed malware, decrypt C2 communication channels, and write YARA rules.' }
    ]
  },
  {
    id: 'appsec-engineer',
    title: 'Application Security Engineer (AppSec)',
    tagline: 'Integrates security into software development lifecycles and CI/CD pipelines.',
    avgSalary: '₹10.5 Lakhs - ₹21 Lakhs / yr',
    demandLevel: 'Critical',
    description: 'AppSec Engineers conduct static (SAST) and dynamic (DAST) code audits, remediate OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF), implement secure authentication, and automate DevSecOps pipelines.',
    requiredSkills: ['OWASP Top 10 Audit', 'SAST / DAST Tools', 'Secure Code Review', 'CI/CD Pipeline Security', 'OAuth2 & JWT Auth'],
    recommendedCourses: ['course-4', 'course-6'],
    recommendedProjects: ['proj-6', 'proj-5'],
    certifications: ['CASE (Certified Application Security Engineer)', 'CSSLP', 'eWPTX'],
    roadmapSteps: [
      { phase: 'Month 1-2', title: 'Web Vulnerability Mastery', description: 'Master OWASP Top 10 flaws, HTTP mechanics, and Burp Suite Pro extensions.' },
      { phase: 'Month 3-4', title: 'Secure Code Auditing', description: 'Perform manual code reviews in Node.js, Python, and Java to patch logic bugs.' },
      { phase: 'Month 5-6', title: 'DevSecOps Automation', description: 'Embed Semgrep, Snyk, and OWASP ZAP into GitHub Actions CI/CD workflows.' }
    ]
  },
  {
    id: 'security-architect',
    title: 'Security Architect & Enterprise Defender',
    tagline: 'Designs resilient Zero-Trust security postures for global enterprise networks.',
    avgSalary: '₹18 Lakhs - ₹35+ Lakhs / yr',
    demandLevel: 'Very High',
    description: 'Security Architects define high-level security blueprints, evaluate network perimeter defenses, enforce Zero-Trust access, conduct threat modeling, and ensure multi-cloud compliance.',
    requiredSkills: ['Zero-Trust Architecture', 'Threat Modeling (STRIDE)', 'Network Segmentation', 'Enterprise Risk Assessment', 'Cloud Security Blueprints'],
    recommendedCourses: ['course-3', 'course-10'],
    recommendedProjects: ['proj-4', 'proj-2'],
    certifications: ['CISSP (Certified Information Systems Security Professional)', 'SABSA', 'TOGAF Security'],
    roadmapSteps: [
      { phase: 'Month 1-3', title: 'Enterprise Defense Design', description: 'Study NIST Cybersecurity Framework, Zero-Trust principles, and network micro-segmentation.' },
      { phase: 'Month 4-6', title: 'Threat Modeling & CISSP', description: 'Perform STRIDE threat modeling on cloud architectures and complete CISSP certification.' }
    ]
  },
  {
    id: 'threat-intelligence',
    title: 'Cyber Threat Intelligence Analyst (CTI)',
    tagline: 'Tracks APT threat actors, Darkweb telemetry, and adversary TTPs.',
    avgSalary: '₹7.5 Lakhs - ₹15 Lakhs / yr',
    demandLevel: 'High',
    description: 'CTI Analysts monitor underground forums, correlate IoCs (Indicators of Compromise), map adversary behavior to the MITRE ATT&CK framework, and produce actionable intelligence reports for executive teams.',
    requiredSkills: ['MITRE ATT&CK Mapping', 'MISP / OpenCTI', 'OSINT Investigation', 'Adversary TTP Profiling', 'STIX / TAXII Protocols'],
    recommendedCourses: ['course-7', 'course-2'],
    recommendedProjects: ['proj-5', 'proj-2'],
    certifications: ['CTIA (Certified Threat Intelligence Analyst)', 'GCTI', 'OSINT Certified'],
    roadmapSteps: [
      { phase: 'Month 1-2', title: 'OSINT & Recon Methods', description: 'Master Maltego, WHOIS history, Shodan queries, and threat actor profiling.' },
      { phase: 'Month 3-5', title: 'Threat Platforms & CTI Reports', description: 'Set up MISP threat sharing instances, parse OpenCTI feeds, and write strategic CTI reports.' }
    ]
  },
  {
    id: 'iam-specialist',
    title: 'Identity & Access Management (IAM) Specialist',
    tagline: 'Enforces least-privilege access, Privileged Access Management (PAM), and SSO.',
    avgSalary: '₹8.5 Lakhs - ₹17 Lakhs / yr',
    demandLevel: 'High',
    description: 'IAM Specialists design authentication systems, manage Okta/Azure AD Directory services, implement Privileged Access Management (PAM), and eliminate orphan accounts to prevent credential breaches.',
    requiredSkills: ['Okta & Microsoft Entra ID', 'OAuth2 / OIDC / SAML 2.0', 'PAM (CyberArk)', 'Active Directory & LDAP', 'Zero-Trust IAM'],
    recommendedCourses: ['course-1', 'course-10'],
    recommendedProjects: ['proj-4', 'proj-2'],
    certifications: ['Okta Certified Professional', 'Microsoft Certified: Identity & Access Administrator', 'CIAM'],
    roadmapSteps: [
      { phase: 'Month 1-2', title: 'Identity Protocols', description: 'Master SAML 2.0, OAuth2, OpenID Connect, and Active Directory LDAP domain controllers.' },
      { phase: 'Month 3-4', title: 'Enterprise SSO & PAM', description: 'Implement Okta Single Sign-On, MFA policies, and CyberArk PAM vaulting.' }
    ]
  },
  {
    id: 'ciso-grc',
    title: 'Chief Information Security Officer (CISO) & GRC Lead',
    tagline: 'Leads security governance, regulatory compliance, and executive risk management.',
    avgSalary: '₹25 Lakhs - ₹50+ Lakhs / yr',
    demandLevel: 'High',
    description: 'CISO & GRC Leaders align cybersecurity strategy with business goals, manage audit compliance (ISO 27001, SOC 2, HIPAA, GDPR), direct incident response teams, and report security posture to corporate boards.',
    requiredSkills: ['ISO 27001 & SOC 2 Audits', 'Cyber Risk Assessment', 'Executive Leadership', 'Vendor Risk Management', 'Incident Governance'],
    recommendedCourses: ['course-1', 'course-3'],
    recommendedProjects: ['proj-4', 'proj-2'],
    certifications: ['CISM (Certified Information Security Manager)', 'CISA', 'CRISC', 'CISSP'],
    roadmapSteps: [
      { phase: 'Month 1-3', title: 'Governance & Frameworks', description: 'Master ISO 27001 ISMS implementation, NIST RMF, and SOC 2 Type II audit readiness.' },
      { phase: 'Month 4-6', title: 'Risk & Executive Leadership', description: 'Conduct quantitative risk assessments, build vendor risk programs, and prepare board presentations.' }
    ]
  }
];

export const CERTIFICATIONS: CertificationPrep[] = [
  {
    id: 'cert-secplus',
    name: 'CompTIA Security+',
    code: 'SY0-701',
    vendor: 'CompTIA',
    description: 'The global benchmark entry-level certification validating foundational cybersecurity knowledge and technical skills.',
    difficulty: 'Beginner',
    examDuration: '90 Minutes',
    passingScore: '750 / 900',
    domains: [
      { name: 'General Security Concepts', percentage: 12 },
      { name: 'Threats, Vulnerabilities & Mitigations', percentage: 22 },
      { name: 'Security Architecture', percentage: 18 },
      { name: 'Security Operations', percentage: 28 },
      { name: 'Security Program Management & Oversight', percentage: 20 }
    ],
    recommendedCourses: ['course-1', 'course-2', 'course-7']
  },
  {
    id: 'cert-ejpt',
    name: 'eLearnSecurity Junior Penetration Tester',
    code: 'eJPTv2',
    vendor: 'INE Security',
    description: '100% practical 48-hour exam that tests hands-on assessment of networks, web applications, and system exploitation.',
    difficulty: 'Beginner',
    examDuration: '48 Hours Practical',
    passingScore: '70%',
    domains: [
      { name: 'Assessment Methodologies', percentage: 25 },
      { name: 'Host & Network Auditing', percentage: 25 },
      { name: 'Host & Network Penetration Testing', percentage: 35 },
      { name: 'Web Application Penetration Testing', percentage: 15 }
    ],
    recommendedCourses: ['course-4', 'course-5', 'course-6']
  },
  {
    id: 'cert-oscp',
    name: 'OffSec Certified Professional',
    code: 'OSCP',
    vendor: 'OffSec',
    description: 'The gold standard hands-on penetration testing certification featuring a rigorous 24-hour live laboratory exam.',
    difficulty: 'Advanced',
    examDuration: '24 Hours + 24 Hours Report',
    passingScore: '70 / 100 Points',
    domains: [
      { name: 'Active Directory Attacks', percentage: 40 },
      { name: 'Standalone Host Exploitation', percentage: 40 },
      { name: 'Documentation & Reporting', percentage: 20 }
    ],
    recommendedCourses: ['course-4', 'course-5', 'course-8']
  },
  {
    id: 'cert-ceh',
    name: 'Certified Ethical Hacker',
    code: 'CEH v12',
    vendor: 'EC-Council',
    description: 'Globally recognized certification covering offensive security concepts, scanning tools, malware threats, and hacking methodologies.',
    difficulty: 'Intermediate',
    examDuration: '4 Hours',
    passingScore: '70%',
    domains: [
      { name: 'Information Security Threats', percentage: 20 },
      { name: 'Attacking Methodologies', percentage: 40 },
      { name: 'Tools & Systems', percentage: 25 },
      { name: 'Security & Countermeasures', percentage: 15 }
    ],
    recommendedCourses: ['course-1', 'course-5', 'course-6']
  }
];

export const NEW_USER_PROFILE: UserProfile = {
  name: 'New Security Cadet',
  handle: '@cadet_001',
  email: 'cadet@cyberpath.io',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  role: 'Cybersecurity Student',
  rank: 0,
  ctfPoints: 0,
  level: 1,
  currentStreakDays: 0,
  completedCoursesCount: 0,
  completedLabsCount: 0,
  completedProjectsCount: 0,
  completedCTFsCount: 0,
  completedLabIds: [],
  completedCTFIds: [],
  terminalUser: 'user',
  badges: [],
  skillMatrix: [
    { skill: 'Networking', value: 0 },
    { skill: 'Linux Ops', value: 0 },
    { skill: 'Web Security', value: 0 },
    { skill: 'SIEM & SOC', value: 0 },
    { skill: 'Ethical Hacking', value: 0 },
    { skill: 'Digital Forensics', value: 0 }
  ]
};

export const DEMO_USER_PROFILE: UserProfile = {
  name: 'Alex Vance',
  handle: '@cyber_vance',
  email: 'alex.vance@cyberpath.io',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  role: 'SOC Analyst Trainee',
  rank: 14,
  ctfPoints: 650,
  level: 8,
  currentStreakDays: 12,
  completedCoursesCount: 2,
  completedLabsCount: 5,
  completedProjectsCount: 1,
  completedCTFsCount: 4,
  completedLabIds: ['lab-1', 'lab-2', 'lab-3', 'lab-4', 'lab-5'],
  completedCTFIds: ['ctf-1', 'ctf-2', 'ctf-3', 'ctf-4'],
  terminalUser: 'alex',
  badges: [
    { id: 'badge-1', name: 'First Blood CTF', icon: 'Flag', earnedDate: '2026-09-01', color: 'text-amber-400 border-amber-400/30' },
    { id: 'badge-2', name: 'Wireshark Ninja', icon: 'Activity', earnedDate: '2026-09-05', color: 'text-cyan-400 border-cyan-400/30' },
    { id: 'badge-3', name: 'Linux Hardened', icon: 'Terminal', earnedDate: '2026-09-12', color: 'text-emerald-400 border-emerald-400/30' },
    { id: 'badge-4', name: '10-Day Streak', icon: 'Zap', earnedDate: '2026-09-18', color: 'text-purple-400 border-purple-400/30' }
  ],
  skillMatrix: [
    { skill: 'Networking', value: 85 },
    { skill: 'Linux Ops', value: 75 },
    { skill: 'Web Security', value: 60 },
    { skill: 'SIEM & SOC', value: 90 },
    { skill: 'Ethical Hacking', value: 50 },
    { skill: 'Digital Forensics', value: 40 }
  ]
};

export const INITIAL_USER_PROFILE = NEW_USER_PROFILE;

