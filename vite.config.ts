import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// When running inside the Rush monorepo overlay (local dev), MONOREPO_ORCHESTRATED=true
// is injected by the `build:monorepo-orchestrated` script so Vite emits ES modules only —
// the format required for the overlay's module-federation / live-linking setup.
// In standalone / production builds the env var is absent and `formats` is left
// undefined so Vite falls back to its library defaults.
const isMonorepoOrchestrated = process.env.MONOREPO_ORCHESTRATED === 'true'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'JellyUI',
      fileName: () => `index.js`,
      ...(isMonorepoOrchestrated ? { formats: ['es'] } : {}),
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
