import type { Metadata } from 'next'
import { PageHero } from '@/components/sections'
import { ContactSection } from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Divine Animation Chennai on WhatsApp at +91 90925 58217 for digital marketing, AI ads, website development and computer & mobile repairs.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Grow Your Business Together"
        description="Chat with us on WhatsApp or send an enquiry below. Our team will respond quickly with a free consultation."
        crumb="Contact Us"
      />
      <ContactSection />
    </>
  )
}
