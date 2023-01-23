/**
 * `const ... = require()` syntax disallowed by `typescript-eslint`
 * https://typescript-eslint.io/rules/no-var-requires/
 *
 * TypeScript advertises the `import = require()` syntax,
 * or preferably the ES6 `import ... from ...` syntax
 * https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
 * https://www.typescriptlang.org/docs/handbook/modules.html#import
 *
 * The ES6-style syntax is actually accepted by Astro, even if the config file is in `.cjs`.
 * However, this is equally as weird to be seen inside a CommonJS file.
 * Config files for this project are written in CommonJS syntax simply for consistency.
 *
 * Dynamic imports via `await import()` syntax both seems to be acceptable and a fair compromise,
 * as it closely resembles the CommonJS `require` syntax.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
 *
 * However, dynamic imports evaluate to a namespace object,
 * i.e. similar to `import * as x from 'z'`
 * instead of `import y from 'z'`
 * so `y` must be extracted from `x` through the `default` property.
 */
const { defineConfig } = await import('astro/config');
const { default: svelte } = await import('@astrojs/svelte');

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  /**
   * GitHub Pages configuration
   * As per the official docs
   * https://docs.astro.build/en/guides/deploy/github/
   */
  site: 'https://mark-p0.github.io',
});
