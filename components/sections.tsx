import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-sm font-bold tracking-[0.2em] text-brand-orange uppercase">{eyebrow}</p>
      <h2
        className={cn(
          'mt-3 text-3xl leading-tight font-extrabold tracking-tight md:text-4xl',
          tone === 'dark' ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-pretty leading-relaxed', tone === 'dark' ? 'text-white/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string
  title: string
  description: string
  crumb: string
}) {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-white/60">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4" />
            </li>
            <li aria-current="page" className="text-brand-orange">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="text-sm font-bold tracking-[0.2em] text-brand-orange uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/75">{description}</p>
      </div>
    </section>
  )
}

export function CtaBand({
  title = 'Ready to Grow Your Business?',
  text = 'Get a free consultation and a custom plan for your business today. Just send us a message on WhatsApp.',
  message,
}: {
  title?: string
  text?: string
  message?: string
}) {
  return (
    <section className="px-4 py-16 md:py-20 lg:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple via-navy-light to-navy p-8 text-center shadow-2xl md:p-14">
        <div aria-hidden="true" className="absolute -top-20 -right-20 size-64 rounded-full bg-brand-orange/30 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-16 size-64 rounded-full bg-brand-purple/40 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/80">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton size="lg" message={message}>
              Get a Free Enquiry
            </WhatsAppButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Contact Our Team
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
