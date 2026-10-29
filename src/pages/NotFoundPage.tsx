import { ButtonLink } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'

export function NotFoundPage() {
  return (
    <main id="main" className="flex min-h-[70vh] flex-col justify-center px-6 pt-24">
      <Seo title="Not found" description="This page is not in the Jayu atelier." path="/404" />
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[clamp(3rem,10vw,7rem)] leading-[0.9]">Off the plate.</h1>
      <p className="mt-6 max-w-md text-silver">This route is not part of the index. Return home or open the work gallery.</p>
      <div className="mt-10 flex flex-wrap gap-6">
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/work" variant="line">
          Work
        </ButtonLink>
      </div>
    </main>
  )
}
