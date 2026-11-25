import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-button'
import { SITE } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

const aisensyTracking = `window.AisensyConfig = { baseUrl: 'https://backend.aisensy.com' }; !function(a,i,s,e){a.Aisensy=a.Aisensy||{q:[],init:function(){this.q.push(['init'].concat([].slice.call(arguments)))},track:function(){this.q.push(['track'].concat([].slice.call(arguments)))}}; var d=i.createElement(s);d.async=1;d.src=e;var f=i.getElementsByTagName(s)[0];f.parentNode.insertBefore(d,f); }(window,document,'script','https://d1fviw7lxswn81.cloudfront.net/system/aisensy.min.js'); Aisensy.init('SIG-7u0pdKUunx');`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Divine Animation Chennai | Digital Marketing, AI Ads & Website Development',
    template: '%s | Divine Animation Chennai',
  },
  description:
    'Divine Animation Chennai offers affordable Facebook, Instagram & WhatsApp marketing, AI advertisement videos, posters, website development and computer & mobile repair services for local businesses.',
  keywords: [
    'digital marketing Chennai',
    'Meta ads Chennai',
    'Instagram advertising Chennai',
    'AI advertisement videos',
    'website development Chennai',
    'laptop repair Chennai',
    'mobile repair Chennai',
    'retail business promotion',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE.name,
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1640',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/* Website tracking */}
        <Script id="aisensy-tracking" strategy="afterInteractive">
          {aisensyTracking}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
