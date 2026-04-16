# SOP — Produto 2: CRM de Relacionamento
**Standard Operating Procedure — Execução Completa**
**Versão 1.0 | Abril 2026**

---

## O que este documento é

Este documento descreve cada passo da entrega do Produto 2 (CRM de Relacionamento) da IV7. Qualquer pessoa com acesso às ferramentas e leitura deste documento deve conseguir entregar o produto completo sem consultar o CEO.

---

## Visão Geral do Produto

**O que entrega ao cliente:**
- Base de dados centralizada de todos os clientes (nome, contato, histórico)
- Registro automático de novas visitas/reservas via WhatsApp
- Confirmação automática de reservas ou agendamentos
- Alerta automático de aniversário do cliente (mensagem personalizada)
- Relatório semanal automático (quantos clientes, frequência, novos vs. recorrentes)
- Painel de visualização simples (Airtable) para o dono consultar

**Ferramentas utilizadas:**
- Airtable (banco de dados e painel do cliente)
- N8N (automações e integrações)
- Evolution API ou WhatsApp Business API (mensagens automáticas)
- Google Sheets (relatórios, alternativa mais simples se necessário)

**Prazo de entrega:** 14 dias a partir do kickoff
**Responsável:** COO

---

## Fase 0 — Pré-kickoff

Tarefas antes de iniciar:
- [ ] Contrato assinado salvo no Google Drive
- [ ] Pasta criada: `Clientes / [Nome do Cliente] / Produto 2 — CRM`
- [ ] Decisão tomada: usar WhatsApp pessoal do cliente ou criar número novo?
  - **Recomendado:** Criar número novo dedicado ao atendimento (chip pré-pago ou VoIP)
  - **Se impossível:** Usar o número existente (limitações no uso simultâneo)
- [ ] Número do WhatsApp de atendimento confirmado com o cliente

---

## Fase 1 — Kickoff e Coleta de Requisitos (Dias 1–3)

### Reunião de Kickoff (45–60 min)

**Perguntas obrigatórias a fazer ao cliente:**

1. "Quantos clientes novos você recebe por semana em média?"
2. "Como seus clientes fazem reserva/agendamento hoje? (WhatsApp, telefone, pessoalmente)"
3. "Você já tem alguma lista de clientes salvos? (planilha, agenda, caderneta)"
4. "Que tipo de informação você quer saber sobre seus clientes?"
5. "Você quer que a confirmação de reserva seja enviada automaticamente? Em quanto tempo antes?"
6. "Prefere que o bot responda 24h ou só no horário de funcionamento?"
7. "Qual é a mensagem que você gostaria de mandar no aniversário do cliente?"

**Decisões a tomar durante o kickoff:**
- [ ] Definir campos do cadastro de cliente (nome, telefone, data de nascimento, preferências)
- [ ] Definir o fluxo de reserva: Como o cliente inicia? O bot pergunta o quê?
- [ ] Definir horário de funcionamento do bot
- [ ] Definir tom de comunicação (formal/informal, emoji ou não)
- [ ] Definir frequência do relatório semanal (dia e horário)

### Checklist de Materiais a Coletar

- [ ] Número do WhatsApp dedicado ao CRM (com chip ativo e carregado)
- [ ] Acesso ao Google Account (para criar Airtable e integrar com N8N)
- [ ] Lista de clientes existentes se houver (qualquer formato: foto de caderneta, planilha, etc.)
- [ ] Logotipo para personalizar mensagens (opcional)
- [ ] Textos de mensagem padrão aprovados pelo cliente:
  - Mensagem de boas-vindas ao novo cliente
  - Confirmação de reserva
  - Lembrete de reserva (1h antes)
  - Mensagem de aniversário
  - Resposta para horário fora de funcionamento

---

## Fase 2 — Configuração do Airtable (Base de Dados) (Dias 4–6)

### Passo 1 — Criar a Base no Airtable

1. Acessar airtable.com com a conta IV7 (ou criar workspace para o cliente)
2. Criar novo Base: `CRM — [Nome do Cliente]`
3. Criar as seguintes tabelas:

**Tabela 1: CLIENTES**
| Campo | Tipo | Descrição |
|---|---|---|
| Nome | Texto (linha única) | Nome completo do cliente |
| Telefone | Número de telefone | Número com DDD |
| Data de Nascimento | Data | Para alerta de aniversário |
| Data da Primeira Visita | Data | Quando virou cliente |
| Total de Visitas | Número (calculado) | Conta as linhas da tabela Visitas |
| Última Visita | Data (lookup) | Busca data mais recente da tabela Visitas |
| Status | Seleção única | Ativo / Inativo / VIP |
| Observações | Texto longo | Preferências, alergias, notas |
| Canal de origem | Seleção única | WhatsApp / iFood / Indicação / Pessoalmente |

