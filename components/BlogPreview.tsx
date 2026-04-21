'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-animate]')
    items?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-iv7-darkest py-32" ref={sectionRef}>
      <div className="container-iv7">
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light">
              Blog
            </span>
            <h2 className="font-helvetica text-4xl md:text-5xl font-black text-white mt-4 leading-tight max-w-xl">
              IA dentro das empresas. O que está acontecendo.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-helvetica font-bold tracking-widest uppercase text-iv7-gray-light hover:text-white transition-colors shrink-0"
          >
            Ver todos os artigos
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-iv7-border">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-700 group bg-iv7-darkest hover:bg-iv7-card p-8 flex flex-col gap-6 border-0 block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-iv7-gray border border-iv7-border px-3 py-1">
                  {post.category}
                </span>
                <span className="text-xs font-sans text-iv7-gray">{post.readTime}</span>
              </div>

              <h3 className="font-helvetica text-xl font-black text-white leading-snug group-hover:text-white transition-colors flex-1">
                {post.title}
              </h3>

              <p className="font-sans text-sm text-iv7-gray-light leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-iv7-border">
                <span className="text-xs font-sans text-iv7-gray">{post.date}</span>
                <span className="text-iv7-gray group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-sm">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
