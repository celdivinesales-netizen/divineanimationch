import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/sections'

const points = [
  'Affordable packages built for local businesses',
  'Creative team for ads, videos, posters and websites',
  'Hands-on support from planning to results',
  'Technology repair services under the same roof',
]

const stats = [
  { value: '4', label: 'Core Service Areas' },
  { value: '40+', label: 'Specialised Solutions' },
  { value: '12+', label: 'Industries Served' },
]

export function AboutIntro({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
            <Image
              src="/images/about.png"
              alt="Divine Animation Chennai consultant meeting a local shop owner to plan a marketing campaign"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <dl className="absolute -bottom-8 left-1/2 grid w-[90%] -translate-x-1/2 grid-cols-3 divide-x rounded-2xl bg-white p-4 shadow-xl">
            {stats.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-extrabold text-gradient md:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-[11px] leading-tight font-medium text-muted-foreground md:text-xs">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="A Local Partner Focused on Your Growth"
            description="Divine Animation Chennai helps retailers, wholesalers and service providers get noticed online. We combine smart Meta advertising, AI-powered creatives and professional websites with dependable tech support, giving you one trusted team for every digital need."
            align="left"
          />
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-navy">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-whatsapp" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          {showLink && (
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-purple"
            >
              More About Us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
