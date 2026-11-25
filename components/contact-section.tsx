import { Phone, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/site'
import { WhatsAppIcon } from '@/components/brand-icons'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { EnquiryForm } from '@/components/enquiry-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/sections'

export function ContactSection() {
  return (
    <section id="enquiry" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="DIVINE ANIMATION CHENNAI"
            description="Tell us what you need and we will get back to you on WhatsApp with a free consultation and a plan tailored to your business."
            align="left"
          />
          <Reveal className="mt-8 space-y-4">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-whatsapp"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-whatsapp text-white">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">WhatsApp / Contact Number</span>
                <span className="block font-heading text-xl font-bold text-navy">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-brand-purple"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-purple text-white">
                <Phone className="size-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Call Us Directly</span>
                <span className="block font-heading text-xl font-bold text-navy">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border bg-card p-5">
                <MapPin className="size-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <address className="text-sm font-medium text-navy not-italic">{SITE.address}</address>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border bg-card p-5">
                <Clock className="size-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">Quick replies on WhatsApp</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <WhatsAppButton size="lg">Chat With Us on WhatsApp</WhatsAppButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="rounded-3xl border bg-card p-6 shadow-xl shadow-navy/5 md:p-10">
          <h3 className="text-2xl font-extrabold text-navy">Get a Free Enquiry</h3>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">Fill in the details below and send your enquiry instantly.</p>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}
