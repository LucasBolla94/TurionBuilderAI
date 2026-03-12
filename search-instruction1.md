# Search Instruction 1 – Pesquisa Perplexity: AI Builder Reference

---

## 1. Modelos de design (UX) – Replit, Abacus DeepAgent, Base44

### Replit – UX de IDE + "Design Mode"

**Padrão de UX:**

- Layout de IDE: barra lateral com projetos/arquivos, editor central, painel de saída/logs à direita ou embaixo, topo com barra de ações (Run, Deploy, etc.).
- Novo Design Mode: modo separado onde o usuário descreve a UI em linguagem natural e recebe um layout pronto (landing, dashboard, app UI), com tipografia consistente, hierarquia visual clara, espaçamento e cores balanceadas.
- Fluxo "Design → App": primeiro só front-end (mock interativo), depois 1 clique em "Convert to App" e o sistema cria projeto full-stack com backend, DB, rotas dentro da mesma workspace.

**Pontos para copiar no seu site:**

- Entrada central: campo de prompt grande "Descreva o app que quer criar".
- Dois modos bem visíveis: "Design" (UI primeiro) e "Code/App" (full stack).
- Workspace única com:
  - Sidebar: arquivos, DB, logs, deploy.
  - Editor central com abas (code / design / preview).
  - Painel de chat/agent acoplado ao lado do editor.

---

### Abacus DeepAgent – UX de "chat + painel de tarefas"

**Padrão de UX:**

- Interface principal em chat com o "DeepAgent".
- Painel/dashboards integrados: o resultado podem ser gráficos, tabelas, apps inteiros embutidos na mesma page (UI suporta outputs ricos, dashboards, sites embedados).
- Troca de modos: Chat normal ↔ DeepAgent, com botões/tabs.
- DeepAgent constrói: workflows de pesquisa, dashboards, apps full-stack (Next.js + TypeScript + Tailwind) com banco de dados (ex: Google Sheets), atualizações agendadas.

**Pontos para copiar:**

- Área de chat dominante no centro da tela.
- Coluna lateral com:
  - Lista de "Agents/Workflows" salvos (cada um é um projeto).
  - Status de execuções (em progresso, completed, failed).
- Quando o agente gera um app/dashboard, mostrar:
  - Aba "Result" com o app rodando (iframe ou preview).
  - Aba "Code" com o código.
  - Aba "Data" com conexão ao DB.

---

### Base44 – UX de "AI App Builder" com créditos

Base44 é um builder focado em apps com AI, com free tier e planos por créditos.

**Padrão de UX:**

- Dashboard inicial com lista de apps e status (dev, live, erro).
- Wizard guiado: criar app → escolher template (CRUD, dashboard, API, etc.) → preencher dados (nome, fonte de dados, auth).
- Sistema de créditos unificados: mesma moeda para mensagens de AI e integrações (DB, hosting, etc.), mostrado claramente na UI com contador de créditos restantes.

**Pontos para copiar:**

- Landing page clara: "Crie apps completos com AI em minutos".
- Seções "Como funciona" (3 passos), "Planos e preços" em tabela com créditos.
- Dashboard com:
  - Cards de apps (nome, tipo, último deploy, consumo de créditos).
  - Botão "Novo projeto com AI" grande.

---

### Tabela rápida de UX

| Plataforma | Foco da tela principal | Conceito central | Elementos chave de UI |
|---|---|---|---|
| Replit | Workspace/IDE + Design Mode | Projeto = code workspace | Sidebar de arquivos, editor, console, Design Mode, botão "Convert to App" |
| Abacus DeepAgent | Chat + painel de tasks | Agent = workflow/app | Chat, lista de agents, preview de app/dashboard dentro da mesma página |
| Base44 | Dashboard de apps + créditos | App = instância AI-built | Cards de apps, contador de créditos, wizard de criação guiada |

**Use isso como "modelo mental" para sua AI:**
- Modo IDE (Replit)
- Modo Agent/Workflow (DeepAgent)
- Modo Dashboard de apps e créditos (Base44)

---

## 2. Arquitetura do seu "AI Builder" em servidor dedicado

### Visão macro

**Componentes mínimos:**

- **Frontend:** SPA (React/Vue/Svelte) consumindo APIs.
- **Backend API:** Node (Nest/Express), Python (FastAPI), ou Go.
- **Orquestrador de agentes:** módulo que recebe prompt do usuário, define plano (stack, DB, passos), chama modelos LLM e executores (code runner, deploy, migrations).
- **Runner de código:** containers (Docker) ou sandboxes para rodar e testar o código gerado.
- **Banco principal:** PostgreSQL (projetos, usuários, billing).
- **Storage:** S3 compatível para arquivos/projetos zipados.
- **Filas/Jobs:** Redis, Rabbit ou Kafka para tarefas longas (gerar app, deploy, etc.).

