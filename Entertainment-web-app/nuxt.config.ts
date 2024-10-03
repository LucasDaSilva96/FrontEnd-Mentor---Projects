// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Entertainment Web App',
      meta: [
        {
          name: 'description',
          content: 'Entertainment Web App, a Nuxt.js project',
        },
      ],
    },
  },
  alias: {
    assets: '/<rootDir>/assets',
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: ['nuxt-directus', 'nuxt-zod-i18n', '@nuxtjs/i18n', '@nuxt/ui'],
  pages: true,
});
