import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import banner from 'rollup-plugin-banner2';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { ROLLUP_INCLUDE_USE_CLIENT } from './rollup-exclude-use-client.mjs';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        exclude: ['src/app.js', 'src/app.css', 'src/container.js', 'src/index.js'],
      }),
      postcss({
        modules: true,
        extract: true,
      }),
      banner((chunk) => {
        if (!ROLLUP_INCLUDE_USE_CLIENT.includes(chunk.fileName)) {
          return "'use client';\n";
        }

        return undefined;
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'public/bundle.js',
      format: 'iife',
    },
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      }),
      typescript(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      }),
      commonjs(),
      postcss(),
      replace({
        preventAssignment: false,
        'process.env.NODE_ENV': '"development"',
      }),
    ],
  },
];
