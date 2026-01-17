import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Trophy, 
  BookOpen, 
  Menu, 
  X,
  ChevronRight,
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  Bot,
  Minimize2,
  Loader2,
  Copy,
  Check,
  Brain,
  Users,
  Lightbulb
} from 'lucide-react';

// --- Configuration ---
const GEMINI_API_KEY = ""; // System provides this at runtime

// --- Data based on the user's latest update ---
const portfolioData = {
  personal: {
    name: "Niruksha Akshith Sandeepa",
    title: "Computer Science & Engineering Undergraduate",
    subtitle: "Software Engineering Enthusiast | Full Stack Developer",
    email: "akshith.21@cse.mrt.ac.lk",
    phone: "+94 767 555 080",
    location: "Moratuwa, Sri Lanka",
    shortBio: "I enjoy tackling complex problems and transforming ideas into real-world applications through clean design and efficient engineering.",
    about: [
      "I’m a final year Computer Science & Engineering undergraduate at the University of Moratuwa, Sri Lanka, passionate about building impactful, scalable software solutions. I enjoy tackling complex problems and transforming ideas into real-world applications through clean design and efficient engineering.",
      "Beyond academics, I serve as the Batch Representative of the 21st batch at the Department of Computer Science and Engineering. In this role, I work closely with students, faculty, and administration, strengthening my leadership, communication, and collaboration skills while driving initiatives that benefit the academic community.",
      "I’m also an International Rated Chess Player, having represented Sri Lanka at international and Asian championships. Competitive chess has sharpened my strategic thinking, analytical reasoning, and ability to make sound decisions under pressure—skills that naturally translate into software engineering and system design."
    ],
    links: {
      github: "https://github.com/NirukshaSandeepa",
      linkedin: "https://linkedin.com/in/niruksha",
      medium: "https://medium.com/@niruksha",
      portfolio: "https://nirukshasandeepa.github.io"
    }
  },
  experience: [
    {
      company: "University of Moratuwa",
      role: "Teaching Assistant",
      period: "July 2025 – November 2025",
      description: "Conducted Database Systems lab sessions, mentored undergraduate students, and evaluated assignments and projects for the Department of Computer Science & Engineering."
    },
    {
      company: "GTN Technologies",
      role: "Software Engineer Intern",
      period: "December 2024 – June 2025",
      description: "Developed various features in GTN Admin Terminal V2, a centralized platform for brokerage institutions."
    },
    {
      company: "IEEE Student Branch, UoM",
      role: "Web Development Committee Member",
      period: "November 2023 – November 2024",
      description: "Contributed to the IEEE Official Website and MoraForesight Website."
    },
    {
      company: "University of Moratuwa",
      role: "Batch Representative",
      period: "January 2023 – December 2023",
      description: "Led the batch and organized departmental events including EXMO 2023, CSE Poson Event, and Mavisuru Ranga Soba Drama Series."
    },
    {
      company: "Rahula College, Matara",
      role: "Chess Team Captain",
      period: "January 2015 – December 2015",
      description: "Led the team to victories in provincial school events and selected to compete in the All-Island Finals."
    }
  ],
  projects: [
    {
      title: "3D Interactive Wind Effect Visualisation",
      status: "Ongoing",
      tags: ["Python", "Machine Learning", "3D Rendering", "CFD"],
      description: "Real-time system visualizing wind-induced 3D object deformations by combining physics-based simulation with machine learning models. Aimed at urban planning applications."
    },
    {
      title: "Luxury Hotel & Restaurant MIS",
      status: "Completed",
      tags: ["React", "Flutter", "Spring Boot", "MySQL", "Docker", "K8s"],
      link: "https://github.com/orgs/Hotel-and-Restaurant-MIS/repositories",
      description: "Comprehensive system with Hotel Web App, AI Chatbot, Virtual Waiter, Order Manager, and Hotel Manager applications deployed on Google Cloud."
    },
    {
      title: "GTN Admin Terminal V2",
      status: "Internship",
      tags: ["React", "Spring Boot", "GraphQL", "PostgreSQL"],
      description: "Centralized platform for brokerage institutions. Features included customer portfolio summary, order fee reports, and admin tools."
    },
    {
      title: "Wattehena Water Distribution System",
      status: "Completed",
      tags: ["React", "Spring Boot", "PostgreSQL"],
      description: "Automated billing, meter readings, notifications, and complaint handling system that improved data accuracy and reduced manual workload."
    },
    {
      title: "Uni Event & Community App",
      status: "Completed",
      tags: ["React Native", "Supabase"],
      link: "https://github.com/UniMateApp/frontend",
      description: "Cross-platform mobile app for campus events with reminders, location-based notifications, lost & found board, and offline caching."
    },
    {
      title: "NexusTrust Bank",
      status: "Completed",
      tags: ["React.js", "Node.js", "MySQL"],
      link: "https://github.com/NirukshaSandeepa/Banking-System",
      description: "Banking system web application featuring secure account management, fund transfers, loan requests, and authorization-based access control."
    },
    {
      title: "IEEE Student Branch Website",
      status: "Live",
      tags: ["Next.js"],
      link: "https://ieeesb.uom.lk",
      description: "Front-end contribution to the official IEEE Student Branch website, University of Moratuwa."
    }
  ],
  skills: {
    languages: ["Java", "JavaScript", "Python", "C++", "TypeScript"],
    frontend: ["React.js", "Next.js", "Figma", "React Native"],
    backend: ["Spring Boot", "Node.js", "GraphQL"],
    database: ["MySQL", "PostgreSQL"],
    cloudops: ["Google Cloud", "Docker", "Kubernetes", "Git", "JUnit"],
    soft: ["Leadership", "Decision Making", "Problem Solving", "Communication", "Team Management"]
  },
  education: [
    {
      institution: "University of Moratuwa",
      degree: "BSc. Engineering (Hons) in Computer Science & Engineering",
      period: "2022 – Present",
      activities: [
        "Batch Representative",
        "Event Coordinator – ACM Student Branch",
        "Member – AIESEC",
        "Web Development Committee – IEEE Student Branch",
        "Company Coordinator – Careers Day",
        "Delegate Handling Committee – SLIoT Challenge 2023",
        "Department Facilitator – EXMO 2023"
      ]
    },
    {
      institution: "Rahula College, Matara",
      degree: "Primary & Secondary Education",
      period: "2007 – 2020",
      activities: [
        "GCE A/L 2020: 3 A's (Physical Science)",
        "GCE O/L 2017: 9 A's",
        "Best Chess Player Award and Colors",
        "Represented Sri Lanka in international & Asian chess events"
      ]
    }
  ],
  achievements: [
    {
      title: "International Chess Rating: 1922",
      description: "Highest rated chess player from the same age group in Sri Lanka."
    },
    {
      title: "National Representation",
      description: "Represented Sri Lanka at Asian and Commonwealth Chess Championships."
    },
    {
      title: "Finalist | Enigma 2024",
      description: "Demonstrated advanced problem-solving skills in the hackathon finals."
    },
    {
      title: "Problem Setter | MoraXtreme 2023",
      description: "Created algorithmic problems for the university hackathon."
    }
  ],
  articles: [
    "The Role of Software Engineers in Climate Change",
    "Agile Software Development",
    "Is Your Code Becoming Harder to Handle?",
    "How to Start Learning JavaScript",
    "Digital Twin"
  ]
};

