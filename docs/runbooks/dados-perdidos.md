# Runbook: Dados do Questionário Perdidos

**Severidade**: Média  
**Última revisão**: 2026-10-14

---

## Sintomas

- Usuário relata que suas respostas foram perdidas ao reabrir o app
- O gráfico da Roda da Vida está zerado sem motivo aparente
- O progresso do questionário voltou ao início

---

## Diagnóstico

### 1. Verificar se o localStorage está acessível

Abra o DevTools do navegador (F12) → aba **Application** → **Local Storage** → `http://localhost:5173`.

Procure pela chave `roda-da-vida-quiz-store`. Se não existir, o dado foi perdido ou nunca salvo.

### 2. Causas comuns

| Causa | Indicador |
|-------|-----------|
| Modo anônimo/privado | localStorage não persiste entre sessões em modo privado |
| Limpeza de dados do browser | Usuário usou "Limpar dados de navegação" |
| Quota excedida | Improvável para o volume do MVP, mas verificar `QuotaExceededError` no console |
| Bug no middleware persist | Erros no console ao salvar estado |

### 3. Verificar erros no console

```js
// Cole no console do DevTools para inspecionar o estado salvo
JSON.parse(localStorage.getItem('roda-da-vida-quiz-store'))
```

---

## Resolução

### Para o usuário final (MVP)
Infelizmente, no MVP sem backend, **dados perdidos no localStorage não podem ser recuperados**. O usuário precisará refazer o questionário.

**Comunicar ao usuário**: adicionar aviso na UI sobre usar modo anônimo.

### Para o desenvolvedor
Se o problema for um bug no middleware persist:

1. Verificar versão do Zustand e do middleware `persist`
2. Checar se o schema mudou (versionamento de migrate)
3. Adicionar log de diagnóstico:

```ts
// src/store/quizStore.ts
export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({ ... }),
    {
      name: 'roda-da-vida-quiz-store',
      onRehydrateStorage: () => (state, error) => {
        if (error) console.error('Falha ao reidratar store:', error);
        else console.log('Store reidratada com sucesso:', state);
      },
    }
  )
);
```

---

## Prevenção

- **Futuro**: Implementar backend com autenticação para persistência confiável (ver ADR 0003)
- **Curto prazo**: Exibir aviso ao usuário sobre modo anônimo
- **Curto prazo**: Adicionar botão de "exportar respostas em JSON" como backup manual
