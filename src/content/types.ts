export type ProjectStatus =
  | 'prototype'
  | 'concept'
  | 'live-site'
  | 'work-in-progress'
  | 'case-study-in-progress'

export type ProjectCategory =
  | 'UI/UX'
  | 'Branding'
  | 'Visual Identity'
  | 'Web Design'
  | 'Interactive Experiences'
  | 'Software Projects'
  | 'AI and Technology'
  | 'Creative Experiments'

export interface CaseStudy {
  overview: string
  problem?: string
  role?: string
  process?: string
  designDecisions?: string
  challenges?: string
  learning?: string
  detailsPending?: boolean
}

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  status: ProjectStatus
  statusLabel: string
  categoryLabel?: string
  categories: ProjectCategory[]
  stack: string[]
  role: string
  cover: {
    kind: 'treatment' | 'verified-asset'
    src: string
    alt: string
  }
  gallery: Array<{ src: string; alt: string; caption?: string }>
  caseStudy: CaseStudy
  repositoryUrl?: string
  liveDemoUrl?: string
  instagramUrl?: string
}

export interface Credential {
  id: string
  title: string
  provider: string
  category:
    | 'Course certificate'
    | 'Hackathon participation'
    | 'Internship'
    | 'Internship recognition'
    | 'Educational achievement'
  date?: string
  period?: string
  description?: string
  verificationUrl?: string
  image?: string
}

export type SkillStage = 'practiced' | 'exploring' | 'learning'

export interface SkillGroup {
  id: string
  title: string
  stage: SkillStage
  items: string[]
  relatedProjects?: string[]
}
