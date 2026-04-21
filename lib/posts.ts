export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'ia-no-atendimento-ao-cliente',
    title: 'Como a IA está transformando o atendimento ao cliente em 2025',
    excerpt:
      'Empresas que ainda dependem 100% de atendimento humano para responder mensagens estão perdendo leads para concorrentes que já automatizaram. Entenda o que está mudando.',
    date: '12 Abr 2025',
    readTime: '6 min',
    category: 'Atendimento',
    content: `
A velocidade de resposta virou vantagem competitiva. Em 2025, 78% dos consumidores esperam uma resposta em menos de 5 minutos após o primeiro contato. O problema? A maioria das empresas ainda responde manualmente.

## O que mudou

Agentes de IA conectados ao WhatsApp não são mais experimento — são realidade operando em negócios de todos os tamanhos. Restaurantes, clínicas, imobiliárias e até prefeituras já usam bots inteligentes para:

- Responder perguntas frequentes 24 horas por dia
- Capturar dados de leads automaticamente
- Agendar atendimentos sem intervenção humana
- Filtrar e qualificar oportunidades antes de chegar ao time de vendas

## O custo de não automatizar

Cada mensagem não respondida em menos de 5 minutos tem 80% menos chance de fechar. Se você tem um time que responde WhatsApp durante o horário comercial e dorme enquanto leads chegam à noite, está perdendo dinheiro de forma sistemática.

## Como implementar

A implementação de um agente de IA no WhatsApp não exige meses de desenvolvimento. Com ferramentas como N8N, Evolution API e OpenAI, é possível ter um agente funcional em menos de uma semana — respondendo em linguagem natural, capturando dados e direcionando o cliente certo para o momento certo.

O passo seguinte é integrar esse agente ao seu CRM para que cada conversa alimenta sua base de dados automaticamente.
    `.trim(),
  },
  {
    slug: 'automacao-whatsapp-para-empresas',
    title: 'Automação de WhatsApp: o que toda empresa deveria saber',
    excerpt:
      'WhatsApp é o canal de comunicação número 1 no Brasil. Automatizá-lo corretamente pode ser o diferencial entre crescer ou estagnar.',
    date: '28 Mar 2025',
    readTime: '8 min',
    category: 'Automação',
    content: `
Com mais de 140 milhões de usuários no Brasil, o WhatsApp é muito mais do que um aplicativo de mensagens — é a principal vitrine de atendimento para a maioria das empresas brasileiras.

## Por que automação e não apenas um atendente

A diferença entre um atendente humano e um agente de IA não está na qualidade da resposta em situações complexas — está na consistência, disponibilidade e escala.

Um atendente humano:
- Responde em horário comercial
- Comete erros por cansaço
- Não escala sem custo

Um agente de IA:
- Responde 24/7
- É consistente em cada mensagem
- Escala sem custo marginal

## Casos de uso reais

**Restaurantes:** confirmação de reservas, cardápio digital, pedidos de delivery, campanhas de aniversário.

**Clínicas:** agendamento, confirmação de consultas, lembretes, pré-atendimento.

**Prefeituras:** triagem de demandas, encaminhamento para departamentos, status de solicitações.

**Empresas B2B:** qualificação de leads, agendamento de reuniões, envio de propostas.

## A armadilha do bot simples

Chatbots com menus de opções (1 para sim, 2 para não) já não funcionam. O usuário abandona. O que funciona em 2025 são agentes conversacionais que entendem linguagem natural e respondem como um humano bem treinado faria.
    `.trim(),
  },
  {
    slug: 'crm-inteligente-para-empresas',
    title: 'CRM inteligente: como parar de perder clientes sem perceber',
    excerpt:
      'A maioria das empresas perde clientes não por mal atendimento, mas por falta de acompanhamento. Um CRM automatizado resolve isso sem contratar ninguém.',
    date: '15 Mar 2025',
    readTime: '5 min',
    category: 'CRM',
    content: `
Você sabe quantos clientes fez nos últimos 90 dias? Sabe quantos voltaram? Sabe quantos foram embora sem você perceber?

Se a resposta é não para qualquer uma dessas perguntas, você provavelmente está operando sem um CRM funcional — e perdendo dinheiro de forma silenciosa.

## O que um CRM automatizado faz

Diferente de uma planilha no Google Sheets ou um caderninho, um CRM integrado ao seu WhatsApp:

1. **Registra automaticamente** cada cliente que entra em contato
2. **Classifica** o lead por estágio (novo, qualificado, fechado, perdido)
3. **Aciona follow-ups** automáticos quando um cliente some
4. **Dispara campanhas** de reengajamento para clientes inativos
5. **Gera relatórios** semanais sem você precisar montar nada

## O custo do esquecimento

Um cliente que comprou uma vez e não recebeu nenhum contato nos 60 dias seguintes tem 4× mais chance de ir para a concorrência. Campanhas de reativação custam 5× menos do que adquirir um cliente novo.

## Implementação real

Com Airtable + N8N + WhatsApp, é possível ter um CRM completo rodando em menos de uma semana. Sem necessidade de Salesforce ou HubSpot — que custam caro e são complexos demais para a maioria das PMEs brasileiras.

O resultado: você para de perder clientes que já conquistou.
    `.trim(),
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