### Fluxo típico (inspirado em Replit e DeepAgent)

1. Usuário envia prompt ("Quero um app de despesas com dashboard, login e Postgres").
2. Orquestrador planeja: linguagem (ex: Node+Next+TypeScript), estrutura de diretórios, schema do banco, endpoints, UI.
3. Orquestrador gera código por etapas:
   - Backend (API, DB).
   - Frontend/UI.
   - Scripts de migração para Postgres.
4. Sistema cria container/sandbox, clona template base, injeta o código.
5. Executa migrate, build e start, coleta logs.
6. Se tudo ok, registra URL de preview/deploy e associa ao projeto.
7. Frontend mostra preview + código e permite editar.

---

## 3. Prompts para a sua AI (stack, Postgres, etc.)

### 3.1. Prompt de system – "AI App Builder Full-Stack"

```
Você é um App Builder Full-Stack especializado em gerar aplicações web completas
(frontend, backend, banco de dados e deploy) usando boas práticas de engenharia.

Requisitos gerais:

Sempre comece pedindo esclarecimentos importantes se o pedido estiver ambíguo
(tipo de app, tipo de usuário, volume esperado, necessidade de autenticação,
integrações externas).

Escolha stack moderna, opinada e coerente de ponta a ponta. Priorize stacks produtivas como:
  - Frontend: React ou Next.js com TypeScript e TailwindCSS.
  - Backend: Node.js (Express ou NestJS) ou Next.js API routes.
  - Banco de dados: PostgreSQL.
  - ORM: Prisma ou equivalente compatível com PostgreSQL.

Sempre desenhe explicitamente:
  - Arquitetura geral (componentes, fluxos).
  - Estrutura de pastas do projeto.
  - Schema do banco de dados (tabelas, colunas, tipos, relacionamentos).
  - Endpoints principais da API (método, rota, input, output).
  - Componentes principais da UI (páginas, states importantes).

Gere código coerente, que compile junto, com package.json completo e scripts de dev/build.

Para banco de dados, gere migrations em SQL ou via ORM e scripts de inicialização.

Sempre inclua instruções claras para rodar localmente: comandos para instalar
dependências, rodar migrations, iniciar backend e frontend.

Gere configurações para ambiente de produção em container
(Dockerfile, docker-compose se necessário).

Nunca invente credenciais. Use variáveis de ambiente claras
(DATABASE_URL, API_KEYS, etc.).
```

---

### 3.2. Prompt de user – criar app com Postgres

```
Quero que você crie um projeto full-stack completo.

Requisitos:

Tipo de aplicação: sistema de controle de despesas pessoais com categorias,
gráficos e exportação CSV.

Usuários: multi-tenant, cada usuário vê apenas seus dados.

Stack preferida:
  - Frontend: Next.js com TypeScript e TailwindCSS.
  - Backend: API routes do Next.js.
  - Banco de dados: PostgreSQL.
  - ORM: Prisma.

Funcionalidades:
  - Autenticação com e-mail/senha.
  - CRUD de despesas (valor, data, categoria, descrição, tags).
  - CRUD de categorias.
  - Dashboard com gráficos mensais (por categoria, total do mês, etc.).
  - Exportação CSV dos dados do usuário.

Banco de dados:
  - Desenhe o schema completo em Prisma (model User, Expense, Category, etc.).
  - Crie migrations necessárias.

Entregáveis esperados:
  - Estrutura de pastas do projeto Next.js.
  - Código do backend (API routes, autenticação e endpoints de CRUD).
  - Código do frontend (páginas, componentes de formulário, dashboard).
  - Arquivo .env.example com variáveis de ambiente necessárias.
  - Dockerfile e docker-compose.yml para rodar app + Postgres.

Instruções passo a passo:
  - como subir Postgres localmente
  - como rodar migrations
  - como iniciar o sistema completo.
```

---

### 3.3. Prompt de "Refine/Edit" (para iterações)

```
Você recebeu um projeto gerado anteriormente.
Sua tarefa é editar apenas o que for necessário para adicionar ou modificar
a funcionalidade descrita abaixo, mantendo o restante o mais intacto possível.

Contexto do projeto:
  - Stack: [descrever].
  - Principais pastas: [listar].

Mudança solicitada:
  - [Descrever nova feature, ex: adicionar filtros avançados no dashboard].

Saída esperada:
  - Lista de arquivos a serem modificados ou criados.
  - Código completo de cada arquivo modificado.
  - Explicação rápida das mudanças.
```

---

## 4. "routeLLM" – organização de roteamento de modelos/agentes

