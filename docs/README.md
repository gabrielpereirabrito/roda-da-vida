# Roda da Vida — Documentação

Bem-vindo à documentação do projeto **Roda da Vida**. Use este índice para navegar rapidamente.

---

## 🗺 Índice Geral

### Primeiros passos
- [**onboarding.md**](./onboarding.md) — Configure o ambiente do zero
- [**conventions.md**](./conventions.md) — Padrões de código, commits e branching

### Arquitetura
- [**architecture/diagrama-geral.md**](./architecture/diagrama-geral.md) — Visão macro (C4), fluxo do usuário e diagramas de componentes
- [**architecture/modelagem-dados.md**](./architecture/modelagem-dados.md) — Entidades, interfaces TypeScript, ER diagram e schema do localStorage

### Decisões de Arquitetura (ADRs)
| # | Decisão | Status |
|---|---------|--------|
| [0001](./adr/0001-escolha-do-framework-ui.md) | Escolha do Framework de UI (React + Vite + Tailwind) | ✅ Aceito |
| [0002](./adr/0002-estrategia-de-gerenciamento-de-estado.md) | Gerenciamento de Estado (Zustand) | ✅ Aceito |
| [0003](./adr/0003-persistencia-dados-client-side.md) | Persistência de Dados (localStorage) | ✅ Aceito |
| [0004](./adr/0004-biblioteca-de-graficos.md) | Biblioteca de Gráficos (Recharts) | ✅ Aceito |
| [0005](./adr/0005-hierarquia-quadrantes-areas-perguntas.md) | Hierarquia Quadrante → Área → Perguntas (Backend futuro) | 🟡 Proposto |
| [0006](./adr/0006-hospedagem-mvp-vercel.md) | Hospedagem MVP (Vercel) | ✅ Aceito |
| 0007 | Biblioteca de Animação (Motion vs Anime.js) | 🔴 Pendente |

### API (Futura)
- [**api/openapi.yaml**](./api/openapi.yaml) — Contrato OpenAPI/Swagger para o backend planejado

### Design System
- [**design-system/tokens.md**](./design-system/tokens.md) — Tokens completos de cor, tipografia, espaçamento e animação
- [**src/design-system/docs/guia-de-uso.md**](../src/design-system/docs/guia-de-uso.md) — Como usar os componentes e tokens

> ⚠️ **Pendente de decisão:** paleta de cores e biblioteca de animação ainda não definidas. Os tokens de cor em `tokens.md` são provisórios.

### Runbooks (Operacional)
- [**runbooks/dados-perdidos.md**](./runbooks/dados-perdidos.md) — Respostas do questionário foram perdidas

---

## 🎯 Visão do Produto (MVP)

> **Roda da Vida** é uma ferramenta de autoconhecimento e planejamento pessoal baseada em psicologia positiva. O usuário avalia 8 áreas da sua vida com perguntas em escala de 0 a 10, gerando um gráfico visual (a "roda") que revela desequilíbrios e oportunidades de crescimento.

### Categorias da Roda (MVP)
1. 💪 Saúde e Corpo
2. 🧠 Mente e Emoções
3. ❤️ Relacionamentos
4. 🚀 Carreira e Propósito
5. 📚 Capacitação e Estudos
6. 💰 Finanças
7. 🎮 Lazer e Diversão
8. ✨ Espiritualidade

### Fluxo principal
`Boas-vindas → Seleciona categoria → Responde perguntas (0-10) → Calcula média → Próxima categoria → Roda da Vida com resultados`

---

## 🛣 Roadmap

### MVP (atual)
- [x] Documentação de arquitetura
- [x] Design system com tokens
- [ ] Scaffold do projeto React + Vite + Tailwind
- [ ] Questionário interativo por categoria
- [ ] Cálculo e persistência de médias (localStorage)
- [ ] Gráfico Roda da Vida (Recharts RadarChart)
- [ ] Tela de resultados com tabela de scores

### Pós-MVP (planejado)
- [ ] Autenticação de usuários
- [ ] **Backend + banco de dados relacional** (ver [ADR 0005](./adr/0005-hierarquia-quadrantes-areas-perguntas.md))
- [ ] **Hierarquia dinâmica: Quadrante → Área → Perguntas** configurável via API
  - Quadrantes agrupam áreas (ex.: "Qualidade de Vida" contém Criatividade, Hobbies, Plenitude, Espiritualidade)
  - Áreas contêm as perguntas específicas
  - Gráfico principal exibe **quadrantes**; tela de detalhe exibe **áreas**
- [ ] Histórico de sessões anteriores
- [ ] Comparativo temporal da roda
- [ ] Recomendações personalizadas por categoria
- [ ] Export do resultado em PDF/imagem
- [ ] Modo compartilhável (link público)
- [ ] Painel admin para cadastro de quadrantes, áreas e perguntas

---

## 🛠 Stack Tecnológica

| Camada | Tecnologia | Versão |
|--------|------------|--------|
| Framework | React | 18.x |
| Build tool | Vite | 5.x |
| Linguagem | TypeScript | 5.x |
| Estilos | Tailwind CSS | 3.x |
| Gráficos | Recharts | 2.x |
| Animações | **A definir** (Motion / Anime.js) | — |
| Estado | Zustand | 4.x |
| Roteamento | React Router | 6.x |
| Testes | Vitest + RTL | — |
| Hospedagem (MVP) | Vercel | — |
