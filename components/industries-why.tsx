import { INDUSTRIES, WHY_CHOOSE } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/sections'

export function IndustriesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Helping Every Kind of Local Business Grow"
            description="Whether you run a single shop or a large wholesale operation, we create marketing that speaks to your customers."
          />
        )}
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map(({ name, Icon, blurb }, i) => (
            <Reveal
              as="li"
              key={name}
              delay={(i % 4) * 60}
              className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-lg md:p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-purple group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-navy md:text-base">{name}</h3>
              <p className="mt-1.5 hidden text-sm leading-relaxed text-muted-foreground sm:block">{blurb}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhyChoose() {
  return (
    <section className="bg-hero-glow py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Why Choose <span className="text-gradient">Divine Animation Chennai?</span>
            </>
          }
          description="One trusted local partner for marketing, creatives, websites and technology — so you can focus on running your business."
          tone="dark"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map(({ title, Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 3) * 80}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-brand-orange/50 hover:bg-white/10"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-navy">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="font-semibold text-white">{title}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
