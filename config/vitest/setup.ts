import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import MatchMediaMock from 'jest-matchmedia-mock'
import { afterEach } from 'vitest'

new MatchMediaMock()

afterEach(() => {
  cleanup()
})
