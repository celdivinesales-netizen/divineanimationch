import type { Metadata } from 'next'
import { SERVICES } from '@/lib/content'
import { ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: 'Computer, Laptop & Mobile Repair in Chennai',
  description:
    'Desktop, laptop and mobile phone repair, hardware troubleshooting, software installation, computer maintenance and technical support in Chennai.',
  alternates: { canonical: '/computer-mobile-repairs' },
}

export default function RepairsPage() {
  return (
    <ServiceDetail
      service={SERVICES[3]}
      eyebrow="Computer & Mobile Repairs"
      heroTitle="Fast, Reliable Tech Repairs & Support"
      benefits={[
        { title: 'Expert Diagnosis', text: 'We find the real problem quickly so you only pay for what actually needs fixing.' },
        { title: 'Honest Pricing', text: 'Clear quotes before any work begins. No surprises when you collect your device.' },
        { title: 'Business Support', text: 'Ongoing maintenance and technical support to keep your shop or office running.' },
      ]}
    />
  )
}
