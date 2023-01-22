/* prettier-ignore */
const words = `
astro
astrojs
tsconfigs
`.trim().split('\n');

/** @type {import('@cspell/cspell-types').CSpellSettings} */
const config = {
  words,
  allowCompoundWords: true,
};

module.exports = config;
