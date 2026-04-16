# SOP — Produto 3: Automações Operacionais
**Standard Operating Procedure — Execução Completa**
**Versão 1.0 | Abril 2026**

---

## O que este documento é

Este documento descreve cada passo da entrega do Produto 3 (Automações Operacionais) da IV7. Qualquer pessoa com acesso às ferramentas e leitura deste documento deve conseguir entregar o produto completo sem consultar o CEO.

---

## Visão Geral do Produto

**O que entrega ao cliente:**
- Integração com iFood e/ou Rappi (recebe notificações de novos pedidos automáticas)
- Relatório de vendas diário enviado por WhatsApp toda manhã
- Alerta de estoque crítico (quando item atinge quantidade mínima)
- Notificação de pedido confirmado para o time de cozinha/operação
- Dashboard semanal de performance (volume de pedidos, ticket médio, itens mais vendidos)

**Ferramentas utilizadas:**
- N8N (motor de automação central)
- iFood API / Rappi API (ou scraping via webhook, dependendo do acesso)
- Google Sheets (armazenamento e relatórios)
- Evolution API / WhatsApp (envio de notificações)
- Airtable (se o cliente já tem Produto 2, integrar)

**Prazo de entrega:** 14 dias a partir do kickoff
**Responsável:** COO

**Observação importante:** Este produto tem maior variação de escopo dependendo do negócio do cliente. A entrega deve ser customizada conforme o diagnóstico.

---

## Fase 0 — Pré-kickoff

- [ ] Contrato assinado e salvo no Google Drive
- [ ] Pasta criada: `Clientes / [Nome do Cliente] / Produto 3 — Automações`
- [ ] Levantar: o cliente tem iFood? Rappi? Ambos? Nenhum?
- [ ] Levantar: o cliente tem sistema de gestão (PDV) próprio? Qual?
- [ ] Confirmar número de WhatsApp para receber notificações operacionais

---

## Fase 1 — Kickoff e Diagnóstico Técnico (Dias 1–3)

### Reunião de Kickoff (45–60 min)

**Perguntas obrigatórias:**

1. "Você usa iFood, Rappi ou outra plataforma de delivery? Tem login e senha disponível?"
2. "Quantos pedidos você recebe por dia em média? Em horário de pico?"
3. "Qual é o maior problema operacional hoje? (pedido errado, atraso, comunicação entre caixa e cozinha)"
4. "Você tem sistema de controle de estoque hoje? Planilha, caderneta, sistema?"
5. "Quem precisa receber as notificações? (só o dono, ou também gerente/cozinheiro?)"
6. "Qual horário você quer receber o relatório de vendas do dia anterior?"
7. "Quais são os itens que mais acabam e causam problema quando faltam?"
8. "Você tem PDV (sistema de caixa)? Qual sistema?"

**Mapeamento de integrações possíveis:**

| Sistema | Disponível? | Tipo de integração |
|---|---|---|
| iFood | Sim / Não | API oficial ou webhook |
| Rappi | Sim / Não | API ou notificação manual |
| PDV próprio (Linx, Totvs, etc.) | Sim / Não | API do PDV (caso a caso) |
| WhatsApp | Sim | Evolution API |
| Google Sheets | Criar | Padrão IV7 |

**Resultado do kickoff:** Definir exatamente o que será automatizado para este cliente específico.

---

## Fase 2 — Configuração do Google Sheets (Base de Dados) (Dias 4–5)

### Estrutura padrão da planilha de operação

Criar planilha no Google Sheets: `Operação — [Nome do Cliente]`

**Aba 1: PEDIDOS**

| Coluna | Tipo | Descrição |
|---|---|---|
| ID do Pedido | Texto | Número do pedido da plataforma |
| Plataforma | Texto | iFood / Rappi / Direto |
| Data e Hora | Data/hora | Quando foi feito |
| Status | Texto | Novo / Confirmado / Em preparo / Entregue / Cancelado |
| Itens | Texto | Lista de itens do pedido |
| Total (R$) | Número | Valor total do pedido |
| Tempo de preparo (min) | Número | Do aceite à entrega |
| Observações | Texto | Notas do pedido |

**Aba 2: ESTOQUE**

| Coluna | Tipo | Descrição |
|---|---|---|
| Item | Texto | Nome do produto/ingrediente |
| Unidade | Texto | Kg, unidade, litro, etc. |
| Estoque Atual | Número | Quantidade atual |
| Estoque Mínimo | Número | Abaixo disso, alerta é disparado |
| Última Atualização | Data | Quando foi atualizado |
| Responsável | Texto | Quem atualizou |

