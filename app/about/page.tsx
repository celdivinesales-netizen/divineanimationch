import type { Metadata } from 'next'
import { Target, Eye, HeartHandshake } from 'lucide-react'
import { PageHero, CtaBand, SectionHeading } from '@/components/sections'
import { AboutIntro } from '@/components/about-intro'
import { WhyChoose } from '@/components/industries-why'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Divine Animation Chennai, a local digital marketing, AI advertising, website development and tech repair partner for retailers, wholesalers and service businesses.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    Icon: Target,
    title: 'Our Mission',
    text: 'To make powerful digital marketing and technology affordable and accessible for every local business in Chennai and beyond.',
  },
  {
    Icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted one-stop growth partner for retailers, wholesalers and service providers across Tamil Nadu.',
  },
  {
    Icon: HeartHandshake,
    title: 'Our Promise',
    text: 'Honest advice, creative work you are proud to share, and responsive support whenever you need us.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Creative Marketing & Technology for Growing Businesses"
        description="We are a Chennai-based team of marketers, designers, developers and technicians helping local businesses attract more customers and grow their sales."
        crumb="About Us"
      />
      <AboutIntro showLink={false} />
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Promise" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="rounded-2xl bg-card p-8 shadow-sm">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-orange text-white">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <WhyChoose />
      <CtaBand />
    </>
  )
}
