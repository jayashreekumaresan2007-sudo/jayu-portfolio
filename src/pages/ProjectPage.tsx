import { Link, useParams } from 'react-router-dom'
import { ProjectCaseStudy } from '../components/projects/ProjectCaseStudy'
import { Seo } from '../components/ui/Seo'
import { getProject } from '../content/projects'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <main id="main" className="px-6 pb-24 pt-32">
        <Seo title="Project not found" description="This project route does not exist." path="/work" />
        <p className="eyebrow">Missing specimen</p>
        <h1 className="display mt-4 text-5xl">This project is not in the index.</h1>
        <Link to="/work" className="mt-8 inline-block border-b border-olive pb-1">
          Back to work
        </Link>
      </main>
    )
  }

  return (
    <main id="main">
      <Seo title={project.title} description={project.shortDescription} path={`/work/${project.slug}`} />
      <ProjectCaseStudy project={project} />
    </main>
  )
}
