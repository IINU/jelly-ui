import { useEffect } from 'react'

type Props = {
  ctaClicked: () => void
}

export function useEnterSubmit({ ctaClicked }: Props) {
  useEffect(() => {
    function handleKeyup(event: KeyboardEvent) {
      if (event.key === 'Enter') ctaClicked()
    }

    document.addEventListener('keyup', handleKeyup)
    return () => document.removeEventListener('keyup', handleKeyup)
  }, [ctaClicked])
}
