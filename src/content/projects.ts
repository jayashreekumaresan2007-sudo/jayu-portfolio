import type { Project, ProjectCategory } from './types'

export const projects: Project[] = [
  {
    id: 'medi-vision',
    slug: 'medi-vision',
    title: 'Medi Vision',
    shortDescription:
      'A gesture-controlled medical image viewer for seamless, hands-free exploration of medical scans.',
    status: 'prototype',
    statusLabel: 'Touchless Medical Image Viewer',
    categoryLabel: 'HEALTH TECH',
    categories: ['Software Projects', 'Interactive Experiences', 'AI and Technology'],
    stack: ['Python', 'OpenCV', 'MediaPipe', 'CustomTkinter', 'NumPy'],
    role: 'Concept, interaction design, and prototype development',
    cover: {
      kind: 'verified-asset',
      src: '/projects/medi-vision-cover.webp',
      alt: 'Medi Vision — Touchless Medical Image Viewer with diagnostic scans and hand gesture tracking',
    },
    gallery: [
      {
        src: '/projects/medi-vision-cover.webp',
        alt: 'Medi Vision desktop workstation displaying chest X-ray and brain MRI scans with gesture tracking',
        caption: 'Desktop monitor workstation running gesture-recognition medical viewer in Python & MediaPipe.',
      },
    ],
    caseStudy: {
      overview:
        'Medi Vision is a desktop prototype that explores hands-free interaction with medical images. It is a software experiment, not a certified clinical system and not a substitute for hospital imaging software.',
      problem:
        'Conventional image viewers rely on mouse and keyboard input. This prototype asks whether common review actions can be mapped to a small set of camera-read gestures.',
      role: 'I designed the interaction model and built the prototype using computer-vision libraries.',
      process:
        'The current implementation maps pinch to zoom, index-finger movement to pan, an open palm to rotation, a closed fist to pause, plus image selection and a reset view.',
      challenges:
        'Keeping gesture recognition stable enough to feel usable, while remaining honest that this is a learning prototype rather than a clinical product.',
      learning:
        'The project connected interaction design with computer vision: the interface only works if the gesture language stays simple, readable, and reversible.',
    },
    repositoryUrl:
      'https://github.com/jayashreekumaresan2007-sudo/Touchless-Medical-Image-Viewer',
  },
  {
    id: 'skillbridgeai',
    slug: 'skillbridgeai',
    title: 'SkillBridgeAI',
    shortDescription:
      'An AI-assisted platform to help students explore skills, get personalized guidance, and plan their career journey.',
    status: 'concept',
    statusLabel: 'Educational & Career Guidance Platform',
    categoryLabel: 'EDTECH / AI',
    categories: ['UI/UX', 'AI and Technology', 'Web Design'],
    stack: ['UI/UX', 'Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    role: 'Concept, UI/UX architecture, and product framing',
    cover: {
      kind: 'verified-asset',
      src: '/projects/skillbridgeai-cover.webp',
      alt: 'SkillBridgeAI — Educational & Career Guidance Platform laptop dashboard and learning progress',
    },
    gallery: [
      {
        src: '/projects/skillbridgeai-cover.webp',
        alt: 'SkillBridgeAI student learning progress dashboard with career roadmaps on laptop',
        caption: 'Product interface exploring skill discovery, progress telemetry, and curriculum pathways.',
      },
    ],
    caseStudy: {
      overview:
        'SkillBridgeAI is framed as an educational and career guidance platform. It bridges the gap between academic curricula and practical career pathways through structured self-evaluation and skill roadmaps.',
      problem:
        'Students often lack clear visibility into which skills are required for specific industry roles and how to sequence their learning effectively.',
      role: 'I designed the user interface flows, typography, and card-based curriculum overview in Figma.',
      detailsPending: false,
    },
  },
  {
    id: 'bhoomi-x',
    slug: 'bhoomi-x',
    title: 'BHOOMI-X',
    shortDescription:
      'A geospatial intelligence platform for land parcel analysis, planning, and decision support.',
    status: 'concept',
    statusLabel: 'Government Land-Acquisition Platform',
    categoryLabel: 'GOV TECH',
    categories: ['UI/UX', 'Software Projects', 'AI and Technology'],
    stack: ['Data Visualization', 'AI/ML', 'React', 'Supabase', 'Geo-spatial'],
    role: 'Concept, GIS interface design, and visual direction',
    cover: {
      kind: 'verified-asset',
      src: '/projects/bhoomi-x-cover.webp',
      alt: 'BHOOMI-X — Geospatial intelligence platform with satellite land parcel boundaries on laptop',
    },
    gallery: [
      {
        src: '/projects/bhoomi-x-cover.webp',
        alt: 'BHOOMI-X 3D geospatial mapping and parcel valuation telemetry on laptop display',
        caption: 'Civic intelligence dashboard for transparent land acquisition and parcel analysis.',
      },
    ],
    caseStudy: {
      overview:
        'BHOOMI-X is a land-acquisition intelligence concept associated with the Smart India Hackathon 2026 context. It explores transparent geospatial parcel mapping, valuation telemetry, and public dispute avoidance.',
      problem:
        'Land acquisition processes can suffer from opaque documentation, disputed boundaries, and inefficient compensation workflows.',
      role: 'I led the visual design, interactive map dashboard mockups, and citizen telemetry presentation.',
      detailsPending: false,
    },
  },
  {
    id: 'assetflow',
    slug: 'assetflow',
    title: 'AssetFlow',
    shortDescription:
      'A centralized platform to manage assets, track maintenance, and visualize resource utilization.',
    status: 'concept',
    statusLabel: 'Enterprise Asset & Resource Management',
    categoryLabel: 'ENTERPRISE / SAAS',
    categories: ['UI/UX', 'Software Projects', 'Web Design'],
    stack: ['UI/UX', 'System Design', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    role: 'Design system, dashboard architecture, and interaction states',
    cover: {
      kind: 'verified-asset',
      src: '/projects/assetflow-cover.webp',
      alt: 'AssetFlow — Enterprise Asset and Resource Management desktop workstation dashboard',
    },
    gallery: [
      {
        src: '/projects/assetflow-cover.webp',
        alt: 'AssetFlow enterprise asset telemetry dashboard with utilization charts and activity feed',
        caption: 'Enterprise SaaS analytics dashboard with telemetry indicators, utilization charts, and activity feeds.',
      },
    ],
    caseStudy: {
      overview:
        'AssetFlow is an enterprise SaaS dashboard concept designed for managing high-value hardware, server infrastructure, and human resources with minimal visual clutter.',
      problem:
        'Legacy enterprise resource systems are often dense and cumbersome, leading to operational fatigue and delayed decision-making.',
      role: 'I designed a high-contrast enterprise telemetry interface with prioritized data visualizations.',
      detailsPending: false,
    },
  },
  {
    id: 'playbook-studio',
    slug: 'playbook-studio',
    title: 'Playbook Studio',
    shortDescription:
      'An independent creative design studio website for brands, interfaces, and digital experiences.',
    status: 'live-site',
    statusLabel: 'Creative Studio Website',
    categories: ['Branding', 'Visual Identity', 'Web Design', 'UI/UX'],
    stack: ['Framer', 'Branding', 'Design Systems'],
    role: 'Studio identity, writing, and website architecture',
    cover: {
      kind: 'verified-asset',
      src: '/projects/playbook-studio-cover.png',
      alt: 'Playbook Studio — live studio website cover visual',
    },
    gallery: [
      {
        src: '/projects/playbook-studio-cover.png',
        alt: 'Playbook Studio website cover visual',
        caption: 'Asset from the live Playbook Studio website.',
      },
    ],
    caseStudy: {
      overview:
        'Playbook Studio is an independent creative design studio. The live site presents branding, UI/UX, digital content, product concepts, and website design as five studio disciplines, alongside self-initiated concepts such as AURELLE, ORBIT, and FORM / FIELD.',
      role: 'I shaped the studio identity and the public website.',
      designDecisions:
        'The public site uses a considered, editorial voice: strategy before style, craft in the details, and systems meant to be lived with. Template Hive is referenced there as a companion brand for templates and digital resources.',
      learning:
        'Building a studio site made the difference between a personal portfolio and a point-of-view for how design work should be offered.',
    },
    liveDemoUrl: 'https://playbook-studio-rho.vercel.app/',
    instagramUrl: 'https://www.instagram.com/playbook__studio/',
  },
  {
    id: 'template-hive',
    slug: 'template-hive',
    title: 'Template Hive',
    shortDescription:
      'A template design and branding project focused on thoughtfully designed digital resources and social media systems.',
    status: 'work-in-progress',
    statusLabel: 'Template Design Brand',
    categories: ['Branding', 'Visual Identity', 'Creative Experiments'],
    stack: ['Brand Identity', 'Social Design', 'Figma'],
    role: 'Brand strategy and template design system',
    cover: {
      kind: 'verified-asset',
      src: '/projects/template-hive-cover.jpg',
      alt: 'Template Hive — visual identity and specimen design templates',
    },
    gallery: [
      {
        src: '/projects/template-hive-cover.jpg',
        alt: 'Template Hive stationery and digital resource specimen cards',
        caption: 'Visual identity system and specimen templates for digital creators.',
      },
    ],
    caseStudy: {
      overview:
        'Template Hive is a creative brand for thoughtfully designed templates and digital resources, presented alongside Playbook Studio. Sales figures and customer counts are not published here.',
      role: 'I created the brand mark, color system, and layout templates.',
      detailsPending: false,
    },
    instagramUrl: 'https://www.instagram.com/the_templatehive/',
  },
  {
    id: 'authlab',
    slug: 'authlab',
    title: 'AuthLab',
    shortDescription:
      'An authentication laboratory prototype experimenting with zero-trust token verification and biometric cryptographic handshakes.',
    status: 'prototype',
    statusLabel: 'Authentication Lab Concept',
    categories: ['Software Projects', 'AI and Technology'],
    stack: ['TypeScript', 'Auth Protocols', 'Zero-Trust'],
    role: 'Architecture and security prototype exploration',
    cover: {
      kind: 'verified-asset',
      src: '/projects/authlab-cover.jpg',
      alt: 'AuthLab — zero-trust cryptographic authentication telemetry',
    },
    gallery: [
      {
        src: '/projects/authlab-cover.jpg',
        alt: 'AuthLab biometric telemetry dashboard',
        caption: 'Zero-trust cryptographic key handshake visualization.',
      },
    ],
    caseStudy: {
      overview:
        'AuthLab explores modern authentication models including webauthn tokens, biometric handshakes, and cryptographic verification pipelines.',
      role: 'I built interface prototypes for security telemetry and protocol verification.',
      detailsPending: false,
    },
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return { previous: undefined, next: undefined }
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}

export function getUsedCategories(): ProjectCategory[] {
  const set = new Set<ProjectCategory>()
  projects.forEach((project) => project.categories.forEach((category) => set.add(category)))
  return [...set]
}