**Aba 3: RELATÓRIO DIÁRIO** (preenchida automaticamente pelo N8N)

| Coluna | Descrição |
|---|---|
| Data | Dia do relatório |
| Total de Pedidos | Soma do dia |
| Faturamento Total | Soma dos valores |
| Ticket Médio | Faturamento ÷ Pedidos |
| Pedidos iFood | Qtd. pedidos do iFood |
| Pedidos Rappi | Qtd. pedidos do Rappi |
| Pedidos Diretos | Qtd. pedidos diretos |
| Item mais vendido | Item com mais ocorrências |
| Cancelamentos | Qtd. pedidos cancelados |

---

## Fase 3 — Configuração do N8N (Automações) (Dias 5–11)

### Passo 1 — Credenciais necessárias no N8N

- [ ] Google Sheets API (OAuth2 com a conta do cliente)
- [ ] iFood Merchant API (requer cadastro como parceiro de integração)
- [ ] Rappi Partners API (se aplicável)
- [ ] Evolution API / WhatsApp
- [ ] Airtable (se o cliente tem Produto 2)

**Atenção sobre iFood API:**
A API oficial do iFood requer aprovação como parceiro integrador. Processo:
1. Acessar developer.ifood.com.br
2. Cadastrar a IV7 como parceira de integração
3. Aguardar aprovação (pode levar 3-7 dias)
4. Após aprovação, usar Client ID e Client Secret fornecidos

**Alternativa enquanto aguarda aprovação do iFood:**
Configurar notificação via webhook de terceiros ou usar a API de notificação por e-mail do iFood como fallback temporário.

---

### Workflow 1 — Notificação de Novo Pedido (iFood/Rappi)

**Objetivo:** Assim que um novo pedido chega na plataforma, o dono e/ou cozinha recebem notificação imediata no WhatsApp.

**Fluxo:**
```
Webhook iFood / Rappi (novo pedido)
        ↓
N8N recebe o payload do pedido
        ↓
Extrair dados: ID, itens, valor, endereço, tempo estimado
        ↓
Registrar na aba PEDIDOS do Google Sheets
        ↓
Formatar mensagem de notificação
        ↓
Enviar para WhatsApp do dono
(e para WhatsApp da cozinha se configurado)
```

**Template de notificação de pedido:**
```
"🛵 NOVO PEDIDO — [iFood/Rappi]

📋 Pedido #[ID]
🕐 [hora]

🍽️ Itens:
[lista de itens]

💰 Total: R$ [valor]

📍 [endereço de entrega ou "Retirada no local"]

⏱️ Tempo estimado: [X] min"
```

**Para cozinha (mensagem simplificada):**
```
"🔔 PEDIDO #[ID] — [hora]
[lista de itens apenas]
Tipo: [entrega/retirada]"
```

---

### Workflow 2 — Relatório Diário de Vendas

**Objetivo:** Todo dia de manhã (horário definido pelo cliente), enviar resumo do dia anterior.

**Fluxo:**
```
Schedule Trigger (ex: toda manhã às 8h)
        ↓
Buscar no Google Sheets: todos os pedidos de ontem
        ↓
Calcular:
  - Total de pedidos
  - Faturamento total
  - Ticket médio
  - Pedidos por plataforma
  - Cancelamentos
  - Item mais vendido
        ↓
Formatar relatório
        ↓
Enviar via WhatsApp para o dono
        ↓
Salvar na aba RELATÓRIO DIÁRIO
```

**Template do relatório diário:**
```
"📊 FECHAMENTO DO DIA — [Nome do Negócio]
📅 [data de ontem]

🛵 PEDIDOS
  Total: [n] pedidos
  iFood: [n] | Rappi: [n] | Direto: [n]
  Cancelados: [n]

💰 FATURAMENTO
  Total: R$ [valor]
  Ticket médio: R$ [valor]

🏆 MAIS VENDIDO
  [item] — [n] pedidos

⏱️ TEMPO MÉDIO DE ENTREGA
  [X] minutos

Bom dia! 💪
— IV7 Automações"
```

---

### Workflow 3 — Alerta de Estoque Crítico

**Objetivo:** Quando o estoque de qualquer item cai abaixo do mínimo configurado, o responsável recebe alerta imediato.

