import type { Metadata } from 'next'
import { PageHero, CtaBand } from '@/components/sections'
import { IndustriesGrid, WhyChoose } from '@/components/industries-why'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Digital marketing and AI advertising for retail shops, wholesalers, textiles, jewellery, real estate, restaurants, education, healthcare, construction and manufacturing.',
  alternates: { canonical: '/industries' },
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Marketing Built for Your Industry"
        description="Every business is different. We tailor our campaigns, creatives and websites to the customers and buying habits of your industry."
        crumb="Industries We Serve"
      />
      <IndustriesGrid showHeading={false} />
      <WhyChoose />
      <CtaBand title="Don't See Your Industry?" text="We work with all kinds of businesses. Message us and tell us what you do." />
    </>
  )
}