// --- Gemini API Helper ---
const callGeminiAPI = async (prompt, systemInstruction = "") => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
        }),
      }
    );

    if (!response.ok) throw new Error("API call failed");

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};

// --- Components ---

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Niruksha's AI assistant. Ask me anything about his projects, skills, or experience! ✨" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const systemPrompt = `
      You are an AI assistant for Niruksha Akshith Sandeepa's portfolio website. 
      Your goal is to answer questions about Niruksha based STRICTLY on the following JSON data:
      ${JSON.stringify(portfolioData)}
      
      Guidelines:
      1. Be professional, enthusiastic, and concise.
      2. If asked about something not in the data, say "I don't have information about that in the portfolio, but you can contact Niruksha directly!"
      3. Highlight his key strengths: Full stack dev, Chess achievements (Rating 1922), and his specific projects like the Wind Effect Visualization.
      4. Keep responses short (under 3 sentences) unless asked for a detailed explanation.
    `;

    const aiResponse = await callGeminiAPI(userMessage, systemPrompt);

    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500/20 p-1.5 rounded-lg">
                <Bot size={18} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Portfolio Assistant</h3>
                <p className="text-slate-400 text-xs">Powered by Gemini AI ✨</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-emerald-400" />
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-800 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my skills..."
                className="flex-1 bg-slate-900 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 border border-slate-700 placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="font-medium">Ask AI</span>}
      </button>
    </div>
  );
};

const CoverLetterGenerator = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!company || !role) return;
    
    setIsGenerating(true);
    setGeneratedLetter("");
    
    const prompt = `
      Write a compelling, professional cover letter for Niruksha Akshith Sandeepa applying for the position of ${role} at ${company}.
      
      Use the following portfolio data to customize the letter:
      ${JSON.stringify(portfolioData)}
      
      Requirements:
      1. Mention specific projects from the data that are relevant to the role of ${role}.
      2. Highlight his technical skills (React, Java, etc.) and soft skills (leadership as Batch Rep).
      3. Mention his competitive mindset from Chess (Rating 1922).
      4. Keep the tone enthusiastic but professional.
      5. Limit to 200 words.
      6. Start with "Dear Hiring Manager,".
    `;

    const text = await callGeminiAPI(prompt);
    setGeneratedLetter(text);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-500/20 p-2 rounded-lg">
          <Sparkles className="text-purple-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">AI Cover Letter Generator</h3>
          <p className="text-slate-400 text-sm">Recruiters: See how I fit your role instantly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Company Name</label>
          <input 
            type="text" 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g., Google"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Job Role</label>
          <input 
            type="text" 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g., Frontend Engineer"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      <button 
        onClick={handleGenerate}
        disabled={!company || !role || isGenerating}
        className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-emerald-500/20 flex justify-center items-center gap-2 mb-6"
      >
        {isGenerating ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>Crafting Letter...</span>
          </>
        ) : (
          <>
            <Sparkles size={20} />
            <span>Generate Cover Letter</span>
          </>
        )}
      </button>

      {generatedLetter && (
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 relative animate-fade-in-up">
          <button 
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
            title="Copy to clipboard"
          >
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
          </button>
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="whitespace-pre-wrap text-slate-300 leading-relaxed font-light">
              {generatedLetter}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter">
            <span className="text-emerald-400">Niruksha</span>.dev
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 absolute w-full top-full left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-emerald-400 font-medium tracking-widest uppercase text-sm md:text-base">
            Software Engineering Undergraduate
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{portfolioData.personal.name.split(' ')[0]}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-8">
            {portfolioData.personal.subtitle}. <br/>
            <span className="text-slate-500 text-lg mt-2 block">{portfolioData.personal.shortBio}</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href={portfolioData.personal.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all hover:-translate-y-1 border border-slate-700"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href={portfolioData.personal.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/20"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle>About Me</SectionTitle>
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            {portfolioData.personal.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-3">
              <Users className="text-emerald-400" size={24} />
              <div>
                <h4 className="font-bold text-white">Batch Representative</h4>
                <p className="text-sm text-slate-400">Leadership & Teamwork</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="text-emerald-400" size={24} />
              <div>
                <h4 className="font-bold text-white">Chess Captain</h4>
                <p className="text-sm text-slate-400">Strategic Thinking</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lightbulb className="text-emerald-400" size={24} />
              <div>
                <h4 className="font-bold text-white">Innovator</h4>
                <p className="text-sm text-slate-400">Creative Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{children}</h2>
    {subtitle && <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>}
  </div>
);

const ExperienceCard = ({ item, index }) => (
  <div className="relative pl-8 md:pl-0 group">
    {/* Timeline Line */}
    <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800">
      <div className="absolute top-6 -left-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-500 bg-slate-900 group-hover:bg-emerald-500 transition-colors"></div>
    </div>

    <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12 text-right"></div>
      
      {/* Center Dot for Desktop */}
      <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-slate-900 bg-emerald-500 z-10"></div>
      
      <div className="md:w-5/12 mb-8 md:mb-0">
        <div className={`p-6 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50 hover:border-emerald-500/30 group ${index % 2 === 0 && 'md:text-right'}`}>
          <span className="text-emerald-400 font-mono text-sm mb-2 block">{item.period}</span>
          <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
          <h4 className="text-slate-400 font-medium mb-3">{item.company}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all hover:-translate-y-1 h-full flex flex-col">
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-900/50 rounded-lg text-emerald-400 group-hover:text-white group-hover:bg-emerald-500 transition-colors">
          <Code size={24} />
        </div>
        <div className="flex gap-2">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm mb-4 line-clamp-4 flex-1">
        {project.description}
      </p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-900 text-emerald-400/90 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-emerald-400" size={24} />
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/50 hover:border-emerald-500/30 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30">
      <Navigation />
      
      <Hero />
      <About />

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle>Experience</SectionTitle>
          <div className="relative mt-12">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -ml-[1px]"></div>
            <div className="space-y-12">
              {portfolioData.experience.map((item, index) => (
                <ExperienceCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle>Technical & Soft Skills</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SkillCategory title="Languages" skills={portfolioData.skills.languages} icon={Code} />
            <SkillCategory title="Frontend" skills={portfolioData.skills.frontend} icon={FileText} />
            <SkillCategory title="Backend" skills={portfolioData.skills.backend} icon={Database} />
            <SkillCategory title="Cloud & Tools" skills={portfolioData.skills.cloudops} icon={Cloud} />
            <SkillCategory title="Database" skills={portfolioData.skills.database} icon={Database} />
            <SkillCategory title="Leadership & Soft Skills" skills={portfolioData.skills.soft} icon={Users} />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle>Achievements & Recognition</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {portfolioData.achievements.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-slate-800 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                <div className="flex-shrink-0">
                  <Trophy className="text-yellow-500" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contact Section */}
      <section id="education" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <BookOpen className="text-emerald-400" /> Education
              </h3>
              <div className="space-y-12">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="pl-6 border-l-2 border-slate-800 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500"></div>
                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                    <p className="text-emerald-400 font-medium my-1">{edu.degree}</p>
                    <p className="text-slate-500 text-sm mb-4">{edu.period}</p>
                    
                    <ul className="space-y-2">
                      {edu.activities.map((activity, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="text-emerald-400" /> Recent Articles
                </h3>
                <ul className="space-y-3">
                  {portfolioData.articles.map((article, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">
                      <ChevronRight size={16} />
                      <a href={portfolioData.personal.links.medium} target="_blank" rel="noopener noreferrer">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cover Letter Generator Added Here */}
              <CoverLetterGenerator />
            </div>

            {/* Contact Column */}
            <div id="contact">
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to drop a message!
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors group border border-slate-800 hover:border-emerald-500/30">
                  <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-white font-medium">{portfolioData.personal.email}</p>
                  </div>
                </a>

                <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors group border border-slate-800 hover:border-emerald-500/30">
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">LinkedIn</p>
                    <p className="text-white font-medium">in/niruksha</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg border border-slate-800">
                   <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-white font-medium">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Formspree Contact Form */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <h4 className="text-lg font-bold text-white mb-4">Send a Message</h4>
                <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      rows="4" 
                      placeholder="Your Message" 
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors">
                    Send Message
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-2">
                    Powered by Formspree. Replace URL in code with your form ID.
                  </p>
                </form>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800 text-center lg:text-left">
                <p className="text-slate-500 text-sm">
                  © {new Date().getFullYear()} Niruksha Akshith Sandeepa. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default App;