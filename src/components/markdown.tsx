import React from 'react'

interface PropsType extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

export const H1 = ({ children }: PropsType) => (
  <h1 className="text-4xl font-bold mt-8">{children}</h1>
)

export const H2 = ({ children }: PropsType) => (
  <h2 className="text-3xl font-bold mt-6">{children}</h2>
)

export const H3 = ({ children }: PropsType) => (
  <h3 className="text-2xl font-bold mt-4">{children}</h3>
)

export const H4 = ({ children }: PropsType) => (
  <h4 className="text-xl font-bold mt-3">{children}</h4>
)

export const H5 = ({ children }: PropsType) => (
  <h5 className="text-lg font-bold mt-2">{children}</h5>
)

export const Code = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <code className="bg-zinc-850 p-1 rounded my-4">{children}</code>
)

export const Pre = ({ children }: React.HTMLAttributes<HTMLPreElement>) => (
  <pre className="bg-zinc-800 p-2 rounded overflow-auto my-4">{children}</pre>
)

export const Strong = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <strong className="font-bold">{children}</strong>
)
