'use client'

import { useState } from 'react'
import { WhatsAppIcon } from '@/components/brand-icons'
import { SERVICE_OPTIONS, whatsappLink } from '@/lib/site'

const fieldClass =
  'w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/70 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/25 focus:outline-none'

export function EnquiryForm() {
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim().slice(0, 500)

    const name = get('name')
    const business = get('business')
    const mobile = get('mobile').replace(/[^\d+\s-]/g, '')
    const service = get('service')
    const message = get('message')

    if (!name || !mobile || !service) {
      setError('Please fill in your name, mobile number and required service.')
      return
    }
    if (mobile.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid mobile number.')
      return
    }
    setError(null)

    const text = [
      'New Enquiry - Divine Animation Chennai',
      '',
      `Name: ${name}`,
      `Business: ${business || '-'}`,
      `Mobile: ${mobile}`,
      `Service: ${service}`,
      `Message: ${message || '-'}`,
    ].join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Customer Name <span className="text-brand-orange">*</span>
        </label>
        <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="business" className="text-sm font-semibold text-navy">
          Business Name
        </label>
        <input id="business" name="business" autoComplete="organization" placeholder="Your shop or company" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="mobile" className="text-sm font-semibold text-navy">
          Mobile Number <span className="text-brand-orange">*</span>
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          placeholder="e.g. 98765 43210"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-semibold text-navy">
          Required Service <span className="text-brand-orange">*</span>
        </label>
        <select id="service" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirement"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <p role="alert" aria-live="polite" className="min-h-5 text-sm font-medium text-destructive">
          {error}
        </p>
        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/30 transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
        >
          <WhatsAppIcon className="size-5" />
          Send Enquiry on WhatsApp
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Submitting opens WhatsApp with your enquiry details pre-filled. Just tap send.
        </p>
      </div>
    </form>
  )
}
