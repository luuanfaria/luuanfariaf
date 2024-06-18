import createNextIntlPlugin from 'next-intl/plugin'
import mdx from '@next/mdx'

const withMDX = mdx()

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(withNextIntl(nextConfig))
