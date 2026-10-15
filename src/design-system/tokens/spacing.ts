/**
 * Design System — Spacing Tokens
 * Roda da Vida
 *
 * Sistema de espaçamento baseado em múltiplos de 4px.
 * Consumido por tailwind.config.ts via theme.extend.spacing
 */

/**
 * Escala base: 4px = 1 unidade
 * Todos os valores em rem (base 16px)
 */
export const spacing = {
  px:   '1px',
  0:    '0px',
  0.5:  '0.125rem',  // 2px
  1:    '0.25rem',   // 4px  — micro
  1.5:  '0.375rem',  // 6px
  2:    '0.5rem',    // 8px  — XS: gap ícone/texto
  2.5:  '0.625rem',  // 10px
  3:    '0.75rem',   // 12px — SM: padding badge
  3.5:  '0.875rem',  // 14px
  4:    '1rem',      // 16px — MD: padding card pequeno
  5:    '1.25rem',   // 20px
  6:    '1.5rem',    // 24px — LG: padding card médio
  7:    '1.75rem',   // 28px
  8:    '2rem',      // 32px — XL: padding seção
  9:    '2.25rem',   // 36px
  10:   '2.5rem',    // 40px
  11:   '2.75rem',   // 44px — mínimo área de toque (WCAG)
  12:   '3rem',      // 48px — 2XL: gap entre seções
  14:   '3.5rem',    // 56px
  16:   '4rem',      // 64px — 3XL: padding container
  20:   '5rem',      // 80px
  24:   '6rem',      // 96px — 4XL: seções hero
  28:   '7rem',      // 112px
  32:   '8rem',      // 128px
  36:   '9rem',      // 144px
  40:   '10rem',     // 160px
  44:   '11rem',     // 176px
  48:   '12rem',     // 192px
  52:   '13rem',     // 208px
  56:   '14rem',     // 224px
  60:   '15rem',     // 240px
  64:   '16rem',     // 256px
  72:   '18rem',     // 288px
  80:   '20rem',     // 320px
  96:   '24rem',     // 384px
} as const;

/**
 * Tokens semânticos de espaçamento
 * Mapeiam intenção de design para valores da escala base.
 */
export const semanticSpacing = {
  // Padding interno de componentes
  component: {
    xs:  spacing[2],   // 8px
    sm:  spacing[3],   // 12px
    md:  spacing[4],   // 16px
    lg:  spacing[6],   // 24px
    xl:  spacing[8],   // 32px
  },
  // Gap entre elementos em listas/grids
  gap: {
    xs:  spacing[2],   // 8px
    sm:  spacing[3],   // 12px
    md:  spacing[4],   // 16px
    lg:  spacing[6],   // 24px
    xl:  spacing[8],   // 32px
    '2xl': spacing[12],// 48px
  },
  // Padding de páginas/containers
  page: {
    x:    spacing[6],  // 24px mobile
    xMd:  spacing[8],  // 32px tablet
    xLg:  spacing[16], // 64px desktop
    y:    spacing[8],  // 32px
    yLg:  spacing[16], // 64px
  },
} as const;

export type SpacingToken = typeof spacing;
export type SemanticSpacingToken = typeof semanticSpacing;
