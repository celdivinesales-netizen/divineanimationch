import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site'
import { WhatsAppIcon } from '@/components/brand-icons'

type Props = {
  children: React.ReactNode
  message?: string
  size?: 'md' | 'lg'
  className?: string
}

export function WhatsAppButton({ children, message, size = 'md', className }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-white shadow-lg shadow-whatsapp/30 transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm',
        className,
      )}
    >
      <WhatsAppIcon className={size === 'lg' ? 'size-5' : 'size-4'} />
      {children}
    </a>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink('Hello Divine Animation Chennai, I would like to know more about your services.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="animate-wa-pulse fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform hover:scale-110 md:right-8 md:bottom-8 md:size-16"
    >
      <WhatsAppIcon className="size-7 md:size-8" />
    </a>
  )
}