**Tabela 2: RESERVAS / VISITAS**
| Campo | Tipo | Descrição |
|---|---|---|
| Cliente | Link para CLIENTES | Quem reservou |
| Data e Horário | Data/hora | Quando é a reserva |
| Número de pessoas | Número | Quantas pessoas |
| Status | Seleção única | Pendente / Confirmada / Cancelada / Realizada |
| Observações | Texto | Pedidos especiais |
| Data de Criação | Data criação automática | Quando entrou no sistema |

**Tabela 3: RELATÓRIOS** (opcional, para histórico)
| Campo | Tipo | Descrição |
|---|---|---|
| Semana | Texto | "Semana 15/04 – 21/04" |
| Total de reservas | Número | Soma da semana |
| Clientes novos | Número | Novos cadastros |
| Taxa de comparecimento | % | Realizadas / Confirmadas |
| Gerado em | Data | Data de criação |

### Passo 2 — Configurar Views (Visualizações)

No Airtable, criar as seguintes views na tabela CLIENTES:
- **Todos os Clientes** (padrão — sem filtro)
- **Clientes VIP** (filtro: Status = VIP)
- **Aniversariantes do Mês** (filtro: Data de Nascimento no mês atual)
- **Inativos** (filtro: Última Visita > 60 dias atrás)

Na tabela RESERVAS:
- **Hoje** (filtro: Data = hoje)
- **Esta Semana** (filtro: Data = esta semana)
- **Pendentes** (filtro: Status = Pendente)

### Passo 3 — Importar Clientes Existentes

Se o cliente tem lista de clientes:
1. Organizar em planilha Google Sheets com as colunas: Nome, Telefone, Data de Nascimento (se souber)
2. No Airtable: `Import > CSV`
3. Mapear as colunas corretamente
4. Verificar 10 registros aleatórios após importação

Se não há lista prévia: base começa vazia e popula automaticamente a partir do bot.

---

## Fase 3 — Configuração do N8N (Automações) (Dias 5–9)

### Passo 1 — Ambiente N8N

**Se usando N8N Cloud (recomendado para início):**
1. Acessar n8n.cloud com a conta IV7
2. Criar novo workflow: `[Nome do Cliente] — CRM Principal`

**Se usando N8N self-hosted:**
1. Verificar se o servidor está ativo
2. Acessar a instância e criar os workflows

### Passo 2 — Configurar Credenciais

No N8N, configurar as seguintes credenciais (Settings > Credentials):
- [ ] Airtable API Key (conta IV7 ou conta do cliente)
- [ ] Evolution API / WhatsApp URL e Token
- [ ] Google Sheets (se for usar para relatórios)

### Passo 3 — Workflow 1: Bot de Reservas no WhatsApp

**Objetivo:** Quando cliente manda mensagem no WhatsApp, o bot responde, coleta informações e registra a reserva no Airtable.

**Fluxo do bot:**

```
Cliente manda mensagem
        ↓
Webhook N8N recebe (via Evolution API)
        ↓
Verificar horário (dentro do horário de funcionamento?)
    ├── Não → Enviar mensagem "fora do horário" → Fim
    └── Sim → Continuar
        ↓
Verificar se é novo cliente (buscar telefone no Airtable)
    ├── Novo → Salvar novo cliente + enviar boas-vindas
    └── Existente → Recuperar dados + enviar saudação personalizada
        ↓
Perguntar: "Deseja fazer uma reserva ou tem alguma dúvida?"
        ↓
Se reserva → Perguntar: Data, horário, número de pessoas
        ↓
Confirmar os dados com o cliente
        ↓
Registrar reserva no Airtable (tabela RESERVAS)
        ↓
Enviar confirmação ao cliente + número de protocolo
        ↓
Notificar o dono (WhatsApp ou e-mail) sobre nova reserva
```

**Nodes necessários no N8N:**

| Node | Função |
|---|---|
| Webhook | Receber mensagens do WhatsApp |
| Function / Code | Processar texto, extrair dados |
| IF | Verificar condições (horário, cliente novo, etc.) |
| Airtable | Buscar e criar registros |
| HTTP Request | Enviar mensagens via Evolution API |
| Schedule Trigger | Para envios automáticos agendados |
| Wait | Para aguardar resposta do cliente |

**Template de mensagens do bot:**

