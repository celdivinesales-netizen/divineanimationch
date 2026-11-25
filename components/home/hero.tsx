import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Star } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Reveal } from '@/components/reveal'

const highlights = ['Meta Ads', 'AI Videos', 'Posters & Carousels', 'Websites', 'Tech Repairs']

export function HomeHero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pb-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-orange uppercase">
            <span className="size-2 rounded-full bg-brand-orange" aria-hidden="true" />
            Digital Growth Partner in Chennai
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            DIVINE ANIMATION <span className="text-gradient">CHENNAI</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-white/90 md:text-2xl">
            Your Complete Digital Marketing &amp; Technology Solutions Partner.
          </p>
          <p className="mt-3 font-heading text-lg font-bold text-brand-orange">
            Promote Your Business. Reach More Customers. Grow Your Sales!
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-pretty text-white/70">
            We provide affordable digital marketing, AI advertising videos, creative poster designs, website development,
            and technology support for local businesses, retailers, wholesalers, and service providers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton size="lg" message="Hello Divine Animation Chennai, I want to get started with promoting my business.">
              GET STARTED ON WHATSAPP
            </WhatsAppButton>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              EXPLORE OUR SERVICES
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              CONTACT US
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Service highlights">
            {highlights.map((h) => (
              <li key={h} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-brand-purple/30 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/hero.png"
              alt="Divine Animation Chennai creative team designing social media advertisements"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
          </div>

          <div className="animate-float absolute top-8 -left-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-whatsapp/15 text-whatsapp">
              <TrendingUp className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-heading text-lg font-extrabold text-navy">More Enquiries</span>
              <span className="block text-xs text-muted-foreground">via Meta & WhatsApp Ads</span>
            </span>
          </div>

          <div
            className="animate-float absolute -right-2 bottom-8 rounded-2xl bg-navy-light/95 p-4 text-white shadow-xl backdrop-blur sm:-right-6"
            style={{ animationDelay: '1.5s' }}
          >
            <span className="flex gap-0.5 text-brand-orange" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="mt-1 block text-sm font-semibold">Trusted by Local Businesses</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
