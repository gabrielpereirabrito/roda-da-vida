/**
 * Design System — Breakpoint Tokens
 * Roda da Vida
 *
 * Breakpoints responsivos baseados em largura mínima (mobile-first).
 * Consumido por tailwind.config.ts via theme.screens
 */

export const breakpoints = {
  /**
   * Mobile landscape / pequeno
   * Ex.: @media (min-width: 640px)
   */
  sm: '640px',

  /**
   * Tablet / portrait
   * Ex.: @media (min-width: 768px)
   */
  md: '768px',

  /**
   * Desktop / laptop
   * Ex.: @media (min-width: 1024px)
   */
  lg: '1024px',

  /**
   * Desktop largo
   * Ex.: @media (min-width: 1280px)
   */
  xl: '1280px',

  /**
   * Ultrawide / grandes monitores
   * Ex.: @media (min-width: 1536px)
   */
  '2xl': '1536px',
} as const;

/**
 * Breakpoints semânticos para uso em lógica JavaScript/TypeScript
 * (ex.: hook useBreakpoint, renderização condicional)
 */
export const breakpointValues = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const;

/**
 * Larguras máximas de container por breakpoint
 */
export const containerMaxWidth = {
  sm:    '640px',
  md:    '768px',
  lg:    '1024px',
  xl:    '1200px',  // deliberadamente menor que 1280 para margens confortáveis
  '2xl': '1400px',
} as const;

export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValue = typeof breakpointValues[Breakpoint];
