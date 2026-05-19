export const personalInfo = {
  name: "Kenji Mendoza",
  role: "Technical Support Engineer & Software Developer",
  degree: "BS Computer Engineering, Cum Laude — PLM",
  location: "Santa Cruz, Manila, Philippines",
  email: "codewithkendev@gmail.com",
  github: "https://github.com/CodewithDevKen",
  linkedin: "https://www.linkedin.com/in/kenji-mendoza-094b792a4/",
  phone: "0956-716-5469",
  available: true,
  bio: "I solve problems for a living — first in technical support, now through code. Currently working at Zerohash while building my first iOS app and transitioning into full-time software development. I believe the best developers come from understanding real user problems first.",
};

export const aboutText = [
  "Cum Laude BS Computer Engineering graduate from Pamantasan ng Lungsod ng Maynila with hands-on experience in technical support, software development, and freelance full stack work.",
  "Currently working as a Technical Support Engineer at Zerohash — a crypto infrastructure company — where I handle complex technical issues and debug API integrations daily. I take pride in bridging the gap between technical teams and end users.",
  "Outside of work I continuously sharpen my development skills — building full stack web apps, React Native mobile apps, and currently learning Swift and SwiftUI to build a real iOS POS system. I am always growing, always building.",
];

export const aboutStats = [
  { value: "4+", label: "Years building" },
  { value: "Cum Laude", label: "BSCpE — PLM" },
  { value: "Zerohash", label: "Current company" },
];

export const experience = [
  {
    id: 1,
    title: "Technical Support Engineer",
    company: "Zerohash",
    period: "Nov 2025 – Present",
    icon: "⚡",
    badge: "current",
    badgeLabel: "🟢 Current",
    bullets: [
      "Debug API integrations and resolve complex technical issues for crypto infrastructure clients",
      "Act as technical liaison between engineering teams and end users across global markets",
    ],
  },
  {
    id: 2,
    title: "Jr. Technical Support Engineer",
    company: "Zerohash",
    period: "Feb 2025 – Nov 2025",
    icon: "🔧",
    badge: "done",
    badgeLabel: "✓ Completed",
    bullets: [
      "Handled Tier 1 and Tier 2 support tickets, escalating complex cases to engineering",
      "Documented recurring issues and built internal knowledge base articles",
    ],
  },
  {
    id: 3,
    title: "Jr. Software Developer",
    company: "Avior Marine Inc",
    period: "Jan 2024 – Jan 2025",
    icon: "💻",
    badge: "done",
    badgeLabel: "✓ Completed",
    bullets: [
      "Built the company's manning agency website using React.js and SASS",
      "Implemented job listings, services, and a contact system for streamlined user experience",
    ],
  },
  {
    id: 4,
    title: "Jr. Technical Support",
    company: "Asterisko Artisan",
    period: "Apr 2023 – Mar 2024",
    icon: "🎧",
    badge: "done",
    badgeLabel: "✓ Completed",
    bullets: [
      "Provided technical support and troubleshooting for client systems and software",
    ],
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "Freelance",
    period: "Jan 2022 – Present",
    icon: "🚀",
    badge: "ongoing",
    badgeLabel: "⚡ Ongoing",
    bullets: [
      "Build full-stack web apps and React Native mobile apps for clients",
      "Delivered real-time IoT integrations using Firebase and Arduino",
    ],
  },
];

