export interface RoadmapTopic {
  id: string;
  title: string;
  category: 'foundations' | 'os' | 'networking' | 'security' | 'offensive' | 'defensive' | 'ctf' | 'cert' | 'virtualization';
  tagline: string;
  description: string;
  subBranches?: { id: string; name: string; description: string }[];
  keyConcepts: string[];
  recommendedLabId?: string;
  labTitle?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  studyGuide?: {
    overview: string;
    modules: { title: string; content: string; codeSnippet?: string }[];
    cheatsheet?: { cmd: string; usage: string }[];
  };
  aiPrompts?: string[];
}

export const CYBER_ROADMAP_MAIN_BRANCHES: RoadmapTopic[] = [
  {
    id: 'fundamental-it-skills',
    title: 'Fundamental IT Skills',
    category: 'foundations',
    tagline: 'Hardware, Protocols, Connection Types, & Popular Suites',
    description: 'The bedrock of computer architecture, peripheral protocols, operating logic, and basic enterprise IT suites.',
    subBranches: [
      { id: 'hw-components', name: 'Computer Hardware Components', description: 'CPU, RAM, Storage (SSD/HDD), Motherboard Buses, Peripheral Interfaces.' },
      { id: 'conn-types', name: 'Connection Types & Functions', description: 'WiFi (802.11), Bluetooth, NFC, Infrared (IR), Ethernet (RJ45).' },
      { id: 'troubleshooting', name: 'OS-Independent Troubleshooting', description: 'Diagnostic methodologies, Event Logs, Hardware POST codes, Drivers.' },
      { id: 'popular-suites', name: 'Basics of Popular Suites', description: 'Microsoft Office 365, Google Workspace, Apple iCloud Enterprise Services.' },
      { id: 'comp-net-basics', name: 'Basics of Computer Networking', description: 'Client-Server Architecture, Routers, Switches, Firewalls, Topologies.' }
    ],
    keyConcepts: ['CPU Clock Cycles', 'RAM Volatility', 'Wireless Frequencies (2.4GHz / 5GHz)', 'NFC Short-Range Induction', 'POST Diagnostic Codes'],
    difficulty: 'Beginner',
    studyGuide: {
      overview: 'Fundamental IT Skills provide the core hardware and protocol knowledge required to understand how software, operating systems, and network communication interface with physical chips and wireless mediums.',
      modules: [
        {
          title: '1. Computer Hardware Architecture',
          content: 'The CPU acts as the primary computation unit, executing machine instructions from RAM. RAM is volatile high-speed memory, whereas NVMe/SSD drives provide non-volatile storage. The system bus connects CPU, memory, and peripheral controllers.'
        },
        {
          title: '2. Connection Types & Wireless Frequency Protocols',
          content: 'WiFi operates on 2.4GHz (longer range, slower) and 5GHz/6GHz (faster, shorter range). Bluetooth uses short-range 2.4GHz FHSS. NFC operates at 13.56MHz using electromagnetic induction for contactless transactions. Ethernet (Cat6/6a) provides wired low-latency TCP/IP connections.'
        },
        {
          title: '3. Diagnostic & Troubleshooting Methodology',
          content: 'Effective IT troubleshooting isolates problems systematically: Physical Layer → Data Link → Hardware POST (Power-On Self-Test) → OS Drivers & Event Logs.'
        }
      ],
      cheatsheet: [
        { cmd: 'lshw -short', usage: 'List summary of hardware components in Linux' },
        { cmd: 'iwconfig', usage: 'Inspect wireless connection frequency and signal strength' },
        { cmd: 'systeminfo', usage: 'Display detailed OS and hardware telemetry on Windows' }
      ]
    },
    aiPrompts: [
      'Explain the difference between 2.4GHz and 5GHz WiFi frequencies.',
      'How does NFC electromagnetic induction work for security tokens?',
      'Walk me through a step-by-step hardware troubleshooting flowchart.'
    ]
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    category: 'os',
    tagline: 'Windows, Linux & macOS Architecture & Permissions',
    description: 'Master kernel internals, user permissions, process isolation, and CLI navigation across Windows, Linux, and macOS.',
    subBranches: [
      { id: 'win-os', name: 'Windows Security & Administration', description: 'Active Directory, Registry, Powershell, SAM Database, Event Viewer.' },
      { id: 'linux-os', name: 'Linux System Administration', description: 'Bash CLI, CHMOD/CHOWN permissions, Process Signals, Systemd Services.' },
      { id: 'macos-os', name: 'macOS Security Architecture', description: 'Darwin Kernel, FileVault, SIP (System Integrity Protection), Terminal.' },
      { id: 'os-install-config', name: 'Installation & Configuration', description: 'Partitioning, Bootloaders (GRUB/UEFI), System Hardening, Drivers.' },
      { id: 'os-permissions', name: 'Permissions & User Privileges', description: 'SUID/SGID, Windows ACLs, UAC Elevation, Sudoers configuration.' }
    ],
    keyConcepts: ['Kernel vs User Space', 'POSIX File Permissions', 'Windows Security Descriptors', 'Bash Shell Pipeline', 'Systemd Unit Files'],
    difficulty: 'Beginner',
    studyGuide: {
      overview: 'An Operating System (OS) is software that manages computer hardware resources, provides common services for computer programs, and enforces security boundary controls between user processes and system memory.',
      modules: [
        {
          title: '1. What is an Operating System & Kernel Mode',
          content: 'The Kernel is the core component of an OS. It runs in Ring 0 (Privileged Mode) with direct CPU and memory access. User applications execute in Ring 3 (User Mode) and must make System Calls (syscalls) to request kernel services.',
          codeSnippet: '// Linux Syscall Example in C\n#include <unistd.h>\nint main() {\n    write(1, "Hello Kernel\\n", 13); // Triggers sys_write (syscall 1)\n    return 0;\n}'
        },
        {
          title: '2. Process & Memory Isolation',
          content: 'Each process operates in its own virtual memory space. The OS Memory Management Unit (MMU) translates virtual memory addresses to physical RAM, preventing one process from inspecting or corrupting another process address space.'
        },
        {
          title: '3. Permissions & Privileges (POSIX & ACLs)',
          content: 'Linux uses POSIX bitmasks (Read=4, Write=2, Execute=1). Windows utilizes Access Control Lists (ACLs) containing Access Control Entries (ACEs) assigned to User Security Identifiers (SIDs).'
        }
      ],
      cheatsheet: [
        { cmd: 'chmod 755 script.sh', usage: 'Grant Owner RWX, Group RX, Others RX permissions' },
        { cmd: 'ps aux | grep root', usage: 'List all active processes running under root privilege' },
        { cmd: 'whoami /priv', usage: 'Display active Windows user security privileges' },
        { cmd: 'journalctl -xe', usage: 'Inspect systemd daemon logs and service failures' }
      ]
    },
    aiPrompts: [
      'What is an Operating System and why is Kernel Mode (Ring 0) isolated from User Mode?',
      'Explain POSIX file permissions (chmod 755 vs 644) with real examples.',
      'How do Linux system calls (syscalls) transition execution from Ring 3 to Ring 0?'
    ]
  },
  {
    id: 'networking-and-subnetting',
    title: 'Networking & Subnetting',
    category: 'networking',
    tagline: 'TCP/IP Stack, Subnet Masks, CIDR, & IP Terminology',
    description: 'Deep dive into packet routing, IP addressing schemes, subnetting calculations, and network analysis.',
    subBranches: [
      { id: 'subnet-basics', name: 'Basics of Subnetting', description: 'Network Bits vs Host Bits, Classless Inter-Domain Routing (CIDR).' },
      { id: 'ip-addresses', name: 'Public vs Private IP Addresses', description: 'RFC 1918 Private Ranges (10.0.0.0/8, 192.168.0.0/16), NAT.' },
      { id: 'ip-terminology', name: 'IP Terminology (Localhost, Loopback, CIDR)', description: '127.0.0.1 Loopback, 0.0.0.0 Wildcard, Subnet Masks, Default Gateways.' },
      { id: 'tcp-ip-osi', name: 'OSI 7-Layer & TCP/IP Model', description: 'Application, Transport (TCP/UDP), Network (IP), Data Link (MAC).' }
    ],
    keyConcepts: ['CIDR Notation (/24, /16, /8)', 'Broadcast vs Unicast', 'ARP Protocol Resolution', '3-Way TCP Handshake', 'Subnet Mask Calculation'],
    difficulty: 'Intermediate',
    studyGuide: {
      overview: 'Networking enables distributed systems to exchange data frames and IP packets across interconnected routers and switches using standardized protocol specifications.',
      modules: [
        {
          title: '1. IPv4 Addressing & CIDR Subnetting',
          content: 'An IPv4 address consists of 32 bits divided into 4 octets. In CIDR notation (e.g., 192.168.1.0/24), the /24 prefix indicates 24 network bits and 8 host bits, yielding 256 IP addresses (254 usable hosts).'
        },
        {
          title: '2. Special IP Terminology',
          content: 'Localhost / Loopback (127.0.0.1): Virtual interface routing traffic internally within the local host.\nDefault Gateway: The router IP address where packets destined for external subnets are forwarded.'
        }
      ],
      cheatsheet: [
        { cmd: 'ip route show', usage: 'Display default gateway and kernel IP routing tables' },
        { cmd: 'ping -c 4 127.0.0.1', usage: 'Test local TCP/IP protocol stack loopback' },
        { cmd: 'traceroute 8.8.8.8', usage: 'Trace hop-by-hop packet routing to external DNS' }
      ]
    },
    aiPrompts: [
      'How do I calculate usable hosts for a /26 CIDR subnet mask?',
      'Explain the difference between 127.0.0.1 (Loopback) and 0.0.0.0 (Wildcard).',
      'Walk me through the TCP 3-Way Handshake (SYN, SYN-ACK, ACK).'
    ]
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Core Fundamentals',
    category: 'security',
    tagline: 'CIA Triad, Cryptography, IAM, & Threat Vectors',
    description: 'Core security principles, cryptographic ciphers, hashing, and threat modeling frameworks.',
    subBranches: [
      { id: 'cia-triad', name: 'CIA Triad', description: 'Confidentiality, Integrity, Availability enforcement mechanisms.' },
      { id: 'crypto-ciphers', name: 'Cryptography & Ciphers', description: 'Symmetric (AES-256), Asymmetric (RSA/ECC), SHA-256 Hashing, PKI.' },
      { id: 'iam-auth', name: 'Identity & Access Management', description: 'Multi-Factor Auth (MFA), SAML 2.0, OAuth 2.0, Single Sign-On (SSO).' },
      { id: 'threat-models', name: 'Threat Modeling Frameworks', description: 'STRIDE, DREAD, MITRE ATT&CK Matrix alignment.' }
    ],
    keyConcepts: ['Symmetric vs Asymmetric Encryption', 'Digital Certificates & CA Hierarchy', 'Salting & Hashing Passwords', 'Zero Trust Architecture'],
    difficulty: 'Beginner',
    studyGuide: {
      overview: 'Cybersecurity Fundamentals establish the baseline security posture needed to protect enterprise assets, data confidentiality, system integrity, and service availability.',
      modules: [
        {
          title: '1. The CIA Triad',
          content: 'Confidentiality ensures sensitive data is accessible only to authorized users (Encryption). Integrity prevents unauthorized tampering (Hashes & Signatures). Availability ensures uptime (Redundancy & DDoS mitigation).'
        },
        {
          title: '2. Cryptography Essentials',
          content: 'Symmetric Encryption (AES-256) uses a single secret key for fast bulk encryption. Asymmetric Encryption (RSA/ECC) uses a Public-Private key pair. Cryptographic Hash Functions (SHA-256) generate one-way deterministic digests.'
        }
      ],
      cheatsheet: [
        { cmd: 'openssl enc -aes-256-cbc -in secret.txt', usage: 'Encrypt file using AES-256 cipher' },
        { cmd: 'sha256sum payload.bin', usage: 'Calculate SHA-256 hash digest of a binary' }
      ]
    },
    aiPrompts: [
      'Explain the CIA Triad with real-world cybersecurity examples.',
      'What is the mathematical difference between Symmetric and Asymmetric Encryption?',
      'How does password hashing with salt protect against rainbow table attacks?'
    ]
  },
  {
    id: 'web-security-owasp',
    title: 'Web Application Security & OWASP',
    category: 'offensive',
    tagline: 'SQLi, XSS, CSRF, & Broken Access Control',
    description: 'Identify and exploit modern web application vulnerabilities identified by the OWASP Top 10.',
    subBranches: [
      { id: 'sqli', name: 'SQL Injection (SQLi)', description: 'Union-based, Error-based, and Blind Time-Delay SQL Exploitations.' },
      { id: 'xss', name: 'Cross-Site Scripting (XSS)', description: 'Reflected, Stored, and DOM-based JavaScript Injection attacks.' },
      { id: 'csrf-jwt', name: 'CSRF & JWT Session Exploits', description: 'Cross-Site Request Forgery, JWT Null Signature Bypass, Session Fixation.' },
      { id: 'burp-proxy', name: 'Burp Suite & Proxy Interception', description: 'Intercepting HTTP requests, Repeater, Intruder brute-force modules.' }
    ],
    keyConcepts: ['Parametrized Queries', 'Content Security Policy (CSP)', 'Same-Origin Policy (SOP)', 'Sanitizing User Inputs'],
    difficulty: 'Intermediate',
    studyGuide: {
      overview: 'Web security focuses on defending client-server HTTP web applications against input injection, session hijacking, broken access control, and cross-site scripts.',
      modules: [
        {
          title: '1. SQL Injection (SQLi)',
          content: 'SQLi occurs when unvalidated user inputs are concatenated directly into database queries. Attackers bypass authentication or dump database tables using payloads like \' OR 1=1 --',
          codeSnippet: '// Vulnerable Code:\nString q = "SELECT * FROM users WHERE user=\'" + req.getParameter("username") + "\'";\n\n// Secure Code (Parameterized Query):\nPreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE user=?");\nstmt.setString(1, username);'
        }
      ],
      cheatsheet: [
        { cmd: "sqlmap -u 'http://target/page.php?id=1' --dbs", usage: 'Automate SQL injection detection and database dumping' },
        { cmd: "<script>alert(document.cookie)</script>", usage: 'Classic XSS proof-of-concept payload' }
      ]
    },
    aiPrompts: [
      'Explain SQL Injection (SQLi) and show how to fix it with Parameterized Queries.',
      'What is the difference between Reflected XSS and Stored XSS?',
      'How does a Content Security Policy (CSP) block XSS script execution?'
    ]
  },
  {
    id: 'ethical-hacking-pentesting',
    title: 'Ethical Hacking & Pentesting',
    category: 'offensive',
    tagline: 'Reconnaissance, Nmap, Metasploit, & PrivEsc',
    description: 'Offensive security methodologies, vulnerability scanning, exploit delivery, and privilege escalation.',
    subBranches: [
      { id: 'osint-recon', name: 'OSINT & Reconnaissance', description: 'Shodan, Maltego, DNS Recon, Google Dorking, Subdomain Enum.' },
      { id: 'nmap-scanning', name: 'Nmap Port Scanning', description: 'SYN Stealth Scan (-sS), Version Detection (-sV), NSE Scripts.' },
      { id: 'metasploit', name: 'Metasploit Framework', description: 'msfconsole, Payload Generation (msfvenom), Listener Handlers.' },
      { id: 'privesc', name: 'Privilege Escalation', description: 'Linux SUID Abuses, Windows Unquoted Service Paths, Kernel Exploits.' }
    ],
    keyConcepts: ['Passive vs Active Recon', 'Reverse Shell Payload Delivery', 'Post-Exploitation Persistence', 'Pivoting across Internal Subnets'],
    difficulty: 'Advanced',
    studyGuide: {
      overview: 'Ethical Hacking involves authorized security auditing to uncover infrastructure vulnerabilities before malicious actors exploit them.',
      modules: [
        {
          title: '1. Reconnaissance & Nmap Scanning',
          content: 'Reconnaissance gathers target intelligence. Nmap performs stealth port scanning to identify open ports, service versions, and OS fingerprints.'
        }
      ],
      cheatsheet: [
        { cmd: 'nmap -sC -sV -p- 10.10.10.1', usage: 'Full port scan with default scripts and version detection' },
        { cmd: 'msfconsole', usage: 'Launch the Metasploit Framework terminal interface' }
      ]
    },
    aiPrompts: [
      'How does an Nmap SYN Stealth scan (-sS) work under the hood?',
      'Explain Linux SUID privilege escalation vulnerabilities.',
      'What are the 5 phases of ethical penetration testing?'
    ]
  },
  {
    id: 'soc-blue-team-ops',
    title: 'SOC Operations & Blue Team',
    category: 'defensive',
    tagline: 'SIEM Triage, Splunk, Snort IDS, & Incident Response',
    description: 'Enterprise security monitoring, log analysis, intrusion detection, and incident response.',
    subBranches: [
      { id: 'siem-splunk', name: 'SIEM Analysis & Splunk', description: 'Writing Search Processing Language (SPL) queries for log correlation.' },
      { id: 'ids-ips', name: 'IDS/IPS Snort & Suricata', description: 'Writing custom Snort detection rules for anomalous TCP signatures.' },
      { id: 'log-forensics', name: 'Sysmon & Windows Event Logs', description: 'Analyzing Event ID 4624 (Logon), 4688 (Process Creation), Sysmon Event 1.' },
      { id: 'incident-resp', name: 'Incident Response (NIST SP 800-61)', description: 'Preparation, Detection, Containment, Eradication, Recovery.' }
    ],
    keyConcepts: ['SIEM Alert Correlation', 'YARA Rule Signature Writing', 'PCAP Network Forensics', 'Indicator of Compromise (IoC) Extraction'],
    difficulty: 'Advanced',
    studyGuide: {
      overview: 'SOC Operations defend corporate assets through 24/7 telemetry monitoring, intrusion detection rule writing, and incident containment.',
      modules: [
        {
          title: '1. SIEM & Log Telemetry',
          content: 'SIEM platforms aggregate syslog, Windows Event Logs, and firewall events to detect anomalous behaviors using correlation rules.'
        }
      ],
      cheatsheet: [
        { cmd: 'index=main sourcetype="WinEventLog:Security" EventCode=4624', usage: 'Splunk query for successful Windows user authentications' }
      ]
    },
    aiPrompts: [
      'What are the 4 phases of NIST SP 800-61 Incident Response?',
      'Write a Splunk SPL query to detect brute-force login attempts.',
      'How do Sysmon Event IDs (Event 1, Event 3) assist in threat hunting?'
    ]
  }
];

