# Roadmap Frontend – Turion.Network
### AI App Builder inspirado no modelo Replit

> **Domínio:** turion.network
> **Stack:** Next.js 14 + TypeScript + TailwindCSS + shadcn/ui
> **Modelo de negócio:** Planos mensais + sistema de créditos unificados
> **Inspiração principal:** Replit (workspace/IDE) + Base44 (créditos) + Abacus DeepAgent (chat de agente)

---

## Visão geral das fases

| Fase | Nome | Entregável principal | Prioridade | Status |
|---|---|---|---|---|
| 1 | Landing Page | Site público de conversão | CRÍTICO | ✅ CONCLUÍDO |
| 2 | Auth | Login / Registro / Onboarding | CRÍTICO | ✅ CONCLUÍDO |
| 3 | Dashboard | Lista de projetos + criação | ALTO | pendente |
| 4 | Workspace | IDE + Chat de agente + Preview | ALTO | pendente |
| 5 | Planos & Billing | Pricing page + gestão de créditos | ALTO | pendente |
| 6 | Configurações & Perfil | Account, billing, tokens | MÉDIO | pendente |
| 7 | Polish & Produção | SEO, performance, PWA, dark mode | MÉDIO | pendente |

---

## ✅ FASE 1 – Landing Page (`turion.network`) — CONCLUÍDO em 2026-03-12

> Deployado em https://turion.network — Next.js porta 3001, PM2, nginx, SSL Let's Encrypt.
> Componentes: Navbar, Hero (prompt + mockup), HowItWorks, Features, Pricing, Footer.

## FASE 2 – Auth (Login / Registro / Onboarding) — CONCLUÍDO em 2026-03-12

> Páginas: /login, /register, /onboarding. Stack: NextAuth.js + JWT + Prisma + PostgreSQL.
> Middleware de proteção de rotas. Onboarding de 3 passos com 500 créditos de boas-vindas.

---

## FASE 1 – Landing Page (`turion.network`)

**Objetivo:** converter visitantes em cadastros. Clareza total sobre o que é o produto.

### Seções da página (ordem de cima para baixo)

#### 1.1 Navbar
- Logo "Turion" à esquerda (ícone + wordmark).
- Links centrais: `Recursos` | `Preços` | `Docs`.
- Direita: botão `Entrar` (outline) + botão `Começar grátis` (filled, destaque).
- Navbar sticky com blur glassmorphism no scroll.

#### 1.2 Hero Section
- Headline grande (max 8 palavras):
  **"Crie apps completos com AI. Agora."**
- Subheadline (1-2 linhas):
  *"Descreva o que você quer construir. O Turion planeja, gera o código, sobe o banco e faz o deploy — tudo em uma workspace."*
- Campo de prompt centralizado e grande (estilo Replit):
  `[ Descreva o app que quer criar... ] → [Criar com AI]`
- Abaixo do campo: chips de exemplo clicáveis:
  `"Dashboard financeiro com login"` | `"App de tarefas com Postgres"` | `"API REST com autenticação JWT"`
- Background: gradiente escuro (dark) com partículas sutis ou grid animado.

#### 1.3 Demo Visual / Produto em ação
- Screenshot ou vídeo curto (~15s, autoplay mudo) mostrando:
  - Usuário digita prompt → Turion gera estrutura → preview abre ao lado.
- Legenda: *"De ideia a app rodando em minutos."*

#### 1.4 Como funciona (3 passos)
Inspirado em Base44 — simples e direto:

```
[1] Descreva           [2] O Turion constrói         [3] Edite e publique
Digite o que           A AI planeja, gera             Ajuste pelo chat,
você quer criar.       código, DB e deploy.           publique com 1 clique.
```

Ícones grandes, fundo com cards leves.

#### 1.5 Features em destaque (grid 3x2)
- **Workspace completa** – Editor, preview e logs na mesma tela.
- **Agente de código AI** – Chat acoplado que entende seu projeto.
- **Banco de dados incluso** – PostgreSQL provisionado automaticamente.
- **Deploy instantâneo** – URL pública em segundos.
- **Créditos unificados** – Uma moeda para tudo: AI, DB, deploy.
- **Multi-stack** – Next.js, FastAPI, Node, e mais em breve.

#### 1.6 Tabela de Planos (Pricing)
Três colunas claras:

| | **Free** | **Builder** | **Pro** |
|---|---|---|---|
| **Preço** | $0/mês | $25/mês | $79/mês |
| **Créditos/mês** | 500 | 5.000 | 25.000 |
| **Projetos** | 2 | Ilimitado | Ilimitado |
| **Preview público** | 24h | Sempre ativo | Sempre ativo |
| **Deploy custom domain** | Não | Sim | Sim |
| **Agente full-stack** | Limitado | Completo | Completo + Prioritário |
| **Suporte** | Comunidade | Email | Prioritário |

Botão CTA em cada coluna. Builder em destaque visual (badge "Mais popular").

#### 1.7 Rodapé
- Logo + tagline breve.
- Links: Termos, Privacidade, Status, GitHub (se open source), Discord/comunidade.
- Copyright `© 2026 Turion.Network`.

---

## FASE 2 – Auth (Login / Registro / Onboarding)

### 2.1 Página de Login (`/login`)
- Card centralizado com fundo escuro.
- Login com: **Email + senha** e botão **"Entrar com Google"**.
- Link "Esqueci minha senha".
- Link para `/register`.

### 2.2 Página de Registro (`/register`)
- Campos: Nome, Email, Senha, Confirmar senha.
- Checkbox de aceite de termos.
- Após registro → redireciona para **Onboarding**.

### 2.3 Onboarding (`/onboarding`) — 3 passos
Wizard simples, 1 pergunta por tela:

```
Passo 1: "Qual é o seu perfil?"
  [ Desenvolvedor solo ]  [ Startup / Time ]  [ Estudante ]  [ Empresa ]

Passo 2: "O que você quer construir primeiro?"
  [ App Web com banco ]  [ API/Backend ]  [ Dashboard ]  [ Ainda não sei ]

Passo 3: "Qual stack você prefere?"
  [ Next.js + PostgreSQL ]  [ FastAPI + PostgreSQL ]  [ Deixar o Turion decidir ]
```

Ao final → redireciona para Dashboard com **500 créditos de boas-vindas** e modal de boas-vindas.

---

## FASE 3 – Dashboard (`/dashboard`)

**Objetivo:** visão geral dos projetos do usuário. Inspirado em Base44.

