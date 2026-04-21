'use client'

import { useEffect, useRef } from 'react'

const differentials = [
  {
    title: 'Implementação em dias, não meses',
    description:
      'Sem burocracia. Diagnóstico, proposta e primeiro sistema rodando em menos de 7 dias.',
  },
  {
    title: 'Resultado medido, não prometido',
    description:
      'MRR, leads capturados, ticket médio, churn. Você acompanha tudo com dados reais.',
  },
  {
    title: 'Tecnologia de ponta sem complexidade',
    description:
      'Usamos as melhores ferramentas do mercado global, adaptadas para a realidade do seu negócio.',
  },
  {
    title: 'Suporte direto, sem fila de atendimento',
    description:
      'Você fala diretamente com quem implementou o seu sistema. Sem terceiros, sem demora.',
  },
  {
    title: 'Seu negócio no centro, sempre',
    description:
      'Não entregamos o que é mais fácil. Entregamos o que resolve o problema do seu cliente.',
  },
  {
    title: 'Escala sem aumentar o caos',
    description:
      'Crescer com a IV7 significa mais resultados, não mais contratações. Automação inteligente, não força bruta.',
  },
]

export default function WhyIV7() {
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
      { threshold: 0.08 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-animate]')
    items?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="porque" className="bg-iv7-black py-32" ref={sectionRef}>
      <div className="container-iv7">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div
            data-animate
            className="opacity-0 translate-y-6 transition-all duration-700 lg:sticky lg:top-32"
          >
            <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light">
              Por que a IV7
            </span>
            <h2 className="font-helvetica text-4xl md:text-6xl font-black text-white mt-4 leading-tight">
              A diferença está no método.
            </h2>
            <p className="font-sans text-iv7-gray-light mt-6 text-lg leading-relaxed max-w-md">
              Enquanto a concorrência vende "tecnologia", a IV7 entrega resultado. Diagnóstico
              antes da solução, sempre.
            </p>

            <div className="mt-10 p-6 border border-iv7-border bg-iv7-card">
              <p className="font-helvetica text-sm font-bold text-white leading-relaxed italic">
                &ldquo;A IV7 sempre prioriza seus clientes. Sempre entregamos a melhor solução
                possível para resolver o problema do nosso cliente.&rdquo;
              </p>
              <p className="font-sans text-xs text-iv7-gray mt-4 tracking-widest uppercase">
                — Cultura IV7
              </p>
            </div>
          </div>

          <div className="space-y-px">
            {differentials.map((item, i) => (
              <div
                key={item.title}
                data-animate
                className="opacity-0 translate-y-6 transition-all duration-700 border-t border-iv7-border py-8 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 shrink-0 group-hover:bg-iv7-gray-light transition-colors" />
                  <div>
                    <h3 className="font-helvetica text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-iv7-gray-light mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-iv7-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
