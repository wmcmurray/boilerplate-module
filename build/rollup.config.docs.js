import plugins from './rollup.plugins.js'

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
  plugins: plugins,
};
