// Services data
export const services = [
  {
    title: "CCTV & Security Installations",
    description:
      "IP-based cameras, NVR/DVR setup, access control systems, and AI-powered smart surveillance for single sites to multi-branch deployments.",
    image: "/images/CCTV.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M3 11h18M3 16h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Network Infrastructure Design",
    description:
      "End-to-end structured cabling, fiber optic backbone, LAN/WAN architecture, and full system integration for enterprise and government facilities.",
    image: "/images/NetworkInfraDesign.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M4 6h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 6v12M16 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "LGU Solutions",
    description:
      "Tailored ICT for Local Government Units — e-governance systems, public Wi-Fi, integrated command centers, and digital public services.",
    image: "/images/LGUSolutions.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M4 9h16M4 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "VoIP & Communications",
    description:
      "IP-PABX telephone systems, advanced call routing, voicemail, and unified communications platforms for businesses of any scale.",
    image: "/images/VOiP.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M6 7h12M6 12h12M6 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "IT Support & Maintenance",
    description:
      "Proactive monitoring, helpdesk support, SLA-backed response times, network health checks, and 24/7 technical consultancy.",
    image: "/images/ITsupport.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M12 5v14M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "ICT Peripherals & Equipment",
    description:
      "Supply and delivery of computers, laptops, networking gear, and ICT peripherals sourced from leading brands for offices and institutions.",
    image: "/images/ElectronicGadjets.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M6 7h12v10H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Built for Reliability. Designed to Scale.
export const features = [
  {
    title: "Reliable Infrastructure",
    description: "99.9% uptime with redundant systems.",
    icon: (
      <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4.97 0 9-4.03 9-9v-2.5L12 2 3 10.5V13c0 4.97 4.03 9 9 9z" />
          <path d="M12 8v4l3 3" />
        </svg>
      </div>
    ),
  },
  {
    title: "Certified Technicians",
    description: "Cisco, CompTIA certified team.",
    icon: (
      <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    ),
  },
  {
    title: "Scalable & Modular",
    description: "Designed to grow with your business.",
    icon: (
      <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </div>
    ),
  },
  {
    title: "24/7 Support",
    description: "Always here when you need us.",
    icon: (
      <div className="rounded-2xl bg-sky-50 p-3 text-sky-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    ),
  },
];

// Projects data
export const projectItems = [
  {
    title: "Davao City Government CCTV Network",
    location: "Davao City, Philippines",
    image: "/images/DavaoGov.jpeg",
    category: "bg-sky-600",
  },
  {
    title: "SM City Davao Security System Upgrade",
    location: "Davao City, Philippines",
    image: "/images/SMCity.jpg",
    category: "bg-sky-600",
  },
  {
    title: "Mindoro Medical Center Network Infrastructure",
    location: "Oriental Mindoro, Philippines",
    image: "/images/MindoroMedical.jpg",
    category: "bg-sky-600",
  },
  {
    title: "Bukidnon Provincial Capitol IT Overhaul",
    location: "Bukidnon, Philippines",
    image: "/images/BukidnonCapitol.jpg",
    category: "bg-sky-600",
  },
  {
    title: "GenSan Port Authority Communications Upgrade",
    location: "General Santos City, Philippines",
    image: "/images/GenSanPort.jpg",
    category: "bg-sky-600",
  },
  {
    title: "Surigao Mining Operations Fiber Network",
    location: "Surigao, Philippines",
    image: "/images/SurigaoMining.jpg",
    category: "bg-sky-600",
  },
];

// Centralized Contact Info
export const contactInfo = {
  phones: [
    "+63 917 719 9600",
    "+63 954 384 7707",
    "(082) 244-7377"
  ],
  email: "joey@unicentercom.com",
  address: "2/F, Unicenter Bldg. Maharlika Village, Ma-a, Davao City 8000",
  hours: "Mon–Sat: 8:00 AM – 6:00 PM",
  socials: {
    facebook: "https://facebook.com/unicentercom",
    linkedin: "https://linkedin.com/company/unicentercom",
    instagram: "https://instagram.com/unicentercom",
    youtube: "https://youtube.com/@unicentercom"
  }
};

