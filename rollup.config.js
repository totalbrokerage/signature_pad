const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const pkg = require('./package.json');

const banner =
  '/*!\n' +
  ` * Signature Pad v${pkg.version} | ${pkg.homepage}\n` +
  ` * (c) ${new Date().getFullYear()} ${
    pkg.author.name
  } | Released under the MIT license\n` +
  ' */\n';

export default [
  {
    // UMD unminified
    input: 'src/signature_pad.ts',
    plugins: [typescript({ target: 'ES3' })],
    output: {
      // dir: 'dist',
      file: 'dist/signature_pad.umd.js',
      format: 'umd',
      name: 'SignaturePad',
      sourcemap: false,
      banner,
    },
  },
  {
    // UMD unminified
    input: 'src/signature_pad.ts',
    plugins: [typescript({ target: 'ES3' })],
    output: {
      // dir: 'dist',
      file: 'dist/signature_pad.umd.min.js',
      format: 'umd',
      name: 'SignaturePad',
      sourcemap: false,
      plugins: [terser()],
      banner,
    },
  },
  {
    // ES module unminified
    input: 'src/signature_pad.ts',
    plugins: [typescript({ target: 'ES2015' })],
    output: {
      // dir: 'dist',
      file: 'dist/signature_pad.js',
      format: 'umd',
      name: 'SignaturePad',
      sourcemap: false,
      banner,
    },
  },
  {
    // ES module minified
    input: 'src/signature_pad.ts',
    plugins: [typescript({ target: 'ES2015' })],
    output: {
      // dir: 'dist',
      file: 'dist/signature_pad.min.js',
      format: 'umd',
      name: 'SignaturePad',
      sourcemap: false,
      plugins: [terser()],
      banner,
    },
  },
];
