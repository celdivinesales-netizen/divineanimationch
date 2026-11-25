import {
  Megaphone,
  Clapperboard,
  MonitorSmartphone,
  Wrench,
  Store,
  Warehouse,
  Shirt,
  Gem,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Stethoscope,
  HardHat,
  Factory,
  Handshake,
  Briefcase,
  BadgeIndianRupee,
  Sparkles,
  MapPin,
  MessagesSquare,
  Images,
  LifeBuoy,
  Globe,
  Cpu,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  href: string
  title: string
  short: string
  description: string
  image: string
  imageAlt: string
  Icon: LucideIcon
  items: string[]
  whatsappMessage: string
}

export const SERVICES: Service[] = [
  {
    slug: 'digital-marketing',
    href: '/digital-marketing',
    title: 'Digital Marketing & Meta Advertising',
    short: 'Facebook, Instagram & WhatsApp campaigns that bring real customers to your shop.',
    description:
      'We plan, design and manage targeted Meta ad campaigns that put your business in front of the right local customers. From awareness to enquiries, every rupee is spent with purpose.',
    image: '/images/digital-marketing.png',
    imageAlt: 'Smartphone showing a social media ad campaign dashboard with rising engagement',
    Icon: Megaphone,
    items: [
      'Facebook Advertising',
      'Instagram Advertising',
      'WhatsApp Marketing',
      'Meta Ads Campaign Management',
      'Local Business Advertising',
      'Retail Business Promotions',
      'Wholesale Business Promotions',
      'Customer Lead Generation',
      'Business Awareness Campaigns',
      'Targeted Advertising Campaigns',
    ],
    whatsappMessage: 'Hello, I am interested in Digital Marketing & Meta Advertising for my business.',
  },
  {
    slug: 'ai-advertisement-services',
    href: '/ai-advertisement-services',
    title: 'AI Advertisement & Creative Services',
    short: 'Eye-catching AI videos, presenters, voice-overs, posters and carousels.',
    description:
      'Stand out in every feed with scroll-stopping AI-powered creatives. We produce professional promotional videos, AI presenters and striking poster designs at a fraction of traditional production costs.',
    image: '/images/ai-video.png',
    imageAlt: 'Video editing workstation showing an AI presenter advertisement and poster designs',
    Icon: Clapperboard,
    items: [
      'AI Advertisement Videos',
      'AI Presenter Videos',
      'AI Voice-over Videos',
      'Business Promotional Videos',
      'Product Advertisement Videos',
      'Service Promotion Videos',
      'AI Advertising Posters',
      'Social Media Posters',
      'Promotional Carousels',
      'Facebook & Instagram Creatives',
      'Festival and Special Offer Advertisements',
    ],
    whatsappMessage: 'Hello, I would like AI Advertisement Videos / Posters for my business.',
  },
  {
    slug: 'website-development',
    href: '/website-development',
    title: 'Website Development',
    short: 'Fast, mobile-friendly websites with WhatsApp integration built in.',
    description:
      'Get a professional website that builds trust and converts visitors into enquiries. Our websites are fast, mobile-first, search-friendly and connected directly to your WhatsApp.',
    image: '/images/web-development.png',
    imageAlt: 'Laptop, tablet and smartphone displaying the same responsive business website',
    Icon: MonitorSmartphone,
    items: [
      'Business Website Creation',
      'Retail & Wholesale Websites',
      'Service Business Websites',
      'Product Display Websites',
      'Landing Page Development',
      'WhatsApp Integrated Websites',
      'Mobile-Friendly Website Design',
      'Website Maintenance',
    ],
    whatsappMessage: 'Hello, I need a website for my business. Please share details.',
  },
  {
    slug: 'computer-mobile-repairs',
    href: '/computer-mobile-repairs',
    title: 'Computer & Mobile Repair Services',
    short: 'Reliable desktop, laptop and mobile repairs with expert technical support.',
    description:
      'Keep your business running without interruption. Our experienced technicians diagnose and repair desktops, laptops and mobile phones quickly, with honest pricing and dependable support.',
    image: '/images/repair.png',
    imageAlt: 'Technician repairing a laptop motherboard with a disassembled smartphone nearby',
    Icon: Wrench,
    items: [
      'Desktop Computer Repair',
      'Laptop Repair',
      'Mobile Phone Repair',
      'Hardware Troubleshooting',
      'Software Installation',
      'Computer Maintenance',
      'Technical Support',
    ],
    whatsappMessage: 'Hello, I need help with a Computer / Laptop / Mobile repair.',
  },
]

export const INDUSTRIES: { name: string; Icon: LucideIcon; blurb: string }[] = [
  { name: 'Retail Shops', Icon: Store, blurb: 'Drive footfall with local offers and festive promotions.' },
  { name: 'Wholesale Businesses', Icon: Warehouse, blurb: 'Reach retailers and bulk buyers across the region.' },
  { name: 'Textile & Garments', Icon: Shirt, blurb: 'Showcase new collections with reels and carousels.' },
  { name: 'Jewellery Shops', Icon: Gem, blurb: 'Premium creatives for launches, gold rates and offers.' },
  { name: 'Real Estate', Icon: Building2, blurb: 'Generate qualified site-visit leads for projects.' },
  { name: 'Restaurants & Hotels', Icon: UtensilsCrossed, blurb: 'Fill tables and rooms with mouth-watering ads.' },
  { name: 'Educational Institutions', Icon: GraduationCap, blurb: 'Boost admissions with targeted campaigns.' },
  { name: 'Hospitals & Clinics', Icon: Stethoscope, blurb: 'Build trust and patient awareness responsibly.' },
  { name: 'Construction Companies', Icon: HardHat, blurb: 'Present your projects and win new contracts.' },
  { name: 'Manufacturing Industries', Icon: Factory, blurb: 'Promote products to dealers and B2B buyers.' },
  { name: 'Service Providers', Icon: Handshake, blurb: 'Get more bookings and enquiries every week.' },
  { name: 'Small & Medium Businesses', Icon: Briefcase, blurb: 'Complete digital growth on a sensible budget.' },
]

export const WHY_CHOOSE: { title: string; Icon: LucideIcon }[] = [
  { title: 'Affordable Advertising Solutions', Icon: BadgeIndianRupee },
  { title: 'Professional AI Advertisement Creatives', Icon: Sparkles },
  { title: 'Local Business Promotion', Icon: MapPin },
  { title: 'Facebook, Instagram & WhatsApp Marketing', Icon: MessagesSquare },
  { title: 'Creative Posters and Videos', Icon: Images },
  { title: 'Complete Digital Marketing Support', Icon: LifeBuoy },
  { title: 'Website Development Solutions', Icon: Globe },
  { title: 'Technology Repair Services', Icon: Cpu },
  { title: 'One Place for Multiple Business Solutions', Icon: LayoutGrid },
]

export const PROCESS = [
  { step: '01', title: 'Free Consultation', text: 'Message us on WhatsApp and tell us about your business and goals.' },
  { step: '02', title: 'Custom Plan', text: 'We recommend the right mix of ads, creatives and digital tools for your budget.' },
  { step: '03', title: 'Create & Launch', text: 'Our team designs, builds and launches your campaign or project.' },
  { step: '04', title: 'Grow & Support', text: 'We track results, optimise and stay with you as your business grows.' },
]