```
Boas-vindas (novo cliente):
"Olá! 😊 Sou o atendimento virtual do [Nome do Negócio].
Seja bem-vindo(a)! Como posso te ajudar hoje?
1️⃣ Fazer uma reserva
2️⃣ Ver horário de funcionamento
3️⃣ Falar com um atendente"

Saudação (cliente existente):
"Olá, [Nome]! Que bom ter você de volta! 😊
Como posso te ajudar hoje?
1️⃣ Fazer uma reserva
2️⃣ Ver horário de funcionamento
3️⃣ Falar com um atendente"

Confirmação de reserva:
"✅ Reserva confirmada!
📅 Data: [data]
🕐 Horário: [hora]
👥 Pessoas: [número]
📍 [Endereço do negócio]

Te esperamos! Qualquer dúvida é só falar."

Fora do horário:
"Olá! No momento estamos fora do horário de atendimento.
⏰ Atendemos: [horários]
Vou registrar sua mensagem e retornaremos em breve!"
```

### Passo 4 — Workflow 2: Lembrete Automático de Reserva

**Objetivo:** 2 horas antes de cada reserva, enviar lembrete automático ao cliente.

**Fluxo:**
```
Schedule Trigger (roda a cada hora)
        ↓
Buscar no Airtable: reservas confirmadas para as próximas 2 horas
        ↓
Para cada reserva encontrada:
        ↓
Verificar se lembrete já foi enviado
    └── Se não → Enviar mensagem de lembrete ao cliente
              → Marcar como "lembrete enviado" no Airtable
```

**Template de lembrete:**
```
"Olá, [Nome]! 🔔 
Lembrete: sua reserva hoje é às [hora]!
👥 [número] pessoas
📍 [Endereço]

Nos vemos em breve! Qualquer imprevisto, avisa a gente!"
```

### Passo 5 — Workflow 3: Alerta de Aniversário

**Objetivo:** No dia do aniversário de cada cliente, enviar mensagem personalizada.

**Fluxo:**
```
Schedule Trigger (roda todo dia às 9h)
        ↓
Buscar no Airtable: clientes com Data de Nascimento = hoje
        ↓
Para cada aniversariante:
        ↓
Enviar mensagem de aniversário
```

**Template de aniversário:**
```
"Feliz Aniversário, [Nome]! 🎉🎂

O [Nome do Negócio] deseja um dia incrível para você!

Como presente, venha nos visitar e ganhe [benefício — ex: uma sobremesa grátis / 10% de desconto].
Oferta válida até [data: fim de semana após aniversário].

Te esperamos! 🥂"
```

**Importante:** O benefício de aniversário deve ser aprovado pelo cliente antes de configurar.

### Passo 6 — Workflow 4: Relatório Semanal

**Objetivo:** Toda segunda-feira às 8h, enviar relatório da semana anterior ao dono do negócio.

**Fluxo:**
```
Schedule Trigger (toda segunda, 8h)
        ↓
Buscar no Airtable: dados da semana passada
    - Total de reservas
    - Reservas realizadas vs. canceladas
    - Novos clientes cadastrados
    - Clientes que voltaram (recorrentes)
        ↓
Formatar relatório em texto
        ↓
Enviar via WhatsApp para o dono
```

**Template de relatório:**
```
"📊 RELATÓRIO SEMANAL — [Nome do Negócio]
Semana: [data início] a [data fim]

📅 Reservas
  - Total: [n]
  - Realizadas: [n] ✅
  - Canceladas: [n] ❌
  - Taxa de comparecimento: [%]

👥 Clientes
  - Novos cadastros: [n]
  - Clientes recorrentes: [n]
  - Total na base: [n]

🎂 Aniversariantes próximos 7 dias: [n]
[Nomes se houver]

Bom início de semana! 💪
— IV7 Automações"
```

### Passo 7 — Workflow 5: Reativação de Clientes Inativos (Opcional, Fase 2)

**Objetivo:** Clientes que não voltam há mais de 45 dias recebem mensagem de reativação.

```
Schedule Trigger (toda semana)
        ↓
Buscar clientes com Última Visita > 45 dias e sem reserva futura
        ↓
Enviar mensagem de reativação
```

**Template:**
```
"Olá, [Nome]! Faz um tempo que não te vemos por aqui... 😊

Saudade! Que tal uma visita ao [Nome do Negócio]?

[Oferta especial se aplicável]

Te esperamos! 🍽️"
```

---

## Fase 4 — Testes Completos (Dias 10–11)

### Checklist de Testes

**Teste do bot de reservas:**
- [ ] Enviar mensagem "Oi" para o número do bot — recebe boas-vindas?
- [ ] Fazer simulação de reserva completa — registra no Airtable?
- [ ] Testar fora do horário de funcionamento — resposta correta?
- [ ] Testar com número de "cliente existente" — saudação personalizada?
- [ ] Testar cancelamento de reserva — atualiza status no Airtable?

**Teste do lembrete:**
- [ ] Criar reserva de teste para daqui 2 horas — lembrete chega?
- [ ] Verificar se reserva é marcada como "lembrete enviado"?

