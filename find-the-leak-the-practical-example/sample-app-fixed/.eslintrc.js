module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    semi: ["off"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "prefer-const": "error",
    "comma-dangle": ["warn", "always-multiline"],
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
