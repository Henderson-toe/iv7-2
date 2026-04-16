# SOP — Produto 1: Site Integrado
**Standard Operating Procedure — Execução Completa**
**Versão 1.0 | Abril 2026**

---

## O que este documento é

Este documento descreve **cada passo** da entrega do Produto 1 (Site Integrado) da IV7, do momento em que o cliente assina até o momento em que o site está no ar e o cliente sabe usar.

Qualquer pessoa que leia este documento e tenha acesso às ferramentas deve conseguir entregar o produto **sem precisar perguntar ao CEO**.

---

## Visão Geral do Produto

**O que entrega ao cliente:**
- Site responsivo (funciona em celular e computador)
- Cardápio digital ou lista de serviços
- Botão de WhatsApp integrado para reservas/pedidos/contato
- Google Meu Negócio configurado e vinculado
- Domínio .com.br ou .com registrado
- Hospedagem ativa por 12 meses (incluída na mensalidade)
- SEO básico (aparece no Google com o nome do negócio)

**Ferramentas utilizadas:**
- Framer (construção do site)
- Google Domains ou Registro.br (domínio)
- Google Search Console (indexação no Google)
- Google Meu Negócio (perfil local)
- WhatsApp Business API via link direto (wa.me)

**Prazo de entrega:** 14 dias a partir do kickoff
**Responsável:** COO

---

## Fase 0 — Pré-kickoff (Dia 0 — Assinatura)

Tarefas do CMO/CRO antes de passar para o COO:

- [ ] Contrato assinado e arquivo salvo na pasta do cliente no Google Drive
- [ ] Dados básicos do cliente coletados: nome do negócio, CNPJ ou CPF, endereço, WhatsApp, e-mail
- [ ] Pasta criada no Google Drive: `Clientes / [Nome do Cliente] / Produto 1 — Site`
- [ ] Cliente adicionado ao CRM com status "Em implementação"
- [ ] Data de kickoff agendada (dentro de 3 dias da assinatura)

---

## Fase 1 — Kickoff e Coleta de Materiais (Dias 1–3)

### Reunião de Kickoff (45–60 min)
**Responsável:** COO
**Objetivo:** Alinhar expectativas e coletar TODOS os materiais necessários antes de começar.

**Pauta:**
1. Apresentar o cronograma de 14 dias (mostrar a tabela abaixo)
2. Explicar o que vai ser entregue em cada etapa
3. Explicar o processo de aprovação (cliente aprova cada etapa antes de avançar)
4. Coletar materiais (checklist abaixo)
5. Definir canal de comunicação (WhatsApp Business preferido)
6. Definir quem é o ponto de contato do lado do cliente

### Checklist de Coleta de Materiais

**Identidade visual:**
- [ ] Logo em PNG com fundo transparente (alta resolução, mínimo 500px)
- [ ] Se não tiver logo: solicitar nome preferido para escrever + cor favorita
- [ ] Paleta de cores do negócio (se tiver)
- [ ] Fonte preferida (se souber)

**Conteúdo do site:**
- [ ] Fotos do estabelecimento (mínimo 8, quanto mais melhor) — aceitar WhatsApp
- [ ] Fotos dos produtos/pratos/serviços (mínimo 5)
- [ ] Cardápio ou lista de serviços atualizado (PDF, foto, ou lista no WhatsApp)
- [ ] Texto "Sobre nós" — história do negócio (pode ser breve, 3-5 frases)
- [ ] Slogan ou frase do negócio (se tiver)
- [ ] Diferenciais do negócio: "o que nos torna especiais?" (2-3 pontos)

**Informações operacionais:**
- [ ] Endereço completo com CEP
- [ ] Horário de funcionamento (todos os dias da semana)
- [ ] Número do WhatsApp de atendimento
- [ ] E-mail de contato (se tiver)
- [ ] Instagram e/ou outras redes sociais (para linkar)
- [ ] Formas de pagamento aceitas

**Acesso e registros:**
- [ ] E-mail para criar conta no Google (ou acesso à conta Google existente)
- [ ] Domínio já registrado? Se sim, qual? Acesso ao painel do domínio?
- [ ] Google Meu Negócio já existe? Se sim, acesso por e-mail

**Atenção:** Não comece a construir antes de ter pelo menos 80% dos materiais. Se faltar algo crítico (logo, fotos), aguardar 48h. Se não chegar, usar placeholder e comunicar ao cliente.

---

## Fase 2 — Desenvolvimento do Site (Dias 4–10)

### Passo 1 — Preparação do Ambiente (Dia 4)

