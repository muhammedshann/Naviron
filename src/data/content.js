export const companyInfo = {
  name: "Naviron",
  tagline: "Integrated Contracting & Facility Solutions",
  subtagline: "Fit-Out | Civil | MEP | Landscaping | Maintenance",
  badgeText: "Fit-Out & Construction • Landscaping & Irrigation • MEP & Maintenance",
  sisterCompany: "A Sister Company of Ainsnan Trading & Contracting",
  crNumber: "237130",
  phones: [
    { label: "WhatsApp & Primary", number: "+974 5090 9707", href: "tel:+97450909707", whatsappHref: "https://wa.me/97450909707" },
    { label: "Direct Line", number: "+974 3364 2957", href: "tel:+97433642957" }
  ],
  email: "info@naviron.tech",
  address: "Street No: 955, Central Market, Abu Hamour, Building No: 191, 1st Floor, Door No: 12, PO Box: 40868, Qatar",
  experienceYears: "20+",
  mission: "At Naviron, our mission is to provide integrated contracting and facility solutions across Qatar. We deliver turnkey fit-out, civil works, landscaping & automatic irrigation, MEP installations, and preventive & corrective maintenance based on safety, integrity, innovation, and client satisfaction.",
  approach: "Our operational philosophy is built on seven core pillars: Safety, Integrity, Professionalism, Innovation, Customer Satisfaction, Timely Delivery, and Sustainability. We collaborate closely with our clients to deliver high-quality, efficient, and durable project outcomes across all sectors.",
  story: "Founded as a dynamic extension of Ainsnan Trading & Contracting, Naviron carries over 20 years of industry legacy in Qatar. We combine parent company expertise with modern engineering technologies to provide seamless fit-out, civil, MEP, landscaping, and maintenance solutions.",
  coreValues: [
    { id: "safety", name: "Safety", desc: "Uncompromising health and safety standards across all site fit-outs and maintenance operations." },
    { id: "integrity", name: "Integrity", desc: "Transparent dealings, ethical commercial standards, and building long-term trust." },
    { id: "professionalism", name: "Professionalism", desc: "Certified engineering practices adhering to strict Qatari building codes and regulations." },
    { id: "innovation", name: "Innovation", desc: "Modern architectural fit-outs, automatic irrigation systems, and smart MEP solutions." },
    { id: "satisfaction", name: "Customer Satisfaction", desc: "Dedicated to exceeding client expectations with custom-tailored project delivery." },
    { id: "delivery", name: "Timely Delivery", desc: "Strict adherence to project timelines, milestone management, and budget controls." },
    { id: "sustainability", name: "Sustainability", desc: "Eco-friendly landscaping, water-conserving drip irrigation, and energy-efficient systems." }
  ],
  quickServicesTicker: [
    "Civil Works", "Tile & Marble", "Interlock Paving", "Epoxy Flooring", "Gypsum Partitions", 
    "Painting Works", "Carpentry & Joinery", "Aluminium & Glass", "Movable Partitions", "Automatic Sliding Doors",
    "Hardscape & Softscape", "Automatic Irrigation", "MEP Installation", "Testing & Commissioning", 
    "Preventive Maintenance", "Corrective Maintenance", "24/7 Rapid Emergency Support"
  ]
};

export const stats = [
  { id: "divisions", value: 3, suffix: " Major", label: "Integrated Divisions", desc: "Fit-Out & Construction, Landscaping & Irrigation, MEP" },
  { id: "satisfaction", value: 100, suffix: "%", label: "Quality Commitment", desc: "Safety, integrity, and timely delivery across Qatar" },
  { id: "emergency", value: 24, suffix: "/7", label: "Maintenance Desk", desc: "Rapid-response preventive & corrective call-out support" },
  { id: "legacy", value: 20, suffix: "+ Years", label: "Ainsnan Heritage", desc: "Two decades of contracting excellence & client trust" }
];

