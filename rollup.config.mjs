import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      typescript({
        exclude: ['src/app.js', 'src/container.js', 'src/index.js'],
      }),
      commonjs(),
      postcss({
        modules: true,
        extract: true,
      }),
    ],
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
