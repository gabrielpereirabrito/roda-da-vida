# ADR 0002 — Estratégia de Gerenciamento de Estado

**Status**: Aceito  
**Data**: 2026-10-14  
**Autores**: Equipe Roda da Vida

---

## Contexto

O MVP coleta respostas do usuário para múltiplas categorias da vida (ex.: Crescimento Pessoal, Corpo, Capacitação Profissional). Essas respostas precisam ser:

1. Persistidas durante a sessão do usuário (enquanto navega entre seções)
2. Usadas para calcular médias por categoria
3. Alimentar o gráfico final (Roda da Vida)

Sem backend, o estado precisa ser gerenciado 100% no cliente. A questão é qual solução de state management adotar.

## Decisão

Adotamos **Zustand** como gerenciador de estado global, com persistência em `localStorage` via middleware `persist`.

## Alternativas consideradas

| Alternativa              | Prós                                              | Contras                                              |
|--------------------------|---------------------------------------------------|------------------------------------------------------|
| Redux Toolkit            | Maduro, DevTools excelente                        | Boilerplate excessivo para MVP                       |
| React Context + useReducer | Nativo, sem dependências extras               | Re-renders caros em árvores grandes; difícil de escalar |
| Jotai / Recoil           | Atomic state, leve                               | Menor adoção, curva de aprendizado                   |
| **Zustand** ✅           | API mínima, sem boilerplate, persist nativo       | —                                                    |

## Estrutura da Store

```
src/store/
├── quizStore.ts     # Respostas do questionário por categoria/pergunta
├── resultsStore.ts  # Médias calculadas por categoria
└── uiStore.ts       # Estado de UI (step atual, loading, modal)
```

## Modelo de dados (resumido)

```ts
interface QuizStore {
  // { categoryId: { questionId: score (0-10) } }
  answers: Record<string, Record<string, number>>;
  
  setAnswer: (categoryId: string, questionId: string, score: number) => void;
  resetCategory: (categoryId: string) => void;
  resetAll: () => void;
  
  // Derivado — média por categoria
  getCategoryAverage: (categoryId: string) => number;
}
```

## Consequências

- **Positivas**: Store mínima, fácil de testar; `persist` middleware salva progresso no `localStorage` sem código extra; compatível com DevTools Zustand.
- **Negativas**: Sem backend, dados se perdem ao limpar o navegador (aceitável no MVP).
- **Neutras**: Se futuramente adotarmos backend, bastará trocar o middleware `persist` por chamadas de API sem refatorar a lógica de componentes.
