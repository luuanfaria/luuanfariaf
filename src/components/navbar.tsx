import { LanguageToggle } from './languageToggle'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'

import Link from 'next/link'

export function Navbar() {
  const t = useTranslations('navbar')
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4">
        <Link href="/">{t('home')}</Link>
        <Link href="/en/about">{t('about')}</Link>
        <Link href="/en/portfolio">{t('portfolio')}</Link>
        <Link href="/en/blog">{t('blog')}</Link>
      </div>

      <LanguageToggle />
    </div>
  )
}