export const techStack = [
  {
    id: 1,
    label: "Mobile Development",
    tags: [
      { name: "React Native", learning: false },
      { name: "Swift", learning: true },
      { name: "SwiftUI", learning: true },
      { name: "SwiftData", learning: true },
      { name: "Firebase SDK", learning: false },
      { name: "Arduino IDE", learning: false },
    ],
  },
  {
    id: 2,
    label: "Frontend",
    tags: [
      { name: "React", learning: false },
      { name: "TypeScript", learning: false },
      { name: "JavaScript", learning: false },
      { name: "HTML5", learning: false },
      { name: "CSS3 / SASS", learning: false },
      { name: "Bootstrap", learning: false },
      { name: "Material-UI", learning: false },
    ],
  },
  {
    id: 3,
    label: "Backend",
    tags: [
      { name: "Node.js", learning: false },
      { name: "Express.js", learning: false },
      { name: "ASP.NET MVC", learning: false },
      { name: ".NET Core", learning: false },
      { name: "C#", learning: false },
      { name: "RESTful APIs", learning: false },
    ],
  },
  {
    id: 4,
    label: "Databases",
    tags: [
      { name: "MongoDB", learning: false },
      { name: "SQL Server", learning: false },
      { name: "MySQL", learning: false },
      { name: "Firebase", learning: false },
    ],
  },
  {
    id: 5,
    label: "Tools & Platforms",
    tags: [
      { name: "Git", learning: false },
      { name: "GitHub", learning: false },
      { name: "VS Code", learning: false },
      { name: "Xcode", learning: true },
      { name: "Vite", learning: false },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Bulalohan Sa 1st",
    description:
      "A full iOS POS and ordering system for my brother's Filipino restaurant. Cashier interface, kitchen display, Bluetooth receipt printing, and real-time order queue management — all in one app.",
    icon: "🍲",
    iconBg: "red",
    tags: ["Swift", "SwiftUI", "SwiftData", "CoreBluetooth"],
    status: "wip",
    statusLabel: "In Development",
    link: null,
  },
  {
    id: 2,
    name: "This Portfolio",
    description:
      "Built from scratch using React and Vite. Dark/light theme, clean minimal layout, full mobile responsiveness. No templates — every line written by hand.",
    icon: "🌐",
    iconBg: "blue",
    tags: ["React", "Vite", "CSS Modules"],
    status: "live",
    statusLabel: "Live",
    link: "https://my-portfolio-zeta-six-16.vercel.app",
  },
  {
    id: 3,
    name: "Manning Agency Website",
    description:
      "Corporate website for Avior Marine Inc featuring home, about, job listings, services, and a contact system — designed to streamline crew recruitment.",
    icon: "⚓",
    iconBg: "blue",
    tags: ["React", "SASS", "JavaScript"],
    status: "live",
    statusLabel: "Live",
    link: null,
  },
  {
    id: 4,
    name: "Smart Parking App",
    description:
      "Mobile app with real-time Firebase integration and Arduino sensor hardware for live parking space availability and management.",
    icon: "🅿️",
    iconBg: "green",
    tags: ["React Native", "Firebase", "Arduino IDE"],
    status: "done",
    statusLabel: "Completed",
    link: null,
  },
  {
    id: 5,
    name: "iAqua",
    description:
      "Real-time aquarium monitoring app with scheduled feeding, automatic water change management, chatbot interaction, and full sensor history logs.",
    icon: "🐠",
    iconBg: "blue",
    tags: ["React Native", "Firebase", "Arduino IDE"],
    status: "done",
    statusLabel: "Completed",
    link: null,
  },
];

export const education = [
  {
    id: 1,
    degree: "BS Computer Engineering",
    school: "Pamantasan ng Lungsod ng Maynila",
    period: "2020 – 2024",
    honor: "Cum Laude",
    icon: "🎓",
  },
];

export const certificates = [
  {
    id: 1,
    name: "FIX Protocol Training",
    issuer: "Fixnox",
    date: "December 5, 2025",
    icon: "📈",
  },
  {
    id: 2,
    name: "Claude 101",
    issuer: "Anthropic",
    date: "May 9, 2026",
    icon: "🤖",
    credentialUrl: "/certificates/claude-101.pdf",
  },
  {
    id: 3,
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "May 9, 2026",
    icon: "🤖",
    credentialUrl: "/certificates/claude-code-101.pdf",
  },
  {
    id: 4,
    name: "AI Fluency: Framework & Foundation",
    issuer: "Anthropic",
    date: "May 2026",
    icon: "🤖",
    credentialUrl: "/certificates/ai-fluency.pdf",
  },
  {
    id: 5,
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 2026",
    icon: "🤖",
    credentialUrl: "/certificates/claude-code-in-action.pdf",
  },
  {
    id: 6,
    name: "Observability with Grafana, Prometheus, Loki, Alloy and Tempo",
    issuer: "Udemy",
    date: "May 19, 2026",
    icon: "📊",
    credentialUrl: "https://ude.my/UC-46e6415c-2f3c-4b03-b886-337e63413029",
  },
];
