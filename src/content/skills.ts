import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'product-design',
    title: 'UI/UX and product design',
    stage: 'practiced',
    items: ['Interface design', 'Website design', 'Figma prototyping', 'Design systems', 'Information architecture', 'User flows'],
    relatedProjects: ['playbook-studio', 'skillbridgeai', 'bhoomi-x', 'assetflow'],
  },
  {
    id: 'ai-tools',
    title: 'AI tools and assistants',
    stage: 'practiced',
    items: ['Cursor', 'Google Antigravity', 'ChatGPT', 'Claude', 'Google Gemini', 'Perplexity', 'NotebookLM', 'v0'],
    relatedProjects: ['skillbridgeai'],
  },
  {
    id: 'frontend',
    title: 'Frontend technologies',
    stage: 'practiced',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS Grid', 'JavaScript', 'Responsive design', 'Web accessibility'],
    relatedProjects: ['assetflow', 'playbook-studio', 'skillbridgeai'],
  },
  {
    id: 'programming',
    title: 'Programming languages',
    stage: 'learning',
    items: ['Python', 'Java', 'TypeScript', 'SQL', 'C/C++ basics'],
    relatedProjects: ['medi-vision'],
  },
  {
    id: 'backend',
    title: 'Databases and backend',
    stage: 'exploring',
    items: ['Supabase', 'PostgreSQL', 'Firebase', 'REST APIs', 'Auth protocols', 'Database modeling'],
    relatedProjects: ['assetflow', 'authlab'],
  },
  {
    id: 'animation-3d',
    title: '3D and animation',
    stage: 'exploring',
    items: ['GSAP', 'Three.js', 'React Three Fiber', 'Motion for React', 'Spline', 'Lenis smooth scroll'],
    relatedProjects: ['bhoomi-x'],
  },
  {
    id: 'workflow',
    title: 'Development workflow',
    stage: 'practiced',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify', 'Vite', 'Workflow automation'],
    relatedProjects: ['playbook-studio'],
  },
  {
    id: 'creative-business',
    title: 'Creative business and digital products',
    stage: 'practiced',
    items: ['Brand strategy', 'Identity systems', 'Digital template design', 'Social media systems', 'Art direction'],
    relatedProjects: ['playbook-studio', 'template-hive'],
  },
]

export const exploredTools = [
  'Supabase',
  'Firebase',
  'Framer',
  'Webflow',
  'WordPress',
  'GSAP',
  'Three.js',
  'Bolt',
  'Lovable',
  'Dyad',
  'Google Stitch',
  'GitHub Copilot',
]

export const stageCopy: Record<SkillGroup['stage'], string> = {
  practiced: 'Used regularly in current work',
  exploring: 'Applied in projects while still deepening',
  learning: 'Foundational study in progress',
}
