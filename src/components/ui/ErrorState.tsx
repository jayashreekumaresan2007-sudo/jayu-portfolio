import { ButtonLink } from './Button'

export function ErrorState({
  title = 'This view could not be loaded',
  message = 'The rest of the site remains available.',
}: {
  title?: string
  message?: string
}) {
  return (
    <div role="alert" className="space-y-4 py-10">
      <p className="eyebrow">Fallback</p>
      <h2 className="display text-3xl text-ivory">{title}</h2>
      <p className="text-silver">{message}</p>
      <ButtonLink to="/" variant="line">
        Return home
      </ButtonLink>
    </div>
  )
}
