import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhatWeSolve from '@/components/WhatWeSolve'
import Services from '@/components/Services'
import WhyIV7 from '@/components/WhyIV7'
import Results from '@/components/Results'
import BlogPreview from '@/components/BlogPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeSolve />
      <Services />
      <WhyIV7 />
      <Results />
      <BlogPreview />
      <CTA />
      <Footer />
    </main>
  )
}
