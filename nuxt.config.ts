import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    modules: ['@primevue/nuxt-module'],

    primevue: {
        components: {
            prefix: 'Primevue'
        },
        options: {
            ripple: true,
            inputVariant: 'filled',
            darkModeSelector: 'light',
            theme: {
                options: {
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue'
                    }
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
                    }
                }
            },
        },
    }
})
