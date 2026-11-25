import type { MetadataRoute } from 'next'
import { NAV_LINKS, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...NAV_LINKS.map((link) => ({
      url: `${SITE.url}${link.href === '/' ? '' : link.href}`,
      changeFrequency: 'monthly' as const,
      priority: link.href === '/' ? 1 : 0.8,
    })),
    {
      url: `${SITE.url}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
