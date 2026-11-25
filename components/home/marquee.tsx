import { Sparkle } from 'lucide-react'

const words = [
  'Facebook Ads',
  'Instagram Ads',
  'WhatsApp Marketing',
  'AI Presenter Videos',
  'AI Voice-overs',
  'Social Media Posters',
  'Carousels',
  'Business Websites',
  'Landing Pages',
  'Laptop Repair',
  'Mobile Repair',
]

export function Marquee() {
  return (
    <div className="overflow-hidden bg-brand-orange py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-8">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-heading text-sm font-bold whitespace-nowrap text-navy uppercase md:text-base">
            {w}
            <Sparkle className="size-4" />
          </span>
        ))}
      </div>
    </div>
  )
}
