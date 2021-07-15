import plugins from './rollup.plugins.js'

const PATH_SEP = '/';

let vendorName;

export default {
  input: 'src/index.js',
  output: {
    dir: 'docs/dist/',
    format: 'es',
    chunkFileNames: '[name].js',
    manualChunks(id) {
      if(id.includes('node_modules')) {
        vendorName = id.split('node_modules' + PATH_SEP)[1].split(PATH_SEP)[0];

        return 'vendor_' + vendorName;
      }

      return 'main';
    },
  },
  plugins: plugins,
};
