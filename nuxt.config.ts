// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@formkit/nuxt'
  ],
    vite: {
    server: {
      watch: {
        usePolling: true, 
      },
    },
  },
})