import type { Metadata } from 'next'
import { SERVICES } from '@/lib/content'
import { ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: 'Website Development in Chennai',
  description:
    'Mobile-friendly business, retail, wholesale and service websites, landing pages and WhatsApp-integrated websites with ongoing maintenance.',
  alternates: { canonical: '/website-development' },
}

export default function WebsiteDevelopmentPage() {
  return (
    <ServiceDetail
      service={SERVICES[2]}
      eyebrow="Website Development"
      heroTitle="Websites That Turn Visitors Into Customers"
      benefits={[
        { title: 'Mobile-First Design', text: 'Looks great and loads fast on every phone, tablet and desktop your customers use.' },
        { title: 'WhatsApp Integrated', text: 'One-tap WhatsApp buttons and enquiry forms so customers contact you instantly.' },
        { title: 'Search-Friendly', text: 'Built with SEO best practices so local customers can find you on Google.' },
      ]}
    />
  )
}
