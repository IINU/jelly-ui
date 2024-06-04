export type Accent = 'error' | 'success' | 'tertiary' | 'secondary' | 'none'

export function accentToText(accent: Accent = 'none') {
  const colours: Record<Accent, string> = {
    error: 'text-error-400',
    secondary: 'text-secondary-400',
    success: 'text-success-400',
    tertiary: 'text-tertiary-400',
    none: 'text-primary-900'
  }

  return colours[accent]
}