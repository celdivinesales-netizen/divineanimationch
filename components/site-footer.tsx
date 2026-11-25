import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/site'
import { Logo } from '@/components/logo'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/brand-icons'

const socials = [
  { href: SITE.whatsappUrl, label: 'WhatsApp', Icon: WhatsAppIcon, className: 'hover:bg-whatsapp' },
  { href: SITE.facebookUrl, label: 'Facebook', Icon: FacebookIcon, className: 'hover:bg-[#1877F2]' },
  { href: SITE.instagramUrl, label: 'Instagram', Icon: InstagramIcon, className: 'hover:bg-brand-purple' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md leading-relaxed">
            Your Partner for Digital Marketing, AI Advertising, Website Development and Technology Solutions.
          </p>
          <ul className="mt-6 flex gap-3" aria-label="Social media">
            {socials.map(({ href, label, Icon, className }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors ${className}`}
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Get In Touch</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-whatsapp" />
                <span>
                  <span className="block text-xs text-white/50">WhatsApp</span>
                  <span className="font-semibold text-white">{SITE.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="flex items-start gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-white/50">Call Us</span>
                  <span className="font-semibold text-white">{SITE.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" aria-hidden="true" />
              <address className="not-italic">{SITE.address}</address>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row lg:px-8">
          <p>Copyright &copy; 2026 Celestine Aloysious. All Rights Reserved.</p>
          <Link href="/privacy-policy" className="transition-colors hover:text-brand-orange focus-visible:text-brand-orange">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
