'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 75, suffix: '%', label: 'Redução em atendimento manual', description: 'Menos mensagens respondidas à mão' },
  { value: 12, suffix: '%', label: 'Aumento no ticket médio', description: 'Com upsell e campanhas automáticas' },
  { value: 3, suffix: '×', label: 'Mais leads capturados', description: 'Com agentes de captação ativos 24/7' },
  { value: 98, suffix: '%', label: 'Taxa de entrega no WhatsApp', description: 'Comunicação direta, sem filtros' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Results() {
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
    <section className="bg-white py-32" ref={sectionRef}>
      <div className="container-iv7">
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 mb-20"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-mid">
            Resultados
          </span>
          <h2 className="font-helvetica text-4xl md:text-6xl font-black text-black mt-4 leading-tight max-w-2xl">
            Números que provam que automação funciona.
          </h2>
          <p className="font-sans text-iv7-gray-mid mt-6 text-lg max-w-xl">
            Resultado mensurado em clientes reais. Sem promessa vaga, sem achismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-700 bg-white p-10 group hover:bg-black hover:text-white transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-helvetica text-5xl md:text-6xl font-black text-black group-hover:text-white transition-colors">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-helvetica text-base font-bold text-black group-hover:text-white mt-4 transition-colors">
                {stat.label}
              </p>
              <p className="font-sans text-sm text-iv7-gray-mid group-hover:text-iv7-gray-light mt-2 transition-colors leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
