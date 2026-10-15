# Design System Tokens — Roda da Vida

Referência completa de todos os tokens de design do projeto. Esses valores são a fonte única da verdade e devem ser consumidos via `tailwind.config.ts`.

---

## 🎨 Cores

### Paleta Principal

| Token                    | Valor HSL                | Hex       | Uso                              |
|--------------------------|--------------------------|-----------|----------------------------------|
| `color-primary-50`       | `hsl(262, 83%, 96%)`     | `#f3effe` | Fundo suave de elementos primários|
| `color-primary-100`      | `hsl(262, 83%, 90%)`     | `#e0d4fc` | Hover leve                       |
| `color-primary-400`      | `hsl(262, 83%, 65%)`     | `#9b5cf6` | Estado interativo                 |
| `color-primary-500`      | `hsl(262, 83%, 58%)`     | `#8b47f0` | Cor principal da marca            |
| `color-primary-600`      | `hsl(262, 83%, 50%)`     | `#7c3aed` | Variante mais escura              |
| `color-primary-900`      | `hsl(262, 83%, 20%)`     | `#2e1065` | Texto sobre fundo claro           |

### Categorias da Roda da Vida

Cada categoria tem uma cor única usada no gráfico e nos cards.

| Categoria              | Token                  | Hex       |
|------------------------|------------------------|-----------|
| Saúde e Corpo          | `color-cat-health`     | `#10b981` |
| Mente e Emoções        | `color-cat-mind`       | `#6366f1` |
| Relacionamentos        | `color-cat-relations`  | `#f43f5e` |
| Carreira e Propósito   | `color-cat-career`     | `#f59e0b` |
| Capacitação e Estudos  | `color-cat-learning`   | `#3b82f6` |
| Finanças               | `color-cat-finance`    | `#84cc16` |
| Lazer e Diversão       | `color-cat-leisure`    | `#ec4899` |
| Espiritualidade        | `color-cat-spirit`     | `#a78bfa` |

### Neutros (Dark Mode first)

| Token             | Hex       | Uso                         |
|-------------------|-----------|-----------------------------|
| `color-bg-base`   | `#0f0f13` | Fundo principal da app      |
| `color-bg-surface`| `#1a1a24` | Cards, modais               |
| `color-bg-elevated`| `#252535`| Elementos elevados          |
| `color-border`    | `#2d2d42` | Bordas e divisores          |
| `color-text-primary` | `#f1f1f5` | Texto principal           |
| `color-text-secondary` | `#9898b8` | Texto secundário, labels |
| `color-text-muted` | `#5a5a7a` | Texto desativado, placeholders |

---

## 🔤 Tipografia

Fontes importadas do Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
```

| Token              | Família              | Uso                              |
|--------------------|----------------------|----------------------------------|
| `font-display`     | Plus Jakarta Sans    | Títulos principais (H1, H2)      |
| `font-body`        | Inter                | Corpo, labels, botões            |

### Escala de tamanhos

| Token       | Valor   | Uso                      |
|-------------|---------|--------------------------|
| `text-xs`   | 12px    | Captions, badges         |
| `text-sm`   | 14px    | Labels, helper text      |
| `text-base` | 16px    | Corpo principal          |
| `text-lg`   | 18px    | Subtítulos               |
| `text-xl`   | 20px    | Títulos de seção         |
| `text-2xl`  | 24px    | Títulos de card          |
| `text-3xl`  | 30px    | H2 de página             |
| `text-4xl`  | 36px    | H1 de página             |
| `text-5xl`  | 48px    | Hero titles              |

### Pesos

| Token            | Valor | Uso              |
|------------------|-------|------------------|
| `font-normal`    | 400   | Corpo            |
| `font-medium`    | 500   | Ênfase suave     |
| `font-semibold`  | 600   | Labels, botões   |
| `font-bold`      | 700   | Títulos          |
| `font-extrabold` | 800   | Display titles   |

---

## 📐 Espaçamento

Sistema baseado em múltiplos de 4px (padrão Tailwind).

| Token   | Valor | Uso típico                    |
|---------|-------|-------------------------------|
| `sp-1`  | 4px   | Micro espaçamentos             |
| `sp-2`  | 8px   | Gap entre ícone e texto        |
| `sp-3`  | 12px  | Padding interno de badge       |
| `sp-4`  | 16px  | Padding de card pequeno        |
| `sp-6`  | 24px  | Padding de card médio          |
| `sp-8`  | 32px  | Padding de seção               |
| `sp-12` | 48px  | Gap entre seções               |
| `sp-16` | 64px  | Padding de container           |
| `sp-24` | 96px  | Seções hero                    |

---

## 📏 Breakpoints

| Token  | Valor  | Dispositivo          |
|--------|--------|----------------------|
| `sm`   | 640px  | Mobile landscape     |
| `md`   | 768px  | Tablet               |
| `lg`   | 1024px | Desktop              |
| `xl`   | 1280px | Desktop largo        |
| `2xl`  | 1536px | Ultrawide            |

---

## 🌀 Border Radius

| Token        | Valor  | Uso                       |
|--------------|--------|---------------------------|
| `rounded-sm` | 4px    | Badges, tags              |
| `rounded`    | 6px    | Inputs, botões pequenos   |
| `rounded-md` | 8px    | Botões, chips             |
| `rounded-lg` | 12px   | Cards                     |
| `rounded-xl` | 16px   | Modais, painéis           |
| `rounded-2xl`| 20px   | Containers principais     |
| `rounded-full`| 9999px| Avatares, sliders         |

---

## 💫 Sombras

| Token          | CSS Value                                      | Uso             |
|----------------|------------------------------------------------|-----------------|
| `shadow-sm`    | `0 1px 2px rgba(0,0,0,0.3)`                  | Elementos sutis |
| `shadow`       | `0 4px 6px rgba(0,0,0,0.4)`                  | Cards           |
| `shadow-lg`    | `0 10px 25px rgba(0,0,0,0.5)`                | Modais          |
| `shadow-glow`  | `0 0 20px rgba(139,71,240,0.3)`              | Efeito de brilho primário |
| `shadow-glow-cat` | `0 0 15px <cor-da-categoria>50`           | Glow por categoria |

---

## ✨ Animações

| Token              | Duração | Easing             | Uso                      |
|--------------------|---------|--------------------|--------------------------|
| `duration-fast`    | 150ms   | `ease-out`         | Hover states             |
| `duration-normal`  | 250ms   | `ease-in-out`      | Transições gerais        |
| `duration-slow`    | 400ms   | `cubic-bezier(...)`| Modais, overlays         |
| `duration-chart`   | 800ms   | `ease-out`         | Animação da Roda da Vida |
