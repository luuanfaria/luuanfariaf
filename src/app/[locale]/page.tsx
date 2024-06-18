'use client'
import { ImageSlicer } from '@/components/imageSlicer'
import { BlogPosts } from '@/components/posts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const t = useTranslations('home')
  const [isMounted, setIsMounted] = useState(false)
  const [currentDescription, setCurrentDescription] = useState(0)
  const descriptions = [t('description1'), t('description2'), t('description3')]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDescription(
        (prevDescription) => (prevDescription + 1) % descriptions.length,
      )
    }, 3000)

    return () => clearInterval(intervalId)
  }, [descriptions.length])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

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

      <div className="relative h-24">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentDescription}
            className="text-3xl font-semibold absolute w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {descriptions[currentDescription]}
          </motion.p>
        </AnimatePresence>
      </div>

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
