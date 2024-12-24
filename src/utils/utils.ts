export function roundValueUp(value: number): number {
  if (value >= 1_000_000) {
    return Math.ceil(value / 1_000_000) * 1_000_000
  } else if (value >= 10_000) {
    return Math.ceil(value / 10_000) * 10_000
  } else if (value >= 1_000) {
    return Math.ceil(value / 1_000) * 1_000
  } else {
    return Math.ceil(value / 100) * 100
  }
}

export function formatMoneyShort(value: number): string {
  return `£${formatValueShort(value)}`
}

export function formatValueShort(value: number): string {
  // Keep track of negative/positive
  const sign = value < 0 ? '-' : ''
  const absValue = Math.abs(value)

  // A small helper to strip trailing “.0”
  function stripTrailingZero(val: string): string {
    return val.endsWith('.0') ? val.slice(0, -2) : val
  }

  if (absValue >= 1_000_000) {
    // Millions
    const millions = (absValue / 1_000_000).toFixed(1)
    return `${sign}${stripTrailingZero(millions)}m`
  } else if (absValue >= 1_000) {
    // Thousands
    const thousands = (absValue / 1_000).toFixed(1)
    return `${sign}${stripTrailingZero(thousands)}k`
  } else {
    // Less than 1k
    return `${sign}${absValue}`
  }
}

export function formatMoney(value: number): string {
  // Convert the value to a fixed decimal string with at least 2 decimal places
  const formattedValue = value.toFixed(2)

  // Split the formatted value into the integer and decimal parts
  const parts = formattedValue.split('.')
  const integerPart = parts[0]

  const decimalPart = parts[1]

  // Add commas as the thousand separators to the integer part
  const withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // Combine the integer part with commas and the decimal part
  let result = '£' + withCommas

  // Append the decimal part if the value is not a whole number
  if (decimalPart !== '00') {
    result += '.' + decimalPart
  }

  return result
}

export function getOrCreateDivRoot(name: string): HTMLElement {
  let modalRoot = document.getElementById(`${name}-root`)

  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.id = `${name}-root`
    document.body.appendChild(modalRoot)
  }

  return modalRoot
}

export async function sleep(duration: number) {
  await new Promise(resolve => setTimeout(resolve, duration))
}
