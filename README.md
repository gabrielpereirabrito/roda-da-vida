# 🎡 Roda da Vida

> Ferramenta interativa de autoconhecimento e planejamento pessoal baseada em psicologia positiva. Permite avaliar 8 áreas vitais, calcular médias e visualizar equilíbrio em gráfico radar.

Projeto desenvolvido com foco em arquitetura limpa, design system baseado em tokens, documentação exaustiva e harness de IA autônoma (AIOX / Antigravity).

---

## 🚀 Tecnologias

- **Core**: [React 18](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/), [Vite 5](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Estado**: [Zustand 4](https://zustand-demo.pmnd.rs/)
- **Gráficos**: [Recharts 2](https://recharts.org/)
- **Testes**: [Vitest](https://vitest.dev/) + React Testing Library
- **Deploy MVP**: Vercel

---

## 🎯 Categorias Avaliadas (MVP)

1. 💪 **Saúde e Corpo**
2. 🧠 **Mente e Emoções**
3. ❤️ **Relacionamentos**
4. 🚀 **Carreira e Propósito**
5. 📚 **Capacitação e Estudos**
6. 💰 **Finanças**
7. 🎮 **Lazer e Diversão**
8. ✨ **Espiritualidade**

---

## 📚 Documentação do Projeto

Repositório estruturado com documentação técnica completa em [`docs/`](./docs/README.md):

- 🗺️ **[Índice Completo de Documentação](./docs/README.md)**
- 📐 **[Arquitetura e Diagramas C4](./docs/architecture/diagrama-geral.md)**
- 🗄️ **[Modelagem de Dados e Entidades](./docs/architecture/modelagem-dados.md)**
- 📋 **[Decisões de Arquitetura (ADRs)](./docs/adr/)**:
  - [ADR 0001: Framework de UI](./docs/adr/0001-escolha-do-framework-ui.md)
  - [ADR 0002: Gerenciamento de Estado](./docs/adr/0002-estrategia-de-gerenciamento-de-estado.md)
  - [ADR 0003: Persistência Client-side](./docs/adr/0003-persistencia-dados-client-side.md)
  - [ADR 0004: Biblioteca de Gráficos](./docs/adr/0004-biblioteca-de-graficos.md)
  - [ADR 0005: Hierarquia Dinâmica Quadrantes/Áreas](./docs/adr/0005-hierarquia-quadrantes-areas-perguntas.md)
  - [ADR 0006: Hospedagem Vercel](./docs/adr/0006-hospedagem-mvp-vercel.md)
- 🔌 **[Contrato OpenAPI (Backend Planejado)](./docs/api/openapi.yaml)**
- 🎨 **[Design System Tokens](./docs/design-system/tokens.md)**
- 🛠️ **[Runbooks Operacionais](./docs/runbooks/)**
- 📏 **[Padrões e Convenções de Código](./docs/conventions.md)**
- 🚀 **[Guia de Onboarding Local](./docs/onboarding.md)**

---

## 🤖 Agentes e Automação (AIOX / Antigravity)

O desenvolvimento foi orquestrado utilizando personas e squads especializados de IA:
- **@architect** (Aria): Arquitetura de sistemas e decisões técnicas.
- **@dev** (Dex): Implementação e refatoração.
- **@qa** (Quinn): Qualidade, testes e security review.
- **@tech-writer** (Paige): Auditoria e criação de documentação.
- **@pm** (Morgan), **@po** (Pax), **@sm** (River), **@analyst** (Atlas), **@data-engineer** (Dara), **@devops** (Gage).

---

## 🏁 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Passos
```bash
# Clonar repositório
git clone https://github.com/SEU_USUARIO/roda-da-vida.git
cd roda-da-vida

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Consulte [docs/onboarding.md](./docs/onboarding.md) para detalhes completos.

---

## 📄 Licença

Distribuído sob licença MIT. Veja `LICENSE` para mais informações.
