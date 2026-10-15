# Convenções — Roda da Vida

Documento de referência para padrões de código, nomenclatura e commits adotados no projeto.

---

## 🗂 Nomenclatura de arquivos e pastas

| Artefato                  | Convenção          | Exemplo                    |
|---------------------------|--------------------|----------------------------|
| Componentes React         | PascalCase         | `WheelChart.tsx`           |
| Hooks customizados        | camelCase com `use`| `useQuizStore.ts`          |
| Utilitários / helpers     | camelCase          | `calculateAverage.ts`      |
| Constantes globais        | SCREAMING_SNAKE    | `LIFE_CATEGORIES.ts`       |
| Arquivos de estilo        | kebab-case         | `wheel-chart.module.css`   |
| Pastas de feature         | kebab-case         | `quiz/`, `wheel/`          |
| Arquivos de teste         | mesmo nome + spec  | `WheelChart.spec.tsx`      |

---

## ⚛️ Padrões React

### Componentes

- Sempre usar **function components** com TypeScript.
- Props tipadas via `interface`, nunca `type` para props de componente.
- Props opcionais com `?` e valor default via destructuring.

```tsx
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ label, variant = 'primary', onClick }: ButtonProps) {
  return <button className={`btn btn-${variant}`} onClick={onClick}>{label}</button>;
}
```

### Hooks

- Um custom hook por arquivo.
- Nunca chamar hooks dentro de condicionais.
- Retornar objetos nomeados, não arrays (exceto quando simula `useState`).

```ts
// ✅ Correto
export function useLifeScore() {
  return { scores, updateScore, reset };
}

// ❌ Evitar
export function useLifeScore() {
  return [scores, updateScore];
}
```

### Estado global (Zustand)

- Uma store por domínio de feature.
- Ações (setters) dentro da própria store, sem dispatchers externos.

```ts
// src/store/quizStore.ts
export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  setAnswer: (category, questionId, value) =>
    set((state) => ({ ... })),
}));
```

---

## 🎨 Tailwind CSS

- Usar as **classes utilitárias** do Tailwind diretamente no JSX.
- Para padrões repetidos, criar componentes, não `@apply` em excesso.
- Variáveis de design (cores, espaçamentos) definidas em `tailwind.config.ts` referenciando os tokens de `src/design-system/tokens/`.

---

## 📝 Commits (Conventional Commits)

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/).

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional — ex: BREAKING CHANGE]
```

### Tipos permitidos

| Tipo       | Uso                                              |
|------------|--------------------------------------------------|
| `feat`     | Nova funcionalidade                              |
| `fix`      | Correção de bug                                  |
| `docs`     | Apenas documentação                              |
| `style`    | Formatação, sem mudança de lógica                |
| `refactor` | Refatoração sem feat/fix                         |
| `test`     | Adição ou correção de testes                     |
| `chore`    | Tarefas de build, CI, dependências               |
| `perf`     | Melhorias de performance                         |

### Exemplos

```
feat(quiz): adicionar escala deslizante 0-10 por pergunta
fix(wheel): corrigir cálculo da média quando sem respostas
docs(adr): registrar decisão de uso do Zustand
chore(deps): atualizar Recharts para v2.10
```

---

## 🌿 Estratégia de branching (GitHub Flow)

```
main              # produção — protegida
  └── feat/<nome> # features
  └── fix/<nome>  # correções
  └── docs/<nome> # documentação
  └── chore/<nome># tarefas internas
```

- **PRs obrigatórios** para `main`.
- Branch deve ser deletada após merge.
- Squash merge preferido para manter histórico limpo.

---

## ✅ Checklist de PR

- [ ] Código segue as convenções deste documento
- [ ] Nenhum `console.log` residual
- [ ] Testes adicionados/atualizados para a mudança
- [ ] Documentação atualizada (se necessário)
- [ ] Título do PR segue Conventional Commits
