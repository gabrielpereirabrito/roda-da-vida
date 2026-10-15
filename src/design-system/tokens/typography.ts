/**
 * Design System — Typography Tokens
 * Roda da Vida
 *
 * Escalas de tamanho, peso, linha e família tipográfica.
 * Consumido por tailwind.config.ts via theme.extend.fontFamily/fontSize
 */

export const typography = {
  // ─── Famílias ─────────────────────────────────────────────────────────────
  fontFamily: {
    display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
    body:    ['Inter', 'system-ui', 'sans-serif'],
    mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
  },

  // ─── Tamanhos (rem) ───────────────────────────────────────────────────────
  fontSize: {
    '2xs': ['0.625rem', { lineHeight: '1rem' }],    // 10px
    xs:    ['0.75rem',  { lineHeight: '1rem' }],    // 12px — captions
    sm:    ['0.875rem', { lineHeight: '1.25rem' }], // 14px — labels
    base:  ['1rem',     { lineHeight: '1.5rem' }],  // 16px — corpo
    lg:    ['1.125rem', { lineHeight: '1.75rem' }], // 18px — subtítulos
    xl:    ['1.25rem',  { lineHeight: '1.75rem' }], // 20px — títulos seção
    '2xl': ['1.5rem',   { lineHeight: '2rem' }],    // 24px — títulos card
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px — H2
    '4xl': ['2.25rem',  { lineHeight: '2.5rem' }],  // 36px — H1
    '5xl': ['3rem',     { lineHeight: '1.2' }],     // 48px — Hero
    '6xl': ['3.75rem',  { lineHeight: '1.1' }],     // 60px — Display
  },

  // ─── Pesos ────────────────────────────────────────────────────────────────
  fontWeight: {
    normal:    '400',
    medium:    '500',
    semibold:  '600',
    bold:      '700',
    extrabold: '800',
  },

  // ─── Line Heights ─────────────────────────────────────────────────────────
  lineHeight: {
    none:    '1',
    tight:   '1.25',
    snug:    '1.375',
    normal:  '1.5',
    relaxed: '1.625',
    loose:   '2',
  },

  // ─── Letter Spacing ───────────────────────────────────────────────────────
  letterSpacing: {
    tighter: '-0.05em',
    tight:   '-0.025em',
    normal:  '0em',
    wide:    '0.025em',
    wider:   '0.05em',
    widest:  '0.1em',
  },
} as const;

export type TypographyToken = typeof typography;
