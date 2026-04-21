'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'IA para Atendimento',
    description:
      'Agentes inteligentes que respondem clientes via WhatsApp, capturam leads e qualificam oportunidades — sem um atendente humano envolvido.',
    tags: ['WhatsApp Bot', 'Captação de Leads', 'Qualificação Automática'],
  },
  {
    number: '02',
    title: 'CRM de Vendas',
    description:
      'Painel de clientes completo, histórico de interações, confirmações automáticas, campanhas de aniversário e relatórios semanais sem esforço.',
    tags: ['Gestão de Clientes', 'Follow-up Automático', 'Relatórios'],
  },
  {
    number: '03',
    title: 'Site Integrado',
    description:
      'Presença digital profissional com design responsivo, integração com WhatsApp, Google Meu Negócio e menu digital. Tudo conectado.',
    tags: ['Design Responsivo', 'Google Meu Negócio', 'WhatsApp Integrado'],
  },
  {
    number: '04',
    title: 'Automações e Integrações',
    description:
      'Conectamos seus sistemas e plataformas — notificações automáticas, relatórios de vendas diários, alertas de estoque e muito mais.',
    tags: ['N8N', 'APIs', 'Notificações Automáticas'],
  },
  {
    number: '05',
    title: 'Marketing Digital',
    description:
      'Gestão de redes sociais, posicionamento de marca, tráfego pago e performance. Marketing com dados, não com achismo.',
    tags: ['Tráfego Pago', 'Redes Sociais', 'Performance'],
  },
]

export default function Services() {
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
    <section id="servicos" className="bg-iv7-darkest py-32" ref={sectionRef}>
      <div className="container-iv7">
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 mb-20"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-iv7-gray-light">
            Serviços
          </span>
          <h2 className="font-helvetica text-4xl md:text-6xl font-black text-white mt-4 leading-tight max-w-2xl">
            Tudo que a sua empresa precisa para operar em outro nível.
          </h2>
        </div>

        <div className="space-y-px">
          {services.map((service, i) => (
            <div
              key={service.number}
              data-animate
              className="opacity-0 translate-y-6 transition-all duration-700 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 border-t border-iv7-border py-10 hover:bg-iv7-card px-6 -mx-6 transition-colors duration-300 cursor-default">
                <span className="font-helvetica text-xs font-bold text-iv7-gray tracking-widest shrink-0 mt-1">
                  {service.number}
                </span>

                <div className="flex-1">
                  <h3 className="font-helvetica text-2xl md:text-3xl font-black text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-iv7-gray-light mt-3 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-sans text-iv7-gray border border-iv7-border px-3 py-1 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="hidden md:block font-helvetica text-iv7-gray group-hover:text-white transition-all duration-300 group-hover:translate-x-1 mt-1 text-xl">
                  →
                </span>
              </div>
            </div>
          ))}
          <div className="border-t border-iv7-border" />
        </div>
      </div>
    </section>
  )
}
