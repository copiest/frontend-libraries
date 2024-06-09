import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'tsup',
  target: 'node16',
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,
  entry: ['./src/index.ts'],
  dts: {
    resolve: true,
    entry: './src/index.ts',
  },
});