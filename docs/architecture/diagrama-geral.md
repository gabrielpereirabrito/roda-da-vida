# Diagrama Geral — Arquitetura do Sistema

## Visão Macro (C4 — Nível 1: Context)

```mermaid
C4Context
    title Sistema Roda da Vida — Visão de Contexto

    Person(user, "Usuário", "Pessoa que deseja mapear as áreas da própria vida")

    System(app, "Roda da Vida App", "SPA React que guia o usuário pelo questionário e exibe a Roda da Vida com os resultados")

    System_Ext(localStorage, "localStorage (Browser)", "Persistência local dos dados de respostas e médias calculadas")

    Rel(user, app, "Acessa via browser")
    Rel(app, localStorage, "Lê/escreve respostas e resultados")
```

---

## Visão de Containers (C4 — Nível 2)

```mermaid
C4Container
    title Roda da Vida — Containers

    Person(user, "Usuário")

    Container_Boundary(spa, "SPA (React + Vite)") {
        Component(router, "React Router", "Roteamento entre páginas")
        Component(quizFeature, "Quiz Feature", "Telas de perguntas por categoria")
        Component(resultsFeature, "Results Feature", "Tela da Roda da Vida e resumo")
        Component(store, "Zustand Store", "Estado global: respostas e médias")
        Component(designSystem, "Design System", "Tokens + componentes Tailwind")
    }

    ContainerDb(storage, "localStorage", "Persistência de dados no browser")

    Rel(user, router, "Navega")
    Rel(router, quizFeature, "Rota /quiz/:categoryId")
    Rel(router, resultsFeature, "Rota /results")
    Rel(quizFeature, store, "Lê/escreve respostas")
    Rel(resultsFeature, store, "Lê médias calculadas")
    Rel(store, storage, "persist middleware")
```

---

## Fluxo do Usuário

```mermaid
flowchart TD
    A([Início]) --> B[Tela de Boas-vindas\n/home]
    B --> C[Seleciona categoria\n/quiz]
    C --> D[Responde perguntas\n0 a 10 por slider]
    D --> E{Mais perguntas?}
    E -- Sim --> D
    E -- Não --> F[Calcula média da categoria\navg = soma / n]
    F --> G{Mais categorias?}
    G -- Sim --> C
    G -- Não --> H[Tela de Resultados\n/results]
    H --> I[Exibe Roda da Vida\nRadar Chart Recharts]
    I --> J[Exibe tabela de médias\npor categoria]
    J --> K{Refazer?}
    K -- Sim --> B
    K -- Não --> L([Fim])
```

---

## Categorias da Roda da Vida (MVP)

| # | Categoria               | Ícone sugerido | Descrição                                           |
|---|-------------------------|----------------|-----------------------------------------------------|
| 1 | Saúde e Corpo           | 💪             | Exercícios, alimentação, sono, energia física        |
| 2 | Mente e Emoções         | 🧠             | Saúde mental, equilíbrio emocional, autoconhecimento|
| 3 | Relacionamentos         | ❤️             | Família, amizades, amor, rede de apoio              |
| 4 | Carreira e Propósito    | 🚀             | Trabalho, missão, impacto profissional               |
| 5 | Capacitação e Estudos   | 📚             | Aprendizado contínuo, habilidades, cursos            |
| 6 | Finanças                | 💰             | Renda, investimentos, segurança financeira           |
| 7 | Lazer e Diversão        | 🎮             | Hobbies, descanso, prazer, criatividade              |
| 8 | Espiritualidade         | ✨             | Fé, propósito de vida, conexão com algo maior        |

---

## Diagrama de Componentes (Nível 3 — Feature Quiz)

```mermaid
flowchart LR
    subgraph QuizFeature
        QP[QuizPage] --> CS[CategorySelector]
        QP --> QS[QuestionSlider]
        QP --> PB[ProgressBar]
        QP --> NB[NavigationButtons]
    end

    subgraph Store
        ZS[(Zustand\nquizStore)]
    end

    QS -- "setAnswer(catId, qId, score)" --> ZS
    QP -- "getCategoryAverage(catId)" --> ZS
```

```mermaid
flowchart LR
    subgraph ResultsFeature
        RP[ResultsPage] --> WC[WheelChart\nRadarChart Recharts]
        RP --> ST[ScoreTable]
        RP --> RI[RecommendationInsights]
    end

    subgraph Store
        ZS[(Zustand\nquizStore)]
    end

    RP -- "getAllAverages()" --> ZS
```
