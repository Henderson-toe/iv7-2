'use client'

import { useEffect, useRef } from 'react'

const problems = [
  {
    pain: 'Perde leads por demora no atendimento',
    solution: 'Agente de IA responde em segundos, 24 horas por dia',
    icon: '01',
  },
  {
    pain: 'Agenda cheia de tarefas repetitivas',
    solution: 'Automações cuidam do que não precisa de você',
    icon: '02',
  },
  {
    pain: 'Não sabe quantos clientes tem ou de onde vieram',
    solution: 'CRM organizado automaticamente com cada interação',
    icon: '03',
  },
  {
    pain: 'Marketing sem dados, sem estratégia',
    solution: 'Campanhas com IA, mensuráveis e com performance real',
    icon: '04',
  },
  {
    pain: 'Prospecção manual e sem escala',
    solution: 'Fluxos automáticos de prospecção via WhatsApp e e-mail',
    icon: '05',
  },
  {
    pain: 'Relatórios feitos na mão toda semana',
    solution: 'Relatórios automáticos direto no seu celular',
    icon: '06',
  },
]

export default function WhatWeSolve() {
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
    <section id="solucoes" className="relative bg-iv7-black py-32" ref={sectionRef}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 pointer-events-none" />

      <div className="relative z-10 container-iv7">
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 mb-20"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light">
            O que a IV7 resolve
          </span>
          <h2 className="font-helvetica text-4xl md:text-6xl font-black text-white mt-4 leading-tight max-w-3xl">
            Se você ainda faz no manual, nós provavelmente já automatizamos.
          </h2>
          <p className="font-sans text-iv7-gray-light mt-6 text-lg max-w-xl">
            Atendimento, prospecção e agendamento no piloto automático.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-iv7-border">
          {problems.map((item, i) => (
            <div
              key={item.icon}
              data-animate
              className={`opacity-0 translate-y-6 transition-all duration-700 bg-iv7-black p-8 group hover:bg-iv7-card`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-helvetica text-xs font-bold text-iv7-gray tracking-widest">
                {item.icon}
              </span>

              <div className="mt-6 mb-4">
                <p className="font-sans text-sm text-iv7-gray line-through decoration-iv7-gray leading-relaxed">
                  {item.pain}
                </p>
              </div>

              <div className="w-8 h-px bg-white/30 my-4" />

              <p className="font-helvetica text-base font-bold text-white leading-snug group-hover:text-white transition-colors">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
