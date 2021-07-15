import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const peerDependencies = Object.keys(pkg.peerDependencies);

export default {
  input: 'src/index.js',
  output: [
    // UMD build (browser-friendly)
    /*
    {
      file: pkg.browser,
      format: 'umd',
      name: 'boilerplateModule',
    },
    */

    // CommonJS build (for Node)
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },

    // ES module build (for bundlers)
    {
      file: pkg.module,
      format: 'es',
    },
  ],
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
  external: function(id) {
    return peerDependencies.indexOf(id) !== -1 || /lodash/.test(id);
  },
};
