export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatMoneyShort(value: number): string {
  if (value >= 1_000_000) {
    return `£${(value / 1_000_000).toFixed(0)}m`
  } else if (value >= 1_000) {
    return `£${(value / 1_000).toFixed(0)}k`
  } else {
    return `£${value}`
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

