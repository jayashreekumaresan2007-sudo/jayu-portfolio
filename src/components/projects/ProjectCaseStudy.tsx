import { Link } from 'react-router-dom'
import { getAdjacentProjects } from '../../content/projects'
import type { Project } from '../../content/types'
import { externalRel } from '../../lib/links'
import { ButtonLink } from '../ui/Button'

function Block({ title, body }: { title: string; body?: string }) {
  if (!body) return null
  return (
    <section className="space-y-3">
      <h2 className="eyebrow">{title}</h2>
      <p className="max-w-3xl text-base leading-relaxed text-silver">{body}</p>
    </section>
  )
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug)

  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-28">
      <p className="eyebrow">{project.statusLabel}</p>
      <h1 className="display mt-4 text-[clamp(3rem,8vw,6.5rem)] leading-[0.9]">{project.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-silver">{project.shortDescription}</p>
      <dl className="mt-10 grid gap-6 text-sm md:grid-cols-3">
        <div>
          <dt className="eyebrow">Role</dt>
          <dd className="mt-2 text-ivory">{project.role}</dd>
        </div>
        <div>
          <dt className="eyebrow">Categories</dt>
          <dd className="mt-2 text-ivory">{project.categories.join(' · ')}</dd>
        </div>
        <div>
          <dt className="eyebrow">Stack</dt>
          <dd className="mt-2 text-ivory">
            {project.stack.length > 0 ? project.stack.join(' · ') : 'To be confirmed'}
          </dd>
        </div>
      </dl>
      <figure className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#161614]">
        <img src={project.cover.src} alt={project.cover.alt} className="w-full object-cover" />
        {project.gallery[0]?.caption ? (
          <figcaption className="border-t border-white/10 px-5 py-3 text-xs uppercase tracking-[0.16em] text-silver/75">
            {project.gallery[0].caption}
          </figcaption>
        ) : null}
      </figure>
      {project.cover.kind === 'treatment' ? (
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-silver">
          Visual treatment for this case — not a product screenshot.
        </p>
      ) : null}

      <div className="mt-16 space-y-12">
        <Block title="Overview" body={project.caseStudy.overview} />
        {project.caseStudy.detailsPending ? (
          <p className="max-w-2xl border-l border-olive pl-5 text-silver">
            A fuller case study is in progress. Only verified details are shown here.
          </p>
        ) : null}
        <Block title="Problem / objective" body={project.caseStudy.problem} />
        <Block title="Process" body={project.caseStudy.process} />
        <Block title="Design decisions" body={project.caseStudy.designDecisions} />
        <Block title="Challenges" body={project.caseStudy.challenges} />
        <Block title="Learning" body={project.caseStudy.learning} />
      </div>

      {project.gallery.filter((img) => img.src !== project.cover.src).length > 0 ? (
        <div className="mt-16 grid gap-6">
          {project.gallery
            .filter((img) => img.src !== project.cover.src)
            .map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-xl border border-white/10">
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full object-cover" />
                {image.caption ? (
                  <figcaption className="border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.16em] text-silver/75">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
        </div>
      ) : null}

      <div className="mt-12 flex flex-wrap gap-4">
        {project.liveDemoUrl ? (
          <ButtonLink to={project.liveDemoUrl} external variant="solid">
            Live website
          </ButtonLink>
        ) : null}
        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel={externalRel}
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm tracking-[0.08em]"
          >
            Repository
          </a>
        ) : null}
        {project.instagramUrl ? (
          <a
            href={project.instagramUrl}
            target="_blank"
            rel={externalRel}
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm tracking-[0.08em]"
          >
            Instagram
          </a>
        ) : null}
      </div>

      <nav aria-label="Adjacent projects" className="mt-20 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
        {previous ? (
          <Link to={`/work/${previous.slug}`} className="text-silver">
            Previous
            <span className="mt-2 block display text-3xl text-ivory">{previous.title}</span>
          </Link>
        ) : null}
        {next ? (
          <Link to={`/work/${next.slug}`} className="text-right text-silver md:justify-self-end">
            Next
            <span className="mt-2 block display text-3xl text-ivory">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </article>
  )
}
