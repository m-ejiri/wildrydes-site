/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  // Vite + TS + React 前提
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: false, // 厳密な型ルールを効かせたいときは tsconfig を指定
  },
  env: { browser: true, es2021: true, node: true },
  plugins: ["@typescript-eslint", "react-hooks", "react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // Vite の Fast Refresh で安全な export を警告
    "plugin:react-hooks/recommended",
    // Prettier と競合するルールを無効化
    "eslint-config-prettier",
  ],
  rules: {
    // Vite の HMR と相性の悪い export を警告（default export 可）
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // 好みで調整
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      rules: {
        // TS では明示 any を緩くするなど、必要に応じて
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
  ignorePatterns: [
    "dist",
    "node_modules",
    // Vite が出す型定義などを無視したい場合はここへ
  ],
};
