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
  image: {
    domains: ['https://entertainment-web-app.directus.app'],
  },
  alias: {
    assets: '/<rootDir>/assets',
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: [
    'nuxt-directus',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-swiper',
  ],

  runtimeConfig: {
    public: {
      directus: {
        url: 'https://entertainment-web-app.directus.app',
      },
    },
  },

  pages: true,
});
