import Aura from "@primeuix/themes/aura"
import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@primevue/nuxt-module", "@nuxt/eslint"],
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-07-15",

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  primevue: {
    components: {
      prefix: "Primevue",
    },
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        darkModeSelector: ".p-dark",
        options: {
          cssLayer: {
            name: "primevue",
            order: "theme, base, primevue",
          },
        },
        preset: {
          ...Aura.semantic,
          primary: {
            50: "#e9f5fc",
            100: "#d3ebf8",
            200: "#a6d7f2",
            300: "#7ac3eb",
            400: "#4eb0e4",
            500: "#219cde",
            600: "#1b7db1",
            700: "#145d85",
            800: "#0d3e59",
            900: "#071f2c",
            950: "#031016",
          },
        },
      },
    },
  },
})
