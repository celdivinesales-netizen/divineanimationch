import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SERVICES, PROCESS, type Service } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CtaBand, PageHero, SectionHeading } from '@/components/sections'

export function ServiceDetail({
  service,
  eyebrow,
  heroTitle,
  benefits,
}: {
  service: Service
  eyebrow: string
  heroTitle: string
  benefits: { title: string; text: string }[]
}) {
  const others = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero eyebrow={eyebrow} title={heroTitle} description={service.description} crumb={service.title} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
            <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
            <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange text-white">
              <service.Icon className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-navy">{service.items.length}+ Specialised Services</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="What We Offer" title={service.title} align="left" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 40} className="flex items-start gap-3 rounded-xl border bg-card p-3.5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-purple" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">{item}</span>
              </Reveal>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppButton size="lg" message={service.whatsappMessage}>
              Chat With Us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Your Benefits" title="Why Businesses Choose This Service" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="rounded-2xl bg-card p-7 shadow-sm">
                <span className="font-heading text-3xl font-extrabold text-gradient">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Simple 4-Step Process" />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 80} className="relative rounded-2xl border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-brand-orange">
                {p.step}
              </span>
              <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Explore More" title="Our Other Services" tone="dark" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-orange/60 hover:bg-white/10"
              >
                <s.Icon className="size-8 text-brand-orange" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand message={service.whatsappMessage} />
    </>
  )
}
