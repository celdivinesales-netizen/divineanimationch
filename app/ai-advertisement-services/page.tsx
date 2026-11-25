import type { Metadata } from 'next'
import { SERVICES } from '@/lib/content'
import { ServiceDetail } from '@/components/service-detail'

export const metadata: Metadata = {
  title: 'AI Advertisement Videos, Posters & Creatives',
  description:
    'AI advertisement videos, AI presenter and voice-over videos, social media posters, carousels and festival offer creatives for Facebook and Instagram.',
  alternates: { canonical: '/ai-advertisement-services' },
}

export default function AiAdvertisementPage() {
  return (
    <ServiceDetail
      service={SERVICES[1]}
      eyebrow="AI Advertisement Services"
      heroTitle="AI-Powered Creatives That Stop the Scroll"
      benefits={[
        { title: 'Professional Look, Lower Cost', text: 'AI presenters and voice-overs deliver studio-quality ads without expensive shoots.' },
        { title: 'Fast Turnaround', text: 'Get festival offers, product launches and promotions ready in time for the moment.' },
        { title: 'Made for Social Media', text: 'Every video, poster and carousel is sized and designed for Facebook and Instagram.' },
      ]}
    />
  )
}
