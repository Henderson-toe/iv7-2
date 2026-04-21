import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — IV7 | IA dentro das empresas',
  description:
    'Artigos sobre inteligência artificial aplicada a negócios reais. Automação, atendimento, CRM e muito mais.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <section className="pt-40 pb-20 border-b border-iv7-border">
          <div className="container-iv7">
            <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light">
              Blog IV7
            </span>
            <h1 className="font-helvetica text-5xl md:text-7xl font-black text-white mt-4 leading-tight max-w-3xl">
              IA dentro das empresas. O que está acontecendo.
            </h1>
            <p className="font-sans text-iv7-gray-light mt-6 text-lg max-w-xl leading-relaxed">
              Conteúdo direto ao ponto sobre como a inteligência artificial está mudando a forma
              como empresas operam, vendem e crescem.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-iv7">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-iv7-border">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-black hover:bg-iv7-card p-8 flex flex-col gap-6 transition-colors duration-300 block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-iv7-gray border border-iv7-border px-3 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs font-sans text-iv7-gray">{post.readTime}</span>
                  </div>

                  <h2 className="font-helvetica text-xl font-black text-white leading-snug flex-1">
                    {post.title}
                  </h2>

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
      </main>
      <Footer />
    </>
  )
}