**Fluxo:**
```
Schedule Trigger (rodar 2x ao dia: 7h e 14h)
        ↓
Buscar na aba ESTOQUE do Google Sheets
        ↓
Filtrar itens onde Estoque Atual < Estoque Mínimo
        ↓
Se há itens críticos:
        ↓
Formatar lista de itens em falta
        ↓
Enviar alerta via WhatsApp
```

**Template de alerta de estoque:**
```
"⚠️ ALERTA DE ESTOQUE — [Nome do Negócio]
[data e hora]

Os seguintes itens estão abaixo do mínimo:

🔴 [Item 1]: [quantidade atual] [unidade] (mínimo: [mínimo])
🔴 [Item 2]: [quantidade atual] [unidade] (mínimo: [mínimo])

Providenciar reposição o quanto antes!
— IV7 Automações"
```

**Como o cliente atualiza o estoque:**
Ensinar o cliente a atualizar a coluna "Estoque Atual" no Google Sheets (acessível pelo celular). Alternativa: formulário Google Forms simples que atualiza a planilha.

---

### Workflow 4 — Dashboard Semanal de Performance

**Objetivo:** Toda segunda-feira, enviar relatório da semana anterior com visão mais ampla.

**Fluxo:**
```
Schedule Trigger (toda segunda, 8h30)
        ↓
Buscar dados dos últimos 7 dias no Google Sheets
        ↓
Calcular métricas da semana:
  - Total de pedidos e faturamento
  - Comparação com semana anterior (%)
  - Melhor dia da semana
  - Pior dia da semana
  - Top 3 itens mais vendidos
  - Análise de cancelamentos
        ↓
Enviar relatório via WhatsApp
```

**Template do relatório semanal:**
```
"📈 RELATÓRIO SEMANAL — [Nome do Negócio]
Semana: [data início] – [data fim]

🛵 PEDIDOS DA SEMANA
  Total: [n] pedidos
  vs. semana anterior: [+/-X%] [↑/↓]

💰 FATURAMENTO
  Total: R$ [valor]
  vs. semana anterior: [+/-X%] [↑/↓]
  Ticket médio: R$ [valor]

📅 MELHOR DIA: [dia] — R$ [valor]
📅 MENOR DIA: [dia] — R$ [valor]

🏆 TOP 3 MAIS VENDIDOS
  1. [item] — [n] pedidos
  2. [item] — [n] pedidos
  3. [item] — [n] pedidos

❌ CANCELAMENTOS: [n] ([%] do total)

Boa semana! 💪
— IV7 Automações"
```

---

### Workflow 5 — Confirmação Automática de Pedido para Cliente (Opcional)

**Objetivo:** Quando um pedido é aceito, o cliente que pediu recebe mensagem de confirmação com tempo estimado.

**Fluxo:**
```
Webhook: pedido aceito na plataforma
        ↓
Extrair dados do cliente (nome, telefone se disponível)
        ↓
Enviar confirmação via WhatsApp
```

**Limitação:** iFood e Rappi nem sempre fornecem o telefone do cliente na API. Verificar disponibilidade no contrato de integração.

---

## Fase 4 — Configuração do Estoque Inicial (Dia 10–11)

### Com o cliente, preencher a planilha de estoque:

1. Listar todos os insumos críticos que causam problema quando acabam
2. Para cada item: quantidade atual e quantidade mínima para disparar alerta
3. Definir quem atualiza o estoque e com qual frequência
4. Treinar como atualizar via celular (Google Sheets app)

**Exemplo de configuração:**

| Item | Estoque Atual | Estoque Mínimo | Unidade |
|---|---|---|---|
| Carne moída | 5 | 2 | kg |
| Pão de hambúrguer | 80 | 30 | unid |
| Queijo mussarela | 3 | 1 | kg |
| Batata palito | 10 | 4 | kg |
| Embalagem delivery P | 150 | 50 | unid |

---

## Fase 5 — Testes Completos (Dias 11–12)

### Checklist de Testes

**Workflow 1 (notificação de pedido):**
- [ ] Fazer pedido de teste no iFood — notificação chega no WhatsApp em <30 segundos?
- [ ] Pedido é registrado no Google Sheets corretamente?
- [ ] Itens e valor estão corretos na mensagem?
- [ ] Se há cozinha configurada: cozinha também recebe?

**Workflow 2 (relatório diário):**
- [ ] Acionar manualmente para testar — relatório chega?
- [ ] Dados batem com a planilha?
- [ ] Formato está legível no celular?

**Workflow 3 (alerta de estoque):**
- [ ] Alterar um item para abaixo do mínimo — alerta chega?
- [ ] Alerta identifica o item correto e a quantidade?
- [ ] Normalizar o estoque — na próxima verificação, sem alerta?

