import Link from 'next/link'
import { format } from 'date-fns'

interface PostsType {
  publishedAt: Date
  title: string
  slug: string
}

export function BlogPosts() {
  const allBlogs = [
    {
      publishedAt: new Date(),
      title: 'Creating API Node',
      slug: 'create-node-api',
    },
  ]

  return (
    <div>
      {allBlogs.map((post: PostsType) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/en/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {format(post.publishedAt, 'yyyy MMM dd')}
            </p>
            <p className="text-neutral-200 dark:text-neutral-100 tracking-tight">
              {post.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
