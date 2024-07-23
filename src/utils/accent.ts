export type Accent = 'error' | 'success' | 'tertiary' | 'secondary'

export function accentToText(accent?: Accent, fallback = 'jui-text-primary-900') {
  const colours: Record<Accent, string> = {
    error: 'jui-text-error-400',
    secondary: 'jui-text-secondary-400',
    success: 'jui-text-success-400',
    tertiary: 'jui-text-tertiary-400'
  }

  return accent ? colours[accent] : fallback
}