module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    "import",
    "@typescript-eslint",
    "jest",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/no-cycle": [2, { maxDepth: 1 }],
    "no-unused-vars": "off",
    "no-console": "error",
  },
};