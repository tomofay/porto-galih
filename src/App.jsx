import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Server, 
  Globe, 
  Cpu, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Github, 
  Instagram, 
  Clock,
  Briefcase,
  GraduationCap,
  User,
  Activity,
  Star,
  GitFork,
  BookOpen,
  Calendar,
  Loader2,
  AlertCircle,
  Wifi,
  Sparkles,
  QrCode
} from 'lucide-react';
import Lanyard from './Lanyard'; // Import the new Lanyard component

// --- PERSONAL DATA (ENGLISH) ---
const personalData = {
  name: "Galih Wisnu Baratha",
  role: "DevOps Enthusiast & Junior Web Developer",
  location: "Bogor, Indonesia",
  email: "wisnubgalih4@gmail.com",
  phone: "+62 878-8527-6400",
  instagram: "GALWIS_BARATHA",
  instagramUrl: "https://www.instagram.com/GALWIS_BARATHA",
  tiktok: "galih_1107",
  tiktokUrl: "https://www.tiktok.com/@galih_1107",
  githubUsername: "tomofay", 
  summary: "Vocational High School student majoring in SIJA (Information Systems, Networks, and Applications) with hands-on experience in MikroTik configuration, basic DevOps workflows, and real client web projects. Focused on automation, deployment, and network reliability.",
  image: "foto saya.png" 
};

// --- DATA PROJECTS ---
const experienceData = [
  {
    company: "PT Indocement",
    project: "HR CARE System",
    role: "Backend & DevOps Student",
    desc: "Built a feature to convert database records into sign-ready PDF HR letters and deployed the backend using Git and Docker, replacing manual updates with a simple scripted workflow.",
    link: null 
  },
  {
    company: "PT Muda Bangkit Indotama",
    project: "Company Profile (mbindotama.com)",
    role: "Junior Web Developer",
    desc: "Built a responsive company profile website using PHP, CSS, and JS. Structured product information to be easily discoverable by B2B clients.",
    link: "https://mbindotama.com"
  },
  {
    company: "Kondang Cloud",
    project: "Company Profile Website",
    role: "Junior Web Developer",
    desc: "Created a simple company profile site with forms and content using PHP & Git. Learned source code management and basic hosting configuration.",
    link: "#" 
  }
];

const educationData = [
  {
    school: "SMKN 1 Cibinong",
    major: "SIJA (Information Systems, Networks, and Applications)",
    year: "2023 – Present (Grade 12)"
  },
  {
    school: "SMPN 1 Bojonggede",
    year: "2020 – 2023"
  },
  {
    school: "SDN 03 Bojonggede",
    year: "2014 – 2020"
  }
];

const skillsData = [
  { category: "DevOps & Automation", icon: <Terminal size={18} />, items: ["CI/CD Concepts", "Git", "Docker", "Bash Scripting", "Deployment Workflows"] },
  { category: "Networking", icon: <Server size={18} />, items: ["MikroTik Configuration", "VLANs", "DHCP", "Firewall Rules", "Fiber Optic (Splicing/FTTH)"] },
  { category: "Web Development", icon: <Code size={18} />, items: ["HTML/CSS", "JavaScript", "PHP", "ASP.NET / C#", "REST API"] },
  { category: "Languages", icon: <Globe size={18} />, items: ["Indonesian (Native)", "English (Proficient)"] }
];

