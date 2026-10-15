# ADR 0003 — Persistência de Dados (Client-side Only)

**Status**: Aceito  
**Data**: 2026-10-14  
**Autores**: Equipe Roda da Vida

---

## Contexto

O MVP não possui backend. As respostas do usuário ao questionário e os resultados calculados precisam sobreviver a recarregamentos de página durante a sessão de preenchimento.

## Decisão

Usamos **`localStorage`** como mecanismo de persistência, via o middleware `persist` do Zustand. Não há serialização customizada — Zustand cuida do JSON stringify/parse automaticamente.

## Alternativas consideradas

| Alternativa        | Prós                               | Contras                                            |
|--------------------|------------------------------------|----------------------------------------------------|
| `sessionStorage`   | Dados somem ao fechar aba (mais privado) | Usuário perde progresso se fechar o browser   |
| **`localStorage`** ✅ | Persiste entre sessões, API simples | Limite de ~5MB (mais que suficiente para o MVP) |
| IndexedDB          | Mais capacidade, assíncrono        | Complexidade desnecessária para o volume de dados  |
| Cookies            | Acessível no servidor              | Sem servidor; overhead desnecessário               |

## Chave de armazenamento

```
localStorage key: "roda-da-vida-quiz-store"
```

## Consequências

- **Positivas**: Zero infraestrutura; funciona offline; implementação em uma linha (middleware Zustand).
- **Negativas**: Dados não sincronizados entre dispositivos; limpos ao usar modo anônimo ou ao limpar dados do browser.
- **Futuro**: Ao adicionar backend, substituir persist por sync com API REST/GraphQL; manter a mesma interface de store.
