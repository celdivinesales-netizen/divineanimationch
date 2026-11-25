export const SITE = {
  name: 'Divine Animation Chennai',
  tagline: 'Your Complete Digital Marketing & Technology Solutions Partner',
  phoneDisplay: '+91 90925 58217',
  phoneTel: '+919092558217',
  whatsappNumber: '919092558217',
  whatsappUrl: 'https://wa.me/919092558217',
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  address: '16, 17 Anna Street, Pathuvanchery, Madambakkam, Kancheepuram, Tamil Nadu 600126',
  city: 'Chennai, Tamil Nadu, India',
  url: 'https://divineanimationchennai.com',
}

export function whatsappLink(message?: string) {
  if (!message) return SITE.whatsappUrl
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { href: '/', label: 'Home', short: 'Home' },
  { href: '/about', label: 'About Us', short: 'About' },
  { href: '/digital-marketing', label: 'Digital Marketing', short: 'Marketing' },
  { href: '/ai-advertisement-services', label: 'AI Advertisement Services', short: 'AI Ads' },
  { href: '/website-development', label: 'Website Development', short: 'Websites' },
  { href: '/computer-mobile-repairs', label: 'Computer & Mobile Repairs', short: 'Repairs' },
  { href: '/industries', label: 'Industries We Serve', short: 'Industries' },
  { href: '/contact', label: 'Contact Us', short: 'Contact' },
] as const

export const SERVICE_OPTIONS = [
  'Facebook & Instagram Advertising',
  'WhatsApp Marketing',
  'Meta Ads Campaign Management',
  'AI Advertisement Videos',
  'AI Posters & Social Media Creatives',
  'Website Development',
  'Website Maintenance',
  'Computer / Laptop Repair',
  'Mobile Phone Repair',
  'Other / Not Sure',
]
