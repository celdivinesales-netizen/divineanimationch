import type { Metadata } from 'next'
import { SERVICES } from '@/lib/content'
import { ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: 'Digital Marketing & Meta Advertising in Chennai',
  description:
    'Facebook, Instagram and WhatsApp marketing, Meta ads campaign management and lead generation for retail, wholesale and local businesses in Chennai.',
  alternates: { canonical: '/digital-marketing' },
}

export default function DigitalMarketingPage() {
  return (
    <ServiceDetail
      service={SERVICES[0]}
      eyebrow="Digital Marketing"
      heroTitle="Meta Advertising That Brings Real Customers"
      benefits={[
        { title: 'Reach the Right People', text: 'Target customers by location, age and interests so your ads reach buyers near your shop.' },
        { title: 'More Leads & Enquiries', text: 'Campaigns designed to bring calls, WhatsApp messages and walk-ins, not just likes.' },
        { title: 'Budget-Friendly Plans', text: 'Start small, see results, then scale. Transparent pricing with no hidden costs.' },
      ]}
    />
  )
}
