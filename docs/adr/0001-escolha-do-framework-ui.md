# ADR 0001 — Escolha do Framework de UI

**Status**: Aceito  
**Data**: 2026-10-14  
**Autores**: Equipe Roda da Vida

---

## Contexto

O projeto Roda da Vida é um MVP de frontend puro (sem backend próprio na fase inicial). Precisamos de um framework moderno, com ecossistema rico, boa DX (Developer Experience) e facilidade de adoção de bibliotecas de gráficos para a visualização em formato de roda.

## Decisão

Adotamos **React 18 + TypeScript** com **Vite** como build tool e **Tailwind CSS v3** para estilização.

## Alternativas consideradas

| Alternativa          | Prós                                          | Contras                                          |
|----------------------|-----------------------------------------------|--------------------------------------------------|
| Next.js              | SSR, SEO nativo, App Router maduro             | Overhead desnecessário para MVP client-side only |
| Vue 3 + Nuxt         | Reatividade nativa, SFC elegante              | Ecossistema menor para o time atual              |
| **React + Vite** ✅  | Rápido, leve, enorme ecossistema, familiar    | —                                                |
| Angular              | Estrutura rígida e opinativa                  | Verboso demais para MVP                          |

## Consequências

- **Positivas**: Hot Module Replacement ultrarrápido com Vite; Tailwind JIT elimina CSS morto; TypeScript garante segurança de tipos nas stores e props.
- **Negativas**: SEO limitado (SPA pura); se necessário no futuro, migração para Next.js exigirá refatoração de roteamento.
- **Neutras**: Necessidade de configurar ESLint + Prettier manualmente.
