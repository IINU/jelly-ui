import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    env: {
      NODE_ENV: 'test',
    },
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      'build/',
      'dist/',
      'coverage/',
      '**/*.d.ts',
      '**/*.config.*',
    ],
    globals: true,
    hookTimeout: 10 * 1000,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    mockReset: true,
    pool: 'threads',
    poolOptions: {
      threads: {
        maxThreads: 4,
        minThreads: 2,
        singleThread: false,
      },
    },
    reporters: ['verbose'],
    restoreMocks: true,
    setupFiles: ['./config/vitest/setup.ts'],
    teardownTimeout: 1000,
    testTimeout: 10 * 1000,
  },
})
