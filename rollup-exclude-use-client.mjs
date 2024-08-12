// files names that should not have use client directive at the top of the output file
export const ROLLUP_INCLUDE_USE_CLIENT = ['theme.context', 'ui.provider'].reduce((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
