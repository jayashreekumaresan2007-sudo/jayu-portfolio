import { Helmet } from 'react-helmet-async'
import { site } from '../../content/site'

interface SeoProps {
  title: string
  description: string
  path?: string
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const url = `${site.siteUrl.replace(/\/$/, '')}${path}`
  const fullTitle = `${title} · ${site.mark}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={site.portrait.src} />
    </Helmet>
  )
}
