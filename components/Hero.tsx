'use client'

import { useEffect, useRef } from 'react'
import AnimatedBackground from './AnimatedBackground'

const WHATSAPP_URL =
  'https://wa.me/5595991114018?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IV7%20e%20quero%20saber%20mais!'

export default function Hero() {
  const lineRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 }
    )

    if (textRef.current) {
      const children = textRef.current.querySelectorAll('[data-animate]')
      children.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-iv7-black">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10 pointer-events-none" />

      <div className="relative z-20 container-iv7 pt-32 pb-24" ref={textRef}>
        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          <span className="inline-block text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light mb-6 border border-iv7-border px-4 py-1.5">
            Ecossistema de IA para negócios reais
          </span>
        </div>

        <h1
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-200 font-helvetica text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white max-w-5xl"
        >
          Se você ainda faz{' '}
          <br className="hidden md:block" />
          <span className="text-iv7-gray-light">no manual,</span>
          <br />
          nós provavelmente{' '}
          <br className="hidden md:block" />
          já automatizamos.
        </h1>

        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-8"
        >
          <div className="w-16 h-px bg-white mb-8" />
          <p className="font-sans text-lg md:text-xl text-iv7-gray-light max-w-xl leading-relaxed">
            Atendimento, prospecção e agendamento no piloto automático — para empresas que querem
            crescer sem aumentar o caos.
          </p>
        </div>

        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black font-helvetica font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-iv7-gray-lighter transition-colors duration-200"
          >
            Falar com a IV7
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-3 border border-white/20 text-white font-helvetica font-bold text-sm tracking-widest uppercase px-8 py-4 hover:border-white/50 transition-colors duration-200"
          >
            Ver soluções
          </a>
        </div>

        <div
          data-animate
          className="opacity-0 translate-y-8 transition-all duration-700 delay-700 mt-20 grid grid-cols-3 gap-8 max-w-lg"
        >
          {[
            { value: '75%', label: 'menos atendimento manual' },
            { value: '3×', label: 'mais leads capturados' },
            { value: '24/7', label: 'operação sem parar' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-helvetica text-2xl md:text-3xl font-black text-white">
                {stat.value}
              </p>
              <p className="font-sans text-xs text-iv7-gray mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-sans text-iv7-gray tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-iv7-gray to-transparent" />
      </div>
    </section>
  )
}
