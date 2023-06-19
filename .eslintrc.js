module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  extends: ["plugin:prettier/recommended"],
  plugins: [],
  rules: {},
};