export const ROADMAP_SIDEBAR_CTFS = [
  { id: 'ctf-htb', name: 'HackTheBox', desc: 'Enterprise & gamified penetration testing labs.', url: 'https://hackthebox.com' },
  { id: 'ctf-thm', name: 'TryHackMe', desc: 'Guided hands-on cybersecurity learning paths.', url: 'https://tryhackme.com' },
  { id: 'ctf-vulnhub', name: 'VulnHub', desc: 'Downloadable vulnerable virtual machines for offline pentesting.', url: 'https://vulnhub.com' },
  { id: 'ctf-pico', name: 'picoCTF', desc: 'Carnegie Mellon University CTF for all skill levels.', url: 'https://picoctf.org' },
  { id: 'ctf-pwn', name: 'pwn.college', desc: 'Education platform for binary exploitation & reverse engineering.', url: 'https://pwn.college' }
];

export const ROADMAP_SIDEBAR_CERTS = {
  beginner: [
    { id: 'cert-secplus', name: 'CompTIA Security+', code: 'SY0-701', vendor: 'CompTIA' },
    { id: 'cert-netplus', name: 'CompTIA Network+', code: 'N10-008', vendor: 'CompTIA' },
    { id: 'cert-aplus', name: 'CompTIA A+', code: '220-1101', vendor: 'CompTIA' },
    { id: 'cert-linuxplus', name: 'CompTIA Linux+', code: 'XK0-005', vendor: 'CompTIA' },
    { id: 'cert-ccna', name: 'Cisco CCNA', code: '200-301', vendor: 'Cisco' }
  ],
  advanced: [
    { id: 'cert-oscp', name: 'OSCP (Offensive Security Certified Professional)', code: 'OSCP', vendor: 'OffSec' },
    { id: 'cert-ceh', name: 'Certified Ethical Hacker (CEH)', code: 'v12', vendor: 'EC-Council' },
    { id: 'cert-cissp', name: 'CISSP', code: 'ISC2', vendor: 'ISC2' },
    { id: 'cert-cism', name: 'CISM', code: 'ISACA', vendor: 'ISACA' },
    { id: 'cert-gpen', name: 'GIAC GPEN', code: 'GIAC', vendor: 'SANS' },
    { id: 'cert-ejpt', name: 'eJPTv2', code: 'INE', vendor: 'INE Security' }
  ]
};

export const ROADMAP_VIRTUALIZATION_TECH = [
  { id: 'virt-vmware', name: 'VMware Workstation', desc: 'Industry standard hypervisor for local virtual machines.' },
  { id: 'virt-vbox', name: 'VirtualBox', desc: 'Open-source x86 and AMD64/Intel64 virtualization.' },
  { id: 'virt-proxmox', name: 'Proxmox VE', desc: 'Open-source server management for KVM and LXC.' },
  { id: 'virt-esxi', name: 'VMware ESXi', desc: 'Enterprise bare-metal hypervisor.' },
  { id: 'virt-docker', name: 'Docker & Containers', desc: 'Lightweight application containerization for isolated sandboxes.' }
];