1. **Acessar o Framer** (framer.com) com a conta IV7
2. **Criar novo projeto:** `[Nome do Cliente] — Site IV7`
3. **Selecionar template base:**
   - Para restaurantes: usar template de restaurante (buscar em Framer Community)
   - Para clínicas: usar template profissional de saúde
   - Para comércio: usar template de e-commerce/vitrine
4. **Organizar materiais:** Fazer upload de todas as fotos e logo no projeto
5. **Definir paleta de cores:** Configurar as cores do cliente no sistema de design do Framer

### Passo 2 — Estrutura das Páginas (Dias 4–5)

**Páginas obrigatórias para todo site IV7:**
1. **Home (Início)** — Apresentação principal com chamada para ação (WhatsApp)
2. **Sobre** — História, missão, diferenciais
3. **Cardápio / Serviços** — Lista ou galeria do que oferecem
4. **Contato** — Endereço, mapa (Google Maps embed), WhatsApp, horários

**Seções obrigatórias na Home:**
- [ ] Hero section com foto principal + slogan + botão WhatsApp
- [ ] Seção "Quem somos" (resumida)
- [ ] Destaques do cardápio/serviços (3-6 itens em cards)
- [ ] Botão/banner de CTA para WhatsApp ou reserva
- [ ] Rodapé com endereço, horários, redes sociais

### Passo 3 — Construção das Páginas (Dias 5–7)

**Checklist de construção:**

*Home:*
- [ ] Foto hero carregada e otimizada (comprimida para <500KB)
- [ ] Slogan/headline principal definido
- [ ] Botão WhatsApp com link `wa.me/55[número sem espaço ou traço]`
- [ ] Seção de destaques com fotos e descrições
- [ ] CTA secundário (reservas ou localização)
- [ ] Rodapé completo

*Sobre:*
- [ ] Foto do espaço ou do dono (humaniza)
- [ ] Texto "nossa história" (150-300 palavras)
- [ ] 3 diferenciais visuais (ícone + texto curto)

*Cardápio/Serviços:*
- [ ] Layout de grid ou lista com foto + nome + descrição + preço (se aplicável)
- [ ] Organizado por categorias
- [ ] Botão de WhatsApp ao final ("Quer pedir? Fale conosco")

*Contato:*
- [ ] Google Maps embed do endereço
- [ ] Horário de funcionamento (todos os dias)
- [ ] Botão WhatsApp grande e visível
- [ ] Links para redes sociais

### Passo 4 — Responsividade Mobile (Dia 7–8)

**Testar e ajustar cada página em:**
- [ ] Tela de celular (375px — iPhone SE)
- [ ] Tela de celular médio (390px — iPhone 14)
- [ ] Tela de tablet (768px)
- [ ] Tela de desktop (1280px)

**Erros comuns a verificar:**
- Textos cortados ou sobrepostos no celular
- Imagens distorcidas
- Botões muito pequenos para toque
- Menu não funciona no mobile
- Velocidade de carregamento: testar com Google PageSpeed (meta: >70/100)

### Passo 5 — SEO Básico (Dia 8)

Para cada página do site:
- [ ] **Title tag:** Nome do negócio + cidade + tipo de serviço (ex: "Restaurante Sabor Nordeste — Boa Vista RR")
- [ ] **Meta description:** 150-160 caracteres descrevendo o negócio
- [ ] **Alt text nas imagens:** Descrever o que aparece (ex: "foto do ambiente do restaurante")
- [ ] **URL amigável:** `/sobre`, `/cardapio`, `/contato` (sem acentos ou espaços)

### Passo 6 — Integrações (Dia 8–9)

- [ ] **WhatsApp Business:** Testar link wa.me em 3 dispositivos diferentes
- [ ] **Google Maps:** Embed funcionando e mostrando endereço correto
- [ ] **Instagram:** Link no rodapé abrindo perfil correto
- [ ] **Google Analytics (opcional):** Instalar código de acompanhamento

---

## Fase 3 — Revisão Interna e Aprovação do Cliente (Dias 9–11)

### Revisão Interna (Dia 9)
**Responsável:** COO faz revisão usando o checklist abaixo

**Checklist de qualidade IV7:**
- [ ] Todas as páginas estão construídas?
- [ ] Todas as fotos estão carregadas (não há placeholders visíveis)?
- [ ] Todos os textos estão revisados (sem erros de português)?
- [ ] Todos os links funcionam (WhatsApp, redes sociais, mapa)?
- [ ] Site funciona no celular sem erros?
- [ ] Velocidade de carregamento >70 no PageSpeed?
- [ ] Título e meta description de cada página estão preenchidos?
- [ ] O botão de WhatsApp aparece em todas as páginas?

