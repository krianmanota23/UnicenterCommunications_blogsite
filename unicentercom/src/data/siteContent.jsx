// Site copy, services, projects, and contact details for the landing page

export const services = [
  {
    title: "CCTV & Security Installations",
    description:
      "IP-based cameras, NVR/DVR setup, access control systems, and AI-powered smart surveillance for single sites to multi-branch deployments.",
    image: "/services_images/CCTV.jpg",
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
    image: "/services_images/NetworkInfraDesign.jpg",
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
    image: "/services_images/LGUSolutions.jpg",
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
    image: "/services_images/VOiP.jpg",
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
    image: "/services_images/ITsupport.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M12 5v14M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "ICT Peripherals & Equipment",
    description:
      "Supply and delivery of computers, laptops, networking gear, and ICT peripherals sourced from our partners and suppliers for offices and institutions.",
    image: "/services_images/ICT_peripherals.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600">
        <path d="M6 7h12v10H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const features = [
  {
    title: "Reliable Infrastructure",
    description: "99.9% uptime with redundant systems.",
    icon: (
      <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
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
      <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
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
      <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
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
        <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      ),
    },
    {
      title: "ISO Certified",
      description: "Enterprise Security standard.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
      ),
    },
  ];

export const projectItems = [
  {
    title: "APEX Mining Co. Inc.",
    location: "Tagum City, Davao del Norte",
    image: "/projects_Images/Apex_Mining.png",
    categoryLabel: "DATA CENTER",
    categoryClass: "bg-red-500",
    description: "Full data center setup, fiber infrastructure deployment, and communications tower maintenance for one of Mindanao's leading mining operations.",
  },
  {
    title: "Philsaga Mining",
    location: "Agusan Province",
    image: "/projects_Images/Philsaga.png",
    categoryLabel: "INFRASTRUCTURE",
    categoryClass: "bg-amber-500",
    description: "Comprehensive structured cabling installation and preventive maintenance program covering the entire mining facility communications network.",
  },
  {
    title: "Local Government Units (LGUs)",
    location: "Davao City",
    image: "/projects_Images/Sangunian&DavaoBusTerminal.png",
    categoryLabel: "GOVERNMENT",
    categoryClass: "bg-blue-500",
    description: "Security surveillance CCTV installation for Sanggunian offices and Davao Bus Terminal — providing full-coverage IP camera systems for public safety.",
  },
  {
    title: "DepEd Davao Schools",
    location: "Ma-a, Davao City",
    image: "/projects_Images/MaaElementarySchool.jpg",
    categoryLabel: "EDUCATION",
    categoryClass: "bg-violet-500",
    description: "Structured cabling and network infrastructure deployment across multiple public schools including Ma-a National High School and Ma-a Elementary School in the Davao region.",
  },
  {
    title: "FICCO Cooperative",
    location: "Nationwide — CDO, Kibawe, Cogon, Surigao",
    image: "/projects_Images/FICCO.png",
    categoryLabel: "MULTI-BRANCH",
    categoryClass: "bg-indigo-500",
    description: "Enterprise-wide structured cabling, PABX telephone systems, and CCTV security surveillance across multiple FICCO branches throughout the Philippines including Cagayan de Oro, Kibawe, Cogon, and Surigao.",
  },
  {
    title: "Davao Doctors Hospital",
    location: "Davao City",
    image: "/projects_Images/DDH.png",
    categoryLabel: "HEALTHCARE",
    categoryClass: "bg-emerald-500",
    description: "Full hospital communications infrastructure including data and voice cabling, fiber optic backbone, and public address (PA) system cabling throughout the facility.",
  },
  {
    title: "DOLE — Department of Labor",
    location: "Maramag, Bukidnon",
    image: "/projects_Images/DOLE.png",
    categoryLabel: "GOVERNMENT",
    categoryClass: "bg-blue-500",
    description: "Lightning arrester installation and grounding system deployment to protect critical government communications infrastructure from electrical surges.",
  },
  {
    title: "Cotabato Provincial Capitol",
    location: "Kidapawan, Cotabato",
    image: "/projects_Images/Amas_Capitol.png",
    categoryLabel: "GOVERNMENT",
    categoryClass: "bg-blue-500",
    description: "Full ICT infrastructure deployment for the Cotabato Provincial Capitol — covering IP-based CCTV security surveillance, LED wall installation, VoIP telephone system, and complete network infrastructure setup across the entire capitol complex.",
  },
];

export const contactInfo = {
  phones: ["+63 917 719 9600", "+63 954 384 7707", "(082) 244-7377"],
  email: ["joey@unicentercom.com", "unicenter.communications1999@gmail.com"],
  address: "2/F, Unicenter Bldg. Maharlika Village, Ma-a, Davao City 8000",
  hours: "Mon–Sat: 8:00 AM – 5:00 PM",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61578433056333",
    linkedin: "https://linkedin.com/company/unicentercom",
    instagram: "https://instagram.com/unicentercom",
    youtube: "https://youtube.com/@unicentercom",
  },
};
