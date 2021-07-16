import plugins from './rollup.plugins.js'

const PATH_SEP = '/';

let splitPart1, splitPart2, vendorName;

export default {
  input: 'src/index.js',
  output: {
    dir: 'docs/dist/',
    format: 'es',
    chunkFileNames: '[name].js',
    manualChunks(id) {
      if(id.includes('node_modules')) {
        splitPart1 = id.split('node_modules' + PATH_SEP)[1];
        splitPart2 = splitPart1.split(PATH_SEP);
        vendorName = splitPart1.substr(0, 1) === '@' ? [splitPart2[0], splitPart2[1]].join('_') : splitPart2[0];

        return 'vendor_' + vendorName;
      }

      return 'main';
    },
  },
  plugins: plugins,
};