**Se algum item falhar:** corrigir antes de enviar ao cliente.

### Apresentação ao Cliente — Versão 1 (Dia 10)

**Como apresentar:**
1. Gerar link de preview do Framer (sem publicar ainda)
2. Enviar via WhatsApp com a mensagem:

```
"[Nome], sua versão 1 está pronta para revisão! 🎉

Acesse o link: [link do preview]

Por favor, revise com atenção:
- As informações estão corretas?
- As fotos estão boas?
- Tem algo que precisa mudar?

Me responde até [data: 2 dias a partir de hoje] para conseguirmos entregar no prazo. 
Pode mandar o feedback aqui no WhatsApp mesmo!"
```

### Coleta e Implementação de Feedback (Dias 10–11)

**Regras de feedback:**
- Aceitar até 2 rodadas de ajustes sem custo adicional
- Alterações estruturais (mudar layout completo, trocar todas as fotos) podem gerar custo adicional
- Manter um registro das alterações solicitadas

**Tipos de feedback e como tratar:**

| Tipo | Exemplo | Prazo de ajuste |
|---|---|---|
| Texto errado | "Meu telefone está errado" | Corrigir em 2h |
| Foto diferente | "Prefiro essa foto nessa seção" | Corrigir em 4h |
| Cor ou estilo | "Não gostei dessa cor no botão" | Corrigir em 4h |
| Nova seção | "Quero adicionar uma seção de depoimentos" | Avaliar prazo (1-2 dias) |
| Mudança total de layout | "Quero mudar tudo" | Conversar com CEO sobre escopo |

---

## Fase 4 — Publicação e Configuração de Domínio (Dias 11–13)

### Passo 1 — Registrar ou Configurar Domínio

**Se o cliente não tem domínio:**
1. Acessar Registro.br (registro.br)
2. Verificar disponibilidade: `[nomedonegocio].com.br`
3. Alternativas se indisponível: `.com`, `-bv.com.br`, `-rr.com.br`
4. Registrar usando CNPJ do cliente (ou CPF se MEI) — **importante: registrar no nome do cliente**
5. Custo: R$40/ano (Registro.br) — incluído na mensalidade do primeiro ano

**Se o cliente já tem domínio:**
1. Solicitar acesso ao painel do registrador (Registro.br, GoDaddy, etc.)
2. Acessar configurações de DNS

### Passo 2 — Conectar Domínio ao Framer

1. No Framer: `Settings > Domains > Add domain`
2. Inserir o domínio do cliente
3. O Framer vai fornecer os registros DNS necessários (CNAME ou A record)
4. Acessar painel do domínio e configurar os registros DNS informados pelo Framer
5. Aguardar propagação: pode levar de 30 min a 48h

### Passo 3 — Publicar o Site

1. No Framer: `Publish` — publicar para o domínio configurado
2. Testar o site no domínio final (não no link de preview)
3. Verificar HTTPS (cadeado verde no navegador) — o Framer configura automaticamente
4. Testar em celular usando o domínio final

### Passo 4 — Google Meu Negócio

**Se o cliente não tem perfil:**
1. Acessar business.google.com
2. Criar perfil com: nome do negócio, categoria, endereço, telefone, site
3. Solicitar verificação por cartão postal (chega em 5-14 dias) ou por telefone se disponível
4. Adicionar fotos do estabelecimento (mínimo 5)
5. Configurar horário de funcionamento

**Se o cliente já tem perfil:**
1. Verificar se as informações estão corretas e atualizadas
2. Adicionar o novo site ao perfil
3. Atualizar fotos se necessário

### Passo 5 — Google Search Console (indexação)

1. Acessar search.google.com/search-console
2. Adicionar propriedade com o domínio do cliente
3. Verificar propriedade (via meta tag no Framer ou via DNS)
4. Enviar sitemap: `[dominio]/sitemap.xml`
5. Solicitar indexação das URLs principais

---

## Fase 5 — Treinamento e Entrega (Dia 14)

### Reunião de Entrega (30–45 min)

**Objetivo:** Cliente sai sabendo usar e ciente de como solicitar suporte.

**Pauta:**
1. Fazer um tour pelo site ao vivo (mostrar todas as páginas)
2. Mostrar como o site aparece no celular
3. Mostrar o Google Meu Negócio (se já verificado)
4. Explicar o que o cliente pode atualizar por conta própria vs. o que precisa acionar a IV7
5. Informar o canal de suporte (WhatsApp do COO)
6. Apresentar o próximo passo: check-in de 30 dias

