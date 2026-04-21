'use client'

import { useEffect, useRef } from 'react'
import AnimatedBackground from './AnimatedBackground'

const WHATSAPP_URL =
  'https://wa.me/5595991114018?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IV7%20e%20quero%20saber%20mais!'

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-animate]')
    items?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-black py-40 overflow-hidden" ref={sectionRef}>
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="relative z-20 container-iv7 text-center">
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light">
            Pronto para o próximo nível
          </span>

          <h2 className="font-helvetica text-5xl md:text-7xl lg:text-8xl font-black text-white mt-6 leading-[0.9] tracking-tighter max-w-4xl mx-auto">
            Sua empresa no piloto automático começa aqui.
          </h2>

          <p className="font-sans text-iv7-gray-light text-lg mt-8 max-w-xl mx-auto leading-relaxed">
            Diagnóstico gratuito. Sem enrolação. Em menos de 15 minutos você sabe o que a IA pode
            fazer pelo seu negócio.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black font-helvetica font-black text-sm tracking-widest uppercase px-10 py-5 hover:bg-iv7-gray-lighter transition-colors duration-200 text-lg"
            >
              Falar com a IV7 agora
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

          <p className="font-sans text-xs text-iv7-gray mt-6 tracking-wide">
            Sem compromisso. Resposta em minutos.
          </p>
        </div>
      </div>
    </section>
  )
}
