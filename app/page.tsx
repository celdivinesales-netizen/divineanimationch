import { HomeHero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { ServicesGrid } from '@/components/home/services-grid'
import { AboutIntro } from '@/components/about-intro'
import { IndustriesGrid, WhyChoose } from '@/components/industries-why'
import { ContactSection } from '@/components/contact-section'
import { CtaBand } from '@/components/sections'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <ServicesGrid />
      <AboutIntro />
      <WhyChoose />
      <IndustriesGrid />
      <CtaBand />
      <ContactSection />
    </>
  )
}
