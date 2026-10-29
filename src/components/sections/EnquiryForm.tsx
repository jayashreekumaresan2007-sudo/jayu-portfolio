import { useState, type FormEvent } from 'react'
import { site } from '../../content/site'
import { Button } from '../ui/Button'

const projectTypes = [
  'UI/UX Design',
  'Branding',
  'Website Design',
  'Development',
  'Collaboration',
  'Internship / Professional Opportunity',
  'Other',
] as const

interface Fields {
  name: string
  email: string
  projectType: string
  message: string
}

const empty: Fields = { name: '', email: '', projectType: '', message: '' }

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function EnquiryForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'mailto'>('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  function validate(next: Fields) {
    const result: Partial<Fields> = {}
    if (!next.name.trim()) result.name = 'Please enter your name.'
    if (!next.email.trim()) result.email = 'Please enter an email address.'
    else if (!isEmail(next.email)) result.email = 'Enter a valid email address.'
    if (!next.projectType) result.projectType = 'Choose a project type.'
    if (!next.message.trim()) result.message = 'Please include a short message.'
    return result
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!endpoint) {
      const body = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Project type: ${values.projectType}`,
        '',
        values.message,
      ].join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio enquiry — ${values.projectType}`)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('loading')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="eyebrow">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-ivory outline-none focus:border-olive"
        />
        {errors.name ? <p className="mt-2 text-sm text-[#d9a08f]">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-ivory outline-none focus:border-olive"
        />
        {errors.email ? <p className="mt-2 text-sm text-[#d9a08f]">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="projectType" className="eyebrow">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={values.projectType}
          onChange={(event) => setValues((current) => ({ ...current, projectType: event.target.value }))}
          className="mt-2 w-full border-b border-white/20 bg-charcoal py-3 text-ivory outline-none focus:border-olive"
        >
          <option value="">Select one</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? <p className="mt-2 text-sm text-[#d9a08f]">{errors.projectType}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-ivory outline-none focus:border-olive"
        />
        {errors.message ? <p className="mt-2 text-sm text-[#d9a08f]">{errors.message}</p> : null}
      </div>
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send enquiry'}
      </Button>
      {status === 'mailto' ? (
        <p role="status" className="text-sm text-silver">
          No form server is configured yet. Your email app should open with a prepared message to{' '}
          {site.email}. If it does not, write directly to that address.
        </p>
      ) : null}
      {status === 'success' ? (
        <p role="status" className="text-sm text-olive">
          Message sent.
        </p>
      ) : null}
      {status === 'error' ? (
        <p role="alert" className="text-sm text-[#d9a08f]">
          The form endpoint could not be reached. Email {site.email} instead.
        </p>
      ) : null}
    </form>
  )
}
