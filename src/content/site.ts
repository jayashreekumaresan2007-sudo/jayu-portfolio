export const site = {
  name: 'Jayashree K',
  displayName: 'Jayu',
  mark: 'JAYU®',
  atelier: 'The Immersive Digital Atelier',
  headline: 'Creative Technologist · UI/UX Designer · Aspiring Software Engineer',
  intro:
    'I explore the intersection of design, technology, and interactive experiences — turning ideas into thoughtful digital products.',
  location: 'Coimbatore, Tamil Nadu, India',
  education: {
    program: 'Integrated Master of Technology in Computer Science and Engineering',
    institution: 'Sri Krishna College of Engineering and Technology (SKCET)',
    location: 'Coimbatore, Tamil Nadu, India',
    period: '2025–2030',
    cgpa: '8.45/10',
  },
  portrait: {
    src: '/images/jayashree-professional-new.jpg',
    newSrc: '/images/jayashree-professional-new.jpg',
    newWebpSrc: '/images/jayashree-professional-new.webp',
    originalSrc: '/images/jayashree-professional.jpg',
    enhancedSrc: '/images/jayashree-portrait-enhanced.jpg',
    fullSrc: '/images/jayashree-professional-full.jpg',
    atelierSrc: '/images/jayashree-hero-atelier.jpg',
    alt: 'Jayashree Kumaresan in professional dark business suit and white shirt',
  },
  email: 'jayashreekumaresan2007@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/jayashree-kumaresan-753b60368',
    github: 'https://github.com/jayashreekumaresan2007-sudo',
    playbookStudio: 'https://playbook-studio-rho.vercel.app/',
    templateHive: 'https://www.instagram.com/the_templatehive/',
    playbookInstagram: 'https://www.instagram.com/playbook__studio/',
  },
  get siteUrl() {
    return import.meta.env.VITE_SITE_URL || 'https://example.com'
  },
} as const

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/toolkit', label: 'Toolkit' },
  { to: '/credentials', label: 'Credentials' },
  { to: '/contact', label: 'Contact' },
] as const
