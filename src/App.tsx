import { motion, AnimatePresence } from "motion/react";
import { 
  Beaker, 
  Zap, 
  Users, 
  ArrowRight, 
  Instagram, 
  Github, 
  Mail,
  Microscope,
  AlertTriangle,
  TrendingDown,
  CheckCircle2,
  XCircle,
  Activity,
  ShieldAlert,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = ["Purpose", "Need", "Technology", "Team"];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? "glass py-3 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img src="logo2.png" alt="CondenSense Logo" className="h-10 w-auto group-hover:scale-110 transition-transform" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/condense.sense/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-800 transition-all hover:shadow-lg active:scale-95"
            >
              Follow Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg pt-24 px-6 flex flex-col md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center mt-8">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-slate-800 hover:text-brand-600 transition-colors py-2 w-full"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://www.instagram.com/condense.sense/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-brand-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-800 transition-all active:scale-95 mt-4 w-full max-w-xs shadow-lg shadow-brand-100"
              >
                Follow Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/20 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[1.1] mb-6">
            Detect Drug Toxicity <br />
            <span className="text-gradient">Before It's Too Late</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            An LLPS-Based Fluorescent Biosensor for Early-Stage Pharmaceutical Toxicity Detection — catching cellular stress signals that current methods miss.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#purpose" className="group bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-1">
              Explore Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#technology" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all hover:border-brand-300">
              How it Works
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden group">
            <div className="aspect-square rounded-[2rem] bg-white flex items-center justify-center relative overflow-hidden">
              <video 
                src="logo-animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-200 rounded-full opacity-20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-100 rounded-full opacity-10 animate-[spin_45s_linear_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Drug failures from toxicity in late-stage trials", value: "30%", icon: AlertTriangle },
    { label: "Students from University of Edinburgh", value: "12", icon: Users },
    { label: "Biological chassis tested", value: "2", icon: Beaker },
    { label: "Weeks of experimental protocol", value: "12", icon: Activity },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-display font-black text-slate-900 mb-2">{stat.value}</div>
              <p className="text-sm text-slate-500 font-medium leading-tight px-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Purpose = () => {
  const steps = [
    { title: "Stress Detection", desc: "Cellular stress triggers promoter activation", icon: Zap },
    { title: "Phase Separation", desc: "IDR-fluorophore proteins condense into puncta", icon: Microscope },
    { title: "Fluorescent Signal", desc: "Visible, quantifiable readout in real-time", icon: Activity },
  ];

  return (
    <section id="purpose" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Purpose</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">Revolutionizing Drug Safety Detection</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're building a modular biosensor that detects cellular stress before it becomes irreversible damage.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <step.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-[3rem] shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
            >
              <img 
                src="biorender.png" 
                alt="LLPS Condensate Platform Diagram" 
                className="w-full h-auto rounded-[2rem]"
              />
            </motion.div>
            
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-200 rounded-[3rem] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Need = () => {
  const needs = [
    {
      title: "The Detection Gap",
      desc: "Cells under significant biological stress may still return near-normal metabolic readouts, creating a dangerous blind spot.",
      icon: ShieldAlert
    },
    {
      title: "Clinical Consequences",
      desc: "Toxicity accounts for approximately 30% of late-stage drug failures, predominantly hepatotoxicity and cardiotoxicity.",
      icon: AlertTriangle
    },
    {
      title: "Economic Impact",
      desc: "Late-stage drug failures cost pharmaceutical companies billions. Detecting toxicity earlier saves enormous resources.",
      icon: TrendingDown
    }
  ];

  return (
    <section id="need" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">The Need</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">Why It Matters</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {needs.map((need, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600 mb-8">
                <need.icon size={32} />
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{need.title}</h4>
              <p className="text-slate-600 leading-relaxed">{need.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-display font-black mb-6">A New Approach to an Old Problem</h3>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            Moving from death-based to stress-based toxicity sensing represents a conceptual advance in drug safety science.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
              Current Methods
            </div>
            <h4 className="text-3xl font-display font-bold mb-6">Downstream Detection</h4>
            <ul className="space-y-4">
              {[
                "Reports metabolic impairment after damage",
                "Misses early stress-signalling phase",
                "LDH and Annexin V are even further downstream",
                "Insensitive to sub-lethal stress"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <XCircle size={20} className="text-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-brand-600 shadow-2xl shadow-brand-900/50"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8">
              CondenSense
            </div>
            <h4 className="text-3xl font-display font-bold mb-6">Upstream Detection</h4>
            <ul className="space-y-4">
              {[
                "Detects stress granule formation in minutes",
                "Reports on upstream stress-signalling events",
                "Graded and reversible response",
                "Catches sub-lethal toxicity early"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-50">
                  <CheckCircle2 size={20} className="text-brand-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  const techs = [
    {
      title: "Stress Promoter Cassette",
      desc: "Transcriptional sensors that respond to defined cellular stress axes like SoxS (oxidative) or DNA damage pathways.",
      icon: Zap
    },
    {
      title: "IDR-Fluorophore Fusion",
      desc: "Intrinsically disordered regions fused to sfGFP enable real-time fluorescence microscopy without fixation.",
      icon: Microscope
    },
    {
      title: "Scaffold & Terminator",
      desc: "Optimized expression control elements including RBS and poly-A signals. BioBrick RFC10-compatible.",
      icon: Beaker
    }
  ];

  return (
    <section id="technology" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Technology</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">Modular Cassette Architecture</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((tech, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand-200 hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 bg-brand-600 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-brand-200">
                <tech.icon size={40} />
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{tech.title}</h4>
              <p className="text-slate-600 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMember {
  name: string;
  image: string;
  bio: string;
  quote: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Maciej",
    image: "team/maciej.jpg",
    bio: "Maciej is a biotechnology student interested in molecular biology, machine learning, and other emerging technologies to solve global issues. In his spare time, he plays chess and travels.",
    quote: "Condensense is an exciting project that combines my passions for biology and real-world applications by designing biological models to solve real-world problems and improve people’s lives. I am contributing to it as part of the funding team."
  },
  {
    name: "Emily",
    image: "team/emily.png",
    bio: "A BSc Molecular Biology student, Emily pairs her scientific pursuits with a creative passion for music whenever she steps away from the lab bench.",
    quote: "I’m working as part of the Condensense methodology team, conducting research and helping with writing and planning laboratory procedures."
  },
  {
    name: "Max",
    image: "team/max.png",
    bio: "From experimenting with his first microscope at age four to leading his innovative research team at iGEM, Max has been passionate bioscientist. A British Biology Olympiad award winner, he is now reading Biochemistry at the University of Edinburgh.",
    quote: "What excites me most about CondenSense is the opportunity to harness biology’s own machinery to create testing methods that outperform conventional approaches."
  },
  {
    name: "Marcel",
    image: "team/marcel.png",
    bio: "Marcel studies Neuroscience at the University of Edinburgh, where his academic focus centers on cognitive neuroscience. Driven by the intersection of brain science and innovation, he is currently channeling his background into building a startup.",
    quote: "I am contributing to the team's methodology, ensuring that all research protocols are scientifically sound."
  },
  {
    name: "Collins",
    image: "team/collins.png",
    bio: "A third-year Neuroscience student at the University of Edinburgh, Collins pairs his academic focus with a keen eye for photography, disciplined Judo practice, and a love for horror and gaming. He uses his trilingual skills to build connections and friends.",
    quote: "Although no videogame will ever have as many sidetasks as I do, hence why I do bit of mix of things for the project, from the fundraising, lab methodology, video/photo taking for the social medias and running the half marathon."
  },
  {
    name: "Duc",
    image: "team/duc.jpg",
    bio: "Bridging the gap between science and public outreach, Duc runs funding and media.",
    quote: "By tracking instant condensate formation under stress, we’re creating a much faster alternative to traditional drug toxicity testing."
  },
  {
    name: "Olivia",
    image: "team/olivia.png",
    bio: "Olivia reads Biochemistry at the University of Edinburgh. An avid athlete who thrives on pushing her limits, she is currently organising her own half marathon.",
    quote: "I help manage our social media, support fundraising efforts and will be helping with lab work over the summer."
  },
  {
    name: "Kegan",
    image: "team/kegan.png",
    bio: "Kegan is a neuroscience student who is interested in emerging technologies and its global impact. His interests include playing the guitar and learning languages.",
    quote: "For the project, I am involved in outreach such as building relationships with experts within the field and fundraising. Additionally, I am also involved in the dry lab aspect of the project."
  },
  {
    name: "Parnian",
    image: "team/parnian.png",
    bio: "A pharmacy student and lifeguard, Parnian loves challenging herself and has solo-travel through four countries in Asia. She enjoys learning new languages and cultures, and is currently learning Azerbaijani!",
    quote: "Cells already have a survival trick: under stress, their proteins bunch into tiny liquid droplets, like oil beading in water, but alive. CondenSense hijacks that ancient reflex and wires it to glow, so a drug's toxicity reveals itself the instant a cell feels it. We didn't invent the alarm. we taught it to talk."
  },
  {
    name: "Arya",
    image: "team/arya.png",
    bio: "Outside the lab, Arya speaks four languages, happily argues logic for free, and is slowly relearning the violin. He also admits to losing money at poker in the noble name of \"studying game theory.\" Ultimately, Arya genuinely believes the coolest engineering is the kind cells were already pulling off long before we showed up.",
    quote: "plenty of drugs pass every test, then get yanked off shelves for damaging the heart. toxicity is a top reason drugs get banned. CondenSense makes cells flash green the instant a drug stresses them. We turn that into a molecular canary that warns us in a dish, not in you."
  },
  {
    name: "Anan",
    image: "team/anan.jpg",
    bio: "Anan is a musician, motorcyclist, and ESRA Biology Department Head, reading Biomedical Sciences. His research spans assay development, novel C. elegans genetic discoveries, and in-silico modeling. He is the developer of ChromosomeGuessr and a proud survivor of a 7-hour “accidental” loop of Crazy Frog while writing an essay.",
    quote: "I oversee international expert connections, the website, dry-lab, an upcoming symposium, and instagram posts."
  },
  {
    name: "Nico",
    image: "team/nico.png",
    bio: "Accelerating his academic journey as a direct-entry student, Nico is currently in his third year reading Biochemistry at the University of Edinburgh.",
    quote: "Did you know that the same cellular droplets that have been implicated in diseases like ALS and Alzheimer’s may also help us build better toxicity tests?"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-6 md:rounded-[4rem] md:p-16 border border-slate-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Team</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8">Twelve Minds, One Mission</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We are a group of 12 students from the University of Edinburgh, united by our passion for synthetic biology and its potential to solve real-world problems.
              </p>
              
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Users size={32} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Competing in</div>
                  <div className="text-2xl font-display font-bold text-slate-900">iGEM 2026</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 md:w-64 md:h-64 border-2 border-dashed border-brand-200 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-display font-black text-gradient">12</div>
                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Team Grid */}
          <div className="mt-20 border-t border-slate-100 pt-16 relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-12 text-center">Meet the Team</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-brand-200 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Image Container */}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100 relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Header Details */}
                    <h4 className="text-2xl font-display font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{member.name}</h4>
                    <div className="mb-4"></div>
                    
                    {/* Biography */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>
                  
                  {/* Quote (Speech bubble style) */}
                  {member.quote && (
                    <div className="bg-brand-50/50 border-l-4 border-brand-500 rounded-r-xl p-4 mt-auto">
                      <p className="text-brand-900 text-xs italic leading-relaxed">
                        “{member.quote}”
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-brand-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[150px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight"
        >
          Follow Our Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto"
        >
          Stay updated on our progress as we develop CondenSense and prepare for iGEM 2026.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="https://www.instagram.com/condense.sense/" target="_blank" className="bg-white text-brand-900 px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:bg-brand-50 transition-all shadow-2xl">
            <Instagram size={28} />
            Instagram
          </a>
          <a href="mailto:condensense@ed.ac.uk" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
            Contact Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img src="logo2.png" alt="CondenSense Logo" className="h-10 w-auto" />
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              An LLPS-Based Fluorescent Biosensor for Early-Stage Pharmaceutical Toxicity Detection. iGEM 2026 project by University of Edinburgh students.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/condense.sense/" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:condensense@ed.ac.uk" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Project</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#purpose" className="hover:text-brand-400 transition-colors">Purpose</a></li>
              <li><a href="#need" className="hover:text-brand-400 transition-colors">The Need</a></li>
              <li><a href="#technology" className="hover:text-brand-400 transition-colors">Technology</a></li>
              <li><a href="#team" className="hover:text-brand-400 transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Connect</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">iGEM 2026</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">University of Edinburgh</a></li>
              <li><a href="mailto:condensense@ed.ac.uk" className="hover:text-brand-400 transition-colors">condensense@ed.ac.uk</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 CondenSense Team. University of Edinburgh.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Purpose />
        <Need />
        <Comparison />
        <Technology />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
