import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path'
import { readFile, access } from 'fs/promises'
import { notFound } from 'next/navigation'
import 'tailwindcss/tailwind.css'
import { Code, H1, H2, H3, H4, H5, Pre, Strong } from '@/components/markdown'

const POSTS_FOLDER = path.join(
  process.cwd(),
  'src',
  'app',
  '[locale]',
  'blog',
  'posts',
)

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`))

  try {
    await access(filePath)
  } catch (err) {
    return null
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' })
  return fileContent
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  code: Code,
  pre: Pre,
  strong: Strong,
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const markdown = await readPostFile(params.slug)
    if (!markdown) {
      notFound()
    }

    return (
      <section>
        <article className="prose">
          <MDXRemote components={components} source={markdown} />
        </article>
      </section>
    )
  } catch (error) {
    console.error('Error rendering the post:', error)
    return (
      <section>
        <article className="prose">
          <p>Error loading the post. Please try again later.</p>
        </article>
      </section>
    )
  }
}
