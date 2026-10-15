# Guia de Uso — Design System Roda da Vida

Este guia explica como utilizar o Design System do projeto em componentes React com Tailwind CSS.

---

## 📦 Estrutura

```
src/design-system/
├── tokens/
│   ├── colors.ts        # Paleta de cores e tokens semânticos
│   ├── typography.ts    # Famílias, tamanhos e pesos de fonte
│   ├── spacing.ts       # Escala de espaçamento (4px base)
│   └── breakpoints.ts   # Breakpoints responsivos
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.spec.tsx
│   │   └── index.ts
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.spec.tsx
│   │   └── index.ts
│   └── Card/
│       ├── Card.tsx
│       ├── Card.spec.tsx
│       └── index.ts
└── docs/
    └── guia-de-uso.md   # Este arquivo
```

---

## 🎨 Usando Tokens de Cor

Os tokens de cor são configurados no `tailwind.config.ts` e ficam disponíveis como classes Tailwind.

```tsx
// ✅ Use classes Tailwind com os tokens configurados
<div className="bg-background-surface text-text-primary border border-border">
  Conteúdo
</div>

// ✅ Cor de categoria
<div className="bg-category-health text-white">
  Saúde e Corpo
</div>

// ✅ Cor primária
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Ação Principal
</button>
```

---

## 🔤 Usando Tipografia

```tsx
// ✅ Título de página (H1) — font-display
<h1 className="font-display text-4xl font-extrabold text-text-primary">
  Roda da Vida
</h1>

// ✅ Subtítulo
<h2 className="font-display text-2xl font-bold text-text-primary">
  Seus Resultados
</h2>

// ✅ Corpo de texto — font-body (padrão)
<p className="text-base text-text-secondary">
  Responda as perguntas abaixo na escala de 0 a 10.
</p>

// ✅ Label de formulário
<label className="text-sm font-medium text-text-secondary">
  Como você avalia sua saúde?
</label>
```

---

## 🧩 Componentes

### Button

```tsx
import { Button } from '@/design-system/components/Button';

// Variantes disponíveis
<Button variant="primary" size="md" onClick={handleNext}>
  Próxima Pergunta
</Button>

<Button variant="secondary" size="sm">
  Pular
</Button>

<Button variant="ghost" size="lg" disabled>
  Desativado
</Button>
```

**Props disponíveis:**

| Prop       | Tipo                                    | Padrão    |
|------------|-----------------------------------------|-----------|
| `variant`  | `'primary' \| 'secondary' \| 'ghost'`  | `primary` |
| `size`     | `'sm' \| 'md' \| 'lg'`                 | `md`      |
| `disabled` | `boolean`                               | `false`   |
| `loading`  | `boolean`                               | `false`   |
| `fullWidth`| `boolean`                               | `false`   |

---

### Input / Slider

```tsx
import { ScoreSlider } from '@/design-system/components/Input';

<ScoreSlider
  value={score}
  onChange={(val) => setScore(val)}
  min={0}
  max={10}
  step={1}
  categoryColor="#10b981"
/>
```

---

### Card

```tsx
import { Card } from '@/design-system/components/Card';

// Card básico
<Card>
  <p>Conteúdo do card</p>
</Card>

// Card de categoria com glow
<Card variant="category" categoryColor="#10b981" glow>
  <h3 className="font-display font-bold text-xl">Saúde e Corpo</h3>
  <p className="text-text-secondary">Média: 7.3</p>
</Card>
```

---

## 📱 Responsividade

Use os breakpoints mobile-first do Tailwind:

```tsx
// Layout responsivo: coluna no mobile, grid no desktop
<div className="
  flex flex-col gap-4
  md:grid md:grid-cols-2 md:gap-6
  lg:grid-cols-3
  xl:grid-cols-4
">
  {categories.map(cat => <CategoryCard key={cat.id} {...cat} />)}
</div>
```

---

## 💫 Animações e Transições

```tsx
// Hover com transição suave
<div className="
  transition-all duration-200 ease-out
  hover:scale-105 hover:shadow-glow
">

// Entrada de elemento (com Framer Motion — futuro)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

---

## ♿ Acessibilidade

Boas práticas obrigatórias:

```tsx
// ✅ Labels associadas a inputs
<label htmlFor="score-health">Nota de Saúde</label>
<input id="score-health" type="range" min={0} max={10} />

// ✅ Aria-labels em ícones
<button aria-label="Próxima categoria">
  <ArrowRightIcon />
</button>

// ✅ Contraste mínimo 4.5:1 para texto normal
// Nosso text-text-primary (#f1f1f5) sobre bg-background-base (#0f0f13)
// Contraste: ~18:1 ✅

// ✅ Área de toque mínima de 44px (WCAG 2.5.5)
<button className="min-h-[44px] min-w-[44px]">
```

---

## 🔧 Configuração no tailwind.config.ts

```ts
import { colors } from './src/design-system/tokens/colors';
import { typography } from './src/design-system/tokens/typography';
import { spacing } from './src/design-system/tokens/spacing';
import { breakpoints } from './src/design-system/tokens/breakpoints';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: breakpoints,
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      spacing,
    },
  },
  plugins: [],
} satisfies Config;
```
