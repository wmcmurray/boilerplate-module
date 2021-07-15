import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import env from './rollup.env.js'

// base plugins
const plugins = [
  alias({
    entries: [
      { find: 'SRC', replacement: './src' },
    ]
  }),
  commonjs(),
  resolve(),
  vue(),
];

// production only plugins
if(env.isProd) {
  plugins.push(
    terser()
  );
}


export default plugins;