**Workflow 4 (relatório semanal):**
- [ ] Acionar manualmente — relatório gerado com dados corretos?
- [ ] Comparação com semana anterior funciona?

**Teste geral:**
- [ ] Todos os workflows estão com status "Active" no N8N?
- [ ] Credenciais não vão expirar em menos de 30 dias?
- [ ] Google Sheets está compartilhado com a conta de serviço do N8N?

---

## Fase 6 — Treinamento e Entrega (Dias 13–14)

### Treinamento do Cliente (1–1,5h)

**Parte 1 — O que é automático (não precisa fazer nada):**
- Notificação de novo pedido (chega sozinha)
- Relatório diário (chega sozinha toda manhã)
- Relatório semanal (chega sozinha toda segunda)
- Alerta de estoque (chega quando atinge o mínimo)

**Parte 2 — O que o cliente precisa fazer:**
- Atualizar o estoque na planilha (mostrar como fazer no celular)
- Confirmar/rejeitar pedidos na plataforma (iFood/Rappi) normalmente
- Avisar a IV7 quando quiser mudar horários, mensagens ou adicionar novos itens no estoque

**Parte 3 — Resolução de problemas básicos:**
- "A notificação parou de chegar" → Avisar a IV7 imediatamente
- "O relatório tem número errado" → Pode ser pedido de plataforma não integrado ainda
- "Não consigo abrir a planilha" → IV7 verifica o compartilhamento

### Entregáveis Finais

- [ ] Link da planilha Google Sheets (visualização para o cliente)
- [ ] Número de WhatsApp testado recebendo notificações
- [ ] Documento "Como funciona suas automações IV7" (1 página)
- [ ] Credenciais salvas no Google Drive (pasta privada)
- [ ] NF emitida
- [ ] Status no CRM atualizado para "Ativo"

---

## Problemas Comuns e Soluções

| Problema | Causa provável | Solução |
|---|---|---|
| iFood não envia webhook | API não aprovada ou URL errada | Verificar configuração no portal do desenvolvedor iFood |
| Notificação duplicada | Webhook configurado duas vezes | Verificar workflows duplicados no N8N |
| Relatório com dados zerados | Filtro de data errado | Revisar formato de data no Google Sheets e no N8N |
| Alerta de estoque não para | Planilha não foi atualizada pelo cliente | Treinar cliente a atualizar; configurar lembrete semanal |
| N8N para de funcionar | Servidor reiniciou ou sessão expirou | Verificar status do N8N; reconectar credenciais |
| Google Sheets sem permissão | Conta de serviço perdeu acesso | Compartilhar planilha novamente com conta do N8N |
| WhatsApp desconectado | Sessão expirou | Reconectar via QR code no painel Evolution |

---

## Manutenção Mensal (Inclusa na Mensalidade)

- [ ] Verificar status de todos os workflows no N8N (todos ativos?)
- [ ] Verificar se a API do iFood ainda está válida (token não expirou?)
- [ ] Verificar se há erros no log do N8N nos últimos 30 dias
- [ ] Confirmar com cliente se está recebendo as notificações normalmente
- [ ] Atualizar itens de estoque se o cliente solicitar
- [ ] Renovar credenciais expiradas

---

## Estrutura de Pasta no Google Drive

```
Clientes/
└── [Nome do Cliente]/
    ├── Produto 3 — Automações/
    │   ├── Credenciais/ (PRIVADO)
    │   │   └── Acessos_API.txt
    │   ├── Configuração/
    │   │   ├── Workflows_N8N_backup.json
    │   │   └── Estrutura_Planilha.png
    │   ├── Treinamento/
    │   │   └── Como_funcionam_suas_automacoes.pdf
    │   └── Relatórios/
    │       └── [relatórios mensais salvos]
```

---

## Checklist Final — Produto 3

- [ ] Planilha Google Sheets criada com as 3 abas
- [ ] Workflow 1 (notificação de pedido) testado e funcionando
- [ ] Workflow 2 (relatório diário) testado e funcionando
- [ ] Workflow 3 (alerta de estoque) testado e funcionando
- [ ] Workflow 4 (relatório semanal) testado e funcionando
- [ ] Estoque inicial preenchido com o cliente
- [ ] Cliente treinado e recebendo notificações
- [ ] Credenciais salvas no Google Drive
- [ ] NF emitida
- [ ] Status no CRM atualizado para "Ativo"

---

*SOP IV7 — Não compartilhar externamente — Versão 1.0*