export const services = [
  {
    id: "fit-out-construction",
    title: "Fit-Out & Construction Division",
    subtitle: "Complete Fit-Out, Civil Works, Flooring, Gypsum & Joinery",
    description: "End-to-end interior fit-outs, structural civil works, specialty epoxy flooring, decorative gypsum ceilings, custom joinery, aluminium & glass partitions, and automatic sliding doors.",
    details: [
      "Turnkey Commercial, Residential, Office, Retail & Hospitality Fit-Outs",
      "Structural Civil Works: Block work, plastering, screeding & concrete works",
      "Tile, Marble, Granite, Stone & External Interlock Paving",
      "Industrial & Commercial Epoxy Flooring with protective coatings",
      "Gypsum partitions, false ceilings, custom carpentry & automatic doors"
    ],
    subDivisions: [
      {
        title: "Complete Fit-Out Works",
        items: ["Interior fit-out works", "Commercial fit-out", "Residential fit-out", "Office fit-out", "Retail fit-out", "Hospitality fit-out", "Renovation and refurbishment"]
      },
      {
        title: "Civil Works",
        items: ["Block work", "Plastering", "Screeding", "Concrete works", "Repair and renovation", "Masonry works", "External civil works"]
      },
      {
        title: "Tile, Marble & Interlock Works",
        items: ["Floor and wall tiling", "Marble installation", "Granite works", "Stone installation", "Interlock paving", "External paving", "Kerbstone installation"]
      },
      {
        title: "Epoxy Flooring",
        items: ["Industrial epoxy flooring", "Commercial epoxy flooring", "Self-leveling flooring", "Heavy-duty flooring", "Protective coatings", "Floor repair and preparation"]
      },
      {
        title: "Gypsum Works",
        items: ["Gypsum partitions", "False ceilings", "Decorative ceilings", "Bulkheads", "Feature walls", "Access panels", "Gypsum detailing"]
      },
      {
        title: "Painting Works",
        items: ["Interior painting", "Exterior painting", "Decorative painting", "Texture coating", "Protective coatings", "Repainting and refurbishment"]
      },
      {
        title: "Carpentry & Joinery",
        items: ["Custom furniture", "Doors and frames", "Cabinets", "Wall paneling", "Decorative woodwork", "Office furniture", "Joinery works"]
      },
      {
        title: "Partitions & Automatic Doors",
        items: ["Movable wall partitions", "Aluminium & glass partitions", "Frameless glass partitions", "Office partitions", "Sliding partitions", "Automatic sliding doors", "Automatic entrance systems"]
      }
    ],
    image: "/assets/images/pexels-photo-35296423.jpeg",
    bannerImage: "/assets/images/pexels-photo-33670026.jpeg",
    icon: "Building2",
    badge: "Division 01"
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation Division",
    subtitle: "Hardscape, Softscape, Smart Irrigation & Landscape Care",
    description: "Design, installation, and care for softscaping and hardscaping projects, outdoor features, automated drip and sprinkler irrigation networks, and seasonal landscape maintenance.",
    details: [
      "Softscaping & Hardscaping: Turf, planting, trees, shrubs & gardens",
      "Automatic Irrigation: Drip & sprinkler systems with smart controllers",
      "Pumps, irrigation networks, testing & commissioning",
      "Comprehensive landscape maintenance, pruning, grass & soil fertilization"
    ],
    subDivisions: [
      {
        title: "Landscaping Works",
        items: ["Soft landscaping", "Hard landscaping", "Planting", "Turf installation", "Trees and shrubs", "Decorative landscaping", "Outdoor features", "Garden development"]
      },
      {
        title: "Automatic Irrigation",
        items: ["Irrigation system design", "Drip irrigation", "Sprinkler systems", "Automatic irrigation controllers", "Pumps and irrigation networks", "Irrigation installation", "Testing and commissioning"]
      },
      {
        title: "Landscape Maintenance",
        items: ["Garden maintenance", "Plant care", "Grass maintenance", "Pruning", "Fertilization", "Irrigation maintenance", "Seasonal maintenance"]
      }
    ],
    image: "/assets/images/pexels-photo-9471710.jpeg",
    bannerImage: "/assets/images/pexels-photo-19612359.jpeg",
    icon: "Trees",
    badge: "Division 02"
  },
  {
    id: "mep-division",
    title: "MEP Division",
    subtitle: "Mechanical, Electrical & Plumbing Installation & Testing",
    description: "Complete MEP engineering services including low voltage power distribution, lighting systems, cable containment, water supply, drainage networks, and testing & commissioning.",
    details: [
      "LV Electrical Works: Power distribution, DB installation & cabling",
      "Lighting & Emergency Systems: Energy-efficient fixtures & controls",
      "Plumbing Works: Water supply, drainage networks, pumps & tanks",
      "Comprehensive MEP Testing, Commissioning & Safety Compliance"
    ],
    subDivisions: [
      {
        title: "Mechanical, Electrical & Plumbing",
        items: ["MEP Installation", "Testing & Commissioning", "Integrated Systems Execution", "Quality Control Inspections"]
      },
      {
        title: "Electrical Works",
        items: ["LV electrical works", "Power distribution", "Lighting systems", "Emergency lighting", "DB installation", "Cable containment", "Wiring and cabling", "Earthing systems", "Testing and commissioning"]
      },
      {
        title: "Plumbing Works",
        items: ["Water supply", "Drainage systems", "Sanitary installations", "Piping works", "Pumps", "Water tanks", "Fixtures and fittings", "Testing and commissioning"]
      }
    ],
    image: "/assets/images/pexels-photo-5987842.jpeg",
    bannerImage: "/assets/images/pexels-photo-35296423.jpeg",
    icon: "Zap",
    badge: "Division 03"
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    subtitle: "Preventive, Corrective & 24/7 Rapid Emergency Support",
    description: "Dedicated facility maintenance programs for civil structures, MEP networks, landscape ecosystems, and 24/7 rapid emergency call-out repairs.",
    details: [
      "Building Maintenance: Civil, painting, tile, marble, gypsum & door repairs",
      "MEP Maintenance: Electrical, plumbing, mechanical & equipment upkeep",
      "Landscape Maintenance: Irrigation care, plant care & seasonal pruning",
      "Emergency Maintenance: Rapid-response repairs & breakdown call-out support"
    ],
    subDivisions: [
      {
        title: "Building Maintenance",
        items: ["Civil maintenance", "Painting", "Tile and marble repairs", "Gypsum repairs", "Carpentry", "Doors and partitions"]
      },
      {
        title: "MEP Maintenance",
        items: ["Electrical maintenance", "Plumbing maintenance", "Mechanical maintenance", "Equipment maintenance"]
      },
      {
        title: "Landscape Maintenance",
        items: ["Irrigation maintenance", "Plant maintenance", "Grass and garden care", "Pruning and fertilization"]
      },
      {
        title: "Emergency Maintenance",
        items: ["Rapid-response repairs", "Breakdown support", "Corrective maintenance", "Call-out services"]
      }
    ],
    image: "/assets/images/pexels-photo-10546989.jpeg",
    bannerImage: "/assets/images/pexels-photo-9471710.jpeg",
    icon: "Wrench",
    badge: "Division 04"
  }
];

