import globals from "globals"
import pluginVue from "eslint-plugin-vue"
import perfectionist from "eslint-plugin-perfectionist"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt([
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}"],
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "asc",
          ignoreCase: true,
          newlinesBetween: "always",
        },
      ],

      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "line-length",
          order: "asc",
        },
      ],

      "vue/no-unused-emit-declarations": ["error"],
      "vue/no-empty-component-block": ["error"],
      "vue/component-options-name-casing": ["error", "kebab-case"],
      "vue/multi-word-component-names": ["off"],

      "@stylistic/quotes": ["error", "double"],

      "semi": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
    },

    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
])
