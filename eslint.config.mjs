import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      '*.js',
      'build/',
      'eslint.config.mjs',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      "indent": [2, 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-undef": "error",
      "no-unused-vars": "error",
      "no-console": "warn",
      "comma-dangle": ["error", "always-multiline"],
      "array-bracket-spacing": ["error", "never"],
      "block-spacing": ["error", "always"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "func-call-spacing": ["error", "never"],
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": ["error", "always"],
      // Limita o comprimento máximo de uma linha de código.
      "max-len": ["error", { "code": 90, "ignoreComments": true }],
      // Restringe o número máximo de linhas em branco consecutivas
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      // Proíbe espaços em branco no final de uma linha.
      "no-trailing-spaces": "error",
      // Exige um espaço antes de abrir chaves de blocos (if, for, etc.).
      "space-before-blocks": "error",
      // Exige espaços em torno de operadores infix (e.g., +, =).
      "space-infix-ops": "error",
      // Controla o espaço em torno de : em objetos
      "key-spacing": "error",
      // Controla o espaço dentro de templates literais
      "template-curly-spacing": ["error", "always"]
    }
  }
];