import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  unstable_setRequestLocale as unstableSetRequestLocale,
} from 'next-intl/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Luan Faria',
  description: 'a Web Dev lets build something amazing?',
}

interface RootLayoutProps {
  children: ReactNode
  params: { locale: string }
}

const locales = ['en', 'pt']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstableSetRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <body
        className="bg-zinc-950 text-zinc-50 antialiased min-h-screen"
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col w-full max-w-xl mx-auto px-4 pt-8 lg:px-0 gap-16">
            <Navbar />
            <main className="flex-auto mt-6">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