Seu sistema provavelmente terá:

- Vários LLMs (por custo/capacidade).
- Vários "agentes" especializados:
  - Agent de planejamento/arquitetura.
  - Agent de geração de código backend.
  - Agent de geração de frontend/UI.
  - Agent de DB/schema/migrações.
  - Agent de documentação.

### Estrutura recomendada

**Router principal (routeLLM)** recebe: contexto + task.

Ele decide:
- Qual agente chamar.
- Qual modelo usar (por exemplo, um modelo mais barato para coisas simples, um mais caro para gerar código complexo).

**Agentes especializados:**

| Agente | Responsabilidade |
|---|---|
| PlanAgent (modelo poderoso) | Entende o pedido, gera plano detalhado e tasks |
| BackendAgent | Recebe plano de backend + constraints e gera APIs |
| FrontendAgent | UI + design consistente com requisitos |
| DBAgent | Schema + migrations + otimizações |
| DocsAgent | README, docs de API, tutoriais de uso |

**Roteamento pode ser baseado em:**
- Tipo de tarefa (classificação de intenção no começo).
- Tamanho da entrada/saída.
- Sensibilidade (segurança, billing).

**Na prática:**
- Um microserviço "router" expõe uma API `/agent/execute`.
- Entrada: `{ task_type, user_prompt, project_state, preferences }`.
- Ele chama internamente o agente certo e devolve o resultado.

Isso replica a ideia de múltiplos modos/agentes que Replit e Abacus usam (Design mode vs Code, Chat vs DeepAgent).

---

## 5. Sistema de pagamentos e monetização

### Replit – créditos + planos mensais

| Plano | Preço | Destaques |
|---|---|---|
| Starter (Free) | $0 | Limitado, bom para testar; sem deploy live completo |
| Core | ~$20–25/mês (anual) | Créditos mensais, live deploy, apps privados, colaboradores limitados |
| Pro | ~$100/mês | Até 15 builders, mais créditos, prioridade de suporte, recursos avançados |

**Ideia para você:**
- Plano Free com número limitado de projetos, geração de AI e tempo de preview.
- Planos pagos por faixa de créditos (tokens + CPU + storage).

---

### Abacus AI / DeepAgent – por usuário + créditos

| Plano | Preço | Créditos | DeepAgent |
|---|---|---|---|
| Basic | ~$10/usuário/mês | 20k créditos | Limitado (3 tasks/mês) |
| Pro | ~$20/usuário/mês | 25k créditos | Destravado (uso completo) |

**Ideia para você:**
- Cobrar por usuário ativo (membros da equipe) + créditos de execução de agente.
- Travar features "agente full-stack" só nos planos mais caros.

---

### Base44 – planos por créditos de mensagem + integração

| Plano | Preço | Mensagens | Créditos integração |
|---|---|---|---|
| Free | $0 | ~25/mês | 100–500 |
| Starter | ~$20–25/mês | ~100 | 2k |
| Builder | ~$40–50/mês | ~250 | 10k |
| Pro/Elite | ~$80–200/mês | Mais créditos | Suporte premium |

**Ideia para você:**
- Copiar o modelo de "créditos unificados" para:
  - Chamadas de LLM.
  - Deploys.
  - Integrações (DB, webhooks, APIs externas).
- Mostrar na UI o consumo em tempo real.

---

### Implementação prática de pagamentos

No seu servidor dedicado, use um PSP (Stripe, Paddle, Lemon Squeezy).

**Estrutura de banco:**

```
Tabela plans          → nome, preço, créditos por mês, limites
Tabela subscriptions  → user, plan, status, renewal_date, external_customer_id
Tabela usage          → user, tipo de recurso, quantidade consumida
```

- Cron mensal para resetar créditos e faturar extras.
- Webhooks do PSP para atualizar status de assinatura em tempo real (trial, cancel, failed, etc.).

---

## 6. Conclusão prática – como usar tudo isso

### Caminho recomendado

**1. Copiar UX-base:**
- Landing com proposta clara + tabela de planos (inspirada em Base44/Replit).
- Dashboard com lista de projetos (Base44) + workspace estilo IDE com chat de agente (Replit + DeepAgent).

**2. No backend, organizar:**
- Service "Project" (CRUD, logs, deployments).
- Service "Agent" (LLM, planejar/gerar código).
- Service "Runtime" (containers, builds, health check).
- Service "Billing" (planos, créditos, billing).

**3. Usar os prompts de system/user** para guiar seu agente a:
- Escolher stack.
- Gerar backend/frontend.
- Montar Postgres com migrations.

**4. Implementar um router de agentes (routeLLM) simples no começo:**
- Classificador de intenção → chama "PlannerAgent" → divide tasks por agente especializado.
