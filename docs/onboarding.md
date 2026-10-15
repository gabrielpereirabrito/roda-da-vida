# Onboarding — Roda da Vida

Bem-vindo ao projeto **Roda da Vida**! Este guia descreve como configurar e rodar o ambiente do zero.

---

## 📋 Pré-requisitos

| Ferramenta | Versão mínima | Observação |
|------------|--------------|------------|
| Node.js    | 18.x         | LTS recomendado |
| npm        | 9.x          | Incluso com Node |
| Git        | 2.x          | Controle de versão |

---

## 🚀 Setup inicial

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd roda-da-vida
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure variáveis de ambiente

```bash
cp .env.example .env.local
```

> Por enquanto o MVP não possui backend próprio; nenhuma variável de ambiente é obrigatória para rodar localmente.

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (Vite).

---

## 🗂 Estrutura do projeto

```
roda-da-vida/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── design-system/      # Tokens, tema e sistema de design
│   │   ├── tokens/
│   │   └── components/
│   ├── features/           # Módulos de feature (roda, questionário)
│   ├── pages/              # Páginas / rotas
│   ├── hooks/              # Custom hooks
│   ├── store/              # Estado global (Zustand)
│   ├── utils/              # Helpers e utilitários
│   └── App.tsx
├── docs/                   # Documentação do projeto
├── public/
└── package.json
```

---

## 🧪 Scripts disponíveis

| Comando           | Descrição                        |
|-------------------|----------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera o bundle de produção        |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint`    | Roda o ESLint                    |
| `npm run test`    | Roda os testes (Vitest)          |

---

## 🔧 Stack tecnológica

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite
- **Estilização**: Tailwind CSS v3
- **Gráficos**: Recharts (Radar Chart para a Roda da Vida)
- **Estado global**: Zustand
- **Roteamento**: React Router v6
- **Linting**: ESLint + Prettier
- **Testes**: Vitest + React Testing Library

---

## 📖 Próximos passos

Após o setup, leia:
- [`conventions.md`](./conventions.md) — padrões de código e commits
- [`docs/architecture/diagrama-geral.md`](./architecture/diagrama-geral.md) — visão macro do sistema
- [`docs/design-system/tokens.md`](./design-system/tokens.md) — sistema de design