### 3.1 Layout do Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo Turion]     Dashboard       [Créditos: 480] [Avatar]  │
├──────────┬──────────────────────────────────────────────────┤
│          │                                                   │
│ Sidebar  │   [ + Novo projeto com AI ]  (botão grande)      │
│          │                                                   │
│ Projetos │   ┌────────┐ ┌────────┐ ┌────────┐              │
│ Templates│   │ Card 1 │ │ Card 2 │ │ Card 3 │              │
│ Billing  │   └────────┘ └────────┘ └────────┘              │
│ Docs     │                                                   │
│ Settings │   Projetos recentes ──────────────────────────   │
│          │   [ lista de projetos com status ]               │
└──────────┴──────────────────────────────────────────────────┘
```

### 3.2 Card de Projeto
Cada projeto exibe:
- Nome do projeto + ícone/emoji gerado automaticamente.
- Stack usada (ex: `Next.js + PostgreSQL`).
- Status: `live` (verde) | `building` (amarelo, animado) | `error` (vermelho) | `draft` (cinza).
- URL de preview (clicável se live).
- Créditos consumidos no projeto.
- Botões: `Abrir Workspace` | `⋮` (menu: renomear, duplicar, deletar).

### 3.3 Modal "Novo Projeto com AI"
Dispara ao clicar no botão principal:
- Campo de prompt grande: *"Descreva o app que você quer criar..."*
- Seletor de stack (opcional): `[ Auto ] [ Next.js ] [ FastAPI ] [ Node ]`
- Seletor de template rápido: `[ Em branco ] [ CRUD + Auth ] [ Dashboard ] [ API REST ]`
- Botão: `Criar com Turion AI` → redireciona para `/workspace/[id]` com geração em andamento.

### 3.4 Barra de Créditos
- Topo direito: `Créditos: 480 / 500` com barra de progresso colorida.
- Ao clicar: dropdown com consumo por categoria (AI tokens, deploy, DB, storage).
- Link "Ver planos" se créditos < 20%.

---

## FASE 4 – Workspace (`/workspace/[id]`)

**Coração do produto.** Inspirado fortemente em Replit.

### 4.1 Layout da Workspace
```
┌─────────────────────────────────────────────────────────────────────┐
│ [← Dashboard]  nome-do-projeto  [Run ▶] [Deploy 🚀] [Share] [···]  │
├──────────┬───────────────────────────────┬───────────────────────────┤
│          │                               │                           │
│ SIDEBAR  │     EDITOR CENTRAL            │   CHAT DO AGENTE          │
│          │                               │                           │
│ 📁 Files │  [Code] [Preview] [Logs]      │  ┌─────────────────────┐ │
│ 🗄 DB    │                               │  │ Turion Agent        │ │
│ 📦 Pkgs  │  < código aqui >             │  │                     │ │
│ 🚀 Deploy│                               │  │ "Aqui está o que    │ │
│ 📋 Logs  │                               │  │ eu criei para você" │ │
│          │                               │  │                     │ │
│          │                               │  │ [input do usuário]  │ │
│          │                               │  └─────────────────────┘ │
└──────────┴───────────────────────────────┴───────────────────────────┘
```

### 4.2 Sidebar da Workspace
- **Files:** árvore de arquivos do projeto gerado. Clique para abrir no editor.
- **DB:** conexão ao Postgres do projeto. Visualização de tabelas, query runner.
- **Packages:** dependências do projeto, possibilidade de adicionar novas via chat.
- **Deploy:** status atual, URL, histórico de deploys, variáveis de ambiente.
- **Logs:** stdout/stderr em tempo real do container.

### 4.3 Editor Central (abas)
- **Code:** editor Monaco (igual VSCode no browser) com syntax highlight, autocomplete.
- **Preview:** iframe com o app rodando ao vivo. Botão "Open in new tab".
- **Logs:** output do terminal em tempo real.
- Abas fixas no topo do editor.

### 4.4 Painel do Agente (Chat)
- Histórico de mensagens do agente com o usuário.
- Mensagens do agente exibem:
  - Texto explicativo.
  - Blocos de código com botão "Apply to file".
  - Referências a arquivos clicáveis (ex: `@app/page.tsx`).
- Input com placeholder: *"Peça uma mudança, nova feature ou tire dúvidas..."*
- Botões de ação rápida: `Adicionar autenticação` | `Criar nova rota` | `Corrigir erro`
- Indicador de créditos sendo consumidos (ex: "~12 créditos estimados").

### 4.5 Estados da Workspace

**Estado: Gerando (Building)**
- Overlay na tela com progress steps animados:
  ```
  ✓ Planejando arquitetura...
  ✓ Gerando backend...
  ⟳ Gerando frontend...
  ○ Configurando banco de dados...
  ○ Iniciando container...
  ```
- Logs visíveis abaixo em tempo real.

**Estado: Erro**
- Banner vermelho no topo com mensagem do erro.
- Botão "Pedir ao Agente para corrigir" → abre chat com contexto do erro já colado.

**Estado: Live**
- Banner verde: "App rodando em: `https://[id].turion.network`"
- Botão "Deploy para domínio próprio" (planos pagos).

---

## FASE 5 – Planos & Billing (`/pricing` e `/settings/billing`)

### 5.1 Página de Preços (`/pricing`)
- Mesma tabela de planos da landing page.
- Toggle anual/mensal com desconto de 20% no anual.
- FAQ abaixo: "O que são créditos?", "O que acontece quando acabo?", etc.

### 5.2 Página de Billing (`/settings/billing`)
```
┌─────────────────────────────────────────────────────────┐
│ Plano atual: Builder – $25/mês                          │
│ Próxima cobrança: 12/04/2026   [Cancelar] [Fazer upgrade]│
├─────────────────────────────────────────────────────────┤
│ Créditos este mês:                                      │
│  ████████░░░░░░  3.200 / 5.000 usados                  │
│                                                         │
│  AI (tokens LLM) ............... 2.100 créditos        │
│  Deploy / container ............... 800 créditos        │
│  Banco de dados (Postgres) ........ 200 créditos        │
│  Storage ..........................  100 créditos        │
├─────────────────────────────────────────────────────────┤
│ Histórico de faturas                                    │
│  Mar/2026 – $25.00  [PDF]                              │
│  Fev/2026 – $25.00  [PDF]                              │
└─────────────────────────────────────────────────────────┘
```

### 5.3 Compra de Créditos Extras
- Modal: "Seus créditos acabaram. Compre mais ou faça upgrade."
- Opções rápidas: `+1.000 créditos ($5)` | `+5.000 créditos ($20)` | `Fazer upgrade`
- Processado via **Stripe**.

---

