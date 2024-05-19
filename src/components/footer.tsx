import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Link
          href="https://linkedin.com/in/luuanfaria"
          className="flex gap-1 items-center"
        >
          <ArrowUpRight width={20} height={20} />
          linkedin
        </Link>
        <Link
          href="https://github.com/luuanfaria"
          className="flex gap-1 items-center"
        >
          <ArrowUpRight width={20} height={20} />
          github
        </Link>
      </div>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </div>
  )
}
