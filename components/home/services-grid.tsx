import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/sections'

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Main Services"
          title="Everything Your Business Needs to Grow Online"
          description="From scroll-stopping ads to reliable tech support, we bring all your digital needs under one roof."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <span className="absolute bottom-4 left-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange text-white shadow-lg">
                    <s.Icon className="size-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.items.slice(0, 6).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-navy/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-purple" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-brand-purple hover:text-brand-orange"
                  >
                    View all {s.items.length} services
                    <span className="sr-only"> for {s.title}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
