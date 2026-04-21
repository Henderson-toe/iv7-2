import Link from 'next/link'
import Logo from './Logo'

const WHATSAPP_URL =
  'https://wa.me/5595991114018?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IV7%20e%20quero%20saber%20mais!'

export default function Footer() {
  return (
    <footer className="bg-iv7-darkest border-t border-iv7-border">
      <div className="container-iv7 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo className="h-10 w-auto mb-6" />
            <p className="font-sans text-sm text-iv7-gray-light leading-relaxed max-w-sm">
              Ecossistema de IA para negócios reais. Atendimento, prospecção e agendamento no
              piloto automático.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-helvetica font-bold tracking-widest uppercase text-white hover:text-iv7-gray-light transition-colors"
            >
              +55 95 99111-4018 →
            </a>
          </div>

          <div>
            <p className="font-helvetica text-xs font-bold tracking-[0.2em] uppercase text-iv7-gray mb-6">
              Site
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Soluções', href: '#solucoes' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Por que a IV7', href: '#porque' },
                { label: 'Resultados', href: '#resultados' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-iv7-gray-light hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-helvetica text-xs font-bold tracking-[0.2em] uppercase text-iv7-gray mb-6">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-iv7-gray-light hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hendersonkale9@gmail.com"
                  className="font-sans text-sm text-iv7-gray-light hover:text-white transition-colors"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-iv7-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-iv7-gray">
            © {new Date().getFullYear()} IV7. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-iv7-gray tracking-widest uppercase">
            Ecossistema de IA para negócios reais
          </p>
        </div>
      </div>
    </footer>
  )
}
