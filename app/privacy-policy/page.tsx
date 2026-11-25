import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Learn how ${SITE.name} collects, uses, and protects your information when you visit our website or contact us.`,
  alternates: { canonical: '/privacy-policy' },
}

const updatedDate = 'November 24, 2026'

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:px-8">
      <header className="mb-10 border-b border-navy/10 pb-8">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-orange uppercase">Your privacy matters</p>
        <h1 className="font-sora text-4xl font-bold text-navy sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-navy/60">Last updated: {updatedDate}</p>
      </header>

      <div className="space-y-8 leading-7 text-navy/75">
        <section aria-labelledby="intro">
          <h2 id="intro" className="font-sora text-xl font-bold text-navy">Introduction</h2>
          <p className="mt-3">{SITE.name} ("we", "us", or "our") respects your privacy. This policy explains what information may be collected when you visit {SITE.url}, contact us, or use our services, how we use it, and the choices available to you.</p>
        </section>

        <section aria-labelledby="information">
          <h2 id="information" className="font-sora text-xl font-bold text-navy">Information we collect</h2>
          <p className="mt-3">Depending on how you interact with us, we may receive information you choose to provide, such as your name, phone number, email address, business details, and the contents of your enquiry. When you browse the website, technical information such as your IP address, browser and device type, pages visited, and approximate usage data may also be collected by our hosting, analytics, or security providers.</p>
          <p className="mt-3">Please do not send sensitive personal information through general enquiry forms or messaging channels.</p>
        </section>

        <section aria-labelledby="use">
          <h2 id="use" className="font-sora text-xl font-bold text-navy">How we use information</h2>
          <p className="mt-3">We use information to respond to enquiries, provide and improve our services, communicate about requested work, maintain and secure the website, understand website usage, and meet applicable legal obligations. We do not sell your personal information.</p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" className="font-sora text-xl font-bold text-navy">Cookies, analytics, and third-party services</h2>
          <p className="mt-3">This website may use analytics and similar technologies to understand visits and improve performance. Our service providers may process technical information on our behalf under their own privacy and security practices. Links to services such as WhatsApp and social media are operated by third parties; when you follow those links, their terms and privacy policies apply.</p>
          <p className="mt-3">You can manage cookies through your browser settings. Disabling cookies may affect some website functionality.</p>
        </section>

        <section aria-labelledby="sharing">
          <h2 id="sharing" className="font-sora text-xl font-bold text-navy">When information may be shared</h2>
          <p className="mt-3">We may share information with trusted hosting, analytics, communications, and other service providers where needed to operate our website or deliver requested services. We may also disclose information where required by law, to protect rights and safety, or in connection with a business transfer. We do not authorize service providers to use your information for purposes unrelated to their services for us.</p>
        </section>

        <section aria-labelledby="retention">
          <h2 id="retention" className="font-sora text-xl font-bold text-navy">Data retention and security</h2>
          <p className="mt-3">We retain information for as long as reasonably necessary for the purposes described in this policy, including responding to you, maintaining business records, and meeting legal requirements. We use reasonable safeguards to protect information, but no method of transmission or storage can be guaranteed completely secure.</p>
        </section>

        <section aria-labelledby="rights">
          <h2 id="rights" className="font-sora text-xl font-bold text-navy">Your choices and rights</h2>
          <p className="mt-3">You may contact us to ask about, correct, or request deletion of personal information you have provided, subject to applicable law and legitimate record-keeping needs. You may also opt out of non-essential communications by contacting us.</p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="font-sora text-xl font-bold text-navy">Children&apos;s privacy</h2>
          <p className="mt-3">Our website and services are intended for businesses and a general audience, not children. We do not knowingly seek to collect personal information from children.</p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="font-sora text-xl font-bold text-navy">Changes to this policy</h2>
          <p className="mt-3">We may update this policy from time to time. Any changes will be posted on this page with a revised updated date.</p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="font-sora text-xl font-bold text-navy">Contact us</h2>
          <p className="mt-3">For privacy questions or requests, contact {SITE.name} in {SITE.city} at <a className="font-semibold text-brand-orange underline underline-offset-4" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>, or message us on <a className="font-semibold text-brand-orange underline underline-offset-4" href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
        </section>
      </div>
    </article>
  )
}
