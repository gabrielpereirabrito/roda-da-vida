/**
 * Design System — Color Tokens
 * Roda da Vida
 *
 * Fonte única da verdade para todas as cores da aplicação.
 * Consumido por tailwind.config.ts via theme.extend.colors
 */

export const colors = {
  // ─── Marca Principal ──────────────────────────────────────────────────────
  primary: {
    50:  'hsl(262, 83%, 96%)',  // #f3effe
    100: 'hsl(262, 83%, 90%)', // #e0d4fc
    200: 'hsl(262, 83%, 80%)', // #c4aaF9
    300: 'hsl(262, 83%, 72%)', // #ae8af7
    400: 'hsl(262, 83%, 65%)', // #9b5cf6
    500: 'hsl(262, 83%, 58%)', // #8b47f0 — principal
    600: 'hsl(262, 83%, 50%)', // #7c3aed
    700: 'hsl(262, 83%, 40%)', // #6327c2
    800: 'hsl(262, 83%, 30%)', // #4a1d92
    900: 'hsl(262, 83%, 20%)', // #2e1065
    950: 'hsl(262, 83%, 12%)', // #1a0940
  },

  // ─── Fundos (Dark Mode First) ─────────────────────────────────────────────
  background: {
    base:     '#0f0f13', // fundo principal da app
    surface:  '#1a1a24', // cards, panels
    elevated: '#252535', // elementos elevados, dropdowns
    overlay:  '#0f0f13cc', // overlays com transparência
  },

  // ─── Bordas ───────────────────────────────────────────────────────────────
  border: {
    DEFAULT: '#2d2d42',
    muted:   '#1f1f30',
    focus:   '#8b47f0', // mesma que primary-500
  },

  // ─── Texto ────────────────────────────────────────────────────────────────
  text: {
    primary:   '#f1f1f5',
    secondary: '#9898b8',
    muted:     '#5a5a7a',
    inverse:   '#0f0f13',
  },

  // ─── Categorias da Roda da Vida ───────────────────────────────────────────
  category: {
    health:    '#10b981', // Saúde e Corpo — emerald
    mind:      '#6366f1', // Mente e Emoções — indigo
    relations: '#f43f5e', // Relacionamentos — rose
    career:    '#f59e0b', // Carreira e Propósito — amber
    learning:  '#3b82f6', // Capacitação e Estudos — blue
    finance:   '#84cc16', // Finanças — lime
    leisure:   '#ec4899', // Lazer e Diversão — pink
    spirit:    '#a78bfa', // Espiritualidade — violet
  },

  // ─── Feedback / Semânticas ────────────────────────────────────────────────
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error:   '#ef4444',
    info:    '#3b82f6',
  },

  // ─── Score (escala 0-10 do questionário) ──────────────────────────────────
  score: {
    low:    '#ef4444', // 0-3 — vermelho
    medium: '#f59e0b', // 4-6 — âmbar
    high:   '#10b981', // 7-10 — verde
  },
} as const;

export type ColorToken = typeof colors;
