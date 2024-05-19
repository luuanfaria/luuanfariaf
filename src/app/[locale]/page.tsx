import { ImageSlicer } from '@/components/imageSlicer'
import { BlogPosts } from '@/components/posts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale as unstableSetRequestLocale } from 'next-intl/server'
import Link from 'next/link'

interface HomeProps {
  params: { locale: string }
}

export default function Home({ params: { locale } }: HomeProps) {
  unstableSetRequestLocale(locale)
  const t = useTranslations('home')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/luuanfaria.png" />
          <AvatarFallback>LF</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-lg">{t('name')}</p>
          <p className="text-base">{t('job')}</p>
        </div>
      </div>
      <p className="text-3xl font-semibold">{t('description')}</p>
      <button className="flex items-center gap-1 w-max rounded-xl hover:opacity-95 bg-zinc-900 hover:cursor-pointer p-2">
        <ArrowUpRight width={20} height={20} /> {t('button')}
      </button>

      <div className="flex flex-col gap-4 mt-12">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{t('portfolio')}</h3>
          <Link href="/en/portfolio" className="text-sm">
            {t('seeAllPortfolio')}
          </Link>
        </div>

        <ImageSlicer />
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <h3 className="font-semibold">{t('posts')}</h3>
        <BlogPosts />
      </div>
    </div>
  )
}
