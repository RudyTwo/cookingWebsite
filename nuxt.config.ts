// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@formkit/nuxt',
    //'@formkit/themes/tailwindcss/genesis'
  ],
    vite: {
    server: {
      watch: {
        usePolling: true, 
      },
    },
  },
})
