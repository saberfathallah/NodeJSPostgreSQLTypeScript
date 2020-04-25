module.exports = {
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
        "comma-dangle": 2,
        "eol-last": 1,
        "func-names": 0,
        "react/react-in-jsx-scope": 0,
        "no-redeclare": 1,
        "jsx-a11y/anchor-is-valid": 0,
        "import/no-unresolved": ["error", { "ignore": ["^@"] }],
        "import/no-extraneous-dependencies": 0,
        "import/order": [
          "error",
          {
            "groups": [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index"
            ],
            "newlines-between": "always"
          }
        ],
        "no-use-before-define": ["error", { "functions": false }],
      'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
      '@typescript-eslint/indent': [2, 2],
      "import/extensions": ["error", "ignorePackages", {
        "js": "never",
        "ts": "never",
        "tsx": "never",
        "mjs": "never"
      }]
    },
  };