export const valuePillars = [
  {
    icon: "ShieldCheck",
    title: "Safety First",
    description: "Strict health and safety protocols across every site, fit-out, and maintenance operation in Qatar."
  },
  {
    icon: "Award",
    title: "Integrity",
    description: "Ethical commercial standards, transparent contracting terms, and building lasting client partnerships."
  },
  {
    icon: "CheckCircle",
    title: "Professionalism",
    description: "Qualified engineers and tradespeople delivering precision craftsmanship and Qatari code compliance."
  },
  {
    icon: "Zap",
    title: "Innovation",
    description: "Deploying modern construction techniques, automatic sliding entrance systems, and smart irrigation networks."
  },
  {
    icon: "Users",
    title: "Customer Satisfaction",
    description: "Client-focused service delivery ensuring every project milestone exceeds expectations."
  },
  {
    icon: "Clock",
    title: "Timely Delivery",
    description: "Strict schedule discipline and resource optimization for on-time project handovers."
  },
  {
    icon: "Leaf",
    title: "Sustainability",
    description: "Resource-efficient MEP engineering, eco-friendly softscaping, and smart water management."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jassim Al-Malki",
    role: "Commercial Property Manager",
    location: "Doha, Qatar",
    avatar: "/assets/images/testimonial-skip-01.jpg",
    quote: "Naviron executed our corporate office fit-out and glass partitions flawlessly. Their attention to detail in joinery and gypsum works was outstanding.",
    rating: 5,
    projectScope: "Commercial Fit-Out & Glass Partitions"
  },
  {
    id: 2,
    name: "Mariam Al-Subaey",
    role: "Landscape & Estate Supervisor",
    location: "Lusail, Qatar",
    avatar: "/assets/images/testimonial-skip-02.jpg",
    quote: "The automatic irrigation design and softscaping by Naviron transformed our facility grounds. Their maintenance team keeps everything lush year-round.",
    rating: 5,
    projectScope: "Landscaping & Automatic Irrigation"
  },
  {
    id: 3,
    name: "Tariq Al-Mansoor",
    role: "Facilities Director",
    location: "West Bay, Doha",
    avatar: "/assets/images/testimonial-skip-01.jpg",
    quote: "Naviron's MEP maintenance and emergency call-out service give us complete peace of mind. Their response time and technical expertise are top tier.",
    rating: 5,
    projectScope: "MEP Preventive & Emergency Maintenance"
  },
  {
    id: 4,
    name: "Fatima Al-Kuwari",
    role: "Retail Group Project Lead",
    location: "Qatar",
    avatar: "/assets/images/testimonial-skip-02.jpg",
    quote: "From heavy-duty epoxy flooring to automatic sliding door installations, Naviron delivered our multi-site retail fit-out ahead of schedule.",
    rating: 5,
    projectScope: "Retail Fit-Out & Epoxy Flooring"
  }
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Key Considerations for Commercial Fit-Out & Glass Partitions in Qatar",
    category: "Fit-Out & Construction",
    date: "August 12, 2026",
    author: "Naviron Fit-Out Desk",
    image: "/assets/images/pexels-photo-35296423.jpeg",
    excerpt: "Modern commercial spaces require seamless interior fit-out execution, acoustics, automatic sliding doors, and premium joinery works...",
    content: [
      "Executing a high-standard interior fit-out requires careful coordination between civil modifications, gypsum partitions, decorative ceilings, and MEP integration.",
      "At Naviron, our Fit-Out & Construction division manages every detail—from block work and plastering to custom joinery, frameless glass partitions, and automatic entrance systems."
    ]
  },
  {
    id: "post-2",
    title: "Maximizing Water Efficiency with Automatic Irrigation Systems",
    category: "Landscaping & Irrigation",
    date: "August 24, 2026",
    author: "Naviron Landscaping Desk",
    image: "/assets/images/pexels-photo-9471710.jpeg",
    excerpt: "Automated drip and sprinkler networks combined with smart controllers ensure thriving landscapes while optimizing water consumption...",
    content: [
      "Developing sustainable softscapes in Qatari climate conditions hinges on intelligent automatic irrigation design. Smart controllers and drip networks deliver exact water volumes directly to roots.",
      "Naviron offers complete landscape design, turf installation, tree planting, and routine seasonal maintenance to ensure lasting beauty."
    ]
  },
  {
    id: "post-3",
    title: "The Importance of Preventive MEP & Facility Maintenance",
    category: "MEP & Maintenance",
    date: "September 02, 2026",
    author: "Naviron Maintenance Desk",
    image: "/assets/images/pexels-photo-5987842.jpeg",
    excerpt: "Regular electrical, plumbing, and building upkeep prevents costly downtime and prolongs asset lifespan across commercial facilities...",
    content: [
      "Preventive maintenance schedules safeguard LV electrical networks, water pumps, drainage systems, and structural finishes before minor issues escalate.",
      "Naviron provides tailored preventive packages and 24/7 rapid-response emergency breakdown support throughout Qatar."
    ]
  }
];
