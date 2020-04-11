module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-console": ["warn", { allow: ["warn", "error"]}],
    "semi": ["error", "always"],
    "vue/no-unused-components": "warn",
  }
}