// --- COMPONENTS ---

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-purple-400 hover:scale-110 transition-all duration-300 text-sm font-medium tracking-wide relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const SectionTitle = ({ children, icon }) => (
  <div className="flex items-center gap-3 mb-8 group">
    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 backdrop-blur-sm border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
      {icon}
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
      {children}
    </h2>
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`
    relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl 
    hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] 
    transition-all duration-500 group
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    {children}
  </div>
);

// --- SCROLL REVEAL COMPONENT ---
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

// --- MOUSE SPOTLIGHT EFFECT ---
const MouseSpotlight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
      }}
    ></div>
  );
};

// --- COSMIC WARP BACKGROUND ---
const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let stars = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numStars = 400;
    for(let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width/2,
        y: Math.random() * canvas.height - canvas.height/2,
        z: Math.random() * canvas.width
      });
    }

    const render = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.4)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const speed = 2; 

      stars.forEach(star => {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width/2;
          star.y = Math.random() * canvas.height - canvas.height/2;
        }
        
        const x = (star.x / star.z) * canvas.width/2 + cx;
        const y = (star.y / star.z) * canvas.height/2 + cy;
        const size = (1 - star.z / canvas.width) * 3;
        const alpha = 1 - star.z / canvas.width;
        ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`; 
        
        ctx.beginPath();
        ctx.arc(x, y, size > 0 ? size : 0, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 bg-[#050505]"
    />
  );
};


// --- 3D LANYARD COMPONENT ---
// const Lanyard3D = () => {
//   const cardRef = useRef(null);
//   const containerRef = useRef(null);
//   const glareRef = useRef(null);
//   const requestRef = useRef();
  
//   const physics = useRef({
//     angleX: 0, 
//     angleY: 0, 
//     velX: 0, 
//     velY: 0, 
//     targetX: 0, 
//     targetY: 0
//   });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = (e.clientY / window.innerHeight) * 2 - 1;
      
//       physics.current.targetX = x * 0.8; 
//       physics.current.targetY = -y * 0.4; 
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const animate = () => {
//       const p = physics.current;
//       const stiffness = 0.03;
//       const damping = 0.92;
      
//       const forceX = (p.targetX - p.angleX) * stiffness;
//       const forceY = (p.targetY - p.angleY) * stiffness;

//       p.velX += forceX; p.velY += forceY;
//       p.velX *= damping; p.velY *= damping;
//       p.angleX += p.velX; p.angleY += p.velY;

//       const time = Date.now() * 0.0015;
//       const windX = Math.sin(time) * 0.02;
//       const windY = Math.cos(time * 0.8) * 0.02;

//       if (cardRef.current) {
//         const rotateZ = -(p.angleX + windX) * 45; 
//         const rotateX = (p.angleY + windY) * 30;  
//         const rotateY = (p.angleX + windX) * 30;  
        
//         cardRef.current.style.transform = `rotateZ(${rotateZ}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//         if (glareRef.current) {
//           const glareX = 50 + (p.angleX * 40);
//           const glareY = 50 + (p.angleY * 40);
//           glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 20%, transparent 60%)`;
//         }
//       }

//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   const avatarUrl = `https://github.com/${personalData.githubUsername}.png`;

//   return (
//     <div ref={containerRef} className="relative w-72 h-[450px] flex justify-center perspective-[1000px] z-40 mx-auto">
      
//       {/* V-Shape Strap (SVG) */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] z-0 pointer-events-none -mt-40">
//         <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
//           <path d="M 0 0 Q 144 200 144 240" stroke="rgba(107, 33, 168, 0.6)" strokeWidth="4" fill="none" />
//           <path d="M 288 0 Q 144 200 144 240" stroke="rgba(107, 33, 168, 0.6)" strokeWidth="4" fill="none" />
//           <path d="M 134 235 L 154 235 L 144 255 Z" fill="#333" stroke="#555" strokeWidth="2" />
//         </svg>
//       </div>

//       {/* The 3D Card */}
//       <div ref={cardRef} className="relative z-10 w-64 top-20 transform-style-3d origin-top">
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-md border border-gray-600 z-20 flex items-center justify-center shadow-md">
//            <div className="w-10 h-1 bg-gray-600 rounded-full"></div>
//         </div>

//         <div className="w-64 h-[24rem] rounded-2xl bg-gradient-to-br from-[#1e1b4b]/95 to-[#0f0720]/95 border-[1px] border-white/20 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(139,92,246,0.3)] flex flex-col items-center p-6 relative overflow-hidden">
//           <div ref={glareRef} className="absolute inset-0 pointer-events-none mix-blend-overlay z-30 transition-opacity duration-100" style={{ opacity: 0.7 }}></div>
//           <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
          
//           <div className="w-full flex justify-between items-center mb-6 border-b border-white/10 pb-4 relative z-10">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
//               <span className="text-[10px] font-mono text-gray-300 tracking-widest">AUTHORIZED</span>
//             </div>
//             <Cpu size={14} className="text-purple-400" />
//           </div>

//           <div className="relative w-32 h-32 mb-5 group/avatar z-10">
//             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full blur-md opacity-60 group-hover/avatar:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative w-full h-full rounded-full border-[3px] border-white/20 overflow-hidden bg-gray-900 shadow-inner">
//                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/avatar:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = personalData.image; }}/>
//             </div>
//              <div className="absolute bottom-1 right-1 bg-black rounded-full p-1 border border-white/10">
//                 <Wifi size={12} className="text-green-500" />
//              </div>
//           </div>

//           <h2 className="text-2xl font-bold text-white text-center tracking-tight mb-1 relative z-10">{personalData.name.split(' ')[0]}</h2>
//           <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6 relative z-10">
//              <p className="text-purple-300 text-[10px] font-mono font-bold tracking-wider uppercase">System Administrator</p>
//           </div>

//           <div className="w-full mt-auto relative z-10 space-y-2">
//             <div className="flex justify-between text-[10px] text-gray-400 border-t border-white/10 pt-2">
//                <span>STATUS: ACTIVE</span>
//                <span>LOC: IDN-BGR</span>
//             </div>
//             <div className="flex justify-center pt-1">
//                <QrCode size={24} className="text-white/80" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const fetchGithubData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${personalData.githubUsername}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error("GitHub Fetch Error:", err);
        setError("Unable to load repositories.");
      } finally {
        setLoading(false);
      }
    };
    fetchGithubData();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-purple-500/30 selection:text-purple-200 font-sans overflow-x-hidden relative">
      
      {/* GLOBAL CSS Styles for Scrollbar & Animations */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0510; 
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6b21a8, #a855f7); 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #d8b4fe; 
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* --- MOUSE SPOTLIGHT --- */}
      <MouseSpotlight />

      {/* --- COSMIC BACKGROUND --- */}
      <CosmicBackground />

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 cursor-pointer hover:opacity-80 transition-opacity">
            GW.<span className="text-white">DEV</span>
          </div>
          <div className="hidden md:flex gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#github">GitHub</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
          </div>
          <a href="#contact" className="relative px-6 py-2 group overflow-hidden rounded-full">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 opacity-80 group-hover:opacity-100 transition-all"></span>
            <span className="relative text-xs font-bold text-white uppercase tracking-wider">Contact Me</span>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Hello, World! I am
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Galih Wisnu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 animate-gradient-x">
                  Baratha
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-purple-500/50 pl-4">
                {personalData.role}. High school student majoring in SIJA focusing on network reliability and automation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#experience" className="group relative px-8 py-3 bg-purple-600 text-white rounded-lg font-medium overflow-hidden transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">View Projects</span>
                </a>
                <a href="#contact" className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/50 text-white rounded-lg font-medium transition-all backdrop-blur-sm hover:bg-white/5">
                  Get in Touch
                </a>
              </div>
            </div>
          </RevealOnScroll>
          
          {/* Abstract Tech Visual */}
          <div className="relative flex justify-center items-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-full blur-[100px] animate-pulse"></div>
             <div className="relative z-10 w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center animate-spin-slow" style={{animationDuration: '20s'}}>
                <div className="w-[80%] h-[80%] rounded-full border border-purple-500/20 border-dashed animate-spin-reverse-slow" style={{animationDuration: '15s'}}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Terminal size={64} className="text-purple-400 opacity-50" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <RevealOnScroll>
            <SectionTitle icon={<User size={20} />}>Professional Summary</SectionTitle>
            <GlassCard className="p-8 md:p-10 border-l-4 border-l-purple-500">
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                <span className="text-5xl text-purple-500/20 font-serif absolute -top-4 -left-2">"</span>
                {personalData.summary}
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 text-gray-400 group/item">
                  <MapPin className="text-purple-400 group-hover:item:scale-125 transition-transform" size={20} />
                  <span className="group-hover:item:text-white transition-colors">{personalData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 group/item">
                  <GraduationCap className="text-purple-400 group-hover:item:scale-125 transition-transform" size={20} />
                  <span className="group-hover:item:text-white transition-colors">SMKN 1 Cibinong</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 group/item">
                  <Activity className="text-purple-400 group-hover:item:scale-125 transition-transform" size={20} />
                  <span className="group-hover:item:text-white transition-colors">Open for Freelance</span>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <SectionTitle icon={<Briefcase size={20} />}>Projects & Experience</SectionTitle>
          <div className="grid gap-8">
            {experienceData.map((exp, index) => (
              <RevealOnScroll key={index}>
                <GlassCard className="p-0 group overflow-hidden">
                  <div className="grid md:grid-cols-[200px_1fr] h-full">
                    <div className="bg-purple-900/10 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-purple-900/20 transition-colors">
                      <h3 className="font-bold text-white text-xl">{exp.company}</h3>
                      <span className="text-purple-400 text-sm mt-2 font-mono flex items-center gap-2">
                        <Terminal size={12} /> {exp.role}
                      </span>
                    </div>
                    <div className="p-6 md:p-8 relative">
                      {/* Clickable Link Icon if link exists */}
                      {exp.link && (
                        <a 
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 cursor-pointer z-20"
                        >
                           <ExternalLink size={20} className="text-purple-400 hover:text-white" />
                        </a>
                      )}
                      
                      <div className="flex justify-between items-start mb-4">
                        {/* Make Title Clickable if Link Exists */}
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noreferrer" className="block z-10">
                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors hover:underline">
                              {exp.project}
                            </h4>
                          </a>
                        ) : (
                          <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {exp.project}
                          </h4>
                        )}
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- GITHUB SECTION --- */}
      <section id="github" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="flex justify-between items-end mb-8">
              <SectionTitle icon={<Github size={20} />}>Latest from GitHub</SectionTitle>
              <a 
                href={`https://github.com/${personalData.githubUsername}`} 
                target="_blank" 
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 text-sm text-purple-400 hover:text-white transition-colors pb-8 group"
              >
                Visit Profile <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Repositories in 3-column grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {loading ? (
                [...Array(6)].map((_, i) => (
                  <GlassCard key={i} className="p-5 h-40 flex items-center justify-center">
                    <Loader2 className="animate-spin text-purple-500" size={30} />
                  </GlassCard>
                ))
              ) : error ? (
                <div className="col-span-3 text-center text-red-400 bg-red-900/10 p-4 rounded-xl border border-red-500/20 flex items-center justify-center gap-2">
                  <AlertCircle size={20} /> {error}
                </div>
              ) : repos.length === 0 ? (
                 <div className="col-span-3 text-center text-gray-500 italic p-8">No public repositories found.</div>
              ) : (
                repos.map((repo) => (
                  <GlassCard key={repo.id} className="p-5 flex flex-col justify-between group hover:bg-white/10 hover:-translate-y-1 transition-transform duration-300">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2 text-purple-300 font-bold">
                          <BookOpen size={16} />
                          <a href={repo.html_url} target="_blank" rel="noreferrer" className="group-hover:underline cursor-pointer truncate max-w-[180px]">
                            {repo.name}
                          </a>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-gray-400 border border-white/5 uppercase">
                          {repo.visibility || 'Public'}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px] group-hover:text-gray-300">
                        {repo.description || "No description provided."}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${repo.language ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
                        <span>{repo.language || 'Code'}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-purple-300 transition-colors">
                        <Star size={12} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-purple-300 transition-colors">
                        <GitFork size={12} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </GlassCard>
                ))
              )}
            </div>

            {/* Contribution Graph below, full width */}
            <GlassCard className="p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Activity size={18} className="text-purple-400 animate-pulse" />
                Contribution Graph
              </h3>
              <div className="w-full overflow-hidden rounded-lg bg-white/90 p-2 hover:opacity-90 transition-opacity">
                <img src={`https://ghchart.rshah.org/a855f7/${personalData.githubUsername}`} alt="Github Contribution Graph" className="w-full" />
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Live data from GitHub
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <SectionTitle icon={<Cpu size={20} />}>Technical Skills</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <RevealOnScroll key={index}>
                <GlassCard className="p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4 text-purple-400">
                    {skill.icon}
                    <h3 className="font-bold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-black/40 border border-white/10 rounded-md text-xs text-gray-300 font-mono hover:border-purple-500/50 hover:text-white transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <RevealOnScroll>
            <SectionTitle icon={<GraduationCap size={20} />}>Education History</SectionTitle>
            <div className="relative border-l border-purple-500/30 ml-3 space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform"></div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{edu.school}</h3>
                  {edu.major && <p className="text-purple-300 mt-1">{edu.major}</p>}
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm font-mono">
                    <Clock size={14} />
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ENHANCED 3D LANYARD */}
            <div className="mt-20 flex justify-center perspective-[1000px] animate-float relative z-20">
              <Lanyard />
            </div>

          </RevealOnScroll>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative z-10 py-20 px-6 mb-20">
        <div className="container mx-auto max-w-4xl">
          <RevealOnScroll>
            <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-b from-white/5 to-purple-900/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Interested in DevOps collaboration, backend development, or networking projects? I'm open for internship or freelance opportunities.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10">
                <a href={`mailto:${personalData.email}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-purple-600 transition-colors">
                    <Mail size={18} className="text-purple-400 group-hover:text-white" />
                  </div>
                  {personalData.email}
                </a>
                
                {/* Whatsapp Link - Replaced Phone */}
                <a href={`https://wa.me/${personalData.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-green-500 transition-colors">
                     {/* WhatsApp Icon SVG */}
                     <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-purple-400 group-hover:text-white"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                  </div>
                  {personalData.phone}
                </a>
                
                {/* Instagram Link */}
                <a href={personalData.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-pink-600 transition-colors">
                     <Instagram size={18} className="text-purple-400 group-hover:text-white" />
                  </div>
                  {personalData.instagram}
                </a>

                {/* TikTok Link */}
                <a href={personalData.tiktokUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-black group-hover:border group-hover:border-white/20 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-purple-400 group-hover:text-white"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </div>
                  {personalData.tiktok}
                </a>
              </div>

              <a href={`mailto:${personalData.email}`} className="relative inline-block px-8 py-4 bg-white text-black font-bold rounded-xl hover:text-white overflow-hidden group transition-all transform hover:-translate-y-1 shadow-lg">
                <span className="absolute inset-0 w-full h-full bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Send me an Email <Sparkles size={16} />
                </span>
              </a>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p className="hover:text-purple-400 transition-colors cursor-default">&copy; {new Date().getFullYear()} Galih Wisnu Baratha. Built with React & Tailwind.</p>
        <p className="text-xs mt-1 opacity-50">Informatics Systems, Networks, and Applications Student</p>
      </footer>
    </div>
  );
}