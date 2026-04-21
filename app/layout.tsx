import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IV7 — Ecossistema de IA para Negócios',
  description:
    'Se você ainda faz no manual, nós provavelmente já automatizamos. Atendimento, prospecção e agendamento no piloto automático.',
  keywords: 'inteligência artificial, automação, IA para empresas, WhatsApp bot, CRM, IV7',
  openGraph: {
    title: 'IV7 — Ecossistema de IA para Negócios',
    description: 'Atendimento, prospecção e agendamento no piloto automático.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
