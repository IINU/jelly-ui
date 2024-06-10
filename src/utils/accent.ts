export type Accent = 'error' | 'success' | 'tertiary' | 'secondary'

export function accentToText(accent?: Accent, fallback = 'text-primary-900') {
  const colours: Record<Accent, string> = {
    error: 'text-error-400',
    secondary: 'text-secondary-400',
    success: 'text-success-400',
    tertiary: 'text-tertiary-400'
  }

  return accent ? colours[accent] : fallback
}