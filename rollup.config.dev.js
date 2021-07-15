import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    dir: 'docs/dist/',
    format: 'es',
    chunkFileNames: '[name].js',
    manualChunks(id) {
      return id.includes('node_modules') ? 'vendors' : 'main';
    },
  },
  plugins: [
    alias({
      entries: [
        { find: 'SRC', replacement: './src' },
      ]
    }),
    commonjs(),
    resolve(),
    terser(),
  ],
};
