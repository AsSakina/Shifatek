import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useContent } from '../lib/ContentContext'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function ContactForm() {
  const { contact, formFields, messageField } = useContent()
  const [status, setStatus] = useState<Status>('idle')

  /** Envoi vers la fonction serverless, qui relaie à Resend. */
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const [name, email, company] = formFields

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        {[name, email].map((field) => (
          <div className="field" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.id === 'email' ? 'email' : 'name'}
              required={field.required}
            />
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor={company.id}>{company.label}</label>
        <input id={company.id} name={company.id} type={company.type} autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor={messageField.id}>{messageField.label}</label>
        <textarea id={messageField.id} name={messageField.id} required />
      </div>
      {/* Champ piège : invisible pour l'humain, rempli par les robots. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? contact.sending : contact.submit}
        <ArrowRight aria-hidden="true" />
      </button>
      <p className={`form-note ${status === 'error' ? 'is-error' : ''}`.trim()} role="status">
        {status === 'sent' && (
          <>
            <Check aria-hidden="true" />
            {contact.sentNote}
          </>
        )}
        {status === 'error' && <>{contact.errorNote}</>}
      </p>
    </form>
  )
}

type Props = {
  eyebrow?: string
  title?: string
  text?: string
  /** Numéro d'index de section ; absent sur les pages produit. */
  index?: number
}

export function Contact({ eyebrow, title, text, index }: Props) {
  const { contact } = useContent()
  const heading = title ?? contact.title
  const kicker = eyebrow ?? contact.eyebrow
  const body = text ?? contact.text

  return (
    <section className="band contact-section" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-info">
          {index ? (
            <SectionLabel index={index}>{kicker}</SectionLabel>
          ) : (
            <span className="eyebrow">{kicker}</span>
          )}
          <h2>{heading}</h2>
          <p>{body}</p>
          <div className="contact-meta">
            <div>
              <small>{contact.locationLabel}</small>
              <span>{contact.location}</span>
            </div>
            <div>
              <small>{contact.emailLabel}</small>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </Reveal>
        <Reveal index={1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