## FASE 6 – Configurações & Perfil (`/settings`)

### Seções
- **Perfil:** nome, avatar, email, senha.
- **Billing:** (fase 5).
- **API Keys:** gerar tokens pessoais para integração com CLI ou API do Turion.
- **Domínios:** vincular domínio próprio a um projeto (planos pagos).
- **Notificações:** email alerts de deploy, erro, créditos baixos.
- **Danger Zone:** deletar conta.

---

## FASE 7 – Polish & Produção

### Performance
- [ ] Lazy loading de rotas pesadas (workspace, editor).
- [ ] Skeleton screens em todos os carregamentos.
- [ ] Otimização de imagens com `next/image`.
- [ ] Bundle analyzer para manter JS < 200kb inicial.

### UX/UI
- [ ] Dark mode por padrão (toggle disponível).
- [ ] Animações com Framer Motion nas transições de página.
- [ ] Toast notifications (Sonner ou similar) para feedback de ações.
- [ ] Modo mobile para Dashboard e Landing (Workspace é desktop-only por design).
- [ ] Shortcuts de teclado na workspace (ex: `Ctrl+Enter` para enviar mensagem ao agente).

### SEO & Marketing
- [ ] Meta tags Open Graph completas em todas as páginas públicas.
- [ ] `sitemap.xml` e `robots.txt` automáticos.
- [ ] Página de status: `status.turion.network`.
- [ ] Blog/Changelog: `turion.network/changelog`.

### Segurança
- [ ] Rate limiting na API de prompt (evitar abuso de créditos).
- [ ] CSP headers configurados.
- [ ] Autenticação com JWT + refresh tokens.
- [ ] HTTPS forçado (já garantido por domínio próprio + certificado).

---

## Estrutura de pastas do projeto Next.js

```
turion-frontend/
├── app/
│   ├── (public)/
│   │   ├── page.tsx              ← Landing page
│   │   ├── pricing/page.tsx
│   │   └── login/page.tsx
│   ├── (auth)/
│   │   ├── register/page.tsx
│   │   └── onboarding/page.tsx
│   ├── (app)/
│   │   ├── dashboard/page.tsx
│   │   ├── workspace/[id]/page.tsx
│   │   └── settings/
│   │       ├── page.tsx
│   │       └── billing/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   └── Pricing.tsx
│   ├── dashboard/
│   │   ├── ProjectCard.tsx
│   │   ├── NewProjectModal.tsx
│   │   └── CreditsBar.tsx
│   ├── workspace/
│   │   ├── WorkspaceLayout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Editor.tsx
│   │   ├── Preview.tsx
│   │   ├── AgentChat.tsx
│   │   └── BuildingOverlay.tsx
│   └── ui/                       ← shadcn/ui components
├── lib/
│   ├── api.ts                    ← API client (fetch wrapper)
│   ├── auth.ts                   ← Auth helpers
│   └── credits.ts                ← Créditos utils
├── hooks/
│   ├── useProject.ts
│   ├── useAgent.ts               ← WebSocket do agente
│   └── useCredits.ts
├── stores/
│   └── workspace.store.ts        ← Zustand store
├── types/
│   └── index.ts
└── public/
    └── (assets)
```

---

## Ordem de execução recomendada

```
Semana 1-2  →  Fase 1 (Landing) + Fase 2 (Auth)
Semana 3    →  Fase 3 (Dashboard)
Semana 4-6  →  Fase 4 (Workspace — maior esforço)
Semana 7    →  Fase 5 (Billing + Stripe)
Semana 8    →  Fase 6 + Fase 7 (Settings + Polish)
```

---

## Decisões técnicas fixadas

| Decisão | Escolha | Motivo |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, routing, API routes integradas |
| Estilo | TailwindCSS + shadcn/ui | Velocidade + consistência visual |
| Editor de código | Monaco Editor | Igual VSCode, suporte amplo |
| Estado global | Zustand | Simples, sem boilerplate |
| Comunicação agente | WebSocket (Socket.io) | Streaming de respostas em tempo real |
| Auth | JWT + NextAuth.js | Padrão, fácil de extender |
| Pagamentos | Stripe | Mais robusto e documentado |
| Deploy do frontend | Mesmo servidor (nginx) | Domínio turion.network já apontado |

---

*Documento criado em: 2026-03-12*
*Domínio: turion.network*
*Repositório: github.com/LucasBolla94/TurionBuilderAI*