**Teste do aniversário:**
- [ ] Criar cliente com data de nascimento = hoje — mensagem de aniversário chega?

**Teste do relatório:**
- [ ] Acionar manualmente o workflow — relatório chega no WhatsApp correto?
- [ ] Dados batem com o que está no Airtable?

**Teste do painel Airtable:**
- [ ] O dono consegue abrir o Airtable no celular?
- [ ] Consegue visualizar os clientes e reservas?
- [ ] Consegue fazer buscas?

---

## Fase 5 — Treinamento e Entrega (Dias 12–14)

### Treinamento do Cliente (1–2h)

**Parte 1 — Entendendo o sistema (30 min):**
- Mostrar como funciona o bot ao vivo (fazer teste na frente do cliente)
- Mostrar o painel do Airtable e como visualizar clientes e reservas
- Mostrar onde o relatório chega toda segunda

**Parte 2 — O que o cliente controla (30 min):**
- Como ver os clientes no Airtable
- Como ver as reservas do dia
- Como buscar um cliente específico
- O que fazer quando o bot não entende a mensagem do cliente (transferência para humano)

**Parte 3 — Regras de uso (15 min):**
- O número do CRM é só para atendimento automatizado — não usar para ligações pessoais
- Se o cliente enviar mensagem fora do script do bot, como transferir para atendimento humano
- Como avisar a IV7 quando quiser mudar alguma mensagem do bot

**Regras de uso do bot:**
1. O número do bot não deve atender chamadas normais
2. Fora do horário configurado, o bot avisa mas não agenda
3. Se cliente reclamar de algo, o bot transfere para humano imediatamente
4. Qualquer mudança nas mensagens: acionar a IV7 via WhatsApp

### Entregáveis Finais ao Cliente

- [ ] Link de acesso ao Airtable (view de visualização, sem editar)
- [ ] Número do WhatsApp do bot ativo
- [ ] Documento simples: "Como funciona o seu CRM IV7" (1 página com capturas de tela)
- [ ] Acesso de administrador ao Airtable (salvar credenciais na pasta do Drive)
- [ ] NF emitida

---

## Problemas Comuns e Soluções

| Problema | Causa | Solução |
|---|---|---|
| Bot não responde | Evolution API desconectada | Reconectar QR code no painel Evolution |
| Bot responde mensagens duplas | Webhook configurado duas vezes | Desativar webhook duplicado no N8N |
| Reserva não registra no Airtable | API Key expirou ou campos errados | Verificar credenciais e mapeamento de campos |
| Lembrete não chega | Schedule Trigger desativado | Verificar se workflow está "Active" no N8N |
| Cliente recebe mensagem errada | Condição IF mal configurada | Revisar lógica dos nodes IF no workflow |
| Relatório com dados errados | Filtro de data errado no Airtable | Revisar fórmula de data no node Airtable |
| WhatsApp desconectado | Sessão expirou | Reconectar via QR code (a cada 30 dias se não houver mensagem) |

---

## Manutenção Mensal (Inclusa na Mensalidade)

- [ ] Verificar se todos os workflows estão ativos no N8N
- [ ] Verificar se o WhatsApp está conectado (sem desconexão)
- [ ] Verificar se o Airtable está recebendo novos registros
- [ ] Verificar logs do N8N por erros recorrentes
- [ ] Atualizar mensagens se o cliente solicitar (até 2 alterações/mês)
- [ ] Backupar a base do Airtable mensalmente (exportar CSV)

---

## Estrutura de Pasta no Google Drive

```
Clientes/
└── [Nome do Cliente]/
    ├── Produto 2 — CRM/
    │   ├── Credenciais/ (PRIVADO)
    │   │   └── Acessos_CRM.txt
    │   ├── Configuração/
    │   │   ├── Workflows_N8N_backup.json
    │   │   └── Estrutura_Airtable.pdf
    │   ├── Treinamento/
    │   │   └── Como_usar_o_CRM.pdf
    │   └── Relatórios/
    │       └── Relatorio_Mensal_[mes].pdf
```

---

## Checklist Final — Produto 2

- [ ] Base Airtable criada com as 3 tabelas
- [ ] Clientes existentes importados (se houver)
- [ ] Workflow 1 (bot de reservas) testado e funcionando
- [ ] Workflow 2 (lembrete) testado e funcionando
- [ ] Workflow 3 (aniversário) testado e funcionando
- [ ] Workflow 4 (relatório semanal) testado e funcionando
- [ ] WhatsApp do bot conectado e estável
- [ ] Cliente treinado e sabe acessar o painel
- [ ] Credenciais salvas no Google Drive
- [ ] NF emitida
- [ ] Status no CRM atualizado para "Ativo"

---

*SOP IV7 — Não compartilhar externamente — Versão 1.0*
