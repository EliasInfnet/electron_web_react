import { nodeResolve } from '@rollup/plugin-node-resolve';
// import babel from '@rollup-plugin-babel';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
// import nodePolyfills from '@rollup-plugin-node-polyfills';

export default {
  input: 'src/server.js', // Replace with the appropriate entry file path
  output: {
    file: 'dist/bundle.js', // Replace with the desired output file path and name
    format: 'cjs', // Replace with the desired output format (e.g., cjs, umd, esm)
  },
  plugins: [
    json(),
    commonjs(),
    nodeResolve()
  ]
};