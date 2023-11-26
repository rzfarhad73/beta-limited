// @ts-nocheck

/**
 * @type {import('prettier').Config}
 */

module.exports = {
    singleQuote: true,
    semi: false,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    bracketSameLine: false,
    useTabs: false,
    endOfLine: 'lf',
    printWidth: 100,
    overrides: [
      {
        files: '*.md',
        options: {
          singleQuote: false,
          quoteProps: 'preserve',
        },
      },
    ],
  }
  