import { Projects } from '@/components/projects'

export const metadata = {
  title: 'Luan Faria - Blog',
  description: 'Read my blog.',
}

export default function Portfolio() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Portfolio
      </h1>
      <Projects />
    </section>
  )
}
