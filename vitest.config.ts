import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/main.tsx', 'src/test/**', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
      thresholds: {
        lines: 90,
        statements: 90,
        branches: 85,
        functions: 90,
      },
    },
  },
})
