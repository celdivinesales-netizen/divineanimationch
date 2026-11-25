import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Divine Animation Chennai home">
      <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange text-white shadow-lg">
        <Sparkles className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-extrabold tracking-tight text-white">DIVINE ANIMATION</span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-brand-orange">CHENNAI</span>
      </span>
    </Link>
  )
}
