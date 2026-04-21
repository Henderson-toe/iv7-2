import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Blog IV7`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n')

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <article>
          <header className="pt-40 pb-16 border-b border-iv7-border">
            <div className="container-iv7 max-w-4xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-iv7-gray hover:text-white transition-colors mb-8"
              >
                ← Voltar ao Blog
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-iv7-gray border border-iv7-border px-3 py-1">
                  {post.category}
                </span>
                <span className="text-xs font-sans text-iv7-gray">{post.readTime} de leitura</span>
                <span className="text-xs font-sans text-iv7-gray">{post.date}</span>
              </div>

              <h1 className="font-helvetica text-4xl md:text-6xl font-black text-white leading-tight">
                {post.title}
              </h1>

              <p className="font-sans text-iv7-gray-light text-lg mt-6 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          </header>

          <div className="container-iv7 max-w-4xl py-16">
            <div className="font-sans text-base text-iv7-gray-light leading-relaxed space-y-6">
              {paragraphs.map((block, i) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2
                      key={i}
                      className="font-helvetica text-2xl md:text-3xl font-black text-white mt-12 mb-4"
                    >
                      {block.replace('## ', '')}
                    </h2>
                  )
                }
                if (block.startsWith('- ')) {
                  const items = block.split('\n').filter((l) => l.startsWith('- '))
                  return (
                    <ul key={i} className="space-y-2 pl-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1 h-1 bg-iv7-gray rounded-full mt-2.5 shrink-0" />
                          <span>{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (block.startsWith('**') && block.includes(':**')) {
                  const lines = block.split('\n')
                  return (
                    <div key={i} className="space-y-3">
                      {lines.map((line, j) => {
                        if (line.startsWith('**') && line.includes(':**')) {
                          const [bold, rest] = line.split(':**')
                          return (
                            <p key={j}>
                              <strong className="text-white font-helvetica">
                                {bold.replace('**', '')}:
                              </strong>{' '}
                              {rest}
                            </p>
                          )
                        }
                        return <p key={j}>{line}</p>
                      })}
                    </div>
                  )
                }
                return (
                  <p key={i} className="text-iv7-gray-light">
                    {block}
                  </p>
                )
              })}
            </div>
          </div>
        </article>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