**O que o cliente pode fazer sozinho:**
- Compartilhar o link do site para clientes
- Adicionar fotos no Google Meu Negócio
- Responder avaliações do Google

**O que o cliente precisa acionar a IV7:**
- Atualização de cardápio/serviços
- Troca de fotos no site
- Correção de informações
- Qualquer alteração de texto ou layout

### Entregáveis Finais ao Cliente

Enviar via WhatsApp e e-mail:
- [ ] Link do site publicado
- [ ] Link do Google Meu Negócio
- [ ] E-mail de acesso à conta Google criada (se criou para ele)
- [ ] Documento de senha/acesso (salvar também na pasta do cliente no Drive)
- [ ] NF (Nota Fiscal) da entrega

---

## Fase 6 — Pós-entrega e Manutenção

### Check-in de 7 dias
```
"[Nome], já faz uma semana do site no ar! Como está indo?
O site está funcionando bem no seu celular?
Alguém já acessou ou entrou em contato pelo site?
Qualquer ajuste que precise, é só falar."
```

### Check-in de 30 dias (Reunião de Resultados)
- Acessar Google Search Console: quantas impressões? Quantos cliques?
- Acessar Google Meu Negócio: quantas visualizações de perfil?
- Perguntar: "Alguém chegou ao seu negócio através do site ou do Google?"
- Identificar o que pode melhorar
- Apresentar dados ao cliente como prova de resultado

### Manutenção Mensal (Inclusa na Mensalidade)
O que a IV7 faz mensalmente para manter o site:
- [ ] Verificar se o site está no ar (uptime)
- [ ] Verificar se o domínio está ativo (não venceu)
- [ ] Verificar se não há erros no Google Search Console
- [ ] Atualizar conteúdo se o cliente solicitar (até 2 alterações/mês incluídas)
- [ ] Renovar hospedagem anualmente (incluída na mensalidade)

---

## Problemas Comuns e Soluções

| Problema | Causa provável | Solução |
|---|---|---|
| Site lento | Imagens muito pesadas | Comprimir imagens no TinyPNG antes de subir |
| Domínio não conecta | DNS não propagou | Aguardar até 48h; verificar registros no Registro.br |
| WhatsApp não abre | Link mal formatado | Testar: `https://wa.me/5595912345678` (sem espaço ou traço) |
| Google não indexa | Search Console não enviado | Verificar se sitemap foi enviado e aprovado |
| Layout quebra no mobile | Frame com largura fixa | Usar % ou vw no Framer, não pixels absolutos |
| Logo pixelada | Arquivo em baixa resolução | Pedir novo arquivo ao cliente ou usar o nome em tipografia |
| Google Meu Negócio suspenso | Informações inconsistentes | Verificar se nome + endereço batem com o cadastro do CNPJ |

---

## Pasta do Cliente — Estrutura no Google Drive

```
Clientes/
└── [Nome do Cliente]/
    ├── Contrato/
    │   └── Contrato_Assinado.pdf
    ├── Produto 1 — Site/
    │   ├── Materiais do Cliente/
    │   │   ├── Fotos/
    │   │   ├── Logo/
    │   │   └── Textos/
    │   ├── Credenciais/
    │   │   └── Acessos_[cliente].txt (PRIVADO)
    │   ├── Entregas/
    │   │   └── Link_Site.txt
    │   └── Acompanhamento/
    │       └── Relatorio_30_dias.pdf
```

---

## Checklist Final de Entrega — Produto 1

Antes de declarar o produto entregue, verificar TODOS os itens:

**Site:**
- [ ] Todas as páginas construídas e com conteúdo real (sem placeholder)
- [ ] Site responsivo em celular e desktop
- [ ] Todos os links funcionando
- [ ] Botão WhatsApp presente em todas as páginas
- [ ] Velocidade >70 no PageSpeed
- [ ] HTTPS ativo (cadeado verde)
- [ ] Domínio do cliente conectado

**SEO e Google:**
- [ ] Title tag e meta description em cada página
- [ ] Google Meu Negócio configurado
- [ ] Search Console configurado e sitemap enviado

**Entrega ao cliente:**
- [ ] Reunião de entrega realizada
- [ ] Cliente recebeu todos os links e acessos
- [ ] NF emitida
- [ ] Status no CRM atualizado para "Ativo"
- [ ] Check-in de 7 dias agendado

---

*SOP IV7 — Não compartilhar externamente — Versão 1.0*
