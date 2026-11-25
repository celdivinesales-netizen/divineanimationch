'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled || open ? 'bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-md' : 'bg-navy',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Logo />

        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    title={link.label}
                    className={cn(
                      'rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                      active ? 'bg-white/10 text-brand-orange' : 'text-white/80 hover:text-white',
                    )}
                  >
                    {link.short}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="hidden whitespace-nowrap sm:inline-flex">WhatsApp Us</WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-white/10 xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded-lg px-3 py-3 text-base font-medium',
                      active ? 'bg-white/10 text-brand-orange' : 'text-white/85 hover:bg-white/5',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-3 sm:hidden">
              <WhatsAppButton className="w-full" size="lg">
                Chat With Us on WhatsApp
              </WhatsAppButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